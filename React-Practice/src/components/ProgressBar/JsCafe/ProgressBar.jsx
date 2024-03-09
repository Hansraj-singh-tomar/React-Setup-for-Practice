import React from 'react'

const ProgressBar = ({ progress = 0 }) => {
    return (
        <div className='w-80 h-6 border-2 border-white rounded-full overflow-hidden'>
            <div style={{ transform: `translateX(${progress - 100}%)` }} className='bg-green-500 h-full' />
        </div>
    )
}

export default ProgressBar