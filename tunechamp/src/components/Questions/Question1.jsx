import React, {useState} from 'react';
import { useDataLayerValue } from "../../DataLayer"
import SongRow from '../SongRow'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let rightAnswer = getRandomInt(1,4)
console.log(rightAnswer) 

function Question1() {

    const[{ random }, dispatch] = useDataLayerValue();
    const [isClicked , setIsClicked]= useState(false);
    const [isRightOrWrong , setIsRightOrWrong]= useState(null);

    const handleIsClicked = () => {
        setIsClicked(true);
        setIsRightOrWrong(isRightOrWrong);
        console.log('HANDLE HAS BEEN CLICKED!')
    }

        var fourSongs = random.tracks.items.splice(0, 4); 
        // console.log("test>>>",fourSongs)

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
