import React, { useEffect, useRef, useState } from 'react'
import Box from './Box'
// import { useRef } from 'react'

const BoxContainer = () => {
    const [grid, setGrid] = useState(Array.from({ length: 3 }, () => new Array(3).fill(false)))


    const queueRef = useRef([]);
    const timerRef = useRef([]);

    function handleClick(rowIdx, collIdx, flag) {

        if (timerRef.current.length > 0 && flag) {
            return
        }

        // if box is alreay clicked
        if (grid[rowIdx][collIdx] && flag) {
            return;
        }

        setGrid((prevGrid) => {
            let copyGrid = prevGrid.map((row) => [...row])
            copyGrid[rowIdx][collIdx] = flag;
            return copyGrid
        })
        if (flag) queueRef.current.push([rowIdx, collIdx])
    }

    useEffect(() => {
        if (queueRef.current.length === 9) {
            queueRef.current.forEach(([rowIdx, collIdx], idx) => {
                timerRef.current[idx] = setTimeout(() => {
                    handleClick(rowIdx, collIdx, false)
                    if (idx === timerRef.current.length - 1) timerRef.current = [];
                }, 1000 * (idx + 1))
            })
            queueRef.current = [];
        }
    }, [grid])

    useEffect(() => {
        return () => {
            timerRef.current.forEach((id) => clearTimeout(id));
        }
    }, []);


    return (
        <div className='w-[30%] grid grid-cols-3 gap-8'>
            {
                grid.map((row, rowIdx) => {
                    return row.map((col, collIdx) => {
                        return <Box
                            key={collIdx}
                            handleClick={(flag) => { handleClick(rowIdx, collIdx, flag) }}
                            flag2={col}
                        />
                    })
                })
            }
        </div>
    )
}

export default BoxContainer