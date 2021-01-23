import React, {useState} from 'react';
import { useDataLayerValue } from '../../DataLayer'
import SongRow from '../SongRow'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let rightAnswer = getRandomInt(1,16)

function Question2() {

    const[{ question2 }, dispatch] = useDataLayerValue();
    const [isClicked , setIsClicked]= useState(false);
    const [isRightOrWrong , setIsRightOrWrong]= useState(null);

    const handleIsClicked = () => {
        setIsClicked(true);
        setIsRightOrWrong(isRightOrWrong);
        console.log('HANDLE HAS BEEN CLICKED!')
    }

    var songChoice = question2.tracks.items.splice(0, 16);  

    return (
        <div className="song__box">
            <h1 className="song__player">{!isRightOrWrong && isClicked ? ('WRONG GUESS!') : isRightOrWrong && isClicked ? ('CORRECT') : ('PICK A SONG 1') }</h1>
            <div className="song__list">
                {songChoice.map((item, index) => (<SongRow isClicked={isClicked} isRightOrWrong={isRightOrWrong} handleIsClicked={handleIsClicked} track={item} song={index} answer={rightAnswer} />))}
            </div>
        </div>
    )
}

export default Question2
