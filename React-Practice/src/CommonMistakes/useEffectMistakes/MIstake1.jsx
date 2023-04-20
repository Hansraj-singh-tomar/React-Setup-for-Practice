// why we use useMemo() for memoize value 


import React, {useState, useEffect, useMemo} from 'react'

const MIstake1 = () => {
const [name, setName] = useState("")
const [state, setState] = useState({
    name: "",
    status: false
})

// it will render it twise
// useEffect(() => {
//     console.log("the state has change, useEffect runs");
// },[state]); // state change na hone ke baad bhi hamara useEffect run ho rha hai 
// because of primitive and non-primitive data type ki vajah se 
// here state is non-primitive data-type. that is why our useEffect is rendering everytime 

// first solution is 
// useEffect(() => {
//     console.log("The state has change, useEffect runs!");
// },[state.name, state.status]);

// second solution is - using useMemo hook
const user = useMemo(() => {
    return {
        name: state.name,
        status: state.status
    }
}, [state.status, state.name])

useEffect(() => {
    console.log("the state has change, useEffect runs");
},[user]);

function handleName(){
    setState((prev) =>{
        return {
            ...prev,
            name: name
        }
    })
}

function handleStatus(){
    setState((prev) =>{
        return {
            ...prev,
            status: true
        }
    })
}

  return (
    <div>
        <input style={{marginTop: "20px"}} type="text" placeholder='Enter Something Here...' onChange={(e) => setName(e.target.value)}/> <br /> <br />
        <button onClick={handleName}>Add Name</button>
        <button style={{margin: "10px"}} onClick={handleStatus}>Add Status</button> <br /><br />
        {`{name: ${state.name},status: ${state.status}}`}
    </div>
  )
}

export default MIstake1