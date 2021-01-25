import React, {useState, useEffect}  from 'react';
import { useDataLayerValue } from '../../DataLayer'
import SongRow2 from '../SongRow2'
import Player from '../Player'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let rightAnswer = getRandomInt(1,4);

function Question9() {

    const[{ question9, score }, dispatch] = useDataLayerValue();
    const [isClicked , setIsClicked]= useState(false);
    const [isRightOrWrong , setIsRightOrWrong]= useState(null);
    const [isSongs, setSongs] = useState([])
    const [isAnswered, setAnswered] =useState('PICK A SONG 9')
    const [popPlayer,setPopPlayer]=useState(null);

    const handleIsClicked = (answer) => {
        let newScore = score;
        setIsClicked(true);
        setIsRightOrWrong(answer);
        // console.log('HANDLE HAS BEEN CLICKED!')
        // console.log('Right or Wrong', answer)
        if (!answer) {
            newScore = newScore-100
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
    let loaded = false;
    
    useEffect(() => {
        populateSongChoice();
        loaded = true
        if(loaded) {
            getPopPlayer();
        }
    }, []);

    const getPopPlayer=(choice)=>{
        setPopPlayer(choice)
    }
    const populateSongChoice = () => {
        var songChoice = question9.items.splice(0, 4);
        console.log("TEST9>>>",songChoice)
        setSongs(songChoice);
        };

    return (
        <div className="song__box">
            <Player track= {popPlayer}/>
            <h1 className="song__player">{isAnswered}</h1>
            <div className="song__list">
            {isSongs.map((item, index) => (<SongRow2 key ={index} isClicked={isClicked} isRightOrWrong={isRightOrWrong} getPopPlayer={getPopPlayer} handleIsClicked={handleIsClicked} tracks={item} song={index} answer={rightAnswer}/>))}
            </div>
        </div>
    );
}

export default Question9;