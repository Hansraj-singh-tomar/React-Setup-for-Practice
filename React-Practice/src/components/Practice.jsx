import React, { useEffect, useRef } from 'react';

function Practice() {
    const inputRef = useRef(null);

    const handleInput = () => {
        let val = inputRef.current.value;
        console.log(val);
    }

    return (
        <div>
            {/* <input type="text" placeholder='Please enter something' ref={inputRef} onChange={handleInput} /> */}
            {/* <input type="text" placeholder='Please enter something' value={val} onChange={handleInput} /> */}
            {/* <button onClick={handleClick}>submit</button> */}
        </div>
    )
}

export default Practice;

