const express = require('express');
require('dotenv').config(); // Load environment variables
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const EMAIL_USER = process.env.EMAIL_USER;
// Support both standard EMAIL_PASS and USER's preferred APP_PASSWORD
const EMAIL_PASS = process.env.EMAIL_PASS || process.env.APP_PASSWORD;
const EMAIL_READY = Boolean(EMAIL_USER && EMAIL_PASS);

// Get Supabase credentials
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://ktezajwbhdwswdvlsdqw.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZXphandiaGR3c3dkdmxzZHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNTEyOTIsImV4cCI6MjA3NjkyNzI5Mn0.EtpbbocyPqaW9URv2nYkk4yKf0EMoiqr7ANELyQL2eY';
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZXphandiaGR3c3dkdmxzZHF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTM1MTI5MiwiZXhwIjoyMDc2OTI3MjkyfQ.--V5xYnQ6WTi17qrc1XExgZ7C6KnPNw5Js2SUwJi-F0';

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

// Email transporter (Gmail App Password)
let transporter = null;
if (EMAIL_READY) {
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    });

    // Verify transporter on startup so it's ready
    transporter.verify((err) => {
        if (err) {
            console.error('Email transporter error:', err);
        } else {
            console.log('Email transporter ready');
        }
    });
} else {
    console.error('Email transporter not configured: set EMAIL_USER and EMAIL_PASS (Gmail app password).');
}

