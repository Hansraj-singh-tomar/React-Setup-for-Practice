import React, { useState } from 'react'
import Accordion from './Accordion';
import AccordionPatternSec from './AccordionPatternSec';

const Data = [
    { Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs." },
    { Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs." },
    { Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs." },
    { Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs." },
    { Question: "This is first Question", Answer: "You can generate more text using various online generators or even use extensions or plugins available for code editors like Visual Studio Code. Simply search for to find a tool that suits your needs." },
]


const AccordionCmp = () => {
    const [selected, setSelected] = useState(null);

    const handleToggle = (index) => {
        if (selected === index) {
            setSelected(null)
        } else {
            setSelected(index)
        }
    }

    return (
        <>

            <div>

                <h1 className='text-4xl font-bold text-center'>First Pattern</h1>
                {
                    Data.map(({ Question, Answer }, idx) => {
                        return (
                            <>
                                <Accordion key={idx} index={idx} Question={Question} Answer={Answer} selected={selected} handleToogle={handleToggle} />
                            </>
                        )
                    })
                }
            </div>
            <div>
                <h1 className='text-4xl font-bold text-center'>Second Pattern</h1>
                {
                    Data.map(({ Question, Answer }, idx) => {
                        return (
                            <>
                                <AccordionPatternSec index={idx} Question={Question} Answer={Answer} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AccordionCmp