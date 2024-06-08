import React from 'react'

const UserForm = (props) => {
    const { formData, index, handleSubmit, handleInput, userDetail, handleBack } = props;
    return (
        <div className='border-2 border-white p-4'>
            <form onSubmit={handleSubmit} className='space-y-3'>

                {
                    index > 0 &&
                    <button className='block border-2 border-white px-2' onClick={handleBack}>Back</button>
                }

                <label>{formData[index].label} :</label>
                <input
                    required
                    onChange={handleInput}
                    name={formData[index].name}
                    value={userDetail[formData[index].name]}
                    type={formData[index].inputType}
                    placeholder={formData[index].placeholder}
                    className='block px-2 py-1 text-black outline-none rounded-lg'
                />
                <button className='block mt-4 border-2 border-white px-3'>{formData[index].buttonName}</button>
            </form>
        </div>
    )
}

export default UserForm