// Simple in-memory OTP store (email -> { otp, expiresAt })
const otpStore = new Map();

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const sendOtpEmail = async (to, otp) => {
    if (!EMAIL_READY || !transporter) {
        throw new Error('Email not configured on server');
    }
    const mailOptions = {
        from: `"LotteryCompare Admin" <${EMAIL_USER}>`,
        to,
        subject: 'Your Admin Password Reset OTP',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; background: #0f1024; color: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #22244a;">
                <div style="padding: 20px 24px; background: linear-gradient(135deg, #667eea, #764ba2);">
                    <h2 style="margin: 0; color: #fff;">Admin Password Reset</h2>
                    <p style="margin: 6px 0 0; color: rgba(255,255,255,0.9);">Use the OTP below to reset your password.</p>
                </div>
                <div style="padding: 24px;">
                    <p style="margin: 0 0 12px; color: rgba(255,255,255,0.8);">Enter this OTP in the admin panel within the next 10 minutes:</p>
                    <div style="font-size: 32px; font-weight: 800; letter-spacing: 6px; text-align: center; padding: 16px; background: rgba(102,126,234,0.1); border: 1px solid rgba(102,126,234,0.3); border-radius: 12px; color: #fff;">${otp}</div>
                    <p style="margin: 16px 0 0; font-size: 12px; color: rgba(255,255,255,0.6);">If you did not request this, please ignore this email.</p>
                </div>
            </div>
        `
    };

    await transporter.sendMail(mailOptions);
};

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Configure multer for file uploads (memory storage works on serverless hosts)
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
    fileFilter: (req, file, cb) => {
        const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'));
        }
    }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.adminId = decoded.id;
        req.adminEmail = decoded.email;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

// Helper function to query Supabase REST API
const querySupabase = async (table, query = '', method = 'GET') => {
    const url = `${SUPABASE_URL}/rest/v1/${table}${query}`;
    const headers = {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
    };

    const response = await fetch(url, { method, headers });
    if (!response.ok) {
        throw new Error(`Supabase API error: ${response.status}`);
    }
    return response.json();
};

// Register admin user
app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ error: 'Email, password, and name are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const registerUrl = `${SUPABASE_URL}/rest/v1/admin_users`;
        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                email,
                password: hashedPassword,
                name,
                role: 'admin'
            })
        });

        if (!response.ok) {
            const error = await response.json();
            return res.status(400).json({ error: error.message || 'Registration failed' });
        }

        const data = await response.json();
        res.status(201).json({
            message: 'Admin user created successfully',
            user: data[0]
        });
    } catch (err) {
        console.error('Register error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Login admin user
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Query using Supabase REST API directly
        const response = await fetch(`${SUPABASE_URL}/rest/v1/admin_users?email=eq.${encodeURIComponent(email)}&select=*`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.error('Supabase query failed:', response.status, await response.text());
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = data[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            name: user.name
        }, JWT_SECRET, { expiresIn: '24h' });

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Forgot password - send OTP to admin email
app.post('/api/auth/forgot-password', async (req, res) => {
    try {
        const { email, role } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Only allow admin role for this route
        if (role && role !== 'admin') {
            return res.status(400).json({ error: 'Invalid role' });
        }

        if (!EMAIL_READY || !transporter) {
            return res.status(500).json({ error: 'Email not configured on server. Set EMAIL_USER and EMAIL_PASS.' });
        }

        // Check user exists
        const response = await fetch(`${SUPABASE_URL}/rest/v1/admin_users?email=eq.${encodeURIComponent(email)}&select=*`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return res.status(400).json({ error: 'Unable to process request' });
        }

        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0) {
            return res.status(404).json({ error: 'Admin user not found' });
        }

        const user = data[0];
        if (user.role !== 'admin') {
            return res.status(403).json({ error: 'Unauthorized: Only admins can reset passwords' });
        }

        const otp = generateOTP();
        const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
        otpStore.set(email, { otp, expiresAt });

        await sendOtpEmail(email, otp);

        res.json({ message: 'OTP sent to admin email' });
    } catch (err) {
        console.error('Forgot password error:', err);
        res.status(500).json({ error: 'Failed to send OTP' });
    }
});

// Reset password with OTP
app.post('/api/auth/reset-password', async (req, res) => {
    try {
        const { email, otp, newPassword, role } = req.body;

        if (!email || !otp || !newPassword) {
            return res.status(400).json({ error: 'Email, OTP, and new password are required' });
        }

        if (role && role !== 'admin') {
            return res.status(400).json({ error: 'Invalid role' });
        }

        const record = otpStore.get(email);
        if (!record) {
            return res.status(400).json({ error: 'OTP not found. Please request a new one.' });
        }

        if (Date.now() > record.expiresAt) {
            otpStore.delete(email);
            return res.status(400).json({ error: 'OTP expired. Please request a new one.' });
        }

        if (record.otp !== otp) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }

        if (newPassword.length < 8) {
            return res.status(400).json({ error: 'Password must be at least 8 characters' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password in Supabase
        const updateUrl = `${SUPABASE_URL}/rest/v1/admin_users?email=eq.${encodeURIComponent(email)}`;

        // Double check user role before updating
        const checkUserRes = await fetch(`${SUPABASE_URL}/rest/v1/admin_users?email=eq.${encodeURIComponent(email)}&select=role`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (checkUserRes.ok) {
            const userData = await checkUserRes.json();
            if (userData.length > 0 && userData[0].role !== 'admin') {
                return res.status(403).json({ error: 'Unauthorized operation' });
            }
        }

        const updateRes = await fetch(updateUrl, {
            method: 'PATCH',
            headers: {
                'apikey': SUPABASE_SERVICE_ROLE,
                'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({ password: hashedPassword })
        });

        if (!updateRes.ok) {
            const text = await updateRes.text();
            console.error('Password reset update failed:', text);
            return res.status(500).json({ error: 'Failed to update password' });
        }

        otpStore.delete(email);
        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        console.error('Reset password error:', err);
        res.status(500).json({ error: 'Failed to reset password' });
    }
});

// Verify token
app.get('/api/auth/verify', verifyToken, async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/admin_users?id=eq.${req.adminId}&select=*`;
        const response = await fetch(queryUrl, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (!response.ok) {
            return res.status(404).json({ error: 'User not found' });
        }

        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = data[0];
        res.json({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } catch (err) {
        console.error('Verify error:', err);
        res.status(500).json({ error: err.message });
    }
});

// ============ CONTENT MANAGEMENT ROUTES ============

// Get all page content
app.get('/api/content/pages', async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/page_content?order=created_at.desc&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        }
        res.json([]);
    } catch (err) {
        res.json([]);
    }
});

