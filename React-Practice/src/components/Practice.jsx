import React, { useState } from 'react'

const Practice = () => {
    const [box, setBox] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    console.log(box);

    function isWinner() {
        const posibleWinner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8],
        ]

        for (let logic of posibleWinner) {
            const [a, b, c] = logic;

            if (box[a] !== null && box[a] == box[b] && box[b] == box[c]) {
                return box[a];
            }
        }
        return false;
    }

    const winner = isWinner();

    function handleClick(idx) {
        if (box[idx] !== null) return;

        let copyBox = [...box];
        copyBox[idx] = isXTurn ? "X" : "O"
        setIsXTurn(!isXTurn);
        setBox(copyBox);
    }

    function handleReset() {
        setBox(Array(9).fill(null));
    }

    return (

        <div className='flex justify-center flex-col items-center w-full h-screen'>
            <h1 className='my-4 font-bold'>Winner is = {winner}</h1>
            <div className='grid grid-cols-3 gap-2 border-2 border-black p-2'>
                {
                    box.map((item, idx) => {
                        return (
                            <p key={idx} onClick={() => handleClick(idx)} className='w-10 h-10 border-2 border-black flex justify-center items-center font-bold text-lg' >{item}</p>
                        )
                    })
                }
            </div>
            <button className='my-4 border-2 border-black px-2' onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Practice