/* Επαναχρησιμοποιούμενο component.
Χρησιμοποιείται σε όλες τις σελίδες της εφαρμογής και εμφανίζει τον τίτλο, την περιγραφή
και το κουμπί επιστροφής.
Το περιεχόμενό του προσαρμόζεται μέσω props. */

import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({ title, description, backTo }) {

    const navigate = useNavigate();

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

    </div>
    );
    
}export default Header;