// Get single page content
app.get('/api/content/pages/:pageSlug', async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/page_content?page_slug=eq.${req.params.pageSlug}&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
                return res.json(data[0]);
            }
        }
        res.status(404).json({ error: 'Page not found' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create or update page content
app.post('/api/content/pages', verifyToken, async (req, res) => {
    try {
        const { pageSlug, pageTitle, metaDescription, metaKeywords, content, heroImageId, status } = req.body;

        const checkUrl = `${SUPABASE_URL}/rest/v1/page_content?page_slug=eq.${pageSlug}&select=id`;
        const checkRes = await fetch(checkUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        const existing = await checkRes.json();
        const pageId = Array.isArray(existing) && existing.length > 0 ? existing[0].id : null;

        if (pageId) {
            // Update existing page
            const updateUrl = `${SUPABASE_URL}/rest/v1/page_content?id=eq.${pageId}`;
            const updateRes = await fetch(updateUrl, {
                method: 'PATCH',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify({
                    page_title: pageTitle,
                    meta_description: metaDescription,
                    meta_keywords: metaKeywords,
                    content,
                    hero_image_id: heroImageId,
                    status,
                    updated_at: new Date().toISOString(),
                    updated_by: req.adminId
                })
            });

            if (updateRes.ok) {
                const data = await updateRes.json();
                return res.json({ message: 'Page updated successfully', page: data[0] });
            }
        } else {
            // Create new page
            const createUrl = `${SUPABASE_URL}/rest/v1/page_content`;
            const createRes = await fetch(createUrl, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify({
                    page_slug: pageSlug,
                    page_title: pageTitle,
                    meta_description: metaDescription,
                    meta_keywords: metaKeywords,
                    content,
                    hero_image_id: heroImageId,
                    status,
                    updated_by: req.adminId
                })
            });

            if (createRes.ok) {
                const data = await createRes.json();
                return res.status(201).json({ message: 'Page created successfully', page: data[0] });
            }
        }

        res.status(500).json({ error: 'Failed to save page' });
    } catch (err) {
        console.error('Page error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Get all content sections
app.get('/api/content/sections', async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/content_sections?order=created_at.desc&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        }
        res.json([]);
    } catch (err) {
        res.json([]);
    }
});

// Update content section
app.post('/api/content/sections', verifyToken, async (req, res) => {
    try {
        const { sectionKey, sectionName, content, description } = req.body;

        const checkUrl = `${SUPABASE_URL}/rest/v1/content_sections?section_key=eq.${sectionKey}&select=id`;
        const checkRes = await fetch(checkUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        const existing = await checkRes.json();
        const sectionId = Array.isArray(existing) && existing.length > 0 ? existing[0].id : null;

        if (sectionId) {
            // Update
            const updateUrl = `${SUPABASE_URL}/rest/v1/content_sections?id=eq.${sectionId}`;
            const updateRes = await fetch(updateUrl, {
                method: 'PATCH',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify({
                    section_name: sectionName,
                    content,
                    description,
                    updated_at: new Date().toISOString(),
                    updated_by: req.adminId
                })
            });

            if (updateRes.ok) {
                const data = await updateRes.json();
                return res.json({ message: 'Section updated successfully', section: data[0] });
            }
        } else {
            // Create
            const createUrl = `${SUPABASE_URL}/rest/v1/content_sections`;
            const createRes = await fetch(createUrl, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify({
                    section_key: sectionKey,
                    section_name: sectionName,
                    content,
                    description,
                    updated_by: req.adminId
                })
            });

            if (createRes.ok) {
                const data = await createRes.json();
                return res.status(201).json({ message: 'Section created successfully', section: data[0] });
            }
        }

        res.status(500).json({ error: 'Failed to save section' });
    } catch (err) {
        console.error('Section error:', err);
        res.status(500).json({ error: err.message });
    }
});

// ============ IMAGE MANAGEMENT ROUTES ============

// Multer error handler middleware
const handleMulterError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                error: 'File too large. Maximum size is 50MB.'
            });
        }
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            return res.status(400).json({
                error: 'Unexpected file field'
            });
        }
        return res.status(400).json({
            error: `Upload error: ${err.message}`
        });
    }
    if (err) {
        return res.status(400).json({
            error: err.message || 'File upload error'
        });
    }
    next();
};

