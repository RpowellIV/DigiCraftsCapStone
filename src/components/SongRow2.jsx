import React, { useEffect, useState } from 'react';
import '../styles/SongRow.css';

function SongRow2({
  tracks,
  song,
  answer,
  handleIsClicked,
  isClicked,
  isRightOrWrong,
  getPopPlayer,
}) {
  const [correct, setCorrect]=useState(false)
  useEffect(()=>{
    if (answer === song) {
      getPopPlayer(tracks.track.id)
      setCorrect(true)
    } else {
      setCorrect(false);
    }
  },[answer, getPopPlayer, song, tracks.track.id])

  function handleClick(e) {
    e.preventDefault();
    if (!correct) {
      isRightOrWrong = false;
    } else {
      isRightOrWrong = true;
    }
    handleIsClicked(isRightOrWrong);
  }
  return (
    <div className="songRow" id="songRow">
      <button
        id="songButton"
        className={isClicked ? 'songRow__button__clicked' : 'songRow__button'}
        onClick={!isClicked ? handleClick : null}
      >
        <img
          className="songRow__album"
          src={tracks.track.album.images[0].url}
          alt=""
        />
        <div className="songRow__info">
          <h1>
            {!isClicked
              ? tracks.track.name
              : isClicked && answer === song
              ? `CORRECT`
              : isClicked && answer !== song
              ? `WRONG!`
              : null}
          </h1>
          <p>
            {tracks.track.artists.map((artist) => artist.name).join(', ')} -{' '}
            {tracks.track.album.name}
          </p>
        </div>
      </button>
    </div>
  );
}

export default SongRow2;
