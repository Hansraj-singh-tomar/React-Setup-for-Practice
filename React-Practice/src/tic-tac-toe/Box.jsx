import React from 'react'

const Box = ({ handleBox, index, value }) => {
    return (
        <div onClick={() => handleBox(index)} className='flex justify-center items-center p-2 bg-slate-800 text-white text-2xl hover:bg-slate-500'>
            <p>{value}</p>
        </div>
    )
}

export default Box