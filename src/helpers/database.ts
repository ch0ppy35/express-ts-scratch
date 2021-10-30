import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoHost: string = process.env.MONGOHOST || 'localhost';
    const mongoURI: string = 'mongodb://' + mongoHost + ':27017/books';
    mongoose.connect(mongoURI, () => {
      console.log('Connected to mongo');
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export default connectDB;
