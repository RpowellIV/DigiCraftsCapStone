import axios from 'axios'
import { loginUrl } from '../spotify'
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../DataLayer"
import SongRow from './SongRow'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let rightAnswer = getRandomInt(1,4)
console.log(rightAnswer) 

function Playlist({ spotify }) {

    const[{ random }, dispatch] = useDataLayerValue();

let songPick = (track) => {
    let trackList =  Object.entries(track);
    console.log('songPick>>>',trackList.items)
    console.log('object>>>',trackList.items)
    console.log('limit>>>',trackList.limit)
}

console.log('random>>>',{random})
console.log('randomArray>>>',songPick({random}))
// let randomPick = songPick(random)

    return (
        <div>
            <p> TEST</p>
            <button>ONE</button>
            <button>TWO</button>
            <button>THREE</button>
            <button>FOUR</button>
        <div>
            {random.tracks.items.map((item) => (<SongRow track={item.items} />))}
        </div>

        </div>
    );

}

export default Playlist
