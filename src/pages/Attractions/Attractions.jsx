/* Σελίδα κοντινών αξιοθεάτων.
Επιτρέπει στον επιβάτη να βλέπει πληροφορίες για τα σημεία ενδιαφέροντος κοντά στην τρέχουσα στάση, 
να ακούει ηχητική ξενάγηση και να βλέπει την τοποθεσία στον χάρτη. */

import React, { useState } from "react";
import "./Attractions.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

// Χρησιμοποιούμε διαθέσιμη εικόνα ως φόντο/αναπαράσταση
import defaultSightImg from "../../assets/images/driver/climate.png";

function Attractions() {
    const [isPlayingAudio, setIsPlayingAudio] = useState(null);
    const [selectedSight, setSelectedSight] = useState(0);

    const sights = [
        {
            id: 1,
            title: "Acropolis & Parthenon",
            distance: "150m away",
            description: "The ancient citadel located on a rocky outcrop above the city, containing the remains of several ancient buildings of great architectural and historic significance.",
            duration: "Audio: 2 min"
        },
        {
            id: 2,
            title: "Acropolis Museum",
            distance: "300m away",
            description: "An archaeological museum focused on the findings of the archaeological site of the Acropolis of Athens.",
            duration: "Audio: 1.5 min"
        },
        {
            id: 3,
            title: "Plaka Historic Neighborhood",
            distance: "400m away",
            description: "The old historical neighborhood of Athens, clustered around the northern and eastern slopes of the Acropolis, with neoclassical architecture and charming alleys.",
            duration: "Audio: 3 min"
        }
    ];

    const toggleAudio = (id) => {
        if (isPlayingAudio === id) {
            setIsPlayingAudio(null);
        } else {
            setIsPlayingAudio(id);
        }
    };

    return (
        <div className="page attractions-page">
            <Header
                title="Nearby Attractions"
                description="Explore historical sights and landmarks around your current stop."
            />

            <BusInfo />

            <div className="attractions-container">
                <div className="sights-list">
                    <h3>Sights Near Current Stop</h3>
                    {sights.map((sight, index) => (
                        <div
                            key={sight.id}
                            className={`sight-card ${selectedSight === index ? "active-sight" : ""}`}
                            onClick={() => setSelectedSight(index)}
                        >
                            <div className="sight-info">
                                <h4>{sight.title}</h4>
                                <span className="sight-distance">📍 {sight.distance}</span>
                                <p className="sight-desc">{sight.description}</p>
                            </div>
                            <div className="sight-actions">
                                <button
                                    className={`audio-btn ${isPlayingAudio === sight.id ? "playing" : ""}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleAudio(sight.id);
                                    }}
                                >
                                    {isPlayingAudio === sight.id ? "⏸ Pause Audio" : "🔊 Listen Guide"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="map-panel">
                    <h3>Sight Preview & Map</h3>
                    <div className="map-view">
                        <img
                            src={defaultSightImg}
                            alt="Sight Preview"
                            className="sight-preview-img"
                        />
                        <div className="map-overlay-info">
                            <strong>{sights[selectedSight].title}</strong>
                            <p>{sights[selectedSight].distance} from the bus</p>
                            {isPlayingAudio === sights[selectedSight].id && (
                                <span className="audio-playing-indicator">🎵 Audio Guide Playing...</span>
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