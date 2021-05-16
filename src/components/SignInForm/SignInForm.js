import { useState, useContext } from 'react';
import s from './SignInForm.module.css';

import authCtx from '../../context/authContext';

export default function Navigation() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const authContext = useContext(authCtx);

  const LABEL_NAME = {
    login: 'login',
    pass: 'password',
  };

  function handleSubmit(e) {
    e.preventDefault();
    authContext.logIn();
  }

  function handleChange(e) {
    switch (e.target.name) {
      case LABEL_NAME.login:
        setLogin(e.target.value);
        break;
      case LABEL_NAME.pass:
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          Логин*
          <input
            type="text"
            name={LABEL_NAME.login}
            className={s.input}
            value={login}
            onChange={handleChange}
            minLength="6"
            maxLength="100"
            required
          />
        </label>
        <label>
          Пароль*
          <input
            type="password"
            name={LABEL_NAME.pass}
            value={password}
            className={s.input}
            onChange={handleChange}
            minLength="6"
            maxLength="100"
            required
          />
        </label>

        <button type="submit" className={s.button}>
          Войти
        </button>
      </form>
    </div>
  );
}
