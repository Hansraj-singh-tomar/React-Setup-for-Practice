import React, { useState } from 'react'
import { useRef } from 'react'

const MovingDiv = () => {

    const [moving, setMoving] = useState({
        x: 0,
        y: 0,
    })

    const blockRef = useRef();

    function moveBox(dir) {
        const updates = {
            up: moving.y > 0 && { y: moving.y - 30 },
            down: moving.y <= blockRef.current.offsetHeight - 104 && { y: moving.y + 30 },
            left: moving.x > 0 && { x: moving.x - 30 },
            right: moving.x <= blockRef.current.offsetWidth - 240 && { x: moving.x + 30 },
        }

        setMoving(prevState => ({ ...prevState, ...updates[dir] }));
    }

    return (
        <div className='h-screen'>
            <div onClick={() => moveBox('up')} className='w-full bg-slate-600 text-center h-16'>

            </div>
            <div ref={blockRef} className='flex justify-between h-[80%] bg-red-500'>
                <div onClick={() => moveBox('left')} className='h-full bg-slate-600 flex items-center justify-center w-20'>

                </div>
                <div className='relative w-full'>
                    <div
                        style={{ top: moving.y, left: moving.x }}
                        className='absolute w-20 h-20 bg-yellow-300'
                    ></div>
                </div>
                <div onClick={() => moveBox('right')} className='h-full bg-slate-600 flex items-center justify-center w-20'>

                </div>
            </div>
            <div onClick={() => moveBox('down')} className='w-full bg-slate-600 text-center h-16'>

            </div>
        </div>
    )
}

export default MovingDiv

