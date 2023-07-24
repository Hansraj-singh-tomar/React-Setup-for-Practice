import React, { useState } from 'react'
import '../Components/folder.css'

const Folder = ({dir}) => {

    const [show, setShow] = useState(); 

    if(dir.type === 'folder'){
        return (
            <div 
                style={{padding: 5, marginLeft: 10}} 
                onClick={(e) => {setShow(!show); e.stopPropagation();}}
            >
                <span className='folder'>📂{dir.name}</span>
                <div style={{ display: `${show ? "block" : "none"}` }}>
                    {
                        Array.isArray(dir.items) && 
                        dir.items.length && 
                        dir.items.map((el, inx) => <Folder key={inx} dir={el} />)
                    }
                </div>
            </div>
        )
    } else {
        return <span className='file'>💾{dir.name}</span>
    }
}

export default Folder