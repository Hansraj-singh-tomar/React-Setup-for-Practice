import React, { useEffect, useState } from 'react'
import Box from './Box'

const Mainfile = () => {

    const [isXTurn, setIsXTurn] = useState(true);
    const [state, setState] = useState(Array(9).fill(null));


    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;

            if (state[a] !== null && state[a] == state[b] && state[b] == state[c]) {
                return state[a];
            }

        }

        return false;
    }

    const isWinner = checkWinner();

    const handleBox = (i) => {
        if (state[i] !== null) {
            return;
        }
        let copyState = [...state];
        copyState[i] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    function handleReset() {
        setState(Array(9).fill(null));
    };

    return (

        <div>

            {
                isWinner ?
                    <div className='text-center font-bold mt-4'>
                        <p>{isWinner} won the game</p>
                        <button onClick={handleReset} className='bg-green-400 text-white p-1 mt-2 rounded-lg'>Play Again</button>
                    </div>
                    :
                    <>
                        <h4 className='text-center font-bold text-3xl'>Player {isXTurn ? "X" : "O"} please move</h4>
                        <div className='w-3/12 h-64 mx-auto my-6 grid grid-cols-3 grid-rows-3 gap-1 cursor-pointer'>
                            {
                                [...Array(9)].map((val, i) => {
                                    return <Box key={i} handleBox={handleBox} index={i} value={state[i]} />
                                })
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default Mainfile


