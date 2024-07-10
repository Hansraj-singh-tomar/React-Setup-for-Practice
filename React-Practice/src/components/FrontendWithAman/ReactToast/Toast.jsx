import React from 'react'

const Toast = ({ toast }) => {
    const { id, msg, color } = toast;
    return (
        <div className={`my-3 w-52 p-2 rounded-md bg-cyan-400 ${color}`}>{msg} <span onClick={() => handleClose(id)} className='float-right cursor-pointer'>X</span></div>
    )
}

export default Toast