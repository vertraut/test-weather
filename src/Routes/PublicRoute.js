import { Redirect, Route } from 'react-router';

import { useContext } from 'react';
import authCtx from '../context/authContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { isLogin } = useContext(authCtx);

  return (
    <Route {...routeProps}>
      {isLogin ? <Redirect to="/weather" /> : children}
    </Route>
  );
}
