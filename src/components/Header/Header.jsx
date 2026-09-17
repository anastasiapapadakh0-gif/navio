import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import HelpModal from "../HelpModal/HelpModal";

function Header({ title, description }) {
    const navigate = useNavigate();
    const [showHelp, setShowHelp] = useState(false);

    return (
        <div className="header">
            <p className="back-button" onClick={() => navigate(-1)}>
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
                title="Οδηγίες & Βοήθεια"
            >
                ❓ Βοήθεια
            </button>

            <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
        </div>
    );
}

export default Header;