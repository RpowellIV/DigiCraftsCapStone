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
    const [isSongs, setSongs] = useState([])
    const [isAnswered, setAnswered] =useState('PICK A SONG 8')

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
    }, []);

    const populateSongChoice = () => {
        var songChoice = question8.items.splice(0, 4);
        console.log("TEST8>>>",songChoice)
        setSongs(songChoice);
        };

    return (
        <div className="song__box">
            <h1 className="song__player">{isAnswered}</h1>
            <div className="song__list">
            {isSongs.map((item, index) => (<SongRow2 key ={index} isClicked={isClicked} isRightOrWrong={isRightOrWrong} handleIsClicked={handleIsClicked} tracks={item} song={index} answer={rightAnswer}/>))}
            </div>
        </div>
    );
}

export default Question8;