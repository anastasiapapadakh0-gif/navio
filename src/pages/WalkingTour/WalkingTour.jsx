import React, { useState } from "react";
import "./WalkingTour.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

// Βήματα περιήγησης
const tourSteps = [
    { text: "Head north on Dionysiou Areopagitou towards Parthenon (120m).", lat: 37.9698, lon: 23.7275 },
    { text: "Turn right onto Rovertou Galli St (80m).", lat: 37.9688, lon: 23.7262 },
    { text: "Continue straight along the pedestrian path (200m).", lat: 37.9705, lon: 23.7245 },
    { text: "You have arrived at the Monument Viewpoint!", lat: 37.9715, lon: 23.7235 }
];

// Βήματα επιστροφής στο λεωφορείο
const returnSteps = [
    { text: "Turn back south down the pedestrian path towards Rovertou Galli (150m).", lat: 37.9705, lon: 23.7245 },
    { text: "Walk past the olive grove heading directly to the main boulevard (90m).", lat: 37.9692, lon: 23.7268 },
    { text: "You have arrived safely back at the Navio Bus Stop!", lat: 37.9698, lon: 23.7285 }
];

function WalkingTour() {
    const [stepIndex, setStepIndex] = useState(0);
    const [isReturning, setIsReturning] = useState(false);
    const [returnIndex, setReturnIndex] = useState(0);

    // Διαχείριση βημάτων περιήγησης
    const handleNextTour = () => {
        if (stepIndex < tourSteps.length - 1) {
            setStepIndex(stepIndex + 1);
        }
    };

    // Διαχείριση βημάτων επιστροφής
    const handleStartReturn = () => {
        setIsReturning(true);
        setReturnIndex(0);
    };

    const handleNextReturn = () => {
        if (returnIndex < returnSteps.length - 1) {
            setReturnIndex(returnIndex + 1);
        }
    };

    const handleBackToTour = () => {
        setIsReturning(false);
    };

    const handleRestartAll = () => {
        setStepIndex(0);
        setReturnIndex(0);
        setIsReturning(false);
    };

    // Επιλογή τρέχοντος σημείου για τον χάρτη
    const currentCoords = isReturning ? returnSteps[returnIndex] : tourSteps[stepIndex];

    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${currentCoords.lon - 0.004}%2C${currentCoords.lat - 0.0025}%2C${currentCoords.lon + 0.004}%2C${currentCoords.lat + 0.0025}&layer=mapnik&marker=${currentCoords.lat}%2C${currentCoords.lon}`;

    return (
        <div className="page walking-tour-page">
            <Header
                title="Walking Tour GPS"
                description="Explore historical alleys on foot without losing your bus."
            />

            <BusInfo />

            <div className="tour-simple-layout">
                <div className="tour-box">
                    <div className="bus-alert-box">
                        <p>🚌 <strong>Bus Departure:</strong> 25 minutes left at current stop</p>
                    </div>

                    {isReturning ? (
                        /* Πίνακας Επιστροφής */
                        <div className="step-card return-card">
                            <div className="step-header-tags">
                                <span className="route-badge return-badge">Return Route</span>
                                <span className="step-number">Step {returnIndex + 1} of {returnSteps.length}</span>
                            </div>

                            <h3>🧭 {returnSteps[returnIndex].text}</h3>

                            <div className="tour-buttons">
                                {returnIndex < returnSteps.length - 1 ? (
                                    <button className="btn-tour btn-return" onClick={handleNextReturn}>
                                        Next Return Step ➔
                                    </button>
                                ) : (
                                    <button className="btn-tour btn-primary" onClick={handleRestartAll}>
                                        Boarded Bus / Reset 🔄
                                    </button>
                                )}

                                <button className="btn-tour btn-secondary" onClick={handleBackToTour}>
                                    Cancel & Resume Tour
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Πίνακας Περιήγησης */
                        <div className="step-card">
                            <div className="step-header-tags">
                                <span className="step-number">Step {stepIndex + 1} of {tourSteps.length}</span>
                                <span className="gps-live-tag">● Live GPS</span>
                            </div>

                            <h3>{tourSteps[stepIndex].text}</h3>

                            <div className="tour-buttons">
                                {stepIndex < tourSteps.length - 1 ? (
                                    <button className="btn-tour btn-primary" onClick={handleNextTour}>
                                        Next Step ➔
                                    </button>
                                ) : (
                                    <button className="btn-tour btn-primary" onClick={() => setStepIndex(0)}>
                                        Restart Tour 🔄
                                    </button>
                                )}

                                <button className="btn-tour btn-return" onClick={handleStartReturn}>
                                    Guide Me Back to Bus 🚌
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Χάρτης */}
                <div className="map-box">
                    <iframe title="Map" src={mapUrl} className="simple-map" />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default WalkingTour;