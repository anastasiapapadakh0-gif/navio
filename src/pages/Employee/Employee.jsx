/* Σελίδα υπαλλήλου.
   Παρέχει πρόσβαση στις λειτουργίες διαχείρισης του λεωφορείου,
   όπως το σύστημα ενέργειας και το ρομπότ καθαρισμού.*/

import "./Employee.css";
import Header from "../../components/Header/Header"; 
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";
import ActionCard from "../../components/ActionCard/ActionCard";

import roofenergybg from "../../assets/images/employee/roof-energy.png";
import cleaningrobotbg from "../../assets/images/employee/cleaning-robot.png";
import { useNavigate } from "react-router-dom";

function Employee() {

    const navigate = useNavigate();

    return (

    <div className="page employee">
        {/* Κοινό Header της εφαρμογής */}
        <Header
            title="Welcome Employee!"
            description="Manage the smart roof and monitor the cleaning process."
            backTo="/choose-role">
        </Header>

        {/* Εμφάνιση βασικών πληροφοριών του λεωφορείου */}
        <BusInfo/>

        {/* Επιλογές λειτουργιών που είναι διαθέσιμες στον υπάλληλο */}
        <div className="employee-cards">

            <ActionCard
                title="Roof Control"
                description="Monitor and control the smart roof based on current weather conditions."
                buttonText="Manage"
                background={roofenergybg}
                buttonClass="button-orange"
                onClick={() => navigate("/roof-control")}>
            </ActionCard>

            <ActionCard
                title="Cleaning Robot"
                description="Monitor cleaning tasks and review valuable items detected after each route."
                buttonText="Open"
                background={cleaningrobotbg}
                buttonClass="button-orange"
                onClick={() => navigate("/cleaning-robot")}>
            </ActionCard>

        </div>

        <Footer />

    </div>
    );
}

export default Employee;
