import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ index, Question, Answer, selected, handleToogle }) => {

    return (
        <div className='mb-2'>
            <div onClick={() => handleToogle(index)} className='bg-slate-500 p-2 text-white flex items-center justify-between rounded-lg cursor-pointer'>
                <h1>{Question}</h1>
                {selected === index ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            <div>
                {
                    selected === index && <p className='pl-4 text-indigo-950'>{Answer}</p>
                }
            </div>
        </div>
    )
}

export default Accordion


