import React from 'react';
import '../styles/SongRow.css';

function SongRow2({ track, song, answer }) {
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
        <div className="songRow2">
            <h1>GUESS 2</h1>
            <button className="songRow__button" onClick={handleClick}>
            <img className="songRow__album" src={track.album.images[0].url} alt=""/>
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <h1>{song}</h1>
                <h1>{message}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
            </button>
        </div>
    )
}

export default SongRow2;
