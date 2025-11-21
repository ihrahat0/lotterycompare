#!/usr/bin/env node

/**
 * Quick API Test Script
 * Run this to verify your API endpoints are working
 * 
 * Usage:
 *   node test-api.js
 *   node test-api.js https://lotterycompare.com
 */

const baseUrl = process.argv[2] || 'http://localhost:3000';

console.log(`🧪 Testing API endpoints at: ${baseUrl}\n`);

async function testEndpoint(name, url, options = {}) {
    try {
        const response = await fetch(url, options);
        const status = response.status;
        const statusText = response.statusText;
        
        if (status === 200 || status === 401) {
            console.log(`✅ ${name}: ${status} ${statusText}`);
            if (status === 401) {
                console.log(`   (401 is expected - needs authentication token)`);
            }
        } else {
            console.log(`❌ ${name}: ${status} ${statusText}`);
        }
        
        return { success: status < 400, status };
    } catch (error) {
        console.log(`❌ ${name}: ERROR - ${error.message}`);
        return { success: false, error: error.message };
    }
}

async function runTests() {
    console.log('Testing public endpoints...\n');
    
    // Test health endpoint (should work)
    await testEndpoint('Health Check', `${baseUrl}/api/health`);
    
    // Test frontend contests (should work)
    await testEndpoint('Frontend Contests', `${baseUrl}/api/frontend/contests`);
    
    console.log('\nTesting admin endpoints (should return 401 without token)...\n');
    
    // Test admin endpoints (should return 401 - needs auth)
    await testEndpoint('Admin Contests', `${baseUrl}/api/admin/contests`, {
        headers: { 'Authorization': 'Bearer test' }
    });
    
    await testEndpoint('Admin Casinos', `${baseUrl}/api/admin/casinos`, {
        headers: { 'Authorization': 'Bearer test' }
    });
    
    console.log('\n✅ Test complete!');
    console.log('\n💡 If you see 401 errors, that\'s normal - you need a valid auth token.');
    console.log('💡 If you see 404 errors, the server might not be running or routes are not configured.');
}

runTests().catch(console.error);

