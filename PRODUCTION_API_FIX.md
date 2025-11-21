# Production API 404 Fix Guide

## 🔍 Problem
Getting `404 (Not Found)` when accessing `/api/admin/contests` in production.

## ✅ Solutions Applied

### 1. Fixed Route Order
- Changed catch-all route from `app.use()` to `app.get('*')`
- Ensures API routes are processed before static file serving
- API routes now properly skip static middleware

### 2. Added Better Error Handling
- Added logging for API requests
- Better error messages for debugging
- Proper HTTP status codes

### 3. Route Protection
- Static middleware now explicitly skips `/api` routes
- Catch-all route returns 404 for unmatched API routes

## 🚀 Deployment Checklist

### Step 1: Verify Server is Running
```bash
# On your production server, check if Node.js process is running
ps aux | grep node

# Or check if port is listening
lsof -i :3000  # or whatever port you're using
```

### Step 2: Check Environment Variables
Make sure these are set in production:
```bash
NODE_ENV=production
PORT=3000  # or your port
SUPABASE_URL=https://ktezajwbhdwswdvlsdqw.supabase.co
SUPABASE_ANON_KEY=your_key_here
SUPABASE_SERVICE_ROLE=your_service_role_key
JWT_SECRET=your_jwt_secret
```

### Step 3: Verify Build Folder Exists
```bash
# Make sure build folder exists
ls -la build/

# If not, run:
npm run build
```

### Step 4: Start Production Server
```bash
# Option 1: Direct start
NODE_ENV=production node server.js

# Option 2: Using PM2 (recommended)
pm2 start server.js --name lotterycompare --env production

# Option 3: Using npm script
npm run prod
```

### Step 5: Test API Endpoint
```bash
# Test health endpoint (no auth required)
curl https://lotterycompare.com/api/health

# Should return: {"status":"OK","timestamp":"..."}
```

## 🔧 Common Issues & Fixes

### Issue 1: Server Not Running
**Symptom:** 404 on all API routes  
**Fix:** Start the server with `npm run prod` or `NODE_ENV=production node server.js`

### Issue 2: Reverse Proxy Not Configured
**Symptom:** 404 on API routes, but homepage works  
**Fix:** Configure nginx/apache to proxy `/api/*` to Node.js server

**Nginx Example:**
```nginx
server {
    listen 80;
    server_name lotterycompare.com;

    # Serve static files from build
    location / {
        root /path/to/lotterycompare/build;
        try_files $uri $uri/ /index.html;
    }

    # Proxy API requests to Node.js
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Issue 3: Port Conflict
**Symptom:** Server won't start  
**Fix:** Change PORT in environment or server.js

### Issue 4: CORS Issues
**Symptom:** API works in Postman but not in browser  
**Fix:** Already handled with `app.use(cors())` in server.js

## 🧪 Testing in Production

### Test Health Endpoint
```bash
curl https://lotterycompare.com/api/health
```

### Test Contest API (requires auth token)
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://lotterycompare.com/api/admin/contests
```

### Check Server Logs
```bash
# If using PM2
pm2 logs lotterycompare

# If running directly
# Check console output or log file
```

## 📝 Quick Fix Commands

```bash
# 1. Build the app
npm run build

# 2. Start production server
NODE_ENV=production PORT=3000 node server.js

# 3. Or use PM2 (recommended for production)
pm2 start server.js --name lotterycompare --env production
pm2 save
pm2 startup  # Follow instructions to enable on boot
```

## 🔐 Security Notes

1. **Never commit** `.env` file with real secrets
2. **Use environment variables** in production
3. **Change JWT_SECRET** from default
4. **Use HTTPS** in production (Let's Encrypt)
5. **Set proper CORS** origins if needed

## 📞 Still Not Working?

1. **Check server logs** for errors
2. **Verify Supabase connection** (check network/firewall)
3. **Test locally** with production build: `npm run build && npm run prod`
4. **Check reverse proxy** configuration
5. **Verify environment variables** are set correctly

