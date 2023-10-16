import axios from 'axios';

export async function ApiCalls() {
  const url = 'http://api.weatherapi.com/v1/forecast.json';
  const headers = {
    'Content-Type': 'application/json',
  };
  const params = {
    key: '7edf20b171e74657a4a50643231610',
    q: 'Pakistan',
    aqi: 'no',
    days: 7,
  };

  try {
    const response = await axios?.get(url, {headers, params});
    const {location = {}, current = {}, forecast = {}} = response?.data;

    const data = {
      region: location.region,
      country: location.country,
      localtime: location.localtime,
      temp: current.temp_c,
      text: current.condition?.text,
      forecast: forecast.forecastday,
    };

    if (response?.data) {
      console.log('Response Data:', data.forecast);

      return new Promise.resolve(data);
    } else {
      console.log('There is no data or there is an error');
      return new Promise.reject('There is an error');
    }
  } catch (error) {
    console.log('Error: ', error);
  }
}
