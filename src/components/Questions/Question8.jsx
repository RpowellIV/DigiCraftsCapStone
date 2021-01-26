import React, {useState, useEffect}  from 'react';
import { useDataLayerValue } from '../../DataLayer'
import SongRow2 from '../SongRow2'
import Player from '../Player'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let rightAnswer = getRandomInt(1,4);

function Question8() {

    const[{ question8, score }, dispatch] = useDataLayerValue();
    const [isClicked , setIsClicked]= useState(false);
    const [isRightOrWrong , setIsRightOrWrong]= useState(null);
    const [isSongs, setSongs] = useState([])
    const [isAnswered, setAnswered] =useState('PICK A SONG 8')
    const [popPlayer,setPopPlayer]=useState(null);
    const [isPlayerReady, setPlayerReady] = useState(false);

    const handleIsClicked = (answer) => {
        let newScore = score;
        setIsClicked(true);
        setIsRightOrWrong(answer);
        // console.log('HANDLE HAS BEEN CLICKED!')
        console.log('Right or Wrong', answer)
        if (!answer) {
            newScore = newScore
            setAnswered('WRONG CHOICE')
            dispatch({
                type: 'SET_SCORE',
                score: newScore,
              });
        } else if (answer) {
            setAnswered('CORRECT!!!')
            newScore = newScore+100
            dispatch({
                type: 'SET_SCORE',
                score: newScore,
              });
            }
            // console.log("SCORE>>>",score)
        }
    
    useEffect(() => {
        populateSongChoice();
        if(isPlayerReady === true) {
            getPopPlayer();
        }
    }, []);

    const getPopPlayer=(choice)=>{
        setPopPlayer(choice)
    }
    const populateSongChoice = () => {
        var songChoice = question8.items.splice(0, 4);
        // console.log("TEST1>>>",songChoice)
        setSongs(songChoice);
        setPlayerReady(true);
        };

    return (
        <div className="song__box">
            {isClicked
              ? null:
            <Player track= {popPlayer}/>
            }
            <h1 className="song__player">{isAnswered}</h1>
            <div className="song__list">
            {isSongs.map((item, index) => (<SongRow2 key ={index} getPopPlayer={getPopPlayer} isClicked={isClicked} isRightOrWrong={isRightOrWrong} handleIsClicked={handleIsClicked} tracks={item} song={index} answer={rightAnswer}/>))}
            </div>
        </div>
    );
}

export default Question8;