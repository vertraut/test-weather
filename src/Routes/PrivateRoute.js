import { Redirect, Route } from 'react-router';

import { useContext } from 'react';
import authCtx from '../context/authContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { isLogin } = useContext(authCtx);
  console.log(isLogin);

  <Redirect to="/" />;

  return (
    <Route {...routeProps}>{isLogin ? children : <Redirect to="/" />}</Route>
  );
}
