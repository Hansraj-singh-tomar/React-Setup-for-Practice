import React from 'react'
import Autocomplete from './Autocomplete'

const AutoCompleteCmp = () => {

    console.log("is component is being re-render");

    return (
        <Autocomplete data={['apple', 'banana', 'cherry', 'date', 'elderberry', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple']}>
            <Autocomplete.Input />
            <Autocomplete.Suggestions />
        </Autocomplete>
    )
}

export default AutoCompleteCmp