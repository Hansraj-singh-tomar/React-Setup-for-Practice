import React, { useEffect, useState } from 'react';

const useCurrency = (currency) => {
    const [data, setData] = useState();

    async function fetchCurrencyData(currency) {
        try {
            let res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            res = await res.json();
            setData(res[currency]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCurrencyData(currency);
    }, [currency])

    return data;
}

export default useCurrency;