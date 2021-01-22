import React from 'react';
import { useDataLayerValue } from '../../DataLayer'
import SongRow from '../SongRow'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let rightAnswer = getRandomInt(1,4)

function Question2() {

    const[{ question2 }, dispatch] = useDataLayerValue();
    
    var songChoice = question2.tracks.items.splice(0, 16); 
    console.log("test>>>",songChoice)

    return (
        <div>
            <h1>PICK A SONG 2</h1>
            <div className="song__list">
                    {songChoice.map((item, index) => (<SongRow track={item} song={index} answer={rightAnswer} />))}
            </div>
        </div>
    );
}

export default Question2
