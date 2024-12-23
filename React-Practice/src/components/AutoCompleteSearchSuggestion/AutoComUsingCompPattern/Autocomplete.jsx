import React, { createContext, useContext, useState, useRef, useEffect } from 'react'

const AutocompleteContext = createContext("");

const Autocomplete = ({ data, children }) => {
    const [query, setQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeIdx, setActiveIdx] = useState(null);

    const itemRef = useRef([]);

    useEffect(() => {
        itemRef.current[activeIdx]?.scrollIntoView({ behavior: 'smooth' });
    }, [activeIdx])

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            let suggestions = data.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
            setFilteredSuggestions(suggestions);
        } else {
            setFilteredSuggestions([]);
        }
    }

    const handleClick = (val) => {
        setQuery(val);
    }

    const handleKeyPress = (e) => {
        if (e.key == "Enter") {
            if (activeIdx == null) return;
            setQuery(filteredSuggestions[activeIdx]);
            setActiveIdx(null);
            setFilteredSuggestions([]);
        }

        if (e.key == "ArrowDown") {
            if (activeIdx == null || activeIdx == filteredSuggestions?.length - 1) {
                setActiveIdx(0)
            } else {
                setActiveIdx((prevIdx) => prevIdx + 1);
            }
        } else if (e.key == "ArrowUp") {
            if (activeIdx.length == null || activeIdx == 0) {
                setActiveIdx(filteredSuggestions?.length - 1);
            } else {
                setActiveIdx((prevIdx) => prevIdx - 1);
            }
        }
    }

    return (
        <AutocompleteContext.Provider value={{ query, handleChange, filteredSuggestions, handleClick, handleKeyPress, activeIdx, itemRef }}>
            <div className='w-[300px] my-4 mx-auto'>{children}</div>
        </AutocompleteContext.Provider>
    )
}

Autocomplete.Input = () => {
    const { query, handleChange, handleKeyPress } = useContext(AutocompleteContext);

    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            placeholder="search items here..."
            className="w-full py-2 px-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    )
};

Autocomplete.Suggestions = () => {
    const { filteredSuggestions, handleClick, activeIdx, itemRef } = useContext(AutocompleteContext);

    if (filteredSuggestions?.length === 0) {
        return <p className='text-center'>No suggestions</p>
    }

    return (
        <ul className='w-full max-h-40 border-2 border-white rounded-lg mt-1 overflow-y-scroll'>
            {
                filteredSuggestions?.map((val, index) => <li key={index} onClick={() => handleClick(val)} ref={(elm) => itemRef.current[index] = elm} className={`p-2 border-b-2 border-white cursor-pointer hover:bg-green-400 ${index === activeIdx ? 'bg-green-400 scroll' : ''}`}>{val}</li>)
            }
        </ul>
    )
}

export default Autocomplete
