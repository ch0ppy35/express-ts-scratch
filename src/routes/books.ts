import express, { Request, Response } from 'express';
import { Book } from '../models/book';

const router = express.Router();

router.get('/api/books', async (req: Request, res: Response) => {
  const book = await Book.find({}, '-_id').select('title author');
  console.log(book);
  return res.status(200).send(book);
});

router.post('/api/books', async (req: Request, res: Response) => {
  const { title, author } = req.body;
  try {
    const book = Book.build({ title, author });
    await book.save();
    return res.status(201).send('Book added');
  } catch (error) {
    console.error(error);
    return res.status(400).send('Bad request');
  }
});

router.delete('/api/books', async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const book = await Book.findOneAndDelete({ title: title });
    console.log(book);
    return res.status(202).send('Request sent');
  } catch (error) {
    console.error(error);
    return res.status(400).send('Bad request');
  }
});

export { router as booksRouter };
