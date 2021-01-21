import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinkButton from './LinkButton';
import '../styles/Login.css';
import { loginUrl } from '../spotify';
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../DataLayer';
import Playlist from './Playlist';

const spotify = new SpotifyWebApi();

function Login() {
  // const [token, setToken] = useState(null);
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

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
    }
  }, []);

  const sendUser = async () => {
    console.log(user);
    if (user) {
      const res = await axios.post('http://localhost:3001/user', {
        user: user,
        token: token,
      });
      console.log(res);
    }
  };

  sendUser();

  return (
    <div className='login'>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>TUNE CHAMP TEST</h1>
          <p className='lead'>THE RIGHT GAME FOR GAME NIGHT...</p>
        </div>
      </div>
      {token ? <h1>TOKEN</h1> : <a href={loginUrl}>LOGIN WITH SPOTIFY TEST</a>}
      {/* <a href={loginUrl}>LOGIN WITH SPOTIFY TEST</a> */}
      {/* <LinkButton to='/home'> ------------</LinkButton> */}
    </div>
  );
}
export default Login;
