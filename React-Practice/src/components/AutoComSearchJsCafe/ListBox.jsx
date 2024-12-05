import React, { useRef, useEffect } from 'react'

const ListBox = ({ items, activeIdx }) => {
    const itemRefs = useRef([]);

    useEffect(() => {
        itemRefs.current[activeIdx]?.scrollIntoView({ behavior: 'smooth' });
    }, [activeIdx])

    return (
        <ul className='w-1/2 max-h-40 border-2 border-white rounded-lg mt-1 overflow-y-scroll'>
            {
                items.map((item, index) => <li key={index} ref={(elm) => itemRefs.current[index] = elm} className={`p-2 border-b-2 border-white ${index === activeIdx ? 'bg-green-400 scroll' : ''}`}>{item.name}</li>)
            }
        </ul>
    )
}

export default ListBox