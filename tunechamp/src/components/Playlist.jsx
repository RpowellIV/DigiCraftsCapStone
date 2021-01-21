import React from 'react';
import { useDataLayerValue } from "../DataLayer"
import SongRow from './SongRow'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let rightAnswer = getRandomInt(1,4)
console.log(rightAnswer) 

function Playlist() {

    const[{ random }, dispatch] = useDataLayerValue();

        // console.log('random>>>',{random})

        var fourSongs = random.tracks.items.splice(0, 4); 
        // console.log("test>>>",fourSongs)

    return (
        <div className="song__box">
            <h1 className="song__player">TEST</h1>
            <div className="song__list">
                    {fourSongs.map((item, index) => (<SongRow track={item} song={index} answer={rightAnswer} />))}

            </div>
        </div>
    );

}

export default Playlist
