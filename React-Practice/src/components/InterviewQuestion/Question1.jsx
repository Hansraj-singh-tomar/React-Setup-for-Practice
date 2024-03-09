import React, { useEffect, useState } from 'react'

const Question1 = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [cache, setCache] = useState({});

    async function fetchData(query) {
        let res = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=${query}`);
        res = await res.json();
        console.log(res.data);
        setData(res.data)
        setCache({ ...cache, [query]: res?.data })
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            if (cache[query]) {
                setData(cache[query])
            } else {
                fetchData(query);
            }
        }, 1000)

        return () => clearTimeout(timer)
    }, [query])

    function handleInput(e) {
        setQuery(e.target.value)
    }

    function handleReset() {
        setQuery("");
        setData(cache[query])
    }

    function handleDelete(id) {
        setData(data.filter((item) => item["ID Year"] !== id))
    }

    return (
        <div className='m-4'>
            <div>
                <input value={query} onChange={handleInput} type="text" className='px-2 py-1 border-2 border-black' placeholder='Search Population by year' />
                <button onClick={handleReset} className='border-2 border-black px-3 py-1 ml-3 hover:bg-slate-400 cursor-pointer'>Reset</button>
            </div>
            <div className='mt-3'>
                <table className="border-collapse border-2 border-slate-500 w-96 text-center">
                    <thead>
                        <tr>
                            <th className='border-2 border-slate-600 '>Year</th>
                            <th className='border-2 border-slate-600 '>Population</th>
                            <th className='border-2 border-slate-600 '>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                return (
                                    <tr key={item.Population}>
                                        <td className='border-2 border-slate-700'>{item["ID Year"]}</td>
                                        <td className='border-2 border-slate-700'>{item.Population}</td>
                                        <td onClick={() => handleDelete(item["ID Year"])} className='border-2 border-slate-700 hover:bg-slate-400 cursor-pointer'>🚮</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Question1