import React from 'react'

const Button = ({ data, handleAddToast }) => {
    const { btnText, color } = data;
    return (
        <button onClick={() => handleAddToast(btnText, color)} className={`border-2 border-white p-2`}>{btnText}</button>
    )
}

export default Button