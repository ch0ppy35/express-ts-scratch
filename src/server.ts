import express from 'express';
import { json } from 'body-parser';
import connectDB from './helpers/database';
import { indexRouter } from './routes/index';
import { booksRouter } from './routes/books';

const app = express();
app.use(json());
app.use(indexRouter);
app.use(booksRouter);

connectDB();

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000/');
});

process.stdin.resume();
process.on('SIGINT', function () {
  console.log('Interrupted');
  process.exit();
});
