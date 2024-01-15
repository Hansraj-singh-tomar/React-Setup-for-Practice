import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ val, showItem, toggleFun }) => {

    function handleToogle() {
        toggleFun();
    }

    return (
        <div className='mb-2'>
            <div onClick={handleToogle} className='bg-slate-500 p-2 text-white flex items-center justify-between rounded-lg cursor-pointer'>
                <h1>{val?.title}</h1>
                {showItem ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            <div>
                {
                    showItem && <p className='pl-4 text-indigo-950'>{val?.description}</p>
                }
            </div>
        </div>
    )
}

export default Accordion