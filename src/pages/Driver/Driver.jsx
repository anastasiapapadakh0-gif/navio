/* Κεντρική σελίδα οδηγού.
Παρέχει πρόσβαση στις βασικές λειτουργίες που χρησιμοποιεί ο οδηγός κατά τη διάρκεια της διαδρομής. */


import "./Driver.css";
import Header from "../../components/Header/Header"; 
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";
import ActionCard from "../../components/ActionCard/ActionCard";

import driverassistancebg from "../../assets/images/driver/assistance.png";
import driverclimatebg from "../../assets/images/driver/climate.png";
import { useNavigate } from "react-router-dom";


function Driver() {

    const navigate = useNavigate();
    return (

    <div className=" page driver">

        <Header
            title="Welcome Driver!"
            description="Monitor driving safety and manage cabin climate during the route."
            backTo="/choose-role">
        </Header>

        <BusInfo />
        
        <div className="driver-cards">

            <ActionCard
            title="Driving Assistance"
            description="Monitor speed, lane position and passenger boarding with real-time safety alerts."
            buttonText="Activation"
            background={driverassistancebg}
            buttonClass="button-blue"
            onClick={() => navigate("/driving-assistance")}>
            </ActionCard>

            <ActionCard
            title="Climate Control"
            description="Adjust the climate system and monitor solar energy based on weather conditions."
            buttonText="Adjust"
            background={driverclimatebg}
            buttonClass="button-green" 
            onClick={() => navigate("/climate-control")}/>

        </div>

        <Footer />
    </div>
    );
}
export default Driver;