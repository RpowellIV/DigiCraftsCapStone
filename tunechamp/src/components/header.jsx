import React from "react";
import { Link } from 'react-router-dom'
import TuneChamp from "../media/tuneChampImg.png";
import '../styles/header.css'
let Header = () => { 

    return (
        <nav>
            <div className='head-links'>
                <Link to='/home' className='home'>
                    <img className='logo' src={TuneChamp} alt="TuneChamp test logo"></img>
                </Link>
                <Link to='/leaderboard' className='leaderboard'>Leaderboard</Link>
                <Link to='/' className='logout'>LogOut</Link>                
            </div>
        </nav>
    )
}; 


export default Header;