/* Επαναχρησιμοποιούμενο component.
   Επιτρέπει το άνοιγμα ή το κλείσιμο
   της έξυπνης οροφής του λεωφορείου. */

import "./OnOffButton.css";

function OnOffButton({ activeButton, setActiveButton }) {

    return (
        <div className="roof-mode">
            <h3>Roof Control</h3>

            <div className="roof-button">
                <button
                    className={activeButton ? "inactive-green-button" : "active-green-button"}
                    onClick={() => setActiveButton(!activeButton)}
                >
                    {activeButton ? "Close Roof" : "Open Roof"}
                </button>
            </div>
        </div>
        
    );
}

export default OnOffButton;








