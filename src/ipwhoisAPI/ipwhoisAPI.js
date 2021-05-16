const BASE_URL = 'https://api.ipdata.co?api-key=';

const API_KEY = 'b2617412a912b3579ce26f820b1bed2ae261880fcb7a551a7277d3b8';

export default function getUserInformaiton() {
  console.log('пошел запрос за городом');
  const url = `${BASE_URL}${API_KEY}&fields=city,country_name`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // if data
      return data.city || data.country_name || '';
    });
}
