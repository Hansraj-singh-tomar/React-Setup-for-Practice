import React, {useState} from 'react'

// Problem = React useState white screen fixed
const Mistake2 = () => {
    const [user, setUser] = useState()
    
    // solution fourth - we have to just pass empty string or emprty object and empty array but in our case it will be empty object - with that we can't see white screen  
    // const [user, setUser] = useState("")
  return (
    <div>
        
        {/* In this case i was seeing white screen */}
        {/* <span>Username is : {user.name}</span> */}

        {/* First solution */}
        {/* <h2>User :</h2>
        {user && <span>Username is: {user.name}</span>} */}

        {/* Second Solution - using optional chaining */}
        {/* <span>Username is: {user?.name}</span>  */}

        {/* Third Solution - iss chij se overcome karne ke liye ham optional chaining ka use karte the */}
        {/* <span>Username is : {user && user.name}</span>  */}

        {/* In case of array - in this time w'll get the same error - isme bhi optional chaining ka use kar sakte hai */}
        {/* <span>Profile picture is: {user.image?.[1]}</span> */}
        <span>Profile picture is: {user.image[1]}</span>

        {/*  to perevent this  */}
        {/* const [user, setUser] = useState({
            username: "",
            email: "",
            images: [] // with this black array we won't able to see white screen
        }) */}
    </div>
  )
}

export default Mistake2 