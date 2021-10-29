import express, { Request, Response, Router } from 'express';
import { Book } from '../models/book';

const router: Router = express.Router();

router.get('/api/books', async (req: Request, res: Response) => {
  const book = await Book.find({}, '-_id').select('title author');
  console.log(book);
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).send(JSON.stringify({ books: book }));
});

router.post('/api/books', async (req: Request, res: Response) => {
  const { title, author } = req.body;
  try {
    const book = Book.build({ title, author });
    await book.save();
    res.setHeader('Content-Type', 'application/json');
    return res.status(201).send(JSON.stringify({ message: 'Request Sent' }));
  } catch (error) {
    console.error(error);
    res.setHeader('Content-Type', 'application/json');
    return res.status(400).send(JSON.stringify({ message: 'Bad Request' }));
  }
});

router.delete('/api/books', async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const book = await Book.findOneAndDelete({ title: title });
    console.log(book);
    res.setHeader('Content-Type', 'application/json');
    return res.status(202).send(JSON.stringify({ message: 'Request Sent' }));
  } catch (error) {
    console.error(error);
    res.setHeader('Content-Type', 'application/json');
    return res.status(400).send(JSON.stringify({ message: 'Bad Request' }));
  }
});

export { router as booksRouter };
