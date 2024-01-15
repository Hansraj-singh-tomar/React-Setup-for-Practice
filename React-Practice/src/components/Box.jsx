import React from "react";

const Box = ({ state, handleClick, index }) => {
    return (

        <div onClick={() => handleClick(index)} className=" w-20 h-20 bg-black text-white flex justify-center items-center">
            <button className="text-2xl font-bold">{state}</button>
        </div>

    )
}

export default Box;