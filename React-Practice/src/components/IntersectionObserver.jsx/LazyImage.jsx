// import React, { useEffect, useRef, useState } from 'react';

// const LazyImage = ({ id, url }) => {
//     const [inView, setInView] = useState(false);
//     const ref = useRef();

//     let callback = (entries) => {
//         // console.log(entries);
//         entries.forEach((entry) => {
//             console.log(entry);
//             if (entry.isIntersecting) {
//                 setInView(true);
//             }
//         });
//     };

//     useEffect(() => {
//         console.log("lazy image is being render or not");
//         let observer = new window.IntersectionObserver(callback);
//         if (observer && ref.current) {
//             observer.observe(ref.current);
//         }
//         // observer.observe(ref);

//         return () => {
//             // observer.unobserve(ref.current)
//             // observer.disconnect();

//             if (observer) {
//                 observer.disconnect();
//             }
//         };
//     }, []);

//     return inView && (
//         <div ref={ref} id={id} className='bg-red-400 p-4 my-4'>
//             <img src={url} alt="img" />
//         </div>
//     )
// };

// export default LazyImage;

import React, { useEffect, useState } from "react";

const LazyImage = ({ id, url }) => {
    const [inView, setInView] = useState(false);
    const ref = React.useRef();

    let callback = (entries) => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                setInView(true)
            }
        });
    }

    useEffect(() => {
        let observer = new IntersectionObserver(callback)

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        }
    }, [])

    return inView ? <img src={url} alt="img" /> :
        <div ref={ref} id={id} className='bg-red-400 p-4 my-4 h-screen w-full' /> // their must be height and width of this div. 
}

export default LazyImage;
