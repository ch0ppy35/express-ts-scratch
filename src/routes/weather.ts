import express, { Request, Response, Router } from 'express';
import { getWeather } from '../helpers/weather';

const router: Router = express.Router();

router.get('/api/weather/:city', async (req: Request, res: Response) => {
  const city: string = req.params.city;
  const weather: string = await getWeather(city);
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).send(JSON.stringify({ message: weather }));
});

export { router as weatherRouter };
