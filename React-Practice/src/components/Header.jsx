import React from 'react'

const Header = ({ onLangChange, text, onKeypress, timer, enableType }) => {
    console.log(enableType);

    return (
        <>
            <div className='mt-2'>
                <h1 className='font-bold text-2xl'>Autocomplete Input Suggestion</h1>
                <label htmlFor="" className='text-2xl font-semibold'>Search: </label>
                <input disabled={enableType} type="text" value={text} onChange={onLangChange} onKeyUp={onKeypress} placeholder='Search/Add Your Language' className='rounded-lg w-1/2 px-2 ml-2' />
                <span className='text-white bg-black ml-4 rounded-full px-3 py-2'>{timer}</span>
            </div>
        </>
    )
}

export default Header