import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionPatternSec = ({ index, Question, Answer }) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        if (index === 0) {
            setIsShow(true)
        }
    }, [])

    const handleClick = () => {
        setIsShow((isShow) => !isShow);
    }

    return (
        <div className='mb-2'>
            <div onClick={handleClick} className='bg-slate-500 p-2 text-white flex items-center justify-between rounded-lg cursor-pointer'>
                <h1>{Question}</h1>
                {isShow ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            <div>
                {
                    isShow && <p className='pl-4 text-indigo-950'>{Answer}</p>
                }
            </div>
        </div>
    )
}

export default AccordionPatternSec