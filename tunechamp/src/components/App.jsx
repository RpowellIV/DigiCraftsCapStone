import React from 'react';
import { Login, Header, Home, LeaderBoard } from './index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/leaderboard'>
            <Header />
            <LeaderBoard />
          </Route>
          <Route path='/'>
            <Header />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
