/* Κεντρική σελίδα επιβάτη.
Παρέχει πρόσβαση στις διαθέσιμες υπηρεσίες και πληροφορίες κατά τη διάρκεια του ταξιδιού. */

import "./Passenger.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";
import ActionCard from "../../components/ActionCard/ActionCard";

// Χρησιμοποιώ προσωρινά τις ήδη υπαάρχουσες εικόνες για να φορτώσει η σελίδα
import cardBg1 from "../../assets/images/driver/assistance.png";
import cardBg2 from "../../assets/images/driver/climate.png";

import { useNavigate } from "react-router-dom";

function Passenger() {
    const navigate = useNavigate();

    return (
        <div className="page passenger">
            <Header
                title="Welcome Passenger!"
                description="Explore the city and enjoy your smart bus ride."
            />

            <BusInfo />

            <div className="passenger-cards">
                <ActionCard
                    title="Live Front View"
                    description="Watch the road ahead in real time, directly from the driver's perspective."
                    buttonText="View Stream"
                    background={cardBg1}
                    buttonClass="button-blue"
                    onClick={() => navigate("/live-view")}
                />

                <ActionCard
                    title="Nearby Sights"
                    description="Discover sights around each stop with detailed audio guides and maps."
                    buttonText="Explore Sights"
                    background={cardBg2}
                    buttonClass="button-green"
                    onClick={() => navigate("/attractions")}
                />

                <ActionCard
                    title="Order from Cafe"
                    description="Order drinks or snacks from partner cafes and pick them up at the next stop."
                    buttonText="Order Now"
                    background={cardBg1}
                    buttonClass="button-blue"
                    onClick={() => navigate("/cοffee-ordering")}
                />

                <ActionCard
                    title="Walking Tour GPS"
                    description="Get guided navigation on foot around the stop and easily find your way back."
                    buttonText="Start Tour"
                    background={cardBg2}
                    buttonClass="button-green"
                    onClick={() => navigate("/walking-tour")}
                />
            </div>

            <Footer />
        </div>
    );
}

export default Passenger;