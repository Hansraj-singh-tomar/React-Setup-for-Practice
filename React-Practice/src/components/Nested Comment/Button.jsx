import React from 'react'

const Button = ({ type, action }) => {
    return (
        <button onClick={action} className='px-4 ml-2 py-1 border-2 border-black hover:text-black hover:border-white'>{type}</button>
    )
}

export default Button