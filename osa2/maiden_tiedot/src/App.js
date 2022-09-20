import { useState, useEffect } from 'react'
import axios from 'axios'

import SearchField from './components/SearchField'
import CountryData from './components/CountryData'
import Weather from './components/Weather'

const App = () => {
    const [countries, setCountries] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleSearchChange = (event) => setSearchText(event.target.value)
 
    const filtteredCountries =
        countries
            .filter(country =>
                country.name.common.toLowerCase()
                    .includes(searchText.toLowerCase()))

    return (
        <div>
            <SearchField searchText={searchText} onChange={handleSearchChange} />
            <CountryData countries={filtteredCountries} setSearchText={setSearchText}/>
        </div>
    )
}

export default App;
