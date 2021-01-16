import React, { useEffect, useState } from "react";
import "../styles/Player.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { useDataLayerValue } from "./DataLayer"

function Player({ spotify }) {

    const [{ token, item, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState()
            .then((r) => {
            console.log(r);
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
      }, [spotify]);
    
      const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };

    return (
        <div className="footer">

            <div className="footer__left">
                <img 
                  src={item?.album.images[0].url} 
                  alt={item?.name} 
                  className="footer__albumLogo"
                />
                {item ? (
                <div className="footer__songInfo">
                    <h4>{item.name}</h4>
                    <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                </div>
                ) : (
                  <div className="footer__songInfo">
                    <h4>No song is playing</h4>
                    <p>...</p>
                  </div>
                )}
            </div>

            <div className="footer__center">
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                    ) : (
                    <PlayCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                    )}
            </div>
        
        </div>
    )
}

export default Player;
