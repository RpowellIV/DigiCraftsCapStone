import React from 'react';
import {
  Login,
  Header,
  LeaderBoard,
  Footer,
  GameBoard,
  DeveloperPage,
  Score,
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="y-app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/leaderboard">
            <Header />
            <LeaderBoard />
            <Footer />
          </Route>
          <Route path="/developers">
            <Header />
            <DeveloperPage />
            <Footer />
          </Route>
          <Route path="/gameboard">
            <Header />
            <GameBoard />
            <Footer />
          </Route>
          <Route path="/score">
            <Header />
            <Score />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
