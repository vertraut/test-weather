import { Route, Switch } from 'react-router-dom';

import './App.css';
import Weather from './components/Weather';
import SignInForm from './components/SignInForm';
import NotFoundView from './views/NotFoundView';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <PublicRoute path="/" exact>
          <SignInForm />
        </PublicRoute>
        <PrivateRoute path="/weather">
          <Weather />
        </PrivateRoute>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
