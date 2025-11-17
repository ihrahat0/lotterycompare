const { pool } = require('./src/config/database');

async function debugServer() {
    try {
        console.log('Testing database connection in server context...');
        
        // Test the exact query used in authService
        const [users] = await pool.execute(
            'SELECT id, username, password FROM admin_users WHERE username = ?',
            ['admin']
        );
        
        console.log('Query result:', users);
        
        if (users.length > 0) {
            const user = users[0];
            console.log('User found:', user.username);
            console.log('Password check:', user.password === 'admin123');
            
            if (user.password === 'admin123') {
                console.log('✅ Login should work!');
            } else {
                console.log('❌ Password mismatch');
            }
        } else {
            console.log('❌ No user found');
        }
        
    } catch (error) {
        console.error('❌ Database error:', error.message);
        console.error('Full error:', error);
    }
}

debugServer();
