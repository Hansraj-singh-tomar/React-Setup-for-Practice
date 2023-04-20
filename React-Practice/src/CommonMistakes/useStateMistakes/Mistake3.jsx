import React, {useState} from 'react'

const Mistake3 = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });

    
    function handleChange(e){
        e.preventDefault();
        setUser((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    } 

    console.log(user);
  return (
    <div>
        <form>
            <input onChange={handleChange} type="text" name="name" placeholder='Enter Your Name'/> <br /> <br />
            <input onChange={handleChange} type="email" name="email" placeholder='Enter Your Email'/> <br /> <br />
            <input onChange={handleChange} type="number" name="phone" placeholder='Enter Your Phone'/> <br /> <br />
        </form>
    </div>
  )
}

export default Mistake3