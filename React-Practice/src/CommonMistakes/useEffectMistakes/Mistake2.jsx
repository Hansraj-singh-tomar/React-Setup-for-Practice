// useEffect updating state correctly 

import React, { useEffect, useState } from 'react'
const Mistake2 = () => {
    const [number, setNumber] = useState(0);

    // problem 
    // useEffect(() => {
    //     console.log("effect"); // every second number is changing 
    // since the number is our dependency it runs this function
    //     setInterval(() => {
    //         setNumber(number + 1);
    //     }, 1000)
    // }, [number])

    // solution 
    useEffect(() => {
        console.log("effect");
        const interval = setInterval(() => {
            setNumber((preVal) => preVal + 1);
        }, 1000)
        
        return () => {
          clearInterval(interval);     
        }
    }, [])

  return (
    <div style={{textAlign: "center"}}>
        {/* {number} */}
        {number}agfgdr 
    </div> // {number}afgdfg  adding text it again creating same problem for that we have to use clean up function to clear the interval
  )
}

export default Mistake2