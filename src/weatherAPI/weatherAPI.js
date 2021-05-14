const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = 'e5f824df274533e5727ab610130f3ed2';

function getWeatherByCoords({ lat, lon }) {
  const url = `${BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  return getWeater(url);
}

function getWeatherByCity(city) {
  const url = `${BASE_URL}q=${city}&units=metric&appid=${API_KEY}`;
  return getWeater(url);
}

function getWeater(url) {
  return fetch(url).then(res => res.json());
}

export { getWeatherByCoords, getWeatherByCity };
