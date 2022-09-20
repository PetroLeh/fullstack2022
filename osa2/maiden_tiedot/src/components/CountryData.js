import Weather from "./Weather"

const CountryBasics = ({ country }) =>
    <div>
        <h2>
            {country.name.common}
        </h2>
        capital {country.capital} <br />
        area {country.area}
    </div>

const Languages = ({ country }) => {
    const languages = Object.values(country.languages);
    return (
        <div>
            <h3>
                Languages
            </h3>
            <ul>
                {languages
                    .map(lang =>
                        <li key={lang}>
                            {lang}
                        </li>)}
            </ul>
        </div>
    )
}

const Flag = ({ country }) => <img src={country.flags.png} border='1'/>

const ShowButton = ({ country, setSearchText }) => 
    <button onClick={() => setSearchText(country.name.common)}>show</button>

const CountryData = ({ countries, setSearchText }) => {
    if (countries.length === 1) {
        const [country] = countries

        return (
            <div>
                <CountryBasics country={country} />
                <Languages country={country} />
                <Flag country={country} />
                <Weather country={country} />
            </div>
        )
    }

    if (countries.length > 10) {
        return (<p>
            Too many matches, specify another filter
        </p>)
    }


    return countries
        .map(country =>
            <p key={country.name.common}>
                {country.name.common} <ShowButton key={country.name.common} country={country} setSearchText={setSearchText}/>
            </p>
        )

}

export default CountryData