import React, { useState } from "react";
import "./CoffeeOrdering.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

const CAFES = [
    { id: "c1", name: "Acropolis Coffee Lab", nextStop: "Stop 4: Acropolis Museum" },
    { id: "c2", name: "Plaka Urban Roasters", nextStop: "Stop 5: Monastiraki" },
    { id: "c3", name: "Metro Snack & Brew", nextStop: "Stop 6: Syntagma" }
];

const MENU_ITEMS = [
    { id: 1, name: "Freddo Espresso", category: "Καφές", price: 3.20, icon: "☕" },
    { id: 2, name: "Freddo Cappuccino", category: "Καφές", price: 3.50, icon: "🥤" },
    { id: 3, name: "Φυσικός Χυμός Πορτοκάλι", category: "Ροφήματα", price: 3.00, icon: "🍊" },
    { id: 4, name: "Coca Cola (330ml)", category: "Αναψυκτικά", price: 1.80, icon: "🥤" },
    { id: 5, name: "Τοστ Γαλοπούλα - Τυρί", category: "Μικρά Γεύματα", price: 2.80, icon: "🥪" },
    { id: 6, name: "Κρουασάν Βουτύρου", category: "Μικρά Γεύματα", price: 2.20, icon: "🥐" }
];

function CoffeeOrdering() {
    const [selectedCafe, setSelectedCafe] = useState(CAFES[0]);
    const [cart, setCart] = useState({});
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleQuantity = (id, delta) => {
        setCart((prev) => {
            const current = (prev[id] || 0) + delta;
            const updated = { ...prev };
            if (current <= 0) {
                delete updated[id];
            } else {
                updated[id] = current;
            }
            return updated;
        });
    };

    const total = Object.entries(cart).reduce((sum, [id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === Number(id));
        return sum + (item ? item.price * qty : 0);
    }, 0);

    const handleCheckout = () => {
        if (total > 0) setIsConfirmed(true);
    };

    const handleReset = () => {
        setCart({});
        setIsConfirmed(false);
    };

    return (
        <div className="page coffee-ordering-page">
            <Header
                title="Παραγγελίες από Συνεργαζόμενες Καφετέριες"
                description="Παραγγείλτε ρόφημα ή γεύμα και παραλάβετέ το στην επόμενη στάση του λεωφορείου."
                backTo="/passenger"
            />

            <BusInfo />

            <div className="ordering-container">
                {/* Επιλογή Συνεργαζόμενης Καφετέριας */}
                <div className="cafe-selection-bar">
                    <span className="cafe-select-label">🏪 Επιλέξτε Καφετέρια:</span>
                    <div className="cafe-tabs">
                        {CAFES.map((cafe) => (
                            <button
                                key={cafe.id}
                                type="button"
                                className={`cafe-tab-btn ${selectedCafe.id === cafe.id ? "active" : ""}`}
                                onClick={() => setSelectedCafe(cafe)}
                            >
                                <strong>{cafe.name}</strong>
                                <small>Παράδοση: {cafe.nextStop}</small>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="ordering-main-grid">
                    {/* Μενού */}
                    <div className="menu-box">
                        <h2 className="section-title">Μενού: {selectedCafe.name}</h2>
                        <div className="menu-cards-grid">
                            {MENU_ITEMS.map((item) => {
                                const qty = cart[item.id] || 0;
                                return (
                                    <div key={item.id} className="menu-card">
                                        <div className="menu-card-icon">{item.icon}</div>
                                        <div className="menu-card-info">
                                            <h3>{item.name}</h3>
                                            <span className="category-pill">{item.category}</span>
                                            <span className="menu-price">€{item.price.toFixed(2)}</span>
                                        </div>
                                        <div className="qty-controls">
                                            <button
                                                type="button"
                                                onClick={() => handleQuantity(item.id, -1)}
                                                disabled={qty === 0}
                                            >
                                                -
                                            </button>
                                            <span className="qty-text">{qty}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleQuantity(item.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Καλάθι & Στάση Παράδοσης */}
                    <div className="checkout-box">
                        <div className="checkout-card">
                            <h2 className="checkout-title">Σύνοψη Παραγγελίας</h2>

                            {/* Σημαντική Ειδοποίηση Στάσης (Απαίτηση Εκφώνησης) */}
                            <div className="delivery-station-alert">
                                <span>📍 Στάση Παράδοσης:</span>
                                <strong>{selectedCafe.nextStop}</strong>
                                <small>Ο διανομέας θα παραδώσει την παραγγελία στη θέση σας κατά την άφιξη.</small>
                            </div>

                            {/* Λίστα Προϊόντων */}
                            <div className="order-items-list">
                                {Object.keys(cart).length === 0 ? (
                                    <p className="empty-cart">Το καλάθι σας είναι άδειο.</p>
                                ) : (
                                    Object.entries(cart).map(([id, qty]) => {
                                        const item = MENU_ITEMS.find((m) => m.id === Number(id));
                                        return (
                                            <div key={id} className="order-row">
                                                <span>{item.name} × {qty}</span>
                                                <strong>€{(item.price * qty).toFixed(2)}</strong>
                                            </div>
                                        );
                                    })
                                )}
                            </div>

                            <div className="cart-total">
                                <span>Σύνολο:</span>
                                <strong>€{total.toFixed(2)}</strong>
                            </div>

                            {/* Ένδειξη Τρόπου Πληρωμής (Μόνο Κάρτα) */}
                            <div className="payment-options">
                                <label className="payment-label">Τρόπος Πληρωμής:</label>
                                <div className="card-only-badge">
                                    💳 Χρέωση Πιστωτικής / Χρεωστικής Κάρτας
                                </div>
                            </div>

                            <button
                                type="button"
                                className="order-btn"
                                disabled={total === 0}
                                onClick={handleCheckout}
                            >
                                Ολοκλήρωση Παραγγελίας
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Επιβεβαίωση Παραγγελίας Modal */}
            {isConfirmed && (
                <div className="order-modal-backdrop">
                    <div className="order-modal-box">
                        <div className="modal-status-icon">✅</div>
                        <h3>Η παραγγελία καταχωρήθηκε!</h3>
                        <p className="modal-target-cafe">
                            Κατάστημα: <strong>{selectedCafe.name}</strong>
                        </p>
                        <div className="modal-delivery-box">
                            <span>Θα παραδοθεί στη στάση:</span>
                            <h4>{selectedCafe.nextStop}</h4>
                        </div>
                        <p className="modal-pay-info">
                            Πληρωμή: <strong>Χρέωση Κάρτας</strong> (€{total.toFixed(2)})
                        </p>
                        <button type="button" className="btn-modal-close" onClick={handleReset}>
                            Νέα Παραγγελία
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default CoffeeOrdering;