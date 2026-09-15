/* Σελίδα ζωντανής προβολής διαδρομής.
Επιτρέπει στον επιβάτη να βλέπει την πορεία του λεωφορείου από την οπτική του οδηγού σε πραγματικό χρόνο 
και να εναλλάσσει μεταξύ μετωπικής (Front) και πανοραμικής (Panoramic) θέας. */

import React, { useState } from "react";
import "./LiveView.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

// Εισαγωγή των δύο custom εικόνων
import frontViewImg from "../../assets/images/FrontViewBus.png";
import panoramicViewImg from "../../assets/images/PanoramicViewBus.png";

function LiveView() {
    const [cameraAngle, setCameraAngle] = useState("Front View");
    const [isStreamActive, setIsStreamActive] = useState(true);

    const handleSwitchAngle = () => {
        setCameraAngle((prevAngle) =>
            prevAngle === "Front View" ? "Panoramic View" : "Front View"
        );
    };

    const currentViewImage =
        cameraAngle === "Front View" ? frontViewImg : panoramicViewImg;

    return (
        <div className="page live-view-page">
            <Header
                title="Live Road View"
                description="Enjoy the panoramic front view of the bus route in real time."
            />

            <BusInfo />

            <div className="live-view-container">
                <div className="video-card">
                    <div className="stream-header">
                        <span className="live-badge">● LIVE STREAM</span>
                        <span className="current-angle">{cameraAngle}</span>
                    </div>

                    <div className="stream-display">
                        {isStreamActive ? (
                            <img
                                src={currentViewImage}
                                alt={`Live bus stream - ${cameraAngle}`}
                                className="stream-image"
                            />
                        ) : (
                            <div className="stream-placeholder">
                                <p>⏸ Camera Stream Paused</p>
                            </div>
                        )}
                    </div>

                    <div className="stream-controls">
                        <button
                            className="stream-btn"
                            onClick={() => setIsStreamActive(!isStreamActive)}
                        >
                            {isStreamActive ? "Pause Stream" : "Resume Stream"}
                        </button>
                        <button
                            className="stream-btn switch-btn"
                            onClick={handleSwitchAngle}
                        >
                            Switch Camera Angle
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default LiveView;