import React, { useState, useRef, useEffect } from 'react'

const ReactOTP = ({ length = 6 }) => {
    const [otpField, setOtpField] = useState(new Array(length).fill(""));

    const ref = useRef([]);


    function handleChange(e, index) {
        const value = e.target.value;

        if (isNaN(value)) return;

        // while using onKeyDown event we don't need to check this 
        if (/^\d$/.test(value)) { // Only single digit allowed
            let copyField = [...otpField];
            copyField[index] = value;
            setOtpField(copyField);
            if (index + 1 < otpField.length) {
                ref.current[index + 1].focus();
                return
            }
        }
    }

    function handleKeyDown(e, index) {
        let key = e.key;

        if (key == "ArrowRight") {
            if (index + 1 < otpField.length) {
                ref.current[index + 1].focus();
            }
            return;
        }

        if (key == "ArrowLeft") {
            if (index > 0) {
                ref.current[index - 1].focus();
            }
            return;
        }


        const copyField = [...otpField];

        if (key == 'Backspace') {
            // ref.current[index].value = '';
            copyField[index] = "";
            setOtpField(copyField);
            if (index > 0) {
                ref.current[index - 1].focus()
            }
            return;
        }

        // if (isNaN(key)) return;
        // copyField[index] = key;
        // setOtpField(copyField);
        // if (index + 1 < otpField.length) {
        //     ref.current[index + 1].focus();
        //     return
        // }

    }

    // console.log(otpField);
    // console.log(ref);

    useEffect(() => {
        ref.current[0].focus();
    }, [])

    return (
        <div>
            {
                otpField.map((val, idx) => {
                    return (
                        <input
                            key={idx}
                            ref={(currInput) => ref.current[idx] = currInput}
                            type="text" value={val}
                            onKeyDown={(e) => handleKeyDown(e, idx)}
                            onChange={(e) => handleChange(e, idx)}
                            className='m-2 p-2 w-12 h-12 text-black'
                        />
                    )
                })
            }
        </div>
    )
}

export default ReactOTP