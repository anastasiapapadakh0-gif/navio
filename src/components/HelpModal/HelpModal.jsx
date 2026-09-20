import { useLocation } from "react-router-dom";
import "./HelpModal.css";
import helpData from "../../data/helpData";

function HelpModal({ isOpen, onClose }) {
    const location = useLocation();

    if (!isOpen) return null;

    const currentHelp = helpData[location.pathname] || {
        title: "NAVIO Help",
        tips: [
            "Use the available controls to interact with this screen.",
            "Select Back to return to the previous section."
        ]
    };

    return (
        <div className="help-backdrop" onClick={onClose}>
            <div
                className="help-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="help-close"
                    onClick={onClose}
                    aria-label="Close help"
                >
                    ×
                </button>

                <h3>{currentHelp.title}</h3>

                <ul className="help-tips-list">
                    {currentHelp.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HelpModal;