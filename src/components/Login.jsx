import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { loginUrl } from '../spotify';
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../DataLayer';

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

      axios.get('http://localhost:3001/leaderboard').then((response) => {
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

      spotify.searchTracks('Love').then((random) => {
        console.log('track>>>', random);

        dispatch({
          type: 'SET_RANDOM',
          random: random,
        });
      });

      spotify.searchTracks('rock').then((question2) => {
        console.log('Q2>>>', question2);

        dispatch({
          type: 'SET_QUESTION_2',
          question2: question2,
        });
      });

      spotify.getPlaylistTracks('37i9dQZF1DX186v583rmzp').then((question3) => {
        console.log('Q3>>>', question3);

        dispatch({
          type: 'SET_QUESTION_3',
          question3: question3,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
    }
  }, [dispatch]);

  // console.log(`user >>>`, user);
  // console.log(`token >>>`, token);

  const sendUser = async () => {
    const res = await axios.post('http://localhost:3001/user', {
      user: user,
      token: token,
    });
    console.log(res);
  };

  sendUser();

  // let Login = () => {
  return (
    <div className='login'>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>TUNE CHAMP TEST</h1>
          <p className='lead'>THE RIGHT GAME FOR GAME NIGHT...</p>
        </div>
      </div>
      {token ? <h1>TOKEN</h1> : <a href={loginUrl}>LOGIN WITH SPOTIFY TEST</a>}
    </div>
  );
}

export default Login;
