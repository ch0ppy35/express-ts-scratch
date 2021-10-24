import express from 'express';
import { json } from 'body-parser';
import connectDB from './helpers/database';
import { indexRouter } from './routes/index';
import { booksRouter } from './routes/books';

// Setup the app
const app = express();
app.disable('x-powered-by');
app.use(json());
app.use(indexRouter);
app.use(booksRouter);

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000/');
});

// Connect to mongo
connectDB();

// Handle SIGINT exit
process.stdin.resume();
process.on('SIGINT', function () {
  console.log('Interrupted');
  process.exit();
});
