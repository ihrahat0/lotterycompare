const mysql = require('mysql2/promise');
const config = require('./config');

// Create MySQL connection pool
const pool = mysql.createPool({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
    port: config.database.port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    acquireTimeout: 60000,
    timeout: 60000,
    reconnect: true
});

console.log('MySQL database pool created successfully');

// Test connection
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL database connected successfully');
        connection.release();
        return true;
    } catch (error) {
        console.error('MySQL database connection failed:', error);
        return false;
    }
};


module.exports = {
    pool,
    testConnection
};
