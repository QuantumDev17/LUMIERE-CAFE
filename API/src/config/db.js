import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ Missing MONGODB_URI in .env');
    return;
  }

  let attempt = 0;
  while (mongoose.connection.readyState !== 1 && attempt < 10) {
    try {
      attempt++;
      console.log(`🔌 Mongo connect attempt ${attempt}…`);
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        autoIndex: true,
      });
      console.log(`✅ MongoDB connected: ${mongoose.connection.host}`);
      return;
    } catch (err) {
      console.error('❌ Mongo error:', err?.message);
      // brief backoff so Nodemon doesn’t rapid-restart
      await new Promise(r => setTimeout(r, Math.min(30000, attempt * 1000)));
    }
  }

  console.warn('⚠️ Could not connect to Mongo after retries. Continuing so the API stays up.');
};

export const disconnectDB = async () => {
  try { await mongoose.disconnect(); } catch {}
};
