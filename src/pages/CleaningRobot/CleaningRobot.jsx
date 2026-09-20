/* Σελίδα παρακολούθησης του ρομπότ καθαρισμού.
   Προσομοιώνει την κίνηση του ρομπότ, την πρόοδο καθαρισμού,
   την κατάσταση της μπαταρίας και την ανίχνευση αντικειμένων
   μέσα στο λεωφορείο.
*/

import "./CleaningRobot.css";

import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FoundItems from "../../components/FoundItems/FoundItems";

import robot from "../../assets/images/employee/robot.png";
import arrow from "../../assets/images/employee/arrow.png";
import batter from "../../assets/images/employee/battery.png";
import upperDeck from "../../assets/images/employee/upper-deck.png";
import lowerDeck from "../../assets/images/employee/lower-deck.png";

/* Υπολογισμός της θέσης του ρομπότ.
   Η συνολική πρόοδος (0-100%) χωρίζεται σε δύο μέρη,
   ώστε το ρομπότ να καθαρίζει πρώτα το Upper Deck
   και στη συνέχεια το Lower Deck.
   Με βάση την πρόοδο υπολογίζονται η στήλη και η γραμμή
   στην οποία βρίσκεται το ρομπότ και μετατρέπονται
   σε συντεταγμένες (left, top) για την εμφάνιση
   της θέσης του πάνω στον χάρτη του λεωφορείου.
*/

function CleaningRobot() {

    // Κατάσταση λειτουργίας του ρομπότ
    const [robotActive, setRobotActive] = useState(false);
    const [robotProgress, setRobotProgress] = useState(0);
    const [foundItems, setFoundItems] = useState([]);
    const [battery, setBattery] = useState(100);


    // Έλεγχος σε ποιο κατάστρωμα βρίσκεται το ρομπότ
    const isUpperDeck = robotProgress < 50;
    const currentDeck = isUpperDeck ? upperDeck : lowerDeck;

    // Σταθερές που καθορίζουν τη θέση του ρομπότ πάνω στην εικόνα
    const START_LEFT = 12;
    const START_TOP = 20;
    const COLUMN_STEP = 8;
    const ROW_STEP = 23;
    const TOTAL_ROWS = 4;

    // Υπολογισμός της προόδου μόνο για το τρέχον κατάστρωμα
    const deckProgress = robotProgress % 50;

    // Υπολογισμός της στήλης και της γραμμής του ρομπότ
    const column = Math.floor(deckProgress / 5);
    let row = Math.floor((deckProgress % 5) / 1.25);

    // Στις μονές στήλες το ρομπότ επιστρέφει προς τα πάνω
    // ώστε να ακολουθεί διαδρομή τύπου "ζιγκ-ζαγκ"
    if (column % 2 !== 0) {
        row = (TOTAL_ROWS - 1) - row;
    }

    // Μετατροπή της γραμμής και της στήλης
    // σε πραγματικές συντεταγμένες πάνω στην εικόνα
    const robotLeft = START_LEFT + column * COLUMN_STEP;
    const robotTop = START_TOP + row * ROW_STEP;


    // Προσομοίωση της προόδου καθαρισμού
    useEffect(() => {

        if (!robotActive) return;

        const interval = setInterval(() => {

            setRobotProgress((progress) => {

                if (progress >= 99) {
                    setRobotActive(false);
                    return 100;
                }

                return progress + 1;

            });

        }, 500);

        return () => clearInterval(interval);

    }, [robotActive]);


    // Προσομοίωση εύρεσης αντικειμένων
    useEffect(() => {

        if (robotProgress > 0 && robotProgress % 20 === 0) {

            const items = [
                "Passport",
                "Money",
                "Jewelry"
            ];

            setFoundItems((foundItems) => [

                ...foundItems,

                {
                    item: items[Math.floor(Math.random() * items.length)],
                    seat: Math.floor(Math.random() * 62) + 1
                }

            ]);

        }

    }, [robotProgress]);


    // Προσομοίωση φόρτισης / εκφόρτισης της μπαταρίας
    useEffect(() => {

        const interval = setInterval(() => {

            setBattery((battery) => {

                if (robotActive) {
                    return Math.max(battery - 1, 0);
                }

                return Math.min(battery + 1, 100);

            });

        }, 1000);

        return () => clearInterval(interval);

    }, [robotActive]);


    return (

        <div className="page cleaning-robot">

            <Header
                title="Cleaning Robot"
                description="Start the cleaning cycle and monitor progress, battery level and detected items."
                backTo="/employee"
            />

            <div className="white-info-cards">

                {/* Robot Status */}
                <div className="white-info-card">

                    <div className="white-card-top">
                        <img src={robot} />
                        <h2>Robot Status</h2>
                    </div>

                    <div className="white-card-content">

                        <button
                            className={robotActive ? "inactive-orange-button" : "active-orange-button"}
                            onClick={() => {
                                setRobotActive(!robotActive);
                                setRobotProgress(0);
                                setFoundItems([]);
                            }}
                        >
                            {robotActive ? "Deactivate" : "Activate"}
                        </button>

                    </div>

                </div>


                {/* Cleaning Progress */}
                <div className="white-info-card">

                    <div className="white-card-top">
                        <img src={arrow} />
                        <h2>Cleaning Progress</h2>
                    </div>

                    <div className="white-card-content">

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${robotProgress}%` }}
                            />
                        </div>

                        <p className="progress-value">
                            {robotProgress}%
                        </p>

                    </div>

                </div>


                {/* Battery */}
                <div className="white-info-card">

                    <div className="white-card-top">
                        <img src={batter} />
                        <h2>Battery Level</h2>
                    </div>

                    <div className="white-card-content">

                        <div className="battery-bar">
                            <div
                                className="battery-fill"
                                style={{ width: `${battery}%` }}
                            />
                        </div>

                        <p className="battery-value">
                            {battery}%
                        </p>

                    </div>

                </div>

            </div>


            {/* Χάρτης λεωφορείου */}
            <div className="bus-map">

                <div className="bus-image">

                    <h3>
                        {isUpperDeck ? "Upper Deck" : "Lower Deck"}
                    </h3>

                    <img src={currentDeck} />

                    <div
                        className="robot-marker"
                        style={{
                            left: `${robotLeft}%`,
                            top: `${robotTop}%`
                        }}
                    />

                </div>

                <p>
                    *The orange marker indicates the current position of the cleaning robot.
                </p>

            </div>


            {/* Αντικείμενα που βρέθηκαν */}
            <FoundItems foundItems={foundItems} />

            <Footer />

        </div>

    );

}

export default CleaningRobot;