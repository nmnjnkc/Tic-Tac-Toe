import React from 'react'
import "./Player.css"

const Player = ({score, player, addClass}) => {
  return (
    <div className={`player ${addClass} `}>

        <p>{player}</p>
        <p> Score: {score}</p>

    </div>
  )
}

export default Player