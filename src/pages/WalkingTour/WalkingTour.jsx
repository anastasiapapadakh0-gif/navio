/* Σελίδα τουριστικής πλοήγησης.
   Βοηθά τον επιβάτη να βρει κοντινά σημεία
   αφού έχει κατέβει από το λεωφορείο. */

import { useState } from "react";
import "./WalkingTour.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import walkingTourData from "../../data/guideTourData";

function WalkingTour() {

    const [currentStop, setCurrentStop] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");

    // Προσομοιώνει την ενεργοποίηση GPS
    const activateGPS = () => {
        const randomStop = walkingTourData[Math.floor(Math.random() * walkingTourData.length)];
        setCurrentStop(randomStop);
        setSelectedOption("");
    };

    const suggestion = currentStop && selectedOption
        ? currentStop[selectedOption]
        : null;

    const mapUrl = suggestion
        ? `https://www.openstreetmap.org/export/embed.html?bbox=${suggestion.lon - 0.004}%2C${suggestion.lat - 0.0025}%2C${suggestion.lon + 0.004}%2C${suggestion.lat + 0.0025}&layer=mapnik&marker=${suggestion.lat}%2C${suggestion.lon}`
        : "";

    return (
        <div className="page walking-tour-page">
            <Header
                title="Walking Tour GPS"
                description="Let NAVIO help you find nearby places around your current stop."
                backTo="/passenger"
            />

            <div className="guide-card">

                <div className="guide-intro">
                    <h2>Find what is around you</h2>
                </div>

                <div className="guide-steps">

                    <div className={currentStop ? "guide-step completed-step" : "guide-step"}>
                        <div className="guide-step-top">
                            <span className="step-number">1</span>
                            <h4>Activate GPS</h4>
                        </div>
                        <button
                            className="button-orange"
                            onClick={activateGPS}
                        >
                            {currentStop ? "Refresh GPS Location" : "Activate GPS Location"}
                        </button>
                    </div>

                    <div className={currentStop ? "guide-step completed-step" : "guide-step locked-step"}>
                        <div className="guide-step-top">
                            <span className="step-number">2</span>
                            <h4>Your Current Area</h4>
                        </div>

                        <p>
                            {currentStop ? currentStop.stop : "GPS location is not activated yet."}
                        </p>
                    </div>

                    <div className={selectedOption ? "guide-step completed-step" : currentStop ? "guide-step" : "guide-step locked-step"}>
                        <div className="guide-step-top">
                            <span className="step-number">3</span>
                            <h4>Choose Destination</h4>
                        </div>
                        <select
                            value={selectedOption}
                            onChange={(event) => setSelectedOption(event.target.value)}
                            disabled={!currentStop}
                        >
                            <option value="">Select an option</option>
                            <option value="attraction">Attraction</option>
                            <option value="cafe">Cafe / Restaurant</option>
                            <option value="busStop">Bus Stop</option>
                        </select>
                    </div>

                </div>

                <div className="map">
                    {!suggestion && (
                        <p>
                            Complete the steps above to see your suggested place here.
                        </p>
                    )}
                    {suggestion && (
                        <>
                            <h2>{suggestion.title}</h2>
                            <iframe
                                title="Walking Tour Map"
                                src={mapUrl}
                                className="walking-map"
                            />
                        </>
                    )}
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default WalkingTour;