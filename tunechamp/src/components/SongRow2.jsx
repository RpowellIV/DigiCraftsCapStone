import React from 'react';
import '../styles/SongRow.css';
import SongRow from './SongRow'

function SongRow2({ tracks, song, answer }) {
    let correct;
    let message='Not this one';
    if(answer === song) {
        console.log('Right Answer')
        message='Correct!'
        correct = true;
        
    } else {
        console.log('Not this one')
        correct = false;
    }


    function handleClick(e) {
        e.preventDefault();
        if( correct === false ) {
            console.log('wrong')
            // setTimeout( function ( ) { alert( "GUESS AGAIN" ); }, 10000 );
        } else {
            console.log('GOOD GUESS!')
            
            // setTimeout( function ( ) { alert( "CORRECT" ); }, 10000 );
        }
      }
    

    return (
        <div className="songRow" id="songRow">
            {/* <h1>GUESS 2</h1> */}
            <button className="songRow__button" onClick={handleClick}>
            <img className="songRow__album" src={tracks.track.album.images[0].url} alt=""/>
            <div className="songRow__info">
                <h1>{tracks.track.name}</h1>
                {/* <h1>{song}</h1>
                <h1>{message}</h1> */}
                <p>
                    {tracks.track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {tracks.track.album.name}
                </p>
            </div>
            </button>
        </div>
    )
}

export default SongRow2;
