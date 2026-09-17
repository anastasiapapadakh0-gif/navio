import React from "react";
import { useLocation } from "react-router-dom";
import "./HelpModal.css";

const HELP_DATA = {
    "/": {
        title: "Επιλογή Ρόλου (Role Selection)",
        tips: [
            "Επιλέξτε έναν από τους τρεις διαθέσιμους ρόλους: Επιβάτης, Οδηγός ή Υπάλληλος.",
            "Κάθε ρόλος παρέχει πρόσβαση σε εξειδικευμένες λειτουργίες του έξυπνου λεωφορείου."
        ]
    },
    "/passenger": {
        title: "Πίνακας Επιβάτη (Passenger Dashboard)",
        tips: [
            "Live Front View: Παρακολουθήστε σε πραγματικό χρόνο την πορεία του λεωφορείου.",
            "Nearby Sights: Δείτε αξιοθέατα γύρω από τη στάση και ακούστε τον ηχητικό οδηγό.",
            "Order from Cafe: Παραγγείλτε καφέ ή σνακ για παραλαβή στην επόμενη στάση.",
            "Walking Tour GPS: Περιηγηθείτε με οδηγίες και επιστρέψτε έγκαιρα στο λεωφορείο."
        ]
    },
    "/live-view": {
        title: "Βοήθεια: Live Front View",
        tips: [
            "Παρέχει ζωντανή εικόνα από την κάμερα του λεωφορείου.",
            "Μπορείτε να κάνετε εναλλαγή μεταξύ κανονικής και υπερευρυγώνιας προβολής."
        ]
    },
    "/attractions": {
        title: "Βοήθεια: Κοντινά Αξιοθέατα",
        tips: [
            "Επιλέξτε μια κάρτα αξιοθέατου για να κεντράρει αυτόματα ο χάρτης στο σημείο.",
            "Πατήστε 'Listen Guide' για να ξεκινήσει η ηχητική ξενάγηση.",
            "Πατήστε την καρδιά (🤍/❤️) για να αποθηκεύσετε το αξιοθέατο στα αγαπημένα σας."
        ]
    },
    "/coffee-ordering": {
        title: "Βοήθεια: Παραγγελίες Cafe & Snacks",
        tips: [
            "Επιλέξτε τη συνεργαζόμενη καφετέρια από τις διαθέσιμες καρτέλες στο επάνω μέρος.",
            "Προσθέστε ροφήματα ή γεύματα στο καλάθι με τα κουμπιά (+) και (-).",
            "Ελέγξτε τη στάση παράδοσης όπου ο διανομέας θα φέρει την παραγγελία σας.",
            "Η πληρωμή γίνεται αποκλειστικά μέσω πιστωτικής/χρεωστικής κάρτας κατά την ολοκλήρωση."
        ]
    },
    "/walking-tour": {
        title: "Βοήθεια: Walking Tour GPS",
        tips: [
            "Πατήστε 'Next Step' για να λάβετε το επόμενο βήμα οδηγιών και να μετακινηθεί ο δείκτης στον χάρτη.",
            "Ελέγχετε πάντα τον χρόνο αναχώρησης (Bus Departure Window).",
            "Πατήστε 'Guide Me Back to Bus' ανά πάσα στιγμή για ασφαλή πλοήγηση πίσω στη στάση."
        ]
    },
    "/driver": {
        title: "Βοήθεια: Πίνακας Οδηγού",
        tips: [
            "Έλεγχος κλιματισμού και υποβοήθησης οδήγησης με βάση τις καιρικές συνθήκες.",
            "Εποπτεία κατάστασης του λεωφορείου και ειδοποιήσεις ασφαλείας."
        ]
    },
    "/employee": {
        title: "Βοήθεια: Πίνακας Υπαλλήλου",
        tips: [
            "Διαχείριση και ενεργοποίηση του αυτόνομου ρομπότ καθαρισμού.",
            "Έλεγχος της έξυπνης οροφής και ενεργειακής απόδοσης του οχήματος."
        ]
    }
};

function HelpModal({ isOpen, onClose }) {
    const location = useLocation();

    if (!isOpen) return null;

    const currentHelp = HELP_DATA[location.pathname] || {
        title: "Γενική Βοήθεια Συστήματος Navio",
        tips: [
            "Χρησιμοποιήστε το κουμπί 'Back' επάνω αριστερά για επιστροφή στην προηγούμενη σελίδα.",
            "Η μπάρα πληροφοριών στο επάνω μέρος δείχνει πάντα την τρέχουσα και την επόμενη στάση."
        ]
    };

    return (
        <div className="help-backdrop" onClick={onClose}>
            <div className="help-modal" onClick={(e) => e.stopPropagation()}>
                <div className="help-modal-header">
                    <div className="help-modal-title-row">
                        <span className="help-icon">💡</span>
                        <h3>{currentHelp.title}</h3>
                    </div>
                    <button className="help-close-x" onClick={onClose}>&times;</button>
                </div>

                <div className="help-modal-body">
                    <p className="help-subtitle">Οδηγίες χρήσης για την τρέχουσα οθόνη:</p>
                    <ul className="help-tips-list">
                        {currentHelp.tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                </div>

                <div className="help-modal-footer">
                    <button className="btn-help-ok" onClick={onClose}>
                        Κατάλαβα
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HelpModal;