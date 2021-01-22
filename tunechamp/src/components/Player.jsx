import React, { useEffect, useState } from 'react';
import '../styles/Player.css';

const Player= ()=>{
  return(
    <iframe class="player" src="https://open.spotify.com/embed/track/1Kv9bdJzdgZW6KjfFkA9TL" frameborder="0"
                    width="300" height="380" allowtransparency="true" allow="encrypted-media"></iframe>
  )
}

export default Player;
