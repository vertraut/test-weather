import { useState, useEffect } from 'react';

// import s from './Weather.module.css';
import {
  getWeatherByCity,
  getWeatherByCoords,
} from '../../weatherAPI/weatherAPI';
import Form from '../Form';

export default function Weather() {
  const [coords, setCoords] = useState({});

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (!city) return;
    getWeatherByCity(city).then(setWeather);
  }, [city]);

  useEffect(getLocation, [coords]);

  function getLocation() {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(showLocation, errorHandler);
  }

  async function showLocation({ coords }) {
    const currentCoords = { lat: coords.latitude, lon: coords.longitude };
    setCoords(currentCoords);

    const weather = await getWeatherByCoords(currentCoords);
    setWeather(weather);
  }

  function errorHandler(error) {
    console.log(error);
  }

  return (
    <div>
      <Form setCity={setCity} />
    </div>
  );
}
