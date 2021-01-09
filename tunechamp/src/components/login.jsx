import React from 'react';
import LinkButton from './LinkButton'
import '../styles/login.css'

let Login = () => {
    return (
            <div className="login">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">TUNE CHAMP TEST</h1>
                        <p className="lead">THE RIGHT GAME FOR GAME NIGHT...</p>
                    </div>
                </div>
                <LinkButton to='/home'> LOGIN WITH SPOTIFY</LinkButton>
            </div>
    )
}
export default Login