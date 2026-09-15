import React, { useState, useEffect } from "react";
import "./Attractions.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

const SIGHTS_DATA = [
    {
        id: 1,
        name: "Acropolis & Parthenon",
        distance: "150m away",
        description:
            "The ancient citadel located on a rocky outcrop above the city, containing the remains of several ancient buildings of great architectural and historic significance.",
        lat: 37.9715,
        lon: 23.7257,
        speechText: "Welcome to the Acropolis and Parthenon. This ancient citadel stands as the greatest monument of the Golden Age of Athens."
    },
    {
        id: 2,
        name: "Acropolis Museum",
        distance: "300m away",
        description:
            "An archaeological museum focused on the findings of the archaeological site of the Acropolis of Athens.",
        lat: 37.9684,
        lon: 23.7285,
        speechText: "The Acropolis Museum houses every artifact found on the rock and surrounding slopes of the Acropolis."
    },
    {
        id: 3,
        name: "Plaka Historic Neighborhood",
        distance: "400m away",
        description:
            "The old historical neighborhood of Athens, clustered around the northern and eastern slopes of the Acropolis, with neoclassical architecture and charming alleys.",
        lat: 37.9730,
        lon: 23.7297,
        speechText: "Plaka is the neighborhood of the Gods, featuring charming alleys, traditional food and neoclassical architecture."
    }
];

function Attractions() {
    const [selectedSight, setSelectedSight] = useState(SIGHTS_DATA[0]);
    const [playingId, setPlayingId] = useState(null);

    // Σταματάμε τον ήχο αν ο χρήστης φύγει από τη σελίδα
    useEffect(() => {
        return () => {
            if ("speechSynthesis" in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const handleSelectSight = (sight) => {
        setSelectedSight(sight);
    };

    const handleToggleAudio = (sight, e) => {
        e.stopPropagation();
        setSelectedSight(sight);

        if (!("speechSynthesis" in window)) {
            alert("Speech audio is not supported in this browser.");
            return;
        }

        // Αν παίζει ήδη το ίδιο, το σταματάμε
        if (playingId === sight.id) {
            window.speechSynthesis.cancel();
            setPlayingId(null);
            return;
        }

        // Σταματάμε προηγούμενη ομιλία και ξεκινάμε τη νέα
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(sight.speechText);
        utterance.lang = "en-US";
        utterance.rate = 0.95;

        utterance.onend = () => setPlayingId(null);
        utterance.onerror = () => setPlayingId(null);

        setPlayingId(sight.id);
        window.speechSynthesis.speak(utterance);
    };

    const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${selectedSight.lon - 0.007}%2C${selectedSight.lat - 0.004}%2C${selectedSight.lon + 0.007}%2C${selectedSight.lat + 0.004}&layer=mapnik&marker=${selectedSight.lat}%2C${selectedSight.lon}`;

    return (
        <div className="page attractions-page">
            <Header
                title="Nearby Attractions"
                description="Discover famous landmarks, points of interest, and audio guides near your stop."
            />

            <BusInfo />

            <div className="attractions-layout-grid">
                {/* Αριστερή Στήλη: Κάρτες Αξιοθεάτων */}
                <div className="attractions-cards-col">
                    <h2 className="section-title">Sights Near Current Stop</h2>
                    <div className="cards-stack">
                        {SIGHTS_DATA.map((sight) => {
                            const isSelected = selectedSight.id === sight.id;
                            const isPlaying = playingId === sight.id;

                            return (
                                <div
                                    key={sight.id}
                                    className={`sight-card-box ${isSelected ? "is-selected" : ""}`}
                                    onClick={() => handleSelectSight(sight)}
                                >
                                    <div className="sight-header-row">
                                        <h3 className="sight-name-text">{sight.name}</h3>
                                        <span className="sight-badge">📍 {sight.distance}</span>
                                    </div>
                                    <p className="sight-desc-text">{sight.description}</p>
                                    
                                    <div className="sight-action-row">
                                        <button
                                            type="button"
                                            className={`audio-btn ${isPlaying ? "is-playing" : ""}`}
                                            onClick={(e) => handleToggleAudio(sight, e)}
                                        >
                                            {isPlaying ? "⏸ Stop Audio Guide" : "🔊 Listen Guide"}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Δεξιά Στήλη: Μεγάλος Διαδραστικός Χάρτης */}
                <div className="attractions-map-col">
                    <h2 className="section-title">Sight Preview & Map</h2>
                    <div className="big-map-card">
                        <div className="map-frame-wrapper">
                            <iframe
                                title="Sight Map"
                                className="full-map-iframe"
                                src={mapSrc}
                            />
                        </div>
                        <div className="map-bottom-banner">
                            <div>
                                <h4 className="banner-place">{selectedSight.name}</h4>
                                <p className="banner-meta">📍 {selectedSight.distance} from the bus</p>
                            </div>
                            {playingId === selectedSight.id && (
                                <span className="banner-live-pulse">● Audio Playing</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Attractions;