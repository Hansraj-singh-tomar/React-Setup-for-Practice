import React, { useEffect, useState } from 'react'
import { act } from 'react';

const LIGHTS = {
    green: 'green',
    yellow: 'yellow',
    red: 'red'
}

const TrafficLight = () => {
    const [active, setActive] = useState(LIGHTS.green);

    useEffect(() => {
        // if (active == LIGHTS.green) {
        //     setTimeout(() => {
        //         setActive(LIGHTS.yellow)
        //     }, 3000)
        // } else if (active == LIGHTS.yellow) {
        //     setTimeout(() => {
        //         setActive(LIGHTS.red)
        //     }, 500)
        // } else if (active === LIGHTS.red) {
        //     setTimeout(() => {
        //         setActive(LIGHTS.green);
        //     }, 4000)
        // }

        switch (active) {
            case LIGHTS.green:
                setTimeout(() => {
                    setActive(LIGHTS.yellow)
                }, 3000)
                break;
            case LIGHTS.yellow:
                setTimeout(() => {
                    setActive(LIGHTS.red)
                }, 500)
                break;
            case LIGHTS.red:
                setTimeout(() => {
                    setActive(LIGHTS.green)
                }, 4000)
                break;

            default:
                break;
        }
    }, [active]);

    return (
        <div className='flex justify-center mt-[10%]'>
            <div className='w-fit border-2 border-white p-2 space-y-3'>
                <p className={`w-8 h-8 rounded-full bg-green-600 ${active !== 'green' && 'opacity-20'} flex justify-center items-center`}>A</p>
                <p className={`w-8 h-8 rounded-full bg-yellow-300 ${active !== 'yellow' && 'opacity-20'} flex justify-center items-center`}>B</p>
                <p className={`w-8 h-8 rounded-full bg-red-600 ${active !== 'red' && 'opacity-20'} flex justify-center items-center`}>C</p>
            </div>
        </div>
    )
}

export default TrafficLight