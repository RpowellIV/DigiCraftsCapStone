import React from 'react';
import { useDataLayerValue } from '../../DataLayer'
import SongRow2 from '../SongRow2'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let rightAnswer3 = getRandomInt(1,4)

function Question3() {

    const[{ question3 }, dispatch] = useDataLayerValue();
    // track.splice(0, 96);

    var songChoice = question3.items.splice(0, 4);
    console.log("TEST3>>>",songChoice)
 

    return (
        <div className="song__box">
            <h1 className="song__player">PICK A SONG 3</h1>
            <div className="song__list">
            {songChoice.map((item, index) => (<SongRow2 key={index} tracks={item} song={index} answer={rightAnswer3} />))}
            </div>
        </div>
    );
}

export default Question3