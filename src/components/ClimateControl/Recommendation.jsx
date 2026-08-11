/* Επαναχρησιμοποιούμενο component.
Εμφανίζει προτάσεις για τη λειτουργία
του κλιματισμού με βάση τις τρέχουσες
καιρικές συνθήκες. */

import "./Recommendation.css";

function Recommendation({ weather }) {
    return (
        <div className="recommendation">
            <h2>Smart Recommendation</h2>

            <div className={weather.advice}>
                <h3>{weather.recommendation}</h3>
            </div>

            <div className="recommendation-text">
                <p>{weather.message}</p>
            </div>
        </div>
    );
}

export default Recommendation;