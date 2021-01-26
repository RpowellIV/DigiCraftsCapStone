import React, { useEffect } from 'react';
import axios from 'axios';
import { useDataLayerValue } from '../DataLayer';
import '../styles/Score.css';
import { loginUrl } from '../spotify';

function Score() {
  const [{ user, token, score }, dispatch] = useDataLayerValue();

  const sendScore = async () => {
    const res = await axios.put('http://localhost:3001/userScore', {
      user: user,
      totalScore: score,
    });
    console.log(res);
  };

  sendScore();

  return (
    <div className="score">
      {token ? (
        <>
          <h1>
            {user.id}, you scored {score} points!
          </h1>{' '}
          <br />
          <p>
            Go check the leaderboard to see how you favor against everyone else.
          </p>
        </>
      ) : (
        <a href={loginUrl}>LOGIN WITH SPOTIFY TESTING</a>
      )}
    </div>
  );
}

export default Score;
