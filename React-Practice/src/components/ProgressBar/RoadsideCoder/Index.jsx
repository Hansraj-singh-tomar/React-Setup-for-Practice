import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

const Index = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return prev
                }
                return prev + 1;
            })
        }, [100])

        return () => clearInterval(interval);
    }, [])

    console.log("index component is being re-render");

    return (
        <div className='w-7/12 mx-auto flex justify-center flex-col items-center py-4'>
            <span>Progress Bar</span>
            <ProgressBar value={value} />
        </div>
    )
}

export default Index