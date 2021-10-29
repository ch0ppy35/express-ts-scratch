import express, { Request, Response, Router } from 'express';
import { greet } from '../helpers/greeting';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).send(JSON.stringify({ message: 'This is an api' }));
});

router.get('/greet/:name', async (req: Request, res: Response) => {
  const name: string = req.params.name;
  const message: string = greet(name, new Date());
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).send(JSON.stringify({ message: message }));
});

router.get('/healthz', async (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).send(JSON.stringify({ message: 'OK' }));
});

export { router as indexRouter };
