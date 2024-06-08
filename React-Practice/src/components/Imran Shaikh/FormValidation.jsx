import React, { useState } from 'react'

const defaultValues = {
    firstName: {
        id: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'First Name',
        value: '',
        isError: false,
        errorMsg: "First Name can't be empty"
    },
    lastName: {
        id: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last Name',
        value: '',
        isError: false,
        errorMsg: "Last Name can't be empty"
    },
    email: {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Email',
        value: '',
        isError: false,
        errorMsg: "Email can't be empty"
    },
    password: {
        id: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Password...',
        value: '',
        isError: false,
        errorMsg: "Password can't be empty"
    },
    confirmPassword: {
        id: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        placeholder: 'Confirm password ...',
        value: '',
        isError: false,
        errorMsg: "Confirm password can't be empty"
    },
}

const FormValidation = () => {

    const [formData, setFormData] = useState(defaultValues);
    const [isPassMatch, setIsPassMatch] = useState(true);
    const [lengthCheckValid, setLengthCheckValid] = useState(false);

    function handleInput(e) {
        const key = e.target.id;
        const value = e.target.value;

        const copyFormData = { ...formData };

        copyFormData[key].value = value;
        setFormData(copyFormData);
        isValidForm();
    }

    function handleSubmit(e) {
        e.preventDefault();
        isValidForm();
        checkPassLength();
        console.log(formData);
    }

    function isValidForm() {
        const copyFormData = { ...formData };

        Object.keys(copyFormData).forEach((key) => {
            const obj = copyFormData[key];
            obj.isError = obj.value ? false : true
            passwordMatch();
        })

        setFormData(copyFormData);
    }

    const checkPassLength = () => {
        const copyData = { ...formData };
        const password = copyData['password'].value;
        console.log(password.length);
        if (password.length < 8) {
            setLengthCheckValid(true);
        } else {
            setLengthCheckValid(false);
        }
    }

    const passwordMatch = () => {
        const copyFormData = { ...formData };
        const pass = copyFormData['password'].value;
        const cPass = copyFormData['confirmPassword'].value;

        if (pass === cPass) {
            setIsPassMatch(true);
        } else {
            setIsPassMatch(false);
        }
    }

    return (
        <div className='w-full h-screen flex justify-center mt-10'>
            <div>
                <h1 className='font-bold text-lg'>Form Validation</h1>
                <form onSubmit={handleSubmit}>
                    {
                        Object.keys(formData).map((key) => {
                            const { id, label, type, placeholder, value, isError, errorMsg } = formData[key];

                            return (
                                <div key={id} className='my-4'>
                                    <label className='font-bold'>{label}</label> <br />
                                    <input
                                        id={id}
                                        type={type}
                                        value={value}
                                        onChange={handleInput}
                                        placeholder={placeholder}
                                        className='border-2 border-black px-2'
                                    />

                                    {isError && <span className='block text-red-500'>{errorMsg}</span>}

                                    {key === 'confirmPassword' && !isPassMatch && <span className='block text-red-500'>Password does not match</span>}

                                    {
                                        key === 'password' && lengthCheckValid && <span className='block text-red-500'>password must have atleast 8 characters</span>
                                    }
                                </div>
                            )
                        })
                    }

                    <div>
                        <button className='border-2 border-black px-2 mt-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormValidation
