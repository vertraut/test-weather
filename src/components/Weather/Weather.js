import { useState, useEffect, useContext } from 'react';

import s from './Weather.module.css';

import {
  getWeatherByCity,
  getWeatherByCoords,
} from '../../weatherAPI/weatherAPI';
import getUserCity from '../../ipwhoisAPI';
import Form from '../Form';
import Loader from '../Loader';
import WeatherBar from '../WeatherBar';
import authCtx from '../../context/authContext';

export default function Weather() {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState(getCityFromLocalStorage);
  const [weather, setWeather] = useState({});

  const { logOut } = useContext(authCtx);

  function getCityFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem('city')) ?? '';
  }

  useEffect(() => {
    window.localStorage.setItem('city', JSON.stringify(city));

    if (city === '') {
      setIsLoading(true);

      const geolocation = navigator.geolocation;
      geolocation.getCurrentPosition(showLocation, errorHandler);
    }
  }, [city]);

  useEffect(() => {
    if (!city) return;
    setIsLoading(true);
    getWeatherByCity(city)
      .then(setWeather)
      .finally(() => {
        setIsLoading(false);
      });
  }, [city]);

  async function showLocation({ coords }) {
    setIsLoading(true);
    const currentCoords = { lat: coords.latitude, lon: coords.longitude };
    const weather = await getWeatherByCoords(currentCoords);
    setWeather(weather);
    setIsLoading(false);
  }

  function errorHandler(error) {
    console.log(error);
    setIsLoading(true);
    getUserCity()
      .then(data => {
        setCity(data);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className={s.wrapper}>
      <div className={s.logout}>
        <button className={s.button} onClick={logOut}>
          Logout
        </button>
      </div>

      <Form setCity={setCity} />
      {isLoading && <Loader />}
      {Object.keys(weather).length !== 0 && !isLoading && (
        <WeatherBar weather={weather} />
      )}
    </div>
  );
}
