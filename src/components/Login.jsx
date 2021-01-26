import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import { loginUrl } from '../spotify';
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../DataLayer';
import { Button } from 'react-bootstrap';

const spotify = new SpotifyWebApi();

function Login() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  // Runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    //removes token info from url
    window.location.hash = '';

    //pulls token to push through useState
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      axios
        .get('https://tunechamp-server.herokuapp.com/leaderboard')
        .then((response) => {
          dispatch({
            type: 'SET_LEADERBOARD',
            leaderboard: response.data.allUsers,
          });
        });

      // setToken(_token)
      spotify.setAccessToken(_token);
      //Gets all spotify info for logged in person
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DX56bqlsMxJYR').then((question1) => {
        dispatch({
          type: 'SET_QUESTION_1',
          question1: question1,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DX7SeoIaFyTmA').then((question2) => {
        dispatch({
          type: 'SET_QUESTION_2',
          question2: question2,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DX186v583rmzp').then((question3) => {
        dispatch({
          type: 'SET_QUESTION_3',
          question3: question3,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DXcBWIGoYBM5M').then((question4) => {
        dispatch({
          type: 'SET_QUESTION_4',
          question4: question4,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DX9Ozxs05KifN').then((question5) => {
        dispatch({
          type: 'SET_QUESTION_5',
          question5: question5,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DXaqCgtv7ZR3L').then((question6) => {
        dispatch({
          type: 'SET_QUESTION_6',
          question6: question6,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DXbYM3nMM0oPk').then((question7) => {
        dispatch({
          type: 'SET_QUESTION_7',
          question7: question7,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DWXRqgorJj26U').then((question8) => {
        dispatch({
          type: 'SET_QUESTION_8',
          question8: question8,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DX6VDO8a6cQME').then((question9) => {
        dispatch({
          type: 'SET_QUESTION_9',
          question9: question9,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DX5gQonLbZD9s').then((question10) => {
        dispatch({
          type: 'SET_QUESTION_10',
          question10: question10,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
    }
  }, [token, user, dispatch]);

  useEffect(() => {
    if (user) {
      sendUser();
    }
  }, [token, user]);

  const sendUser = async () => {
    const res = await axios.post(
      'https://tunechamp-server.herokuapp.com/user',
      {
        user: user,
        token: token,
      }
    );
    console.log(res);
  };

  return (
    <div className="login">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">TUNE CHAMP</h1>
          <p className="lead">SET THE RIGHT "TUNE" FOR GAME NIGHT...</p>
        </div>
      </div>
      {token ? (
        <div className="home">
          <h1>How to get started</h1>
          <p>After you've logged into Spotify, choose to start the game.</p>
          <h1>How to Play</h1>
          <ul className="how">
            <li>You'll be given ten songs</li>
            <li>
              Choose the correct answer from four given artist/song
              combinations.
            </li>
            <li>Each correct answer will give you 100 points.</li>
            <li>
              Score points and compare to your friends on the Leaderboard!{' '}
            </li>
          </ul>
          <Link to="/gameboard" className="gameboard">
            <Button variant="secondary">GAMEBOARD</Button>{' '}
          </Link>
        </div>
      ) : (
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      )}
    </div>
  );
}

export default Login;
