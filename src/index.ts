import express from 'express';
import { json } from 'body-parser';
import { booksRouter } from './routes/books';

const app = express();
app.use(json());
app.use(booksRouter);

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000');
});

process.stdin.resume();
process.on('SIGINT', function() {
  console.log('Interrupted');
  process.exit();
});
