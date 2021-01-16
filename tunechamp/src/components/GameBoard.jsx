import React from 'react'
import { loginUrl } from '../spotify'
import { useDataLayerValue } from "../DataLayer"
import Playlist from './Playlist'

function GameBoard({ spotify }) {
    const[{ user, token }, dispatch] = useDataLayerValue();
    console.log('GAMEBOARD>>>>', token)
    return (
        <div>
            {token ? ( <Playlist spotify={spotify}/>) : (<a href={loginUrl}>LOGIN WITH SPOTIFY TEST</a>)}
            
        </div>
    )
}

export default GameBoard
