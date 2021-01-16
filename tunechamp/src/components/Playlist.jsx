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

console.log('random>>>',{random})

    return (
        <div>
            <p> TEST</p>
            <button>ONE</button>
            <button>TWO</button>
            <button>THREE</button>
            <button>FOUR</button>
        <div>
            {/* {random.tracks.items.map((item) => (<SongRow track={item.items} />))} */}
            {random && random.tracks ? random.tracks.items.map((item, index) => <SongRow key={`${item}-${index}`} track={item.items} />) : '' }
        </div>

        </div>
    );

}

export default Playlist
