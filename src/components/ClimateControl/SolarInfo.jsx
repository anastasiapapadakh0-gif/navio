/* Επαναχρησιμοποιούμενο component.
   Προβάλλει την παραγωγή ηλιακής ενέργειας,
   την κατανάλωση και την κατάσταση της μπαταρίας
   με βάση τις τρέχουσες καιρικές συνθήκες.
*/

import "./SolarInfo.css";
import consumptionimg from "../../assets/images/weather/consumption.png";
import energystored from "../../assets/images/weather/energystored.png";
import solarpanel from "../../assets/images/weather/solarpanel.png";

function SolarInfo({ weather }) {

    // Υπολογισμός παραγωγής και κατανάλωσης με βάση τον καιρό
    let solarOutput;
    let consumption;
    let weatherArrow;
    let weatherArrowClass;

    if (weather.condition === "Sunny") {
        solarOutput = 4.6;
        consumption = 3.1;
        weatherArrow = "⬆";
        weatherArrowClass = "arrow-up";
    }
    else if (weather.condition === "Cloudy") {
        solarOutput = 2.5;
        consumption = 2.5;
    }
    else if (weather.condition === "Rain") {
        solarOutput = 1.2;
        consumption = 1.8;
    }
    else {
        solarOutput = 0.4;
        consumption = 2.2;
    }

    // Όλες οι υπόλοιπες καιρικές συνθήκες έχουν πτωτικό βέλος
    if (weather.condition !== "Sunny") {
        weatherArrow = "⬇";
        weatherArrowClass = "arrow-down";
    }

    // Υπολογισμός κατάστασης της μπαταρίας
    let batteryStatus;
    let batteryArrow;
    let batteryClass;

    if (solarOutput > consumption) {
        batteryStatus = "Charging";
        batteryArrow = "⬆";
        batteryClass = "arrow-up";
    }
    else if (solarOutput < consumption) {
        batteryStatus = "Discharging";
        batteryArrow = "⬇";
        batteryClass = "arrow-down";
    }
    else {
        batteryStatus = "Stable";
        batteryArrow = "-";
        batteryClass = "arrow-stable";
    }


    return (
        <div className="solar-information">

            <div className="solar-info-item">
                <img src={solarpanel} alt="Solar panel" />

                <div className="solar-info-text">
                    <h4>Solar Output</h4>

                    <h3>
                        {solarOutput} kW
                        <span
                            className={weatherArrowClass}>
                            {weatherArrow}
                        </span>
                    </h3>

                    <p>Generated now</p>
                </div>
            </div>


            <div className="solar-info-item">
                <img src={consumptionimg} alt="Energy consumption" />

                <div className="solar-info-text">
                    <h4>Energy Consumption</h4>

                    <h3>
                        {consumption} kW
                        <span
                            className={weatherArrowClass}>
                            {weatherArrow}
                        </span>
                    </h3>
                    <p>Current consumption</p>
                    
                </div>
            </div>


            <div className="solar-info-item">
                <img src={energystored} alt="Stored energy" />

                <div className="solar-info-text">
                    <h4>Stored Energy</h4>

                    <h3>
                        72%
                        <span className={batteryClass}>
                            {batteryArrow}
                        </span>
                    </h3>

                    <p>{batteryStatus}</p>
                </div>
            </div>

        </div>
    );
}

export default SolarInfo;