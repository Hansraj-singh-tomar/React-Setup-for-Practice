import React from 'react'

const FormDetails = ({ userDetail }) => {
    const { name, email, dob } = userDetail;
    return (
        <div className='flex justify-center items-center h-screen m-auto text-white'>
            <div className='border-2 border-white p-4'>
                <h1 className='font-bold text-center my-2'>User Details</h1>
                <p>Name - {name}</p>
                <p>Email - {email}</p>
                <p>DOB - {dob}</p>
            </div>

        </div>
    )
}

export default FormDetails