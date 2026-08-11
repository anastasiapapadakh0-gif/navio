/* Επαναχρησιμοποιούμενο component που εμφανίζει βασικές πληροφορίες του λεωφορείου.
Προσομοιώνει την κίνηση του λεωφορείου ενημερώνοντας αυτόματα την τρέχουσα
και την επόμενη στάση κάθε 30 δευτερόλεπτα. */

import "./BusInfo.css";
import bus from "../../assets/images/businfo/bus.png";
import currentstop from "../../assets/images/businfo/current-stop.png";
import nextstop from "../../assets/images/businfo/next-stop.png";
import { useState, useEffect } from "react"; // εισαγωγή συνάρτησης για την μετάβαση στις στάσεις

function BusInfo() {

        const [currentStop, setCurrentStop] = useState(0);

        // Πίνακας με όλες τις στάσεις της διαδρομής
        const stops = [
        "Anthoupoli",
        "Peristeri",
        "Agios Antonios",
        "Sepolia",
        "Attiki",
        "Stathmos Larisis",
        "Metaxourgio",
        "Omonoia",
        "Panepistimio",
        "Syntagma",
        "Akropoli",
        "Syngrou-Fix",
        "Neos Kosmos",
        "Agios Ioannis",
        "Dafni",
        "Ilioupoli",
        "Alimos",
        "Elliniko"
        ];
        
        // Αυτόματη αλλαγή στάσης ανά 30 δευτερόλεπτα
        useEffect(() => {

            const interval = setInterval(() => {

                setCurrentStop((previousStop) => {

                    if (previousStop === stops.length - 1) {
                        return 0;
                    }

                    return previousStop + 1;
                });
            }, 30000);

        return () => clearInterval(interval);
        }, []);

    
    return (

    <div className="driver-information">

                <div className="driver-info-item">
                    <img src={bus} />

                    <div className="driver-info-text">
                        <h4>Bus Number</h4>
                        <h3>A23</h3>
                    </div>

                </div>

                <div className="driver-info-item">
                    <img src={currentstop} />

                    <div className="driver-info-text">
                        <h4>Current Stop</h4>
                        <h3>{stops[currentStop]}</h3>
                    </div>             
                </div>

                <div className="driver-info-item">

                    <img src={nextstop} />
                    <div className="driver-info-text">
                        <h4>Next Stop</h4>
                        <h3>{stops[(currentStop + 1) % stops.length]}</h3>
                    </div> 

                </div>

            </div>
    );
    
}export default BusInfo;