// Upload image
app.post('/api/images/upload', verifyToken, upload.single('image'), handleMulterError, async (req, res) => {
    let filePath = null;

    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { imageName, imageKey, category, altText } = req.body;

        // Validate and sanitize imageKey
        if (!imageKey || imageKey.trim() === '') {
            return res.status(400).json({ error: 'Image key is required' });
        }

        // Ensure imageKey fits database constraint (max 100 chars)
        const sanitizedKey = imageKey.trim().substring(0, 100);

        const fileBuffer = req.file.buffer;
        if (!fileBuffer || fileBuffer.length === 0) {
            return res.status(400).json({ error: 'Uploaded file is empty' });
        }

        const extension = path.extname(req.file.originalname) || `.${req.file.mimetype.split('/')[1] || 'jpg'}`;
        filePath = `admin-uploads/${sanitizedKey}-${Date.now()}${extension}`;

        console.log('Uploading image:', {
            filePath,
            imageKey: sanitizedKey,
            category,
            originalName: req.file.originalname,
            mimeType: req.file.mimetype,
            size: fileBuffer.length
        });

        // Create a supabase client with service role for admin operations
        const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        });

        // Upload to Supabase storage using service role
        const { data: storageData, error: storageError } = await supabaseAdmin.storage
            .from('site-images')
            .upload(filePath, fileBuffer, {
                cacheControl: '3600',
                upsert: true,
                contentType: req.file.mimetype
            });

        if (storageError) {
            console.error('Storage upload error:', storageError);
            return res.status(500).json({
                error: `Storage upload failed: ${storageError.message}`,
                details: process.env.NODE_ENV === 'development' ? storageError : undefined
            });
        }

        console.log('Storage upload successful:', storageData);

        // Get public URL
        const { data: publicUrlData } = supabaseAdmin.storage
            .from('site-images')
            .getPublicUrl(filePath);

        console.log('Public URL:', publicUrlData?.publicUrl);

        // Save image metadata to database
        const insertUrl = `${SUPABASE_URL}/rest/v1/site_images`;
        const insertRes = await fetch(insertUrl, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                image_name: imageName || req.file.originalname,
                image_key: sanitizedKey,
                storage_path: filePath,
                category: category || 'general',
                alt_text: altText || '',
                uploaded_by: req.adminId
            })
        });

        if (!insertRes.ok) {
            const errorText = await insertRes.text();
            console.error('Database insert error:', errorText);

            // Try to delete from storage if database insert failed
            if (filePath) {
                try {
                    await supabaseAdmin.storage.from('site-images').remove([filePath]);
                } catch (deleteError) {
                    console.error('Error removing file from storage after DB failure:', deleteError);
                }
            }

            return res.status(500).json({
                error: 'Failed to save image metadata',
                details: process.env.NODE_ENV === 'development' ? errorText : undefined
            });
        }

        const data = await insertRes.json();

        console.log('Image upload complete:', data[0]);

        res.status(201).json({
            message: 'Image uploaded successfully',
            image: {
                ...data[0],
                url: publicUrlData.publicUrl,
                public_url: publicUrlData.publicUrl
            }
        });
    } catch (err) {
        console.error('Upload error:', {
            message: err.message,
            stack: err.stack,
            name: err.name,
            code: err.code
        });

        res.status(500).json({
            error: err.message || 'Internal server error during image upload',
            details: process.env.NODE_ENV === 'development' ? err.stack : undefined
        });
    }
});

// Get all images
app.get('/api/images', async (req, res) => {
    try {
        const { category } = req.query;
        const categoryQuery = category ? `&category=eq.${category}` : '';
        const queryUrl = `${SUPABASE_URL}/rest/v1/site_images?order=uploaded_at.desc${categoryQuery}&select=*`;

        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            // Add public URLs
            const imagesWithUrls = Array.isArray(data) ? data.map(img => {
                const { data: publicUrlData } = supabase.storage
                    .from('site-images')
                    .getPublicUrl(img.storage_path);
                return {
                    ...img,
                    public_url: publicUrlData.publicUrl,
                    url: publicUrlData.publicUrl
                };
            }) : [];
            return res.json(imagesWithUrls);
        }
        res.json([]);
    } catch (err) {
        console.error('Get images error:', err);
        res.json([]);
    }
});

