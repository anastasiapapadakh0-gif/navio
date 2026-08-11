/* Επαναχρησιμοποιούμενο component.
Χρησιμοποιείται σε όλες τις σελίδες της εφαρμογής και εμφανίζει τον τίτλο, την περιγραφή
και το κουμπί επιστροφής.
Το περιεχόμενό του προσαρμόζεται μέσω props. */

import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({ title, description }) {

    const navigate = useNavigate();

    return(
    <div className="header">

        <p className="back-button" onClick={() => navigate(-1)}>
        ← Back
        </p>

        <div className="header-text">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>

    </div>
    );
    
}export default Header;
