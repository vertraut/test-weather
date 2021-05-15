import s from './WeatherBar.module.css';

export default function WeatherBar({ weather }) {
  function tempNormalize(temp, digits) {
    return `${temp > 0 ? '+' : '-'}${temp.toFixed(digits)}°`;
  }

  function getTimeFromUnix(unixTime) {
    const date = new Date(unixTime * 1000);
    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  if (weather.cod === 200) {
    const { name, wind, main, weather: weather_desc, sys } = weather;

    const sunriseTime = getTimeFromUnix(sys.sunrise);
    const sunsetTime = getTimeFromUnix(sys.sunset);

    const { temp, feels_like } = main;
    const currentTemp = tempNormalize(temp, 1);
    const feelsLile = tempNormalize(feels_like, 1);
    const pressure = (main.pressure / 1.333).toFixed(0); //to mmHg
    const weaterDescription =
      weather_desc[0].description[0].toUpperCase() +
      weather_desc[0].description.slice(1);

    return (
      <div className={s.wrapper}>
        <div className={s.main}>
          <div>
            <h1 className={s.city}>{name}</h1>
            <p className={s.temp}>{currentTemp}</p>
            <p className={s.realFeel}>Real feel {feelsLile}</p>
          </div>
          <div className={s.moreInformation}>
            <p className={s.desc}>{weaterDescription}</p>
            <p>Sunrise: {sunriseTime}</p>
            <p>Sunset: {sunsetTime}</p>
          </div>
        </div>

        <ul className={s.list}>
          <li>
            <span>Wind</span> {wind.speed} m/s
          </li>
          <li>
            <span>Humidity</span> {main.humidity}%
          </li>
          <li>
            <span>Pressure</span> {pressure} mmHg
          </li>
        </ul>
      </div>
    );
  }
  return <div>{weather.message}</div>;
}
