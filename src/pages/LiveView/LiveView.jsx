/* Σελίδα ζωντανής προβολής διαδρομής.
Επιτρέπει στον επιβάτη να βλέπει τη θέα
της διαδρομής από την οπτική του οδηγού. */

import { useState } from "react";
import "./LiveView.css";

import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";
import LiveImageView from "../../components/LiveImageView/LiveImageView";
import frontViewImg from "../../assets/images/passenger/FrontViewBus.png";

function LiveView() {
    const [viewActive, setViewActive] = useState(true);
    const roadImage = viewActive ? frontViewImg : null;

    return (
        <div className="page live-view-page">
            <Header
                title="Live Road View"
                description="Choose if you want to see the route from the driver's perspective."
                backTo="/passenger"
            />

            <BusInfo />
            <div className="view-control">
                <span>
                    {viewActive ? "Driver's view is active" : "Driver's view is disabled"}
                </span>

                <button
                    className={viewActive ? "inactive-blue-button" : "active-blue-button"}
                    onClick={() => setViewActive(!viewActive)}
                >
                    {viewActive ? "Hide View" : "Show View"}
                </button>
            </div>

            <LiveImageView
                title="🔴 Driver's View"
                image={roadImage}
                placeholderText=""
            />
            <Footer />
        </div>
    );
}

export default LiveView;