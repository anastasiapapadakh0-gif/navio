/* Επαναχρησιμοποιούμενο component.
   Προβάλλει σε πραγματικό χρόνο την κατάσταση
   της οροφής, εμφανίζοντας διαφορετική
   εικόνα όταν η οροφή είναι ανοιχτή ή κλειστή. */

import "./LiveRoofView.css";

import roofOpenImg from "../../assets/images/employee/roof-open.png";
import roofClosedImg from "../../assets/images/employee/roof-closed.png";

function LiveRoofView({ activeButton }) {

    return (
        <div className="liveview">
            <h3>🔴 Live Roof View</h3>

            <img className="roofview"
                src={activeButton ? roofOpenImg : roofClosedImg}
            />

        </div>
    );
}

export default LiveRoofView;