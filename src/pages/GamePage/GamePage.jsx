import React, {useState, useEffect, useContext} from "react";
import Board from "../../components/Board/Board";
import Player from "../../components/Player/Player";
import { calcWinner } from "../../components/GameLogic/GameLogic";
import GameContext from "../../GameContext";
import "./GamePage.css"

const GamePage = () => {
    const [board, setBoard] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [isNext, setIsNext] = useState(true);
    const [score, setScore] = useState({X: 0, O: 0});
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false);
    const {playerName} = useContext(GameContext)
    const xO = isNext ? "X" : "O";
  
  
    const handleClick = (i) => {
      const historyPoint = board.slice(0, stepNumber + 1);
      const current = historyPoint[stepNumber];
      const squares = [...current];
      // return if won or occupied
      if (winner || squares[i]) return;
      // select square
      squares[i] = xO;
      setBoard([...historyPoint, squares]);
      setStepNumber(historyPoint.length);
      setIsNext(!isNext);
  
      const newWinner = calcWinner(squares);
      if (newWinner) {
        setWinner(newWinner);
      } else if (historyPoint.length === 9) {
        setIsDraw(true);
      }
    };
  
  
   useEffect(() => {
      if (winner) {
        setScore(prevScore => {
          return {
            ...prevScore,
            [winner]: prevScore[winner] + 1
          };
        });
  
        setWinner(null);
        setBoard([Array(9).fill(null)]);
        setStepNumber(0);
      } else if (isDraw) {
        setWinner(null);
        setBoard([Array(9).fill(null)]);
        setStepNumber(0);
        setIsDraw(false);
      }
    }, [winner, isDraw]);
  
  
    return (
      <>
      <div className="info-wrapper">
        <h3>{`Next Player is ${xO}`} </h3>
      </div>
      <div className="board-wrapper">
        <Player score={score.X} player ={playerName.player1}/>
        <Board squares={board[stepNumber]} onClick={handleClick}/>
        <Player score={score.O} player ={playerName.player2}/>
      </div>
     
      </>
    );
  }

export default GamePage