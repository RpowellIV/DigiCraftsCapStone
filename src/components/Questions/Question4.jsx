import React from 'react';
import { useDataLayerValue } from '../../DataLayer'
import SongRow2 from '../SongRow2'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
let rightAnswer = getRandomInt(1,4)

function Question4() {

    const[{ question3 }, dispatch] = useDataLayerValue();
    
    var songChoice = question3.items.splice(0, 4);
    console.log(`TEST4>>>`,songChoice)
 

    return (
        <div className="song__box">
            <h1 className="song__player">PICK A SONG 4</h1>
            <div className="song__list">
            {songChoice.map((item, index) => (<SongRow2 key={index} tracks={item} song={index} answer={rightAnswer} />))}
            </div>
        </div>
    );
}

export default Question4