import { useState, useEffect, useCallback } from "react";
const useFetch = (query, transformData, promise, debounceDelay) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    function debounce(fn, delay) {
        let timerId;
        return function (...args) {
            clearTimeout(timerId);
            timerId = setTimeout(() => fn(...args), delay);
        }
    }

    const fetchData = useCallback(async (query, transformData, signal) => {
        try {
            const response = await promise(query, signal);
            if (!response.ok) throw new Error(response.statusText);
            const data = await response.json();
            console.log(data);
            setData(transformData(data));
        } catch (error) {
            // setError(error);
            if (!signal.aborted) setError(e);
        }
    }, [promise, transformData]);

    const debouncedFetchData = useCallback(debounce(fetchData, debounceDelay), [debounceDelay, fetchData]);

    useEffect(() => {
        if (!query) {
            setData(null);
            setError(null);
            return;
        }
        const controller = new AbortController();
        const signal = controller.signal;

        debouncedFetchData(query, transformData, signal);

        return () => {
            controller.abort();
        };
    }, [query, transformData, debouncedFetchData]);

    return { data, setData, error };
}

export default useFetch;

