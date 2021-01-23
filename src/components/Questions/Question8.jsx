import React, {useState}  from 'react';
import { useDataLayerValue } from '../../DataLayer'
import SongRow2 from '../SongRow2'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let rightAnswer = getRandomInt(1,4);

function Question8() {

    const[{ question8 }, dispatch] = useDataLayerValue();
    const [isClicked , setIsClicked]= useState(false);
    const [isRightOrWrong , setIsRightOrWrong]= useState(null);

    const handleIsClicked = () => {
        setIsClicked(true);
        setIsRightOrWrong(isRightOrWrong);
        console.log('HANDLE HAS BEEN CLICKED!')
    }

    var songChoice = question8.items.splice(0, 4);
    console.log(`TEST8>>>`,songChoice)
 

    return (
        <div className="song__box">
            <h1 className="song__player">PICK A SONG 8</h1>
            <div className="song__list">
            {songChoice.map((item, index) => (<SongRow2 isClicked={isClicked} isRightOrWrong={isRightOrWrong} handleIsClicked={handleIsClicked} tracks={item} song={index} answer={rightAnswer} />))}
            </div>
        </div>
    );
}

export default Question8;