const BASE_URL = 'https://ipwhois.app/json/';

export default function getUserInformaiton() {
  const url = `${BASE_URL}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => data.city);
}
