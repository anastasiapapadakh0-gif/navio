/* Σελίδα τουριστικής πλοήγησης εκτός λεωφορείου.
Επιτρέπει στον τουρίστα να πλοηγείται με τα πόδια σε αξιοθέατα, συνεργαζόμενα εστιατόρια 
και να βρίσκει εύκολα την πλησιέστερη στάση για να επιβιβαστεί ξανά. */

import React, { useState } from "react";
import "./WalkingTour.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

// Χρησιμοποιούμε μια διαθέσιμη εικόνα ως φόντο/χάρτη
import mapBg from "../../assets/images/driver/climate.png";

function WalkingTour() {
    const [selectedCategory, setSelectedCategory] = useState("sights");
    const [activeDestination, setActiveDestination] = useState(null);

    const locations = {
        sights: [
            { id: 1, name: "Ancient Agora", distance: "350m (4 min walk)", info: "Historic marketplace and civic center." },
            { id: 2, name: "Temple of Olympian Zeus", distance: "500m (6 min walk)", info: "Colossal ruined temple dedicated to Zeus." }
        ],
        restaurants: [
            { id: 3, name: "Taverna Plaka (Partner)", distance: "200m (2 min walk)", info: "Traditional Greek cuisine - 10% discount for bus passengers." },
            { id: 4, name: "Acropolis View Bistro", distance: "450m (5 min walk)", info: "Mediterranean menu with rooftop view." }
        ],
        busStops: [
            { id: 5, name: "Stop A: Syntagma Square", distance: "120m (1 min walk)", info: "Next bus arrives in: 8 mins" },
            { id: 6, name: "Stop B: Monastiraki Station", distance: "400m (5 min walk)", info: "Next bus arrives in: 14 mins" }
        ]
    };

    return (
        <div className="page walking-tour-page">
            <Header
                title="City Walking Tour & GPS"
                description="Explore the city on foot with real-time GPS guidance and discover partner spots."
            />

            <BusInfo />

            <div className="walking-tour-container">
                <div className="tour-nav-panel">
                    <div className="category-tabs">
                        <button
                            className={`tab-btn ${selectedCategory === "sights" ? "active" : ""}`}
                            onClick={() => { setSelectedCategory("sights"); setActiveDestination(null); }}
                        >
                            🏛️ Sights
                        </button>
                        <button
                            className={`tab-btn ${selectedCategory === "restaurants" ? "active" : ""}`}
                            onClick={() => { setSelectedCategory("restaurants"); setActiveDestination(null); }}
                        >
                            🍽️ Restaurants
                        </button>
                        <button
                            className={`tab-btn ${selectedCategory === "busStops" ? "active" : ""}`}
                            onClick={() => { setSelectedCategory("busStops"); setActiveDestination(null); }}
                        >
                            🚏 Nearest Bus Stop
                        </button>
                    </div>

                    <div className="places-list">
                        {locations[selectedCategory].map((place) => (
                            <div
                                key={place.id}
                                className={`place-card ${activeDestination?.id === place.id ? "selected-place" : ""}`}
                            >
                                <div className="place-text">
                                    <h4>{place.name}</h4>
                                    <span className="distance-badge">📍 {place.distance}</span>
                                    <p>{place.info}</p>
                                </div>
                                <button
                                    className="guide-btn"
                                    onClick={() => setActiveDestination(place)}
                                >
                                    {activeDestination?.id === place.id ? "Navigating..." : "Start Navigation"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="map-display-panel">
                    <h3>Interactive GPS Map</h3>
                    <div className="gps-map-box">
                        <img src={mapBg} alt="Walking Map" className="gps-map-img" />
                        
                        {activeDestination ? (
                            <div className="gps-guidance-banner">
                                <strong>🧭 GPS Active: Walking to {activeDestination.name}</strong>
                                <p>Follow pedestrian route • {activeDestination.distance}</p>
                            </div>
                        ) : (
                            <div className="gps-guidance-banner neutral">
                                <p>Select a destination to start turn-by-turn walking directions.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default WalkingTour;