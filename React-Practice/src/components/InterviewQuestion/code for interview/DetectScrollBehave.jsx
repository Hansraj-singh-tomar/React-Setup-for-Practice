import React, { useEffect, useState } from 'react'

const DetectScrollBehave = () => {
    // Detect scroll direction is up or down
    const [scrollDirection, setScrollDirection] = useState("");
    let scrollValRef = React.useRef();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    function handleScroll() {
        console.log("scroll behave is on");
        scrollValRef.current > window.scrollY ? setScrollDirection("up") : setScrollDirection("down")
        scrollValRef.current = window.scrollY;
    }

    return (
        <div>
            {
                [...Array(50).fill('')].map((_, i) => {
                    return (
                        <div key={i} className='my-3'>
                            <h3>Scroll Direction - {scrollDirection}</h3>
                            <h1>Detect Scroll Direction</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DetectScrollBehave