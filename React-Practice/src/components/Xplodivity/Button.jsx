import React from 'react'

const Button = ({ text, handleClick }) => {
    return (
        <button onClick={handleClick} className='border-2 border-white px-2 py-1 mr-2 rounded-lg'>{text}</button>
    )
}

export default Button