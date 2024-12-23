import SearchBox from './SearchBox'
import ListBox from './ListBox'

const AutoCompleteSearchSuggestion = () => {
    const transformData = (data) => data.results;

    const apiPromise = async (query, signal) => await fetch(`https://swapi.dev/api/people/?search=${query}`, { signal });

    return (
        <div>
            <SearchBox
                id="search"
                name="search"
                placeholder="Search..."
                label="Enter Person Name"
                listBox={(items, activeIdx) => <ListBox items={items} activeIdx={activeIdx} />}
                noItemMessage={() => <div>No item found</div>}
                errorMessage={(error) => <div>Something went wrong - {error}</div>}
                transformData={transformData}
                autoComplete
                promise={apiPromise}
                debounceDelay={1000}
            />
        </div>
    );
}

export default AutoCompleteSearchSuggestion

