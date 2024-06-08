import React, { useState } from 'react'

const TimerWithStopStartPause = () => {

    const [count, setCount] = useState(0)
    const [intervalId, setIntervalId] = useState(null);
    // const intervalRef = useRef();

    function handleStartTimer() {
        // intervalRef.current = setInterval(() => {
        //     setCount(count => count + 1);
        // }, 1000)

        setIntervalId(setInterval(() => {
            setCount(count => count + 1);
        }, 1000))
    }

    function handlePauseTimer() {
        clearInterval(intervalId);
    }

    function handleStopTimer() {
        handlePauseTimer();
        setCount(0);
    }

    return (
        <div className='mt-4'>
            <h1>Count - {count}</h1>

            <div className='space-x-2 mt-4'>
                <button onClick={handleStartTimer} className='border-2 border-white px-2'>Start</button>
                <button onClick={handleStopTimer} className='border-2 border-white px-2'>Stop</button>
                <button onClick={handlePauseTimer} className='border-2 border-white px-2'>Pause</button>
            </div>
        </div>
    )
}

export default TimerWithStopStartPause