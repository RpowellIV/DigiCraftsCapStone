import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import '../styles/Score.css';
import { loginUrl } from '../spotify';

function Score() {
  const [{ user, token, score }, dispatch] = useDataLayerValue();

  return (
    <div className="score">
      {token ? (
        <>
          <h1>{user.id}, you scored 100 points!</h1> <br />
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
