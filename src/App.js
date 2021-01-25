import React from 'react';
import {
  Login,
  Header,
  Home,
  LeaderBoard,
  Footer,
  GameBoard,
  DeveloperPage,
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='y-app'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path='/home'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path='/leaderboard'>
            <Header />
            <LeaderBoard />
            <Footer />
          </Route>
          <Route path='/developers'>
            <Header />
            <DeveloperPage />
            <Footer />
          </Route>
          <Route path='/gameboard'>
            <Header />
            <GameBoard />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
