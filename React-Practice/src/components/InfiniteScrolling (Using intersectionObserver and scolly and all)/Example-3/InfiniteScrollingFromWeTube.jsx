import React from 'react'

const InfiniteScrollingFromWeTube = () => {
    const [nums, setNums] = useState(10);

    const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            setNums((prev) => prev + 10);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            {
                [...Array(nums)].map((num, idx) => {
                    return (
                        <h1 key={idx} className='py-32 text-center text-4xl font-bold text-black'>{idx + 1}</h1>
                    )
                })
            }
        </>
    )
}

export default InfiniteScrollingFromWeTube