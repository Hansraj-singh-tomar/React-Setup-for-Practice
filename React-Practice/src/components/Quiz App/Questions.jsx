import React from 'react'

const Questions = ({ question, choices, handleAnswer, answer, score }) => {
    return (
        <div className='w-6/12 border-2 border-black p-6 text-center'>
            <h1 className='bg-gray-300 text-black p-2'>Q. {question}</h1>
            <div className='mt-4'>
                {
                    choices.map((option, i) => {
                        return <button onClick={() => handleAnswer(option)} key={option} className='mr-2 bg-gray-300 text-black p-2 px-4 hover:bg-green-400'>{i + 1}. {option}</button>
                    })
                }
            </div>
            <h1 className='mt-3'>Score: {score}</h1>
        </div>
    )
}

export default Questions