import React, { useEffect, useState } from 'react'

const ImageCarousel = () => {

    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    async function fetchImages() {
        const url = "https://www.reddit.com/r/aww/top/.json?t=all";
        const res = await fetch(url);
        const result = await res.json();
        const data = result.data.children;
        const list = data.filter((item) => item.data.url_overridden_by_dest.includes('.jpg'))
            .map((item) => item.data.url_overridden_by_dest);
        setImages(list);
    }

    useEffect(() => {
        fetchImages();
    }, [])

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex items-center'>
                <button className='absolute text-black border-2 border-black p-2 text-3xl font-bold'>
                    {"<"}
                </button>
                <img src={images[index]} alt="not-found" className='w-[500px] h-[500px]' />
                <button className=' border-2 border-black p-2 text-2xl font-bold'>
                    {">"}
                </button>
            </div>
        </div>
    )
}

export default ImageCarousel