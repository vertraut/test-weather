import React from 'react';

export default function WeatherBar({ weather }) {
  console.log(weather);
  function tempNormalize(temp, digits) {
    return `${temp > 0 ? '+' : '-'}${temp.toFixed(digits)}°`;
  }

  function getTimeFromUnix(unixTime) {
    const date = new Date(unixTime * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  if (weather.cod === 200) {
    const { name, wind, main, weather: weather_desc, sys } = weather;

    const sunriseTime = getTimeFromUnix(sys.sunrise);
    const sunsetTime = getTimeFromUnix(sys.sunset);

    const { temp, feels_like } = main;
    const currentTemp = tempNormalize(temp, 1);
    const feelsLile = tempNormalize(feels_like, 1);
    const pressure = (main.pressure / 1.333).toFixed(0);

    return (
      <div>
        <div>
          <div>
            <h1>{name}</h1>
            <p>{currentTemp}</p>
            <p>Real feel {feelsLile}</p>
          </div>
          <div>{weather_desc[0].description}</div>
        </div>

        <ul>
          <li>Wind: {wind.speed} m/s</li>
          <li>Humidity: {main.humidity}%</li>
          <li>Pressure: {pressure} mmHg</li>
          <li>Sunrise: {sunriseTime}</li>
          <li>Sunset: {sunsetTime}</li>
        </ul>
      </div>
    );
  }
  return <div>{weather.message}</div>;
}