// Delete image
app.delete('/api/images/:imageId', verifyToken, async (req, res) => {
    try {
        // Get image details
        const queryUrl = `${SUPABASE_URL}/rest/v1/site_images?id=eq.${req.params.imageId}&select=*`;
        const queryRes = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (!queryRes.ok) {
            return res.status(404).json({ error: 'Image not found' });
        }

        const data = await queryRes.json();
        if (!Array.isArray(data) || data.length === 0) {
            return res.status(404).json({ error: 'Image not found' });
        }

        const image = data[0];

        // Delete from storage
        const { error: deleteStorageError } = await supabase.storage
            .from('site-images')
            .remove([image.storage_path]);

        if (deleteStorageError) {
            return res.status(500).json({ error: deleteStorageError.message });
        }

        // Delete from database
        const deleteUrl = `${SUPABASE_URL}/rest/v1/site_images?id=eq.${req.params.imageId}`;
        const deleteRes = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (deleteRes.ok) {
            return res.json({ message: 'Image deleted successfully' });
        }

        res.status(500).json({ error: 'Failed to delete image' });
    } catch (err) {
        console.error('Delete error:', err);
        res.status(500).json({ error: err.message });
    }
});

// ============ PAGE ELEMENT EDITING ROUTES ============

// Get all editable elements from a page
app.get('/api/page-elements/:pageName', async (req, res) => {
    try {
        const { pageName } = req.params;

        // Get stored elements from database
        const queryUrl = `${SUPABASE_URL}/rest/v1/page_elements?page_name=eq.${pageName}&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        }
        res.json([]);
    } catch (err) {
        console.error('Error fetching page elements:', err);
        res.json([]);
    }
});

// Update page element
app.post('/api/page-elements/:pageName/update', verifyToken, async (req, res) => {
    try {
        const { pageName } = req.params;
        const { elementId, elementType, originalText, updatedText, fontSize, fontWeight } = req.body;

        if (!elementId || !updatedText) {
            return res.status(400).json({ error: 'Element ID and updated text required' });
        }

        // Check if element exists
        const checkUrl = `${SUPABASE_URL}/rest/v1/page_elements?page_name=eq.${pageName}&element_id=eq.${elementId}&select=id`;
        const checkRes = await fetch(checkUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        const existing = await checkRes.json();
        const elementExists = Array.isArray(existing) && existing.length > 0;

        if (elementExists) {
            // Update existing element
            const updateUrl = `${SUPABASE_URL}/rest/v1/page_elements?page_name=eq.${pageName}&element_id=eq.${elementId}`;
            const updateRes = await fetch(updateUrl, {
                method: 'PATCH',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify({
                    element_type: elementType,
                    original_text: originalText,
                    updated_text: updatedText,
                    font_size: fontSize,
                    font_weight: fontWeight,
                    updated_at: new Date().toISOString(),
                    updated_by: req.adminId
                })
            });

            if (updateRes.ok) {
                const data = await updateRes.json();
                return res.json({ message: 'Element updated', element: data[0] });
            }
        } else {
            // Create new element
            const createUrl = `${SUPABASE_URL}/rest/v1/page_elements`;
            const createRes = await fetch(createUrl, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify({
                    page_name: pageName,
                    element_id: elementId,
                    element_type: elementType,
                    original_text: originalText,
                    updated_text: updatedText,
                    font_size: fontSize,
                    font_weight: fontWeight,
                    updated_by: req.adminId
                })
            });

            if (createRes.ok) {
                const data = await createRes.json();
                return res.status(201).json({ message: 'Element created', element: data[0] });
            }
        }

        res.status(500).json({ error: 'Failed to save element' });
    } catch (err) {
        console.error('Element update error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Seed page elements from pages (initialization)
app.post('/api/seed-page-elements', verifyToken, async (req, res) => {
    try {
        // This would be called once to populate initial elements
        // In production, you'd extract these from React components
        const defaultElements = [
            // Home page
            { page_name: 'new-home', element_id: 'hero-h1', element_type: 'h1', original_text: 'LotteryCompare | Find the best Casino', updated_text: 'LotteryCompare | Find the best Casino' },
            { page_name: 'new-home', element_id: 'hero-p', element_type: 'p', original_text: 'Compare trusted crypto lotteries and play provably fair games', updated_text: 'Compare trusted crypto lotteries and play provably fair games' },
            { page_name: 'new-home', element_id: 'section-h2', element_type: 'h2', original_text: '🎁 Top Recommended Lotteries of 2025 ', updated_text: '🎁 Top Recommended Lotteries of 2025 ' },

            // About Us
            { page_name: 'about-us', element_id: 'about-h1', element_type: 'h1', original_text: 'About the Lode lottery', updated_text: 'About the Lode lottery' },
            { page_name: 'about-us', element_id: 'about-p', element_type: 'p', original_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', updated_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        ];

        // Insert or ignore
        for (const element of defaultElements) {
            const checkUrl = `${SUPABASE_URL}/rest/v1/page_elements?page_name=eq.${element.page_name}&element_id=eq.${element.element_id}&select=id`;
            const checkRes = await fetch(checkUrl, {
                headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
            });

            const existing = await checkRes.json();
            if (!Array.isArray(existing) || existing.length === 0) {
                // Create new element
                const insertUrl = `${SUPABASE_URL}/rest/v1/page_elements`;
                await fetch(insertUrl, {
                    method: 'POST',
                    headers: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ...element,
                        updated_by: req.adminId
                    })
                });
            }
        }

        res.json({ message: 'Page elements seeded successfully', count: defaultElements.length });
    } catch (err) {
        console.error('Seed error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Get list of all pages available for editing
app.get('/api/pages-list', async (req, res) => {
    try {
        res.json({
            pages: [
                { name: 'new-home', label: 'Home Page' },
                { name: 'about-us', label: 'About Us' },
                { name: 'contact', label: 'Contact' },
                { name: 'top-casinos', label: 'Top Casinos' },
                { name: 'how-to-work', label: 'How it works' },
                { name: 'responsible-gaming', label: 'Responsible Gaming' },
                { name: 'bonuses', label: 'Bonuses' },
                { name: 'faq', label: 'FAQ' }
            ]
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ============ FRONTEND API ROUTES ============

// Get updated page elements for frontend rendering
app.get('/api/frontend/page-elements/:pageName', async (req, res) => {
    try {
        const { pageName } = req.params;

        const queryUrl = `${SUPABASE_URL}/rest/v1/page_elements?page_name=eq.${pageName}&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        }
        res.json([]);
    } catch (err) {
        console.error('Frontend page elements error:', err);
        res.json([]);
    }
});

