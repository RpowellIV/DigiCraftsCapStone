import React from 'react';
import '../styles/Leaderboard.css';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import { useDataLayerValue } from '../DataLayer';
import { loginUrl } from '../spotify';

function LeaderBoard() {
  const [{ leaderboard, token }, dispatch] = useDataLayerValue();

  return (
    <>
      {token ? (
        <div className='leaderboardPage'>
          <h3 className='leaderboardPage__title'>HIGH SCORES!</h3>
          <div className='leaderboardPage__columns'>
            <div className='leaderboardPage__rank'>
              <h5>RANK</h5>
              {console.log(leaderboard)}
              {leaderboard.map((user, idx) => (
                <p key={user.userId}>{idx + 1}</p>
              ))}
            </div>
            <div className='leaderboardPage__name'>
              <h5>NAME</h5>

              {leaderboard.map((user, idx) => (
                <p key={user.userId}>{user.userId}</p>
              ))}
            </div>
            <div className='leaderboardPage__score'>
              <h5>SCORE</h5>
              {leaderboard.map((user, idx) => (
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
      ) : (
        <a href={loginUrl}>LOGIN WITH SPOTIFY TEST</a>
      )}
    </>
  );
}
export default LeaderBoard;