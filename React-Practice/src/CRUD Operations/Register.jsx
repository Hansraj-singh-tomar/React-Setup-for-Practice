import React, { useEffect, useState } from 'react'

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    async function handleSubmit(){
        // console.log(user);
        let result = await fetch("http://localhost:3002/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        });
        result = await result.json();
        console.log("result", result);
        localStorage.setItem("user-details", JSON.stringify(result))
    }

  return (
    <div style={{display: "flex", justifyContent: 'center', alignItems:"center", height: "100vh"}}>
        <div>
            <h1>User Sign Up</h1>
            <input type="text" value={user.name} placeholder='Enter Your Name' onChange={(e) => setUser({...user, name: e.target.value})}/> <br/><br/>
            <input type="email" value={user.email} placeholder='Enter Your Email' onChange={(e) => setUser({...user, email: e.target.value})}/> <br/><br/>
            <input type="password" value={user.password} placeholder='Enter Your Password' onChange={(e) => setUser({...user, password: e.target.value})}/> <br/><br/>
            <div style={{display:"flex", justifyContent: "center"}}>
                <button onClick={() => handleSubmit()}>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Register