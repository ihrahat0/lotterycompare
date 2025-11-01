// Database Configuration
// Update these values for your production environment

const config = {
    development: {
        database: {
            host: 'localhost', // Use localhost for development
            user: 'ihrahat0',
            password: 'C6YUY$%7W3RR',
            database: 'lotterycompare',
            port: 3306
        }
    },
    production: {
        database: {
            // Update these values for your cPanel database
            host: 'lotterycompare.com', // Your cPanel database host (usually your domain or IP)
            user: 'ihrahat0',
            password: 'C6YUY$%7W3RR',
            database: 'lotterycompare',
            port: 3306,
            ssl: false
        }
    }
};

const environment = process.env.NODE_ENV || 'development';
module.exports = config[environment];
