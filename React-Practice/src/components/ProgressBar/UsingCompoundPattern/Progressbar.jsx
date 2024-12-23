import React, { createContext, useContext } from 'react'

const ProgressBarContext = createContext({ value: 50, max: 100 });

const Progressbar = ({ value, max, children }) => {
    return (
        <ProgressBarContext.Provider value={{ value, max }}>
            <div className='w-[300px] my-8 mx-auto text-center'>
                {children}
            </div>
        </ProgressBarContext.Provider>
    )
}

Progressbar.Bar = () => {
    const { value, max } = useContext(ProgressBarContext);
    let progress = Math.min(max, Math.abs(value));

    return (
        <div className='w-full h-5 border-2 border-white rounded-lg bg-[#e0e0e0] overflow-hidden mb-3'>
            {/* <div className={`h-full bg-[#76c7c0] transition-all ease-linear duration-300`} style={{ width: `${progress}%` }}></div> */}
            <div
                className={`h-full bg-teal-400 transform origin-left transition-transform ease-linear duration-300`}
                style={{ transform: `scaleX(${progress / 100})` }}
            >
            </div>
        </div>
    )
}

Progressbar.Label = () => {
    const { value, max } = useContext(ProgressBarContext);

    return (
        <div>
            {Math.min(max, Math.abs(value))}% Complete
        </div>
    )
}

export default Progressbar