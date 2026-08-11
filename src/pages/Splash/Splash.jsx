/* Σελίδα εκκίνησης της εφαρμογής.
Παρουσιάζει το λογότυπο και το βασικό μήνυμα της εφαρμογής.
Με την επιλογή "Start" ο χρήστης μεταφέρεται στη σελίδα επιλογής ρόλου.*/

import "./Splash.css";
import logo from "../../assets/images/main-logo.svg";
import background from "../../assets/images/splash-bg.png";
import { useNavigate } from "react-router-dom";


function Splash() {
  const navigate = useNavigate();

  return (
    
    <div className="page splash" style={{ backgroundImage: `url(${background})` }}>
        <img src={logo} alt="NAVIO Logo" className="logo"/>
        <p> Your smart travel application </p>

        {/* Κουμπί μετάβασης στη σελίδα επιλογής ρόλου */}
        <button className="green-button" onClick={() => navigate("/choose-role")}> Start </button>
    </div>
  );
}

export default Splash;