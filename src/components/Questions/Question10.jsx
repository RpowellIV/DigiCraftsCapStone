import React, {useState, useEffect}  from 'react';
import { useDataLayerValue } from '../../DataLayer'
import SongRow2 from '../SongRow2'
import Player from '../Player'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let rightAnswer = getRandomInt(1,4);

function Question10() {

    const[{ question10 }, dispatch] = useDataLayerValue();
    const [isClicked , setIsClicked]= useState(false);
    const [isRightOrWrong , setIsRightOrWrong]= useState(null);
    const [isSongs, setSongs] = useState([])
    const [isAnswered, setAnswered] =useState('PICK A SONG 10')
    const [popPlayer,setPopPlayer]=useState(null);

    const handleIsClicked = (answer) => {
        setIsClicked(true);
        setIsRightOrWrong(answer);
        console.log('HANDLE HAS BEEN CLICKED!')
        console.log('Right or Wrong', answer)
        if (!answer) {
            setAnswered('WRONG CHOICE')
        } else if (answer) {
            setAnswered('CORRECT!!!')
            }
        }

    useEffect(() => {
        populateSongChoice();
        getPopPlayer();
    }, []);
    const getPopPlayer=(choice)=>{
        setPopPlayer(choice)
    }
    const populateSongChoice = () => {
        var songChoice = question10.items.splice(0, 4);
        console.log("TEST10>>>",songChoice)
        setSongs(songChoice);
        };

    return (
        <div className="song__box">
            <Player track= {popPlayer}/>
            <h1 className="song__player">{isAnswered}</h1>
            <div className="song__list">
            {isSongs.map((item, index) => (<SongRow2 key ={index} isClicked={isClicked} getPopPlayer={getPopPlayer} isRightOrWrong={isRightOrWrong} handleIsClicked={handleIsClicked} tracks={item} song={index} answer={rightAnswer}/>))}
            </div>
        </div>
    );
}

export default Question10;