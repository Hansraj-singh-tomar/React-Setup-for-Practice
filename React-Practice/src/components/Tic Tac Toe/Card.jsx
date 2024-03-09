import React from 'react'

const Card = ({ index }) => {
    return (
        <div className='min-w-72 m-4 h-72 bg-black text-white rounded-lg flex justify-center items-center text-2xl font-bold'>
            <h1>Card - {index}</h1>
        </div>
    )
}

export default Card