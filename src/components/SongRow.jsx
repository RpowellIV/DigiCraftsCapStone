import React from 'react';
import '../styles/SongRow.css';

function SongRow({ track, song, answer, handleIsClicked, isClicked, isRightOrWrong }) {

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
        if(!correct) {
            console.log('wrong')
            isRightOrWrong = false;
        } else {
            console.log('GOOD GUESS!')
            isRightOrWrong = true;
        }
        handleIsClicked();
      }


    return (
        <>
        <div className="songRow" id="songRow">
            <button id="songButton" 
            className={isClicked ? "songRow__button__clicked" : "songRow__button"}
            onClick={!isClicked ? handleClick : null} >
            <img className="songRow__album" src={track.album.images[0].url} alt=""/>
            <div className="songRow__info">
                <h1>{!isClicked ? (track.name) : isClicked && answer===song ? (`CORRECT`) : isClicked && answer!==song ? (`WRONG!`): null}</h1> 
                {!isClicked ?
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p> :
                isClicked && answer===song ? (<p>CORRECT!</p>) : isClicked && answer!==song ? (<p>WRONG!</p>): null}
            </div>
            </button>
        </div>
        </>
    )};

export default SongRow;
