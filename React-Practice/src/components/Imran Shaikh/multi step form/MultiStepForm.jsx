import React, { useState } from 'react'
import UserForm from './UserForm';
import FormDetails from './FormDetails';

const MultiStepForm = () => {

    const data = [
        {
            name: 'name',
            label: 'Name',
            inputType: "text",
            buttonName: "Next",
            placeholder: "Your Name..."
        },
        {
            name: 'email',
            label: 'Email',
            inputType: "email",
            buttonName: "Next",
            placeholder: "Email..."
        },
        {
            name: 'dob',
            label: 'DOB',
            inputType: "date",
            buttonName: "Next",
            placeholder: "Your DOB..."
        },
        {
            name: 'password',
            label: 'Password',
            inputType: "password",
            buttonName: "Submit",
            placeholder: "Password..."
        },
    ]

    const [formData, setFormData] = useState(data);
    const [index, setIndex] = useState(0);
    const [isFormSubmitted, setFormSubmitted] = useState(false)
    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
    })

    function handleSubmit(e) {
        e.preventDefault();
        if (index === formData.length - 1) {
            setFormSubmitted(true);
        } else {
            setIndex((prevIdx) => prevIdx + 1);
        }
    }

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        const copyUserDetail = { ...userDetail };
        copyUserDetail[name] = value;
        setUserDetail(copyUserDetail);
    }

    function handleBack(e) {
        e.preventDefault();
        setIndex((prev) => prev - 1);
    }

    // console.log("user details are here", userDetail);

    return (
        <div className='flex justify-center items-center h-screen'>
            {!isFormSubmitted ?
                <UserForm
                    index={index}
                    formData={formData}
                    handleSubmit={handleSubmit}
                    handleInput={handleInput}
                    userDetail={userDetail}
                    handleBack={handleBack}
                />
                :
                <FormDetails userDetail={userDetail} />
            }
        </div>
    )
}

export default MultiStepForm
