import axios from 'axios';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  return res.status(200).send('This is an api');
});

router.get('/healthz', async (req: Request, res: Response) => {
  return res.status(200).send('OK');
});

router.get('/weather', async (req: Request, res: Response) => {
  const url = 'https://wttr.in/Denver?format=3';
  const getData = async (url: string) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      return res.status(200).send(data);
    } catch (error) {
      console.error(error);
    }
  };
  getData(url);
});

export { router as indexRouter };
