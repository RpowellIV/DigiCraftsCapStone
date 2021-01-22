import React, { useEffect, useState } from 'react';
import '../styles/Leaderboard.css';
import axios from 'axios';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';

function LeaderBoard() {
  // const [playerDataJSON, setPlayerDataJSON] = useState('');
  const [playerInfo, setPlayerInfo] = useState([]);

  const fetchPlayerData = () => {
    return axios
      .get('http://localhost:3001/leaderboard')
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPlayerData().then((playerData) => {
      // setPlayerDataJSON(JSON.stringify(playerData, null, 2));
      setPlayerInfo(playerData.allUsers);
    });
  }, []);

  return (
    <div className='leaderboardPage'>
      <h3 className='leaderboardPage__title'>HIGH SCORES!</h3>
      <div className='leaderboardPage__columns'>
        <div className='leaderboardPage__rank'>
          <h5>RANK</h5>
          {playerInfo.map((user, idx) => (
            <p key={user.userId}>{idx + 1}</p>
          ))}
        </div>
        <div className='leaderboardPage__name'>
          <h5>NAME</h5>

          {playerInfo.map((user, idx) => (
            <p key={user.userId}>{user.userId}</p>
          ))}
        </div>
        <div className='leaderboardPage__score'>
          <h5>SCORE</h5>
          {playerInfo.map((user, idx) => (
            <p key={user.userId}>{user.totalScore}</p>
          ))}
        </div>
      </div>
      <div className='leaderboardPage__footer'>
        <MusicNoteRoundedIcon
          className='leaderboardPage__Icon'
          fontSize={'inherit'}
        />

        <MusicNoteRoundedIcon
          className='leaderboardPage__Icon'
          fontSize={'inherit'}
        />
        <MusicNoteRoundedIcon
          className='leaderboardPage__Icon'
          fontSize={'inherit'}
        />
        <MusicNoteRoundedIcon
          className='leaderboardPage__Icon'
          fontSize={'inherit'}
        />
      </div>
    </div>
  );
}
export default LeaderBoard;
