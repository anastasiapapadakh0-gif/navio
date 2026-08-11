/* Σελίδα διαχείρισης κλιματισμού.
Παρουσιάζει τις τρέχουσες καιρικές συνθήκες, προτείνει τον κατάλληλο τρόπο λειτουργίας
του κλιματισμού και εμφανίζει πληροφορίες για την παραγωγή ηλιακής ενέργειας.*/

import "./ClimateControl.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import CurrentWeather from "../../components/ClimateControl/CurrentWeather";
import Recommendation from "../../components/ClimateControl/Recommendation";
import ClimateMode from "../../components/ClimateControl/ClimateMode";
import SolarInfo from "../../components/ClimateControl/SolarInfo";

import { generateWeather } from "../../data/weatherGenerator";
import { useState, useEffect } from "react";

function ClimateControl() {

    const [currentWeather, setCurrentWeather] = useState(generateWeather());

    // Ενημέρωση των καιρικών συνθηκών κάθε 10 δευτερόλεπτα.
    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentWeather(generateWeather());
        }, 10000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="page climate-control">
            <Header
                title="Climate Control!"
                description="Adjust climate settings and monitor solar energy based on current weather conditions."
            ></Header>
            
            <div className="climate-blocks">

                <div className="left-column">
                    <CurrentWeather weather={currentWeather} />
                </div>

                <div className="right-column">
                    <Recommendation weather={currentWeather} />

                    <ClimateMode/>
                </div>

            </div>

            <SolarInfo
                weather={currentWeather}/>
            <Footer />

        </div>
    );
}

export default ClimateControl;