import React, { useState,  useEffect } from 'react'
import {ticTacToeWin} from '../helper/helper'

export default function TicTacTow() {

  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [win , setWin] = useState(false)
  
  const play = (index) => {
    if (board[index] === null) {
      const newBoard = board.slice();
      newBoard[index] = turn ? 'X' : 'O';
      setBoard(newBoard);
      setTurn(!turn);
    }
  };

  const reset = () => {
    setBoard(Array(9).fill(null))
    setWin(false)
  }
  
useEffect(() => {
  const winStatus = ticTacToeWin(board)
  if(winStatus)
  {
    setWin()
  }
  noResult()
}, [turn , board])

const noResult = () => {
  if((!board.includes(null) && !win) )
  {
    document.getElementById('result').innerHTML = "No one wins"
    setBoard(Array(9).fill(null))
  }
}

useEffect(() => {
  reset()
}, [win])


  return (
    <>
    <div className='flex justify-center text-center my-3'>
    <div className='flex flex-wrap box-border h-30 w-28 border-2 justify-end border-white'>
      {board.map((value, index) => (
        <div
          key={index}
          className="box-border h-8 w-8 border-2 border-gray-800"
          onClick={() => play(index)}
        >
          {value}
        </div>
      ))}
    </div>
    </div>
    <div className='text-3xl flex justify-center'>{turn ? "Player 1 turns" : "Player 2 turns"}</div>
    <div id ="result" className='text-3xl flex justify-center'>{win ? (turn ? "Player 1 Won" : "Player 2 Won") : "No Result Yet"}</div>
    </>
  )
}
