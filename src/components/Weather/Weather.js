import { useState, useEffect } from 'react';

// import s from './Weather.module.css';
import { getWeatherByCity } from '../../weatherAPI/weatherAPI';
import Form from '../Form';

export default function Weather() {
  //   const [coord, setCoord] = useState({});

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (!city) return;
    getWeatherByCity(city).then(setWeather);
  }, [city]);

  return (
    <div>
      <Form setCity={setCity} />
    </div>
  );
}
