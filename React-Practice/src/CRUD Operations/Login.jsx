import React, {useState} from 'react'

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })
    function handleSubmit(){
        console.log("button clicked");
    }

  return (
    <div style={{display: "flex", justifyContent: 'center', alignItems:"center", height: "100vh"}}>
        <div>
            <h1>Login Page</h1> <br/>
            <input type="email" placeholder='Enter Your Email' value={login.email} onChange={(e) => setLogin({...Login, email: e.target.value})}/> <br/><br/>
            <input type="password" placeholder='Enter Your Password' value={login.password} onChange={(e) => setLogin({...Login, password: e.target.value})}/> <br/><br/>
            <div style={{display:"flex", justifyContent: "center"}}>
                <button onClick={() => handleSubmit()}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login