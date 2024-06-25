import React from 'react'

const Modal = ({ handleClick }) => {
    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm scroll'>
            <div className='border-2 border-white w-80 h-40 flex flex-col items-center justify-center'>
                <h1 className='font-bold text-xl'>Modal</h1>
                <div>
                    <button onClick={handleClick} className='bg-red-400 p-2 px-4 rounded-lg mt-4'>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal