import React from 'react';
import { Link } from 'react-router-dom';
import Playlist from './Playlist'
import '../styles/Home.css'

const Home=({ spotify })=>{
     return(
         <div className='home'>
             <h1>How to get started</h1>
             <p>
                After you've logged into Spotify, choose to start to the game.
             </p>
             <h1>How to Play</h1>
             <ul className='how'>
                <li>You'll be given four songs</li>
                <li>Choose the correct answer from 4 given artist/song combinations.</li>
                <li>Each correct answer will give you a point.</li>
                <li>Score points and compare to your friends on the Leaderboard! </li>
             </ul>  
             <Link to='/gameboard' className='gameboard'>GAMEBOARD</Link>
         </div>
         
     )
}
 export default Home;