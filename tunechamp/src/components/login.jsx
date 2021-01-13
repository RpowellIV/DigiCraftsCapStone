import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LinkButton from './linkButton'
import '../styles/login.css'
import { loginUrl } from '../spotify'
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../DataLayer" 


const spotify = new SpotifyWebApi();

function Login() {
  // const [token, setToken] = useState(null);
  const[{ user, token }, dispatch] = useDataLayerValue();
  // Runs code based on a given condition
//   useEffect(() => {
    const hash = getTokenFromUrl();
    //removes token info from url
    window.location.hash = "";

    //pulls token to push through useState
    const _token = hash.access_token;

    if (_token) {
      dispatch ({
        type: 'SET_TOKEN',
        token: _token
      })

      // setToken(_token)

      spotify.setAccessToken(_token);

      //Gets all spotify info for logged in person
      spotify.getMe().then(user =>{

        dispatch({
          type: 'SET_USER',
          user: user
        })
      });


      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
    }
//   }, []);


  console.log(`user >>>`, user);
  console.log(`token >>>`, token);

    const sendUser = async () => {
        const res = await axios.post(
            'http://localhost:3001/user', 
            {user:user, token:token})
        console.log(res);
    }

    sendUser()

// let Login = () => {
    return (
            <div className="login">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">TUNE CHAMP</h1>
                        <p className="lead">THE RIGHT GAME FOR GAME NIGHT...</p>
                        <p>Can you guess the song from just a 5 second snippet?</p>
                        <p>Take on your friends to be the Tune Champion!</p>
                    </div>
                </div>
                <a href={loginUrl}>LOGIN WITH SPOTIFY TEST</a>
                <LinkButton to='/home'> ------------</LinkButton>
            </div>
    )
}
export default Login;