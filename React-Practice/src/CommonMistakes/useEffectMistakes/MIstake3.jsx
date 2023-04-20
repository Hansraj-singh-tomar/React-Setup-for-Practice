// useEffect cleanup function explained
import React, {useState, useEffect} from 'react'

const MIstake3 = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log("effect runs!");

        // return a clean up function
        // firstly run this clean up function then console.log("effect runs!"); 
        // it's extremely useful. it prevents any memory leadking and maekd you application mush faster
        return () => {
            console.log("wait! before running the effect, I should clean here!");

            // clear something from the previous effects
            console.log("okay done! you can run");
        }
    }, [toggle])
  return (
    <div>
        <button onClick={() => setToggle(true)}>Toggle</button>
    </div>
  )
}

export default MIstake3