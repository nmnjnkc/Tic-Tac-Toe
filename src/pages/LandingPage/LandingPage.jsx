import React, {useContext, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button/Button'
import GameContext from '../../GameContext';
import "./LandingPage.css"


const LandingPage = () => {

 const {playerName, setPlayerName} = useContext(GameContext)

    const navigate = useNavigate();

    const proceedToTheGame = () => {
        navigate("/game");
    };

    const handleKeyDown = event => {
      if (event.key === 'Enter') {
        navigate("/game");
        }
    };

    useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

  return (
  <div className='flex' >
    <div className="info">
        <label >Enter Player 1:</label>
        <input 
        type="text"
       
        placeholder="Player 1"
        value={playerName.player1}
        onChange={(event) =>
          setPlayerName({
            ...playerName,
            player1: event.target.value,
          })
        } />

        <label>Enter Player 2:</label>
        <input 
        type="text"
        
        placeholder="Player 2"
        value={playerName.player2}
        onChange={(event) => {
            setPlayerName({
              ...playerName,
                player2: event.target.value,
                
              })
        }} />

        <Button 
        name= "Play"
        method = {proceedToTheGame}
        btnClass = "btn"
         />
        
    </div>
    </div>
  )
}

export default LandingPage