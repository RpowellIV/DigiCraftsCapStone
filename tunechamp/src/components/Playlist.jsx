import axios from 'axios'
import React from 'react';
import { useDataLayerValue } from "../DataLayer"
import SongRow from './SongRow'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let rightAnswer = getRandomInt(1,4)
console.log(rightAnswer) 

    // pick 4 random songs our of the 20
        // get random integer
        // check that it's not duplicate
        // add item to the array of 4 items
    // pick 1 song out of the 4 songs as the right answer 
    // save that song ID as the "right_answer"
    // render all 4 songs with buttons 
    // when user clicks the button that matches the "right_answer" --> register win

function Playlist() {

    const[{ random }, dispatch] = useDataLayerValue();

console.log('random>>>',{random})

var fourSongs = random.tracks.items.splice(0, 16); 
console.log("test>>>",fourSongs)

    return (

        <div className="song__list">
                {/* {random.tracks.items.map(item => <li>{item.name}</li>)} */}
                {fourSongs.map((item, index) => (<SongRow track={item} song={index} answer={rightAnswer} />))}
                {random.tracks.items.map((item, index) => (<SongRow track={item} song={index} answer={rightAnswer} />))}

        </div>
    );

}

export default Playlist
