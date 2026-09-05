/* Σελίδα υποβοήθησης οδηγού. 
Προσομοιώνει ένα σύστημα στο οποίο εμφανίζοντας ειδοποιήσεις ασφαλείας
και ηχητικές ενημερώσεις κατά τη διάρκεια της διαδρομής. */

import "./DrivingAssistance.css";

import Header from "../../components/Header/Header"; 
import Footer from "../../components/Footer/Footer";
import BusInfo from "../../components/BusInfo/BusInfo";

import lines from "../../assets/images/driver/lines.png";
import speed from "../../assets/images/driver/speed.png";
import people from "../../assets/images/driver/people.png";
import alertspeed from "../../assets/sounds/driver/speed-voice.mp3";
import alertlane from "../../assets/sounds/driver/lane-voice.mp3";
import alertdoors from "../../assets/sounds/driver/doors-voice.mp3";
import alertmood from "../../assets/sounds/driver/mood-voice.mp3";

import { useState, useEffect } from "react";

// κοινό κανάλι ήχου
let currentAudio = null;
function playSound(src) {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio(src);
    currentAudio.play().catch(()=> {});
}
function DrivingAssistance() {

    const [warning, setWarning] = useState("none");
    const [showMoodPopup, setShowMoodPopup] = useState(false);

    // Δημιουργία τυχαίων ειδοποιήσεων κατά την οδήγηση.
    useEffect(() => {

        const interval = setInterval(() => {

            
            if (showMoodPopup) return;

            const random = Math.floor(Math.random() * 3);

            if (random === 0) {
                setWarning("speed");
                playSound(alertspeed);
            }

            else if (random === 1) {
                setWarning("lane");
                playSound(alertlane);
            }

            else if (random === 2) {
                setShowMoodPopup(true);
                playSound(alertmood);
                // αυτοματο κλείσιμο, ώστε το popup να μην μπλοκάρει τα υπόλοιπα alerts
                setTimeout(() => {
                    setShowMoodPopup(false);
                }, 5000);
            }

        }, 10000);

        return () => clearInterval(interval);

    }, [showMoodPopup]);

    // Προσομοίωση στάσης και επιβίβασης επιβατών.
    useEffect(() => {

        const interval = setInterval(() => {

            setWarning("doors");
            playSound(alertdoors);

            setTimeout(() => {
                setWarning("none");
            }, 5000);

        }, 30000);

        return () => clearInterval(interval);

    }, []);
   
    return (
        
        <div className="page driving-assistance">

            <Header
            title="Driving Assistance!"
            description="Receive real-time alerts to support safe driving">
            </Header>

            <BusInfo />

            <div className="bus-status">

                <div className={`status-item ${warning === "speed" ? "status-item-warning" : ""}`}>

                    <h3> Speed</h3>
                    <img src={speed}></img>                
                    <p> Speed Limit: 50 km/h</p>
                    <p className={`status-label ${warning  === "speed"? "status-label-warning" : ""}`}>
                        {warning === "speed"
                        ? "Speed limit exceeded"
                        : "Within speed limit"}
                    </p>

                </div>

                <div className={`status-item ${warning === "lane" ? "status-item-warning" : ""}`}>
                    <h3> Lane </h3>
                    <img src={lines}></img>
                    <p> Lane departure monitoring enabled</p>
                    <p className={`status-label ${warning  === "lane"? "status-label-warning" : ""}`}>
                        {warning === "lane"
                        ? "Lane departure detected"
                        : "Vehicle within lane"}
                    </p>

                </div>

                <div className={`status-item ${warning === "doors" ? "status-item-warning" : ""}`}>

                    <h3> Doors</h3>
                    <img src={people}></img>
                    <p> Passenger exit detection active</p>
                    <p className ={`status-label ${warning  === "doors"? "status-label-warning" : ""}`}>
                        {warning === "doors"
                        ? "Passengers still boarding"
                        : "All clear"}
                    </p>

                </div>
            
            </div>

            {/* Popup σύστασης για διάλειμμα οδηγού */}
            {showMoodPopup && (
                <div className="popup-overlay">

                    <div className="mood-popup">

                        <p className="popup-close" onClick={() => setShowMoodPopup(false)}>✕</p>
                        <h3>Feeling tired?</h3>
                        <h2>Would you like to take a coffee break?</h2>

                    </div>
                    
                </div>
            )}
            <Footer />
        </div>
    );
}
export default DrivingAssistance;