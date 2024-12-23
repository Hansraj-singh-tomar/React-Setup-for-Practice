import React, { useEffect, useState } from 'react'
import Progressbar from './Progressbar'

const ProgressbarCmp = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            })
        }, [50])

        return () => clearInterval(interval);
    }, [])

    console.log("let's she this component is being re-render or not ");

    return (
        <Progressbar value={value} max={100}>
            <Progressbar.Bar />
            <Progressbar.Label />
        </Progressbar>
    )
}

export default ProgressbarCmp