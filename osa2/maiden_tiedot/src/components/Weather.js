import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {

    const api_key = process.env.REACT_APP_API_KEY
    const [ temperature, setTemperature] = useState(0)
    const [ iconURL, setIconURL ] = useState('')
    const [ wind, setWind ] = useState(0)

    const toCelsius = ( k ) => (k - 273.15).toFixed(2)

    useEffect(() => {
        const [lat, lon] = country.capitalInfo.latlng

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&APPID=${api_key}`)
            .then(response => {
                const weather = response.data
                setTemperature(toCelsius(weather.main.temp))
                setWind(weather.wind.speed)
                const icon = weather.weather[0].icon
                setIconURL(`http://openweathermap.org/img/wn/${icon}.png`)
 
            })
    }, [])

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>temperature {temperature} Celsius</p>
            <img src={iconURL} />
            <p>wind {wind} m/s</p>
        </div>
    )
}

export default Weather