import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("🛑 MongoDB Disconnected");
  } catch (error) {
    console.error("❌ Error disconnecting DB:", error.message);
  }
};
