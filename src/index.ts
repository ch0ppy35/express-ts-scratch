import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { booksRouter } from './routes/books';

const app = express();
app.use(json());
app.use(booksRouter);

const mongoHost = process.env.MONGOHOST || 'localhost';
const mongoURI = 'mongodb://' + mongoHost + ':27017/books';
mongoose.connect(mongoURI, () => {
  console.log('connected to mongo via ' + mongoURI);
});

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000');
});

process.stdin.resume();
process.on('SIGINT', function () {
  console.log('Interrupted');
  process.exit();
});
