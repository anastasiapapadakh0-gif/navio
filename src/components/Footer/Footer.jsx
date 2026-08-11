/* Επαναχρησιμοποιούμενο component.
Εμφανίζει το λογότυπο της εφαρμογής και την έκδοση του συστήματος.
Με επιλογή του λογοτύπου ο χρήστης επιστρέφει στην αρχική σελίδα. */

import "./Footer.css";
import logo from "../../assets/images/main-logo.svg";
import { useNavigate } from "react-router-dom";

function Footer() {

    const navigate = useNavigate();


    return(
    <div className="footer">
        <img src={logo} alt="NAVIO logo" className="logo-footer" onClick={() => navigate("/")}/>

        <span className="footer-version">
            Smart Bus Management System v1.0
        </span>
        
    </div>

    );
}export default Footer;
