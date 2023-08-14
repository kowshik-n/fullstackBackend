import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined.');
}

const connectDB = async () => {
  try {
    const { DATABASE_URL } = process.env;

    if (!DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not defined.');
    }

    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
