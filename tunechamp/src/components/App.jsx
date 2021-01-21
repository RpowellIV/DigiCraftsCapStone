import React from 'react';
import { Login, Header, Home, LeaderBoard } from '.';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='y-app'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Login />
          </Route>
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
          <Route path='/leaderboard'>
            <Header />
            <LeaderBoard />
          </Route>
          <Route path='/gameboard'>
            <Header />
            <LeaderBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
