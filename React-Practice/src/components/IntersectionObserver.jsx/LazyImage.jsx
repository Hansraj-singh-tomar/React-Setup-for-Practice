import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ id, url }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef();

    let callback = (entries) => {
        // console.log(entries);
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                setInView(true);
            }
        });
    };

    useEffect(() => {
        let observer = new window.IntersectionObserver(callback);
        // if (observer && ref.current) {
        //     observer.observe(ref.current);
        // }
        observer.observe(ref);

        return () => {
            // observer.unobserve(ref.current)
            // observer.disconnect();

            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return inView && (
        <div ref={ref} id={id} className='bg-red-400 p-4 my-4'>
            <img src={url} alt="img" />
        </div>
    )
};

export default LazyImage;