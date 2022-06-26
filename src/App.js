import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route
          exact
          path='/profile'
          component={() => <Profile authorized={true} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
