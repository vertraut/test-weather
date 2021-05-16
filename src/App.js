import { Route, Switch } from 'react-router-dom';

import './App.css';
import Weather from './components/Weather';
import SignInForm from './components/SignInForm';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <SignInForm />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
