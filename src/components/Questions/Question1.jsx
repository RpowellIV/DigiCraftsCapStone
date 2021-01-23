import React, {useState} from 'react';
import { useDataLayerValue } from "../../DataLayer"
import SongRow from '../SongRow'
import Player from '../Player'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let rightAnswer = getRandomInt(1,16)
console.log(rightAnswer) 

function Question1() {

    const[{ question1 }, dispatch] = useDataLayerValue();
    const [isClicked , setIsClicked]= useState(false);
    const [isRightOrWrong , setIsRightOrWrong]= useState(null);

    const handleIsClicked = () => {
        setIsClicked(true);
        setIsRightOrWrong(isRightOrWrong);
        console.log('HANDLE HAS BEEN CLICKED!')
    }

        var fourSongs = question1.tracks.items.splice(0, 16); 

    return (
        <div className="song__box">
            <h1 className="song__player">{!isRightOrWrong && isClicked ? ('WRONG GUESS!') : isRightOrWrong && isClicked ? ('CORRECT') : ('PICK A SONG 1') }</h1>
            <div className="song__list">
                {fourSongs.map((item, index) => (<SongRow isClicked={isClicked} isRightOrWrong={isRightOrWrong} handleIsClicked={handleIsClicked} track={item} song={index} answer={rightAnswer} />))}
            </div>
        </div>
    );

}

export default Question1
