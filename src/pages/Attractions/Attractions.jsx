/* Σελίδα κοντινών αξιοθεάτων.
   Εμφανίζει το κοντινότερο αξιοθέατο
   σύμφωνα με την πορεία του λεωφορείου
   και δίνει δυνατότητα ακρόασης πληροφοριών. */

import { useState, useEffect } from "react";
import "./Attractions.css";

import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

import attractions from "../../data/attractionsData";

function Attractions() {

    // Αποθηκεύει το τρέχον αξιοθέατο που εμφανίζεται
    const [currentAttraction, setCurrentAttraction] = useState(0);
    // Αποθηκεύει αν το audio guide παίζει ή όχι
    const [isPlaying, setIsPlaying] = useState(false);
    // Αποθηκεύει το αντικείμενο του τρέχοντος αξιοθέατου   
    const attraction = attractions[currentAttraction];

    const playAudio = () => {

    if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
    } else {
        const audio = new SpeechSynthesisUtterance(attraction.description);
        audio.lang = "en-US";
        // ώστε όταν τελειώσει το audio να αλλάξει και το state του isPlaying σε false
        audio.onend = () => setIsPlaying(false);

        setIsPlaying(true);
        window.speechSynthesis.speak(audio);
    }
};

    // Αλλάζει το αξιοθέατο κάθε 30 δευτερόλεπτα (όπως και στο bus info)
    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentAttraction((previousAttraction) => {

                if (previousAttraction === attractions.length - 1) {
                    return 0;
                }

                return previousAttraction + 1;
            });

        }, 30000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="page attractions-page">
            <Header
                title="Nearby Attractions"
                description="Discover nearby sights and listen to short audio guides."
            />

            <BusInfo />

            <div className="attraction-block">

                <div className="attraction-text">
                    <h3>Closest Attraction</h3>

                    <h2>{attraction.title}</h2>

                    <p>{attraction.description}</p>

                    <button
                        className="button-green"
                        onClick={playAudio}
                    >
                        {isPlaying ? "Stop Guide" : "Listen Guide"}
                    </button>
                </div>

                <div className="attraction-image">
                    <img
                        src={attraction.image}
                        alt={attraction.title}
                    />
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Attractions;