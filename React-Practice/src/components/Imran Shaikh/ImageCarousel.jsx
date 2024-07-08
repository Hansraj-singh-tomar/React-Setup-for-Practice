// implementation from the frontend aman

import React, { useEffect, useRef, useState } from 'react'

const ImageCarousel = () => {

    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    const ref = useRef(null);

    async function fetchImages() {
        const url = "https://www.reddit.com/r/aww/top/.json?t=all";
        const res = await fetch(url);
        const result = await res.json();
        const data = result.data.children;
        const list = data.filter((item) => item.data.url_overridden_by_dest.includes('.jpg'))
            .map((item) => item.data.url_overridden_by_dest);
        setImages(list);
    }

    function handleClick(dir) {
        const lastIdx = images.length - 1;
        if (dir === 'left') {
            if (index === 0) {
                setIndex(lastIdx)
            } else {
                setIndex((prev) => prev - 1)
            }
        } else if (dir === 'right') {
            if (index === lastIdx) {
                setIndex(0)
            } else {
                setIndex((prev) => prev + 1)
            }
        }
    }


    useEffect(() => {
        ref.current = setInterval(() => {
            handleClick("right")
        }, 1000)

        fetchImages();

        return () => clearInterval(ref.current);
    }, [])

    return (
        <div className='flex justify-center items-center h-screen'>
            <div
                onMouseEnter={() => clearInterval(ref.current)}
                onMouseLeave={() => {
                    ref.current = setInterval(() => {
                        handleClick("right")
                    }, 1000)
                }}
                className='relative flex items-center border-2 border-black p-2'
            >
                {/* <div className='relative flex items-center border-2 border-black p-2'> */}
                <button onClick={() => handleClick('left')} className='absolute left-0 text-white bg-black p-2 text-3xl rounded-sm font-bold cursor-pointer'>
                    {"<"}
                </button>
                <img src={images[index]} alt="not-found" className='w-[500px] h-[500px]' />
                <button onClick={() => handleClick('right')} className='absolute right-0 text-white bg-black rounded-sm p-2 text-3xl font-bold cursor-pointer'>
                    {">"}
                </button>
            </div>
        </div>
    )
}
export default ImageCarousel