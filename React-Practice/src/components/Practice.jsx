import React, { useState } from 'react'

const Practice = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);

        let copy = { ...userData };
        setUserData({ ...copy, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userData);
    }

    return (
        <div>
            <h1>Form handling</h1>

            <form onClick={handleSubmit} className='space-y-2 space-x-2'><br />
                <label htmlFor='name'>Name: </label>
                <input onChange={handleInput} name='name' value={userData.name} id='name' type="text" placeholder='Enter your name' /><br />

                <label htmlFor='email'>Email: </label>
                <input onChange={handleInput} name='email' value={userData.email} id='email' type="email" placeholder='Enter your email' /><br />

                <label htmlFor='password'>Password: </label>
                <input onChange={handleInput} name='password' value={userData.password} id='password' type="password" placeholder='Enter your password' className='text-black' /><br />

                <button className='border-2 border-white px-2'>Submit</button>
            </form>


            <div className='border-2 border-white p-3 w-[40%] mt-10'>
                <h1>{userData.name}</h1>
                <h1>{userData.email}</h1>
                <h1>{userData.password}</h1>
            </div>
        </div>
    )
}

export default Practice