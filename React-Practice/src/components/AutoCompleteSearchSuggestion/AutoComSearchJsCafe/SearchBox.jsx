import { useState } from "react";
import useFetch from "./useFetch";

const SearchBox = ({
    id,
    name,
    placeholder,
    label,
    listBox,
    noItemMessage,
    errorMessage,
    transformData,
    autoComplete,
    promise,
    debounceDelay
}) => {

    const [query, setQuery] = useState("");
    const [activeIdx, setActiveIdx] = useState(null);

    const { data, setData, error } = useFetch(query, transformData, promise, debounceDelay);

    function handleKeypress(e) {
        if (e.key === "Enter") {
            if (activeIdx == null) return;
            setQuery(data[activeIdx].name);
            setData(null);
            setActiveIdx(null);
            return;
        }

        if (e.key === "ArrowDown") {
            if (activeIdx == null || activeIdx == data.length - 1) {
                setActiveIdx(0);
            } else if (activeIdx < data.length - 1) {
                setActiveIdx((prevIdx) => prevIdx + 1);
            }
        } else if (e.key === "ArrowUp") {
            if (activeIdx == null || activeIdx == 0) {
                setActiveIdx(data.length - 1);
            } else if (activeIdx > 0) {
                setActiveIdx((prevIdx) => prevIdx - 1);
            }
        }
    };

    return (
        <div>
            <label className="text-2xl w-1/2 text-center" htmlFor={name}>{label}</label>
            <br />
            <input
                type="text"
                id={id}
                name={name}
                value={query}
                placeholder={placeholder}
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={handleKeypress}
                className="w-1/2 border-2 text-black border-red-400 rounded-lg p-2"
            />
            {error && errorMessage(error)}
            {data && listBox(data, activeIdx)}
            {data?.length === 0 && noItemMessage()}
        </div>
    )
}

export default SearchBox;