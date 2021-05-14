import React, { useState } from 'react';

export default function Form({ setCity }) {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const city = inputCity.trim().toLocaleLowerCase();
    city ? setCity(city) : alert('Please provide a city');
    setInputCity('');
  };

  const handleCityChange = e => {
    setInputCity(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        value={inputCity}
        onChange={handleCityChange}
      />
      <button type="submit">Найти</button>
    </form>
  );
}
