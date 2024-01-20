import React, { useEffect, useState } from "react";

const useFetch = () => {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        try {
            setLoading(true);
            let res = await fetch("https://api.npoint.io/d54ab19e49aeed9da808");
            res = await res.json();
            setData(res?.data);
            setLoading(false);
        } catch (error) {
            setError(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { error, loading, data }
}

export default useFetch;