/* Επαναχρησιμοποιούμενο component.
Εμφανίζει τις τρέχουσες καιρικές συνθήκες με βάση τα δεδομένα που λαμβάνει μέσω props.*/

import "./CurrentWeather.css";

function CurrentWeather({ weather }) {
    return (
            <div
            className="current-weather"
            style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.43), rgba(255, 255, 255, 0.43)),
            url(${weather.image})`
            }}            >
            <h2>Current Weather </h2>

            <div className="weather-temp">
                <img src={weather.icon}/>
                <p>
                    {weather.temperature}°C
                </p>

            </div>

             <div className="weather-items">

                <div className="weather-item">
                    <p>Feels like</p>
                    <p>{weather.feelsLike}°C</p>

                </div>

            <div className="weather-item">
                    <p>Humidity</p>
                    <p>{weather.humidity}%</p>

                </div>

            <div className="weather-item">
                    <p>UV</p>
                    <p>{weather.uv}</p> 
                </div>

             </div>

        </div>
    );
}

export default CurrentWeather;