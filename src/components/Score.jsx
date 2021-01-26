import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import '../styles/Score.css';
import { loginUrl } from '../spotify';

function Score() {
  const [{ user, token, score }, dispatch] = useDataLayerValue();

  return (
    <div className="score">
      {token ? (
        <div className="score-post">
          <h1 className="you-score">
            <h1 className="you-score">{user.id},</h1> you scored {score} points!
          </h1>{' '}
          <br />
          <p>
            Go check the leaderboard to see how you favor against everyone else.
          </p>
        </div>
      ) : (
        <a href={loginUrl}>LOGIN WITH SPOTIFY TESTING</a>
      )}
    </div>
  );
}

export default Score;
