import React, { useState } from 'react'

const data = {
    cities: {
        "New York": {
            state: "New York",
            country: "United States",
        },
        "Los Angeles": {
            state: "California",
            country: "United States",
        },
        Chicago: {
            state: "Illinois",
            country: "United States",
        },
        Houston: {
            state: "Texas",
            country: "United States",
        },
        Phoenix: {
            state: "Arizona",
            country: "United States",
        },
    },
    states: {
        "New York": {
            country: "United States",
        },
        California: {
            country: "United States",
        },
        Illinois: {
            country: "United States",
        },
        Texas: {
            country: "United States",
        },
        Arizona: {
            country: "United States",
        },
    },
    countries: {
        "United States": {},
        Canada: {},
        "United Kingdom": {},
        Australia: {},
        Germany: {},
    },
}

const DynamicLocationSelector = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const countries = Object.keys(data.countries);

    const states = Object.keys(data.states).filter((state) => data.states[state].country === selectedCountry)
    console.log(states);

    const cities = Object.keys(data.cities).filter((city) => data.cities[city].country === selectedCountry && data.cities[city].state === selectedState);
    console.log(cities);

    function handleCountryChange(e) {
        setSelectedCountry(e.target.value);
    }
    function handleStateChange(e) {
        setSelectedState(e.target.value);
    }
    function handleCityChange(e) {
        setSelectedCity(e.target.value);
    }

    return (
        <div className='text-black'>
            {/* Country */}
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option>Select Country</option>
                {
                    countries.map((country) => {
                        return (
                            <option key={country} value={country}>{country}</option>
                        )
                    })
                }
            </select>

            {/* states */}
            <select
                value={selectedState}
                onChange={handleStateChange}
                disabled={!selectedCountry}
            >
                <option>Select State</option>
                {
                    states.map((state) => {
                        return (
                            <option key={state} value={state}>{state}</option>
                        )
                    })
                }
            </select>

            {/* city */}
            <select
                value={selectedCity}
                onChange={handleCityChange}
                disabled={!selectedState}
            >
                <option>Select City</option>
                {
                    cities.map((city) => {
                        return (
                            <option key={city} value={city}>{city}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default DynamicLocationSelector