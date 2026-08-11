/* Σελίδα διαχείρισης της έξυπνης οροφής.
   Εμφανίζει τις τρέχουσες καιρικές συνθήκες,
   προτείνει άνοιγμα ή κλείσιμο της οροφής,
   επιτρέπει στον χρήστη να την ελέγξει
   και προβάλλει την τρέχουσα κατάστασή της.
*/

import "./RoofControl.css";

import Header from "../../components/Header/Header"; 
import Footer from "../../components/Footer/Footer";
import CurrentWeather from "../../components/ClimateControl/CurrentWeather";
import RoofRecommendation from "./RoofRecommendation";
import OnOffButton from "./OnOffButton";
import LiveRoofView from "./LiveRoofView";

import { generateWeather } from "../../data/weatherGenerator";
import { useState, useEffect } from "react";

function RoofControl() {

    const [currentWeather, setCurrentWeather] = useState(generateWeather());
    const [activeButton, setActiveButton] = useState(false);
    // Προσομοίωση αλλαγής των καιρικών συνθηκών κάθε 10 δευτερόλεπτα
    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentWeather(generateWeather());
        }, 10000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="page roof-control">
            <Header
                title="Roof Control!"
                description="Adjust temperature settings based on current conditions.">
            </Header>

            <div className="climate-blocks">

                {/* Αριστερή στήλη - Τρέχων καιρός */}
                <div className="left-column">
                    <CurrentWeather weather={currentWeather} />
                </div>

                {/* Δεξιά στήλη - Πρόταση και έλεγχος οροφής */}
                <div className="right-column">
                    <RoofRecommendation weather={currentWeather} />
                    <OnOffButton
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}/>
                </div>

            </div>

            {/* Ζωντανή απεικόνιση της κατάστασης της οροφής */}
            <LiveRoofView
                activeButton={activeButton}/>
            <Footer />
        </div>
    );
        
}
export default RoofControl;