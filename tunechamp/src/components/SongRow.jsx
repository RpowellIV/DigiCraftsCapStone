import React from 'react';
import '../styles/SongRow.css';

function SongRow({ track, song, answer }) {
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
            // alert("GUESS AGAIN!")
        } else {
            console.log('GOOD GUESS!')
            // alert("CORRECT!");
        }
      }
    

    return (
        <div className="songRow">
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

export default SongRow;
