import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

async function testConnection() {
  console.log('🔍 Testing MongoDB Backend Connection...');
  
  if (!MONGODB_URI) {
    console.error('❌ ERROR: MONGODB_URI not found in .env.local file.');
    process.exit(1);
  }
  
  // Mask the password for security in the logs
  const maskedUri = MONGODB_URI.replace(/:([^:@]{1,})@/, ':****@');
  console.log(`📡 Connecting to: ${maskedUri}`);
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ SUCCESS! Your backend is perfectly connected to MongoDB Atlas.');
    console.log('📥 Any messages sent from your contact form will now be saved to your database.');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ FAILED TO CONNECT. Here is the error:');
    console.error(error.message);
    
    // Provide helpful hints based on common errors
    if (error.message.includes('bad auth')) {
      console.log('\n💡 HINT: "bad auth" means your database password is incorrect. Check your .env.local file.');
    } else if (error.message.includes('IP address')) {
      console.log('\n💡 HINT: Your IP address is not whitelisted. Go to MongoDB Atlas -> Network Access and ensure "0.0.0.0/0" is added.');
    }
    
    process.exit(1);
  }
}

testConnection();
