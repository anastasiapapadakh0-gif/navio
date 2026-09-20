/* Επαναχρησιμοποιούμενο component.
Χρησιμοποιείται σε όλες τις σελίδες της εφαρμογής και εμφανίζει τον τίτλο, την περιγραφή
και το κουμπί επιστροφής.
Το περιεχόμενό του προσαρμόζεται μέσω props. */

import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import HelpModal from "../HelpModal/HelpModal";

function Header({ title, description, backTo }) {

    const navigate = useNavigate();
    const [showHelp, setShowHelp] = useState(false);

    // για τη διαχείριση του back button
    const handleBack = () => {
        if (backTo) {
            navigate(backTo, { replace: true });
        } else {
            navigate(-1);
        }
    };

    return(
        <div className="header">

            <p className="back-button"
                onClick={handleBack}
                >
            ← Back
            </p>
            <div className="header-text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <button
                type="button"
                className="help-trigger-btn"
                onClick={() => setShowHelp(true)}
                title="Help & Instructions"
            >
                ? Help
            </button>

            <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
        </div>
    );
}

export default Header;
