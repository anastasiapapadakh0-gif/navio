/* Επαναχρησιμοποιούμενο component.
   Εμφανίζει την προτεινόμενη ενέργεια για την οροφή
   με βάση τις τρέχουσες καιρικές συνθήκες. */

import "./RoofRecommendation.css";

function RoofRecommendation({ weather }) {
    return (
        <div className="recommendation">
            <h2>Smart Recommendation</h2>

            <div className={weather.advice}>
                <h3>{weather.rooftitle}</h3>
            </div>

            <div className="recommendation-text">
                <p>{weather.roofmessage}</p>
            </div>
        </div>
    );
}
export default RoofRecommendation;