import React, { useEffect, useState } from 'react'

const ProgressBar = ({ value }) => {
    const [percent, setPersent] = useState(value);
    useEffect(() => {
        setPersent(Math.min(100, Math.abs(value)));
    }, [value])
    return (
        <div className='relative h-10 w-80 mt-2 border-2 border-white rounded-full overflow-hidden'>
            <span className={`absolute z-10 flex justify-center items-center w-full h-full text-${percent > 49 ? "black" : "white"}`}>{percent.toFixed()}%</span>
            <div
                className={`bg-green-600 h-full`}
                // style={{ width: `${percent}%` }}
                style={{ transform: `scaleX(${percent / 100})`, transformOrigin: "left" }}
            />
        </div>
    )
}

export default ProgressBar

// style={{ transform: 'translateX(calc(20 % - 100%))' }}