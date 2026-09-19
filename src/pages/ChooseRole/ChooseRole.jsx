/*Σελίδα επιλογής ρόλου.
Ο χρήστης επιλέγει τον ρόλο με τον οποίο θα χρησιμοποιήσει την εφαρμογή (Επιβάτης, Οδηγός ή Υπάλληλος).
Ανάλογα με την επιλογή του μεταφέρεται στην αντίστοιχη ενότητα.*/


import "./ChooseRole.css";
import Header from "../../components/Header/Header"; 
import Footer from "../../components/Footer/Footer";
import background from "../../assets/images/choose-bg.png";
import { useNavigate } from "react-router-dom";

function ChooseRole() {

  const navigate = useNavigate();

  return (
    <div className="page choose-role" style={{ backgroundImage: `url(${background})` }}>
      <Header
      title="Choose your role!"
      description="Select how you want to continue."
      backTo="/"
      />

      {/* Κάρτες επιλογής ρόλου */}
        <div className="choose-role-cards">

          <div className="role-card" onClick={() => navigate("/passenger")}>
            <h2>Passenger</h2>
            <span>View route & attractions</span>
          </div>

          <div className="role-card" onClick={() => navigate("/driver")}>
            <h2>Driver</h2>
            <span>Driving assistance</span>
          </div>

          <div className="role-card" onClick={() => navigate("/employee")}>
            <h2>Employee</h2>
            <span>Bus management</span>
          </div>

        </div>

        <Footer />
        
      </div>
      );
}

export default ChooseRole;