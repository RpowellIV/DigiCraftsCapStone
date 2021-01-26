import React from 'react';
import { Link } from 'react-router-dom';
import { loginUrl } from '../spotify';
import { useDataLayerValue } from '../DataLayer';
import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
} from './index';
import '../styles/GameBoard.css';

function GameBoard({ spotify }) {
  
  const [{ token }, dispatch] = useDataLayerValue();

  return (
    <div className="gameBoard">
      {token ? (
        <div>
          <div>
            <Question1 key="1" />
            <Question2 key="2" />
            <Question3 key="3" />
            <Question4 key="4" />
            <Question5 key="5" />
            <Question6 key="6" />
            <Question7 key="7" />
            <Question8 key="8" />
            <Question9 key="9" />
            <Question10 key="10" />
          </div>

          <div className="gameBoard__button">
            <Link to="/score">
              <button className="gameBoard__buttonText">
                Click to see your score!
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <a href={loginUrl}>LOGIN WITH SPOTIFY TESTING</a>
      )}
    </div>
  );
}

export default GameBoard;
