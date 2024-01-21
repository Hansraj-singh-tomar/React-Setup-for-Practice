import React, { useEffect, useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
    const [data, setData] = useState();
    const [totalPage, setTotalPage] = useState();
    const [page, setPage] = useState(1);

    async function fetchData() {
        let res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
        res = await res.json();
        setData(res?.products);
        setTotalPage(res?.total / 10);
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <div className='w-11/12 mx-auto flex flex-wrap justify-evenly items-center '>
                {
                    data?.map((item) => {
                        return (
                            <div key={item.id} className='w-3/12 m-1 mb-2'>
                                <img className='w-full h-40' src={item.thumbnail} alt="img" />
                                <h1 className='text-center'>{item.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-7/12 mx-auto flex justify-center items-center m-2 border-2 border-black py-2 px-2'>
                {
                    page > 1 && <IoIosArrowBack onClick={() => setPage(page - 1)} className='text-3xl text-black cursor-pointer hover:bg-slate-200 rounded' />
                }
                {
                    [...Array(totalPage)].map((_, i) => {
                        return (
                            <div onClick={() => setPage(i + 1)} >
                                <button className={`bg-black text-white px-4 py-2 mx-1 hover:bg-neutral-800 ${page == i + 1 && 'active: bg-slate-400'}`}>{i + 1}</button>
                            </div>
                        )
                    })
                }
                {
                    page < 10 && <IoIosArrowForward onClick={() => setPage(page + 1)} className='text-3xl text-black cursor-pointer hover:bg-slate-200 rounded' />
                }
            </div>
        </>
    )
}

export default Pagination;

// https://dummyjson.com/products