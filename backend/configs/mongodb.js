import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('Database Connected'));
    mongoose.connection.on('error', (err) => console.error('Connection error:', err));

    // Correct connection string handling
    const connectionString = process.env.MONGODB_URI.endsWith('/')
      ? `${process.env.MONGODB_URI}lms`
      : `${process.env.MONGODB_URI}/lms`;

    await mongoose.connect(connectionString);

    console.log('MongoDB connected to database:', mongoose.connection.name);
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

export default connectDB;