// Get all casinos for frontend
app.get('/api/frontend/casinos', async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/casinos?order=featured.desc,created_at.desc&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        }
        res.json([]);
    } catch (err) {
        console.error('Frontend casinos error:', err);
        res.json([]);
    }
});

// ============ ADMIN CASINO MANAGEMENT ROUTES ============

// Get all casinos for admin
app.get('/api/admin/casinos', verifyToken, async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/casinos?order=featured.desc,created_at.desc&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        }
        res.json([]);
    } catch (err) {
        console.error('Admin casinos error:', err);
        res.json([]);
    }
});

// Create new casino
app.post('/api/admin/casinos', verifyToken, async (req, res) => {
    try {
        const { name, link, logo_url, featured, tags, description, rating, bonus_text } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Casino name is required' });
        }

        const createUrl = `${SUPABASE_URL}/rest/v1/casinos`;
        const createRes = await fetch(createUrl, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                name,
                link,
                logo_url,
                featured: featured || false,
                tags: tags || [],
                description,
                rating,
                bonus_text,
                created_by: req.adminId
            })
        });

        if (createRes.ok) {
            const data = await createRes.json();
            return res.status(201).json({ message: 'Casino created', casino: data[0] });
        }

        res.status(500).json({ error: 'Failed to create casino' });
    } catch (err) {
        console.error('Create casino error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Update casino
app.patch('/api/admin/casinos/:id', verifyToken, async (req, res) => {
    try {
        const { name, link, logo_url, featured, tags, description, rating, bonus_text } = req.body;

        const updateUrl = `${SUPABASE_URL}/rest/v1/casinos?id=eq.${req.params.id}`;
        const updateRes = await fetch(updateUrl, {
            method: 'PATCH',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                name,
                link,
                logo_url,
                featured,
                tags,
                description,
                rating,
                bonus_text,
                updated_at: new Date().toISOString()
            })
        });

        if (updateRes.ok) {
            const data = await updateRes.json();
            return res.json({ message: 'Casino updated', casino: data[0] });
        }

        res.status(500).json({ error: 'Failed to update casino' });
    } catch (err) {
        console.error('Update casino error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Delete casino
app.delete('/api/admin/casinos/:id', verifyToken, async (req, res) => {
    try {
        const deleteUrl = `${SUPABASE_URL}/rest/v1/casinos?id=eq.${req.params.id}`;
        const deleteRes = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (deleteRes.ok) {
            return res.json({ message: 'Casino deleted' });
        }

        res.status(500).json({ error: 'Failed to delete casino' });
    } catch (err) {
        console.error('Delete casino error:', err);
        res.status(500).json({ error: err.message });
    }
});

// ============= Contest Management Routes =============

// Get all contests
app.get('/api/admin/contests', verifyToken, async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/contests?order=created_at.desc&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        }
        res.json([]);
    } catch (err) {
        console.error('Admin contests error:', err);
        res.json([]);
    }
});

// Create new contest
app.post('/api/admin/contests', verifyToken, async (req, res) => {
    try {
        const { img, title, no, remaining, prize, price, timer, link, highlights, description } = req.body;

        if (!title) {
            return res.status(400).json({ error: 'Contest title is required' });
        }

        const createUrl = `${SUPABASE_URL}/rest/v1/contests`;
        const createRes = await fetch(createUrl, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                img,
                title,
                no,
                remaining,
                prize,
                price,
                timer,
                link,
                highlights: highlights || [],
                description,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
        });

        if (createRes.ok) {
            const newContest = await createRes.json();
            return res.status(201).json(newContest[0]);
        }

        const errorData = await createRes.json();
        res.status(500).json({ error: errorData.message || 'Failed to create contest' });
    } catch (err) {
        console.error('Create contest error:', err);
        res.status(500).json({ error: 'Failed to create contest' });
    }
});

