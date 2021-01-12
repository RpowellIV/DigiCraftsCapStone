import React from 'react';
import LinkButton from './LinkButton'
import '../styles/login.css'
import { loginUrl } from './spotify'

let Login = () => {
    return (
            <div className="login">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">TUNE CHAMP TEST</h1>
                        <p className="lead">THE RIGHT GAME FOR GAME NIGHT...</p>
                    </div>
                </div>
                <a href={loginUrl}>LOGIN WITH SPOTIFY TEST</a>
                <LinkButton to='/home'> ------------</LinkButton>
            </div>
    )
}
export default Login