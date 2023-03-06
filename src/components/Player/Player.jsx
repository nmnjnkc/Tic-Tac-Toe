import React from 'react'
import "./Player.css"

const Player = ({score, player}) => {
  return (
    <div className='player'>

        <p>{player}</p>
        <p> Score: {score}</p>

    </div>
  )
}

export default Player