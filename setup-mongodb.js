#!/usr/bin/env node

console.log('🚀 MongoDB Atlas Setup Guide\n');

console.log('📋 Step 1: Create MongoDB Atlas Account');
console.log('   • Go to: https://www.mongodb.com/atlas');
console.log('   • Click "Try Free" and create an account\n');

console.log('📋 Step 2: Create a Cluster');
console.log('   • Choose "FREE" tier (M0)');
console.log('   • Select your preferred cloud provider (AWS/Google Cloud/Azure)');
console.log('   • Choose a region close to you');
console.log('   • Click "Create Cluster"\n');

console.log('📋 Step 3: Set Up Database Access');
console.log('   • Go to "Database Access" in the left sidebar');
console.log('   • Click "Add New Database User"');
console.log('   • Username: faiqnext_user');
console.log('   • Password: Create a strong password');
console.log('   • Role: "Read and write to any database"');
console.log('   • Click "Add User"\n');

console.log('📋 Step 4: Set Up Network Access');
console.log('   • Go to "Network Access" in the left sidebar');
console.log('   • Click "Add IP Address"');
console.log('   • Click "Allow Access from Anywhere" (for development)');
console.log('   • Click "Confirm"\n');

console.log('📋 Step 5: Get Connection String');
console.log('   • Go back to "Database" in the left sidebar');
console.log('   • Click "Connect" on your cluster');
console.log('   • Choose "Connect your application"');
console.log('   • Copy the connection string\n');

console.log('📋 Step 6: Update .env.local');
console.log('   • Replace the placeholder in .env.local with your actual connection string');
console.log('   • Replace <username> with: faiqnext_user');
console.log('   • Replace <password> with your password');
console.log('   • Replace <dbname> with: faiqnext\n');

console.log('🔗 Example connection string:');
console.log('MONGODB_URI=mongodb+srv://faiqnext_user:yourpassword@cluster0.xxxxx.mongodb.net/faiqnext?retryWrites=true&w=majority\n');

console.log('✅ After updating .env.local, restart your development server:');
console.log('   npm run dev\n');

console.log('🧪 Test your connection by clicking the "Test Database Connection" button on your homepage!');

