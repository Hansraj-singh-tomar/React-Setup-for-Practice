import React, { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrency from './useCurrency';

const App = () => {
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");

    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);


    let currencyInfo = useCurrency(from);
    // console.log(currencyInfo);

    const options = currencyInfo && Object.keys(currencyInfo);
    // console.log(options);

    function convert() {
        setConvertedAmount(amount * currencyInfo[to]);
    }

    function swap() {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    function clear() {
        setFrom(from);
        setTo(to);
        setAmount(0);
        setConvertedAmount(0);
    }

    return (
        <div
            className='w-full h-screen bg-no-repeat bg-cover flex justify-center items-center flex-wrap'
            style={{ backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20220512/pngtree-growing-chart-against-the-background-of-the-usa-america-flag-candlestick-image_1298783.jpg)` }}
        >
            <div className='w-full max-w-md mx-auto border-2 border-white p-5'>
                <InputBox
                    text="From"
                    amount={amount}
                    setAmount={(amountt) => setAmount(amountt)}
                    currOptions={options}
                    selectedCurr={from}
                    setCurrChange={(currency) => setFrom(currency)}
                />
                <div className='text-center'>
                    <button onClick={swap} className='bg-blue-500 px-4 py-1 rounded-lg my-3'>Swap</button>
                </div>
                <InputBox
                    text="To"
                    amount={convertedAmount}
                    setAmount={(amount) => setAmount(amount)}
                    currOptions={options}
                    selectedCurr={to}
                    setCurrChange={(currency) => setTo(currency)}
                />
                <div className='text-center'>
                    <button onClick={convert} className='bg-blue-500 w-full px-4 py-1 rounded-lg mt-4'>{`Convert ${from}  to ${to}`}</button>
                </div>
                <div className='text-center'>
                    <button onClick={clear} className='bg-blue-500 w-full px-4 py-1 rounded-lg mt-4'>Clear</button>
                </div>
            </div>
        </div>
    )
}
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
export default App;