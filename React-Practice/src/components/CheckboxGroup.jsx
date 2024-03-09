import React, { useState } from 'react'

let options = ["cri", "football", "Hockey"];
let days = ["weekday", "weekend"];
const CheckboxGroup = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);

    function handleOptions(e) {
        // console.log(e.target.value);
        // console.log(e.target.checked);
        let value = e.target.value;
        let isChecked = e.target.checked;
        if (isChecked) {
            setSelectedOptions([...selectedOptions, value])
        } else {
            setSelectedOptions(selectedOptions.filter((option) => option !== value));
        }
    }

    console.log(selectedOptions);

    return (
        <div>
            <h1>Select Options One or Multiple </h1>
            {
                options.map((option) => {
                    return (
                        <div key={option}>
                            <input type="checkbox" checked={selectedOptions.includes(option)} name="option" value={option} id={option} onChange={handleOptions} />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CheckboxGroup