// Update contest
app.patch('/api/admin/contests/:id', verifyToken, async (req, res) => {
    try {
        const { img, title, no, remaining, prize, price, timer, link, highlights, description } = req.body;

        const updateUrl = `${SUPABASE_URL}/rest/v1/contests?id=eq.${req.params.id}`;
        const updateRes = await fetch(updateUrl, {
            method: 'PATCH',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                img,
                title,
                no,
                remaining,
                prize,
                price,
                timer,
                link,
                highlights: highlights || [],
                description,
                updated_at: new Date().toISOString()
            })
        });

        if (updateRes.ok) {
            const updatedContest = await updateRes.json();
            return res.json(updatedContest[0]);
        }

        const errorData = await updateRes.json();
        res.status(500).json({ error: errorData.message || 'Failed to update contest' });
    } catch (err) {
        console.error('Update contest error:', err);
        res.status(500).json({ error: 'Failed to update contest' });
    }
});

// Delete contest
app.delete('/api/admin/contests/:id', verifyToken, async (req, res) => {
    try {
        const deleteUrl = `${SUPABASE_URL}/rest/v1/contests?id=eq.${req.params.id}`;
        const deleteRes = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (deleteRes.ok) {
            return res.json({ message: 'Contest deleted' });
        }

        res.status(500).json({ error: 'Failed to delete contest' });
    } catch (err) {
        console.error('Delete contest error:', err);
        res.status(500).json({ error: 'Failed to delete contest' });
    }
});

