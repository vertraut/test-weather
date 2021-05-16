import React, { useState, useEffect } from 'react';
import authContext from './authContext';

export default function AuthProvider(props) {
  const KEY = { isLogin: 'isLogin' };

  const [isLogin, setIsLogin] = useState(getIsLoginFromLocalStorage);

  function logIn() {
    setIsLogin(true);
  }

  function logOut() {
    setIsLogin(false);
  }

  useEffect(() => {
    window.localStorage.setItem(KEY.isLogin, JSON.stringify(isLogin));
  }, [KEY.isLogin, isLogin]);

  function getIsLoginFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem(KEY.isLogin)) ?? false;
  }

  return (
    <authContext.Provider value={{ isLogin, logIn, logOut }}>
      {props.children}
    </authContext.Provider>
  );
}
