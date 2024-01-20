import React from 'react'

const Suggestions = ({ filteredSuggestions, onSuggestionSelect }) => {
    return (

        <div className='w-7/12 bg-black rounded-lg p-2 ml-20 text-white'>
            {
                filteredSuggestions?.map((val) => {
                    return <button className='w-full text-left px-2' key={val.id} onClick={() => onSuggestionSelect(val)}>{val.value}</button>
                })
            }
        </div>

    )
}

export default Suggestions