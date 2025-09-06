import dotenv from 'dotenv';
import { connectDB } from '../src/config/db.js';
import { Product } from '../src/models/Product.js';
import { sampleProducts } from './productSample.js';

dotenv.config();

const run = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    const inserted = await Product.insertMany(sampleProducts);
    console.log(`Seeded ${inserted.length} products`);
    process.exit(0);
  } catch (e) {
    console.error('Seed error:', e);
    process.exit(1);
  }
};

run();