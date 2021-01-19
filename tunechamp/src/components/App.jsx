import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Login, Header, Home, LeaderBoard } from '.';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../DataLayer';

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
        </Switch>
      </div>
    </Router>
  );
};

export default App;
