import React, { useEffect, useState } from 'react'

const Mistake4 = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let isCancelled = false;
        fetch("https://jsonplaceholder.typicode.com/post")
        .then((res) => res.json())
        .then((data) => {
            if(!isCancelled) {
                alert("posts are ready, updating state")
                setPosts(data);
                console.log(data);
            }
        });

        return () => {
            isCancelled = true
        }
    }, [])
  return (
    <div>

    </div>
  )
}

export default Mistake4


// we can use javascript AbortController. it allows us to intercept an 
// api request so we can cancel it
// const controller = new AbortController()
// const signal = controller.signal;
// fetch("https://jsonplaceholder.typicode.com/post", {signal})
// return () => {
//     console.log("cancelled");
//     controller.abort();
// };