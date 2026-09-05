/* Σελίδα ζωντανής προβολής διαδρομής.
Επιτρέπει στον επιβάτη να βλέπει την πορεία του λεωφορείου από την οπτική του οδηγού σε πραγματικό χρόνο. */

import React, { useState } from "react";
import "./LiveView.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

// Χρησιμοποιούμε μια διαθέσιμη εικόνα ως προσομοίωση της κάμερας
import viewBg from "../../assets/images/driver/assistance.png";

function LiveView() {
    const [cameraAngle, setCameraAngle] = useState("Front View");
    const [isStreamActive, setIsStreamActive] = useState(true);

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
                                src={viewBg}
                                alt="Driver Live Camera View"
                                className="stream-image"
                            />
                        ) : (
                            <div className="stream-placeholder">
                                <p>Camera Stream Paused</p>
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
                            className="stream-btn"
                            onClick={() =>
                                setCameraAngle(
                                    cameraAngle === "Front View"
                                        ? "Panoramic Roof View"
                                        : "Front View"
                                )
                            }
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