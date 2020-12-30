import React from 'react'
import './login.css'
import { loginUrl } from './spotify.jsx'
import TuneChamp from "../media/tuneChampImg.png"

let Login = () => {
    return (
        <div className="login">
            {/* Logo */}
            <img src={TuneChamp} width='10%' alt="TuneChamp test logo"></img>
            {/* Login w/ spotify button, calls login URL from spotify.js */}
            <button><a href={loginUrl}>LOGIN WITH SPOTIFY</a></button>
        </div>
    )
}

export default Login