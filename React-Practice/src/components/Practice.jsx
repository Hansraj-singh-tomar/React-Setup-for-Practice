import React from 'react';

const MyForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();

        console.log("form data", formData);

        // Display form data in console
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // // Example: Send formData to server using fetch
        // fetch('/submit-url', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    };

    return (
        <form className='' onSubmit={handleSubmit} id="myForm">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" className='text-black' />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className='text-black' />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" className='text-black'></textarea>

            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