// Get contests for frontend (public route)
app.get('/api/frontend/contests', async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/contests?order=created_at.desc&select=*`;
        const response = await fetch(queryUrl, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        } else {
            console.error('Supabase contests query failed:', response.status, response.statusText);
            const errorText = await response.text();
            console.error('Error details:', errorText);
            return res.json([]);
        }
    } catch (err) {
        console.error('Frontend contests error:', err);
        res.status(500).json({ error: 'Failed to fetch contests', message: err.message });
    }
});

// ============ ADMIN BLOG POST MANAGEMENT ROUTES ============

// Get all blog posts for admin
app.get('/api/admin/blog-posts', verifyToken, async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/blog_posts?order=date.desc,created_at.desc&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        }
        res.json([]);
    } catch (err) {
        console.error('Admin blog posts error:', err);
        res.json([]);
    }
});

// Create new blog post
app.post('/api/admin/blog-posts', verifyToken, async (req, res) => {
    try {
        const { title, slug, image, excerpt, author, date, category, content, status } = req.body;

        if (!title || !slug) {
            return res.status(400).json({ error: 'Title and slug are required' });
        }

        const createUrl = `${SUPABASE_URL}/rest/v1/blog_posts`;
        const createRes = await fetch(createUrl, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                title,
                slug,
                image: image || null,
                excerpt: excerpt || null,
                author: author || null,
                date: date || new Date().toISOString().split('T')[0],
                category: category || null,
                content: content || null,
                status: status || 'published',
                created_by: req.adminId
            })
        });

        if (createRes.ok) {
            const data = await createRes.json();
            return res.status(201).json({ message: 'Blog post created', post: data[0] });
        }

        const errorData = await createRes.text();
        console.error('Create blog post error:', errorData);
        res.status(500).json({ error: 'Failed to create blog post' });
    } catch (err) {
        console.error('Create blog post error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Update blog post
app.patch('/api/admin/blog-posts/:id', verifyToken, async (req, res) => {
    try {
        const { title, slug, image, excerpt, author, date, category, content, status } = req.body;

        const updateUrl = `${SUPABASE_URL}/rest/v1/blog_posts?id=eq.${req.params.id}`;
        const updateRes = await fetch(updateUrl, {
            method: 'PATCH',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({
                title,
                slug,
                image,
                excerpt,
                author,
                date,
                category,
                content,
                status,
                updated_at: new Date().toISOString()
            })
        });

        if (updateRes.ok) {
            const data = await updateRes.json();
            return res.json({ message: 'Blog post updated', post: data[0] });
        }

        res.status(500).json({ error: 'Failed to update blog post' });
    } catch (err) {
        console.error('Update blog post error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Delete blog post
app.delete('/api/admin/blog-posts/:id', verifyToken, async (req, res) => {
    try {
        const deleteUrl = `${SUPABASE_URL}/rest/v1/blog_posts?id=eq.${req.params.id}`;
        const deleteRes = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        if (deleteRes.ok) {
            return res.json({ message: 'Blog post deleted' });
        }

        res.status(500).json({ error: 'Failed to delete blog post' });
    } catch (err) {
        console.error('Delete blog post error:', err);
        res.status(500).json({ error: err.message });
    }
});

// ============ FRONTEND BLOG POST ROUTES ============

// Get all published blog posts for frontend
app.get('/api/frontend/blog-posts', async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/blog_posts?status=eq.published&order=date.desc,created_at.desc&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            return res.json(Array.isArray(data) ? data : []);
        }
        res.json([]);
    } catch (err) {
        console.error('Frontend blog posts error:', err);
        res.json([]);
    }
});

// Get single blog post by slug for frontend
app.get('/api/frontend/blog-posts/:slug', async (req, res) => {
    try {
        const queryUrl = `${SUPABASE_URL}/rest/v1/blog_posts?slug=eq.${req.params.slug}&status=eq.published&select=*`;
        const response = await fetch(queryUrl, {
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` }
        });

        if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
                return res.json(data[0]);
            }
        }
        res.status(404).json({ error: 'Post not found' });
    } catch (err) {
        console.error('Frontend blog post error:', err);
        res.status(500).json({ error: err.message });
    }
});

// ============ HEALTH CHECK ============
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ============ STATIC FILE SERVING (PRODUCTION) ============

// Serve static files from build directory
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Serve static files from public directory
const publicPath = path.join(__dirname, 'public');
if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));
}

// Serve uploads directory
const uploadsPath = path.join(__dirname, 'uploads');
if (fs.existsSync(uploadsPath)) {
    app.use('/uploads', express.static(uploadsPath));
}

// ============ CATCH-ALL ROUTE FOR REACT ROUTER ============

// Serve React app for all non-API routes (client-side routing)
app.use((req, res, next) => {
    // Skip API routes
    if (req.path.startsWith('/api')) {
        return next();
    }

    // Serve React index.html for all other routes
    const indexPath = path.join(buildPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).json({ error: 'Application not found. Please run: npm run build' });
    }
});

// ============ ERROR HANDLER ============

app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error', message: err.message });
});

// ============ START SERVER ============

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Admin Panel API running at http://localhost:${PORT}/api`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
});