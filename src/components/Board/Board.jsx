import React from 'react'
import Square from "../Square/Square"
import "./Board.css"


const Board = ({squares, onClick}) => {
  return (
    <div className="board">
       {squares.map((square, i) => 
            <Square key={i} value={square} onClick={()=> onClick(i)} />
        )}
    </div>
  )
}

export default Board