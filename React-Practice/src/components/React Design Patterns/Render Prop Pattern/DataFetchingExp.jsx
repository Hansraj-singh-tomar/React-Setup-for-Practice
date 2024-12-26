import { useEffect, useState } from "react"

const FetchData = ({ url, render }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
    }, [url]);

    if (loading) return <h1>Loading...</h1>;

    return (<>
        {render({ data })}
    </>)
}


const Parent = () => {
    return (
        <FetchData
            url="https://jsonplaceholder.typicode.com/posts"
            render={({ data }) => {
                return (
                    <div>
                        <h1>Post Title: {data[0].title}</h1>
                        <p>Post Body: {data[0].body}</p>
                    </div>
                )
            }}
        />
    )
}

export default Parent;
