import React from 'react'

const Box = ({ handleClick, flag2 }) => {

    return (
        <div onClick={() => handleClick(true)} className={`w-24 h-24 border-2 border-white ${flag2 && 'bg-cyan-300'}`}></div>
    )
}

export default Box