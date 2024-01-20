import React from 'react'

const InputBox = ({ text, amount, setAmount, currOptions, selectedCurr, setCurrChange }) => {
    return (
        <div className='flex border-2 border-white p-3'>
            <div className='w-1/2'>
                <p>{text}</p>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className='w-full outline-none bg-transparent py-1.5' />
            </div>
            <div className='w-1/2 flex justify-end text-right flex-wrap'>
                <p className='w-full'>Currency Type</p>
                <select value={selectedCurr} onChange={(e) => setCurrChange(e.target.value)} className='rounded-lg px-1 py-1 bg-gray-500 cursor-pointer outline-none'>
                    {
                        currOptions?.map((curr) => <option key={curr} value={curr}>{curr}</option>)
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox