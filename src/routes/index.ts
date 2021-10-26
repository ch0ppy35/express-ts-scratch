import express, { Request, Response, Router } from 'express';
import { greet, getWeather } from '../helpers/utils';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  return res.status(200).send('This is an api');
});

router.get('/greet/:name', async (req: Request, res: Response) => {
  const name: string = req.params.name;
  const message: string = greet(name, new Date());
  return res.status(200).send(message);
});

router.get('/weather/:city', async (req: Request, res: Response) => {
  const city: string = req.params.city;
  const weather = await getWeather(city);
  return res.status(200).send(weather);
});

router.get('/healthz', async (req: Request, res: Response) => {
  return res.status(200).send('OK');
});

export { router as indexRouter };
