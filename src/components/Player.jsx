import React from 'react';
import '../styles/Player.css';
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';

const Player = ({ track }) => {
  return (
    <div className="border">
      <h3>Click Here</h3>
      <ArrowDownwardTwoToneIcon className="arrow" fontSize="medium" />
      <iframe
        title="song player"
        className="player"
        src={`https://open.spotify.com/embed/track/${track}`}
        frameBorder="0"
        width="80"
        height="80"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Player;
