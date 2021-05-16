import React, { useState } from 'react';

import s from './Form.module.css';

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
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        name="city"
        value={inputCity}
        onChange={handleCityChange}
        className={s.input}
      />

      <button type="submit" className={s.button}>
        Найти
      </button>
    </form>
  );
}
