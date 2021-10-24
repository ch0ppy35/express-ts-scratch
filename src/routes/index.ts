import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  return res.status(200).send('This is an api');
});

router.get('/healthz', async (req: Request, res: Response) => {
  return res.status(200).send('OK');
});

export { router as indexRouter };
