import React, { useState } from 'react'

let options = ["cri", "football", "Hockey"];
let days = ["weekday", "weekend"];

const RadioBtnGroup = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    function handleOptionSelect(e) {
        console.log(e.target.value);
        setSelectedOption(e.target.value);
    }

    function handleDaysSelect(e) {
        console.log(e.target.value);
        setSelectedDay(e.target.value);
    }

    return (
        <div>
            <h1>Choose Options: </h1>
            <div>
                {
                    options.map((option) => {
                        return (
                            <div key={option}>
                                <input name='option' value={option} checked={selectedOption === option} type="radio" id={option} onChange={handleOptionSelect} />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        )
                    })
                }
                <h2>you selected: {selectedOption}</h2>
            </div>

            <h1>Choose Days: </h1>
            <div>
                {
                    days.map((day) => {
                        return (
                            <div key={day}>
                                <input type="radio" value={day} name='day' onChange={handleDaysSelect} />
                                <label>{day}</label>
                            </div>
                        )
                    })
                }
                <h2>You selected: {selectedDay}</h2>
            </div>

        </div>
    )
}

export default RadioBtnGroup
