import axios from 'axios';

export function greet(person: string, date: Date): string {
  return `Hello ${person}, today is ${date.toDateString()}!`;
}

export async function getWeather(city: string) {
  const url = `https://wttr.in/${city}?format=3`;
  const makeRequest = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
  return makeRequest();
}
