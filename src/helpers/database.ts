import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoHost = process.env.MONGOHOST || 'localhost';
    const mongoURI = 'mongodb://' + mongoHost + ':27017/books';
    mongoose.connect(mongoURI, () => {
      console.log('Connected to mongo');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
