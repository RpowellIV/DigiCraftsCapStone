import React, { useEffect, useState } from 'react';
import '../styles/Player.css';

const Player= ({track})=>{
  
  return(
    <iframe className="player" src={`https://open.spotify.com/embed/track/${track}`} frameBorder="0"
                    width="300" height="380" allowtransparency="true" allow="encrypted-media"></iframe>
  )
}

export default Player;
