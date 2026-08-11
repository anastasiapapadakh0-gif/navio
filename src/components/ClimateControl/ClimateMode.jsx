/* Επαναχρησιμοποιούμενο component.
Επιτρέπει την ενεργοποίηση ή απενεργοποίηση του συστήματος κλιματισμού.
Η λειτουργία είναι προσομοιωμένη:
   - αλλάζει το χρώμα και το κείμενο του κουμπιού,
   - εμφανίζει μήνυμα εξοικονόμησης όταν το σύστημα απενεργοποιείται.
*/

import "./ClimateMode.css";
import {useState} from 'react';

function ClimateMode() {
    // Αποθηκεύει ποια λειτουργία (Cooling ή Heating) είναι ενεργή
    const [activeMode, setActiveMode] = useState(null);
    // Ελέγχει αν θα εμφανιστεί το παράθυρο εξοικονόμησης ενέργειας
    const [showMoodPopup, setShowMoodPopup] = useState(false);

    return (
        <div className="climate-mode">
            <h3>Choose Climate Mode</h3>

            <div className="mode-buttons">
                <button
                    className={`mode-btn cooling ${activeMode === "Cooling" ? "active" : ""}`}
                    onClick={() => {
                        if (activeMode === "Cooling") setShowMoodPopup(true);
                        setActiveMode(activeMode === "Cooling" ? null : "Cooling")
                    }}>
                    {activeMode === "Cooling"
                        ? "Cooling Active"
                        : "Activate Cooling"}
                </button>

                <button
                    className={`mode-btn heating ${activeMode === "Heating" ? "active" : ""}`}
                    onClick={() => {
                        if (activeMode === "Heating") setShowMoodPopup(true);
                        setActiveMode(activeMode === "Heating" ? null: "Heating")
                    }}>
                    {activeMode === "Heating"
                        ? "Heating Active"
                        : "Activate Heating"}
                </button>
                {showMoodPopup && (
            <div className="popup-overlay">
                <div className="mood-popup">
                    <p className="popup-close" onClick={() => setShowMoodPopup(false)}>✕</p>
                    <h3>Energy Saved!</h3>
                    <h2>Climate control has been turned off.
                        You saved approximately <strong>1.5 kWh</strong> of energy.
                    </h2>
                </div>
            </div>
        )}   
            </div>
        </div>
        
    );
}

export default ClimateMode;