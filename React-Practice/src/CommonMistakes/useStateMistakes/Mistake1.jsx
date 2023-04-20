import React, {useState} from 'react'

export default function CommonMistake() {
    const [number, setNumber] = useState(0);

    function increment(){
        setNumber(number + 1);
    }

    // in this we will see a error, belove function is solution of this error
    // setTimeout start hone ke pehle hamari jo value thi vhi se increase karenga
    // function incrementAsync(){
    //     setTimeout(() => {
    //         setNumber(number + 1);
    //     }, 2000);
    // }

    // solution of above error
    function incrementAsync(){
        setTimeout(() => {
            setNumber((preState) => preState + 1);
        }, 5000);
    }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAsync}>Increment Async</button>
    </div>
  )
}


// jam me incrementAsync button par click karne ke baad increment button par do se teen 
// bar click kar deta hu to mujhe updated value milna chahiye thi but 2sec complete hone ke baad mejhe vhi 
// value dekhne ko mili jo 2sec baad update hone vali thi 

// iss chij ka solution hai setNumber((preNUmber) => preNumber+1) karne par mujhe error dekhne ko nhi milegi
