import React, { useState } from 'react'
import Box from './Box'
import './todo.css'

const Todo = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [currTurn, setCurrentTurn] = useState("X")

    const checkWinner = (copyState) => {
        const win = [
            [0,4,8],
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
        ]

        for(let i = 0; i < win.length; i++){
            const [a,b,c] = win[i];
            if(copyState[a] !== null && copyState[a] === copyState[b] && copyState[a] === copyState[c]) {
                return true;
            }
        }
        return false;
    }

    function handleBoxClick(i){
        let copyState = Array.from(state);

        if(copyState[i] !== null) return;
        
        copyState[i] = currTurn;
        setState(copyState);
        
        const win = checkWinner(copyState);
        if(win){
            alert(`${currTurn} won the game`)
        }
        
        setCurrentTurn(currTurn === "X" ? "O" : "X");
    }

  return (
    <div className='board'> 
        <div className='row'>
            <Box value={state[0]} onclick={() => handleBoxClick(0)}/>
            <Box value={state[1]} onclick={() => handleBoxClick(1)}/>
            <Box value={state[2]} onclick={() => handleBoxClick(2)}/>
        </div>
        <div className='row'>
            <Box value={state[3]} onclick={() => handleBoxClick(3)}/>
            <Box value={state[4]} onclick={() => handleBoxClick(4)}/>
            <Box value={state[5]} onclick={() => handleBoxClick(5)}/>
        </div>
        <div className='row'>
            <Box value={state[6]} onclick={() => handleBoxClick(6)}/>
            <Box value={state[7]} onclick={() => handleBoxClick(7)}/>
            <Box value={state[8]} onclick={() => handleBoxClick(8)}/>
        </div>
        
    </div>
  )
}

export default Todo