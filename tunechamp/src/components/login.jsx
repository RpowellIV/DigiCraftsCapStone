import React from 'react';
import TuneChamp from "../media/tuneChampImg.png";
import { Header } from './index';
import LinkButton from './linkButton'
import '../styles/login.css'

let Login = () => {
    return (
            <div className="login">
                <header>
                    <Header />
                </header>
                {/* Logo */}
                <img className='logo' src={TuneChamp} width='10%' alt="TuneChamp test logo"></img>
                {/* Login w/ spotify button, calls login URL from spotify.js */}
                <LinkButton to='/dashboard'> LOGIN WITH SPOTIFY</LinkButton>
            </div>
    )
}

export default Login