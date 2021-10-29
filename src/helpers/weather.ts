import axios from 'axios';
import { RootObject } from '../models/weather';

export async function getWeather(city: string): Promise<string> {
  const url = `https://wttr.in/${city}?format=j1`;
  try {
    const res = await axios.get<RootObject>(url);
    const location: string = res.data.nearest_area[0].areaName[0].value;
    const tempF: string = res.data.current_condition[0].temp_F;
    return location + ' currently is ' + tempF + '°F';
  } catch (e) {
    console.error(e);
    return 'uh oh';
  }
}
