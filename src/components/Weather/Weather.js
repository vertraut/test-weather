import { useState, useEffect } from 'react';

// import s from './Weather.module.css';
import {
  getWeatherByCity,
  getWeatherByCoords,
} from '../../weatherAPI/weatherAPI';
import Form from '../Form';
import Loader from '../Loader';
import WeatherBar from '../WeatherBar';

export default function Weather() {
  const [isLoading, setIsLoading] = useState(false);
  const [coords, setCoords] = useState({});

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (!city) return;
    setIsLoading(true);
    getWeatherByCity(city).then(setWeather).finally(setIsLoading(false));
  }, [city]);

  // useEffect(() => {
  //   if (coords) return;
  //   const geolocation = navigator.geolocation;
  //   geolocation.getCurrentPosition(showLocation, errorHandler);
  //   console.log('useEffect coords');
  // }, [coords]);

  // async function showLocation({ coords }) {
  //   const currentCoords = { lat: coords.latitude, lon: coords.longitude };
  //   setCoords(currentCoords);

  //   //const weather = await getWeatherByCoords(currentCoords);
  //   //setWeather(weather);
  // }

  // function errorHandler(error) {
  //   console.log(error);
  // }

  return (
    <div>
      <Form setCity={setCity} />
      {isLoading && <Loader />}
      {Object.keys(weather).length !== 0 && !isLoading && (
        <WeatherBar weather={weather} />
      )}
    </div>
  );
}
