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
  let correct;
  let message = 'Not this one';
  if (answer === song) {
    console.log('Right Answer');
    message = 'Correct!';
    correct = true;
  } else {
    console.log('Not this one');
    correct = false;
  }

  const [score, setScore] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    if (!correct) {
      console.log('wrong');
      isRightOrWrong = false;
      console.log(isRightOrWrong);
    } else {
      console.log('GOOD GUESS!');
      isRightOrWrong = true;
      console.log(isRightOrWrong);
    }
    handleIsClicked(isRightOrWrong);
  }
  useEffect(() => {
    if (getPopPlayer) {
      getPopPlayer(tracks.track.id);
    }
  }, [getPopPlayer]);
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
