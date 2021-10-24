import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/books', [], (req: Request, res: Response) => {
  return res.send('Books!');
});

router.post('/api/books', (req, res) => {
  return res.send('Added new book');
});

export { router as booksRouter };
