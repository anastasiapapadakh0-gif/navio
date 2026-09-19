/* Κεντρική σελίδα επιβάτη.
Παρέχει πρόσβαση στις διαθέσιμες υπηρεσίες και πληροφορίες κατά τη διάρκεια του ταξιδιού. */

import "./Passenger.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";
import ActionCard from "../../components/ActionCard/ActionCard";

// Χρησιμοποιώ προσωρινά τις ήδη υπαάρχουσες εικόνες για να φορτώσει η σελίδα
import sightsbg from "../../assets/images/passenger/sights.png";
import cafebg from "../../assets/images/passenger/cafe.png";
import roadbg from "../../assets/images/passenger/road.png";
import gpsbg from "../../assets/images/passenger/gps.png";

import { useNavigate } from "react-router-dom";

function Passenger() {
    const navigate = useNavigate();

    return (
        <div className="page passenger">
            <Header
                title="Welcome Passenger!"
                description="Explore the city and enjoy your smart bus ride."
                backTo="/choose-role"
            />

            <BusInfo />

            <div className="passenger-cards">
                <ActionCard
                    title="Live Front View"
                    description="Watch the road ahead in real time, directly from the driver's perspective."
                    buttonText="View"
                    background={roadbg}
                    buttonClass="button-blue"
                    onClick={() => navigate("/live-view")}
                />

                <ActionCard
                    title="Nearby Sights"
                    description="Discover sights around each stop with detailed audio guides and maps."
                    buttonText="Explore"
                    background={sightsbg}
                    buttonClass="button-orange"
                    onClick={() => navigate("/attractions")}
                />

                <ActionCard
                    title="Order from Cafe"
                    description="Order drinks or snacks from partner cafes and pick them up at the next stop."
                    buttonText="Order"
                    background={cafebg}
                    buttonClass="button-orange"
                    onClick={() => navigate("/coffee-ordering")}
                />

                <ActionCard
                    title="Walking Tour GPS"
                    description="Get guided navigation on foot around the stop and easily find your way back."
                    buttonText="Start"
                    background={gpsbg}
                    buttonClass="button-blue"
                    onClick={() => navigate("/walking-tour")}
                />
            </div>

            <Footer />
        </div>
    );
}

export default Passenger;