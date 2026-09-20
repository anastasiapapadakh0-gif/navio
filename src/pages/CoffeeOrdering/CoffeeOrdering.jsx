/* Σελίδα παραγγελιών από συνεργαζόμενες καφετέριες.
   Επιτρέπει στον επιβάτη να επιλέξει cafe, προϊόντα,
   να συμπληρώσει στοιχεία κάρτας και να δει τη στάση παράδοσης
   μετά την ολοκλήρωση της παραγγελίας. */

import { useState } from "react";
import "./CoffeeOrdering.css";

import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

import cafes from "../../data/cafesData";
import menuItems from "../../data/menuItemsData";

// Κύριο component της σελίδας παραγγελιών.
// Περιλαμβάνει την επιλογή cafe, την επιλογή προϊόντων,
// τη φόρμα πληρωμής και το popup επιβεβαίωσης.

function CoffeeOrdering() {

    // Αποθηκεύει την καφετέρια που επιλέγει ο χρήστης (by default η πρώτη)
    const [selectedCafe, setSelectedCafe] = useState(cafes[0]);

    // Αποθηκεύει την παραγγελία του χρήστη
    const [cart, setCart] = useState({});

    // Αποθηκεύσει τα  στοιχεία πληρωμής
    const [paymentInfo, setPaymentInfo] = useState({
    email: "",
    cardName: "",
    cardNumber: "",
    cvv: ""
    });

    //Έλεγχος για την εμφάνιση του pop-up (by default false)
    const [isConfirmed, setIsConfirmed] = useState(false);

    // Ενημερώνει την ποσότητα ενός προϊόντος σύμφωνα με 2 παραμέτρους
    // (το product id και το αν μειώνεται ή αυξάνεται η ποσότητα)
    const handleQuantity = (id, change) => {

        setCart((previousCart) => {

            const currentQuantity = (previousCart[id] || 0) + change;
            const updatedCart = { ...previousCart };

            if (currentQuantity <= 0) {
                delete updatedCart[id];
            } else {
                updatedCart[id] = currentQuantity;
            }

            return updatedCart;
        });
    };

    // Υπολογίζει το συνολικό ποσό της παραγγελίας.
    // Διαβάζει τα προϊόντα από το cart, βρίσκει την τιμή τους από το menuItems
    // και πολλαπλασιάζει την τιμή με την ποσότητα.
    const total = Object.entries(cart).reduce((sum, [id, quantity]) => {
        const item = menuItems.find((menuItem) => menuItem.id === Number(id));

        if (!item) {
            return sum;
        }

        return sum + item.price * quantity;
    }, 0);

    // Έλεγχος αν έχουν συμπληρωθεί τα στοιχεία πληρωμής
    // Και αν έχουμε products
    // Ώστε να εμφανιστεί το conf button
    const isPaymentReady =
        paymentInfo.email.includes("@") &&
        paymentInfo.cardName.trim() !== "" &&
        paymentInfo.cardNumber.trim().length === 12 &&
        paymentInfo.cvv.trim().length === 3;

    const handleCheckout = () => {
        if (total > 0 && isPaymentReady) {
            setIsConfirmed(true);
        }
    };

    // Επαναφέρει τη σελίδα στην αρχική της κατάσταση.
    // Καθαρίζει την παραγγελία, τα στοιχεία πληρωμής
    // και κλείνει το popup επιβεβαίωσης.
    const handleReset = () => {
        setCart({});
        setPaymentInfo({
            email: "",
            cardName: "",
            cardNumber: "",
            cvv: ""
        });
        setIsConfirmed(false);
    };

    // Ενημερώνει τα στοιχεία πληρωμής.
    // Χρησιμοποιεί το name κάθε input για να αλλάξει
    // το αντίστοιχο πεδίο μέσα στο paymentInfo.
    const handlePaymentChange = (event) => {
    const { name, value } = event.target;

        setPaymentInfo((previousInfo) => ({
            ...previousInfo,
            [name]: value
        }));
};

    return (
        <div className="page coffee-ordering-page">
            <Header
                title="Cafe Ordering"
                description="Order drinks and snacks and pick them up at the next stop."
                backTo="/passenger"
            />

            <BusInfo />

            <div className="ordering-container">

                <div className="cafe-selection">
                    <h2 className="section-title">Choose Cafe</h2>

                    <div className="cafe-tabs">
                        {cafes.map((cafe) => (
                            <button
                                key={cafe.id}
                                type="button"
                                className={`cafe-tab-btn ${selectedCafe.id === cafe.id ? "active" : ""}`}
                                onClick={() => setSelectedCafe(cafe)}
                            >
                                <img
                                    src={cafe.logo}
                                    alt={cafe.name}
                                    className="cafe-logo"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="ordering-main-grid">

                    <div className="menu-section">
                        <h2 className="section-title">Menu</h2>

                        <div className="menu-cards-grid">
                            {menuItems.map((item) => {

                                const quantity = cart[item.id] || 0;

                                return (
                                    <div key={item.id} className="menu-card">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="menu-item-image"
                                        />

                                        <div className="menu-card-info">
                                            <h3>{item.name}</h3>
                                            <span className="category-pill">{item.category}</span>
                                            <span className="menu-price">€{item.price.toFixed(2)}</span>
                                        </div>

                                        <div className="qty-controls">
                                            <button
                                                type="button"
                                                onClick={() => handleQuantity(item.id, -1)}
                                                disabled={quantity === 0}
                                            >
                                                -
                                            </button>

                                            <span className="qty-text">{quantity}</span>

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

                    <div className="summary-section">
                        <h2 className="section-title">Order Summary</h2>

                        <div className="checkout-card">

                            <div className="order-items-list">
                                {Object.keys(cart).length === 0 ? (
                                    <p className="empty-cart">No items selected yet.</p>
                                ) : (
                                    Object.entries(cart).map(([id, quantity]) => {

                                        const item = menuItems.find((menuItem) => menuItem.id === Number(id));

                                        return (
                                            <div key={id} className="order-row">
                                                <span>{item.name} × {quantity}</span>
                                                <strong>€{(item.price * quantity).toFixed(2)}</strong>
                                            </div>
                                        );
                                    })
                                )}
                            </div>

                            <div className="cart-total">
                                <span>Total:</span>
                                <strong>€{total.toFixed(2)}</strong>
                            </div>

                            <div className="payment-form">
                                <label className="payment-label">Payment Details</label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={paymentInfo.email}
                                    onChange={handlePaymentChange}
                                />

                                <input
                                    type="text"
                                    name="cardName"
                                    placeholder="Full Name"
                                    value={paymentInfo.cardName}
                                    onChange={handlePaymentChange}
                                />

                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="12 digits"
                                    value={paymentInfo.cardNumber}
                                    onChange={handlePaymentChange}
                                    maxLength="12"
                                />

                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="3 digits"
                                    value={paymentInfo.cvv}
                                    onChange={handlePaymentChange}
                                    maxLength="3"
                                />
                            </div>

                            <button
                                type="button"
                                className="order-btn"
                                disabled={total === 0 || !isPaymentReady}
                                onClick={handleCheckout}
                            >
                                Confirm Order
                            </button>

                        </div>
                    </div>

                </div>
            </div>

            {isConfirmed && (
                <div className="order-popup-overlay">
                    <div className="order-popup">
                        <p className="order-popup-close" onClick={handleReset}>X</p>
                        <h3>Order Successful</h3>

                        <div className="order-popup-info">
                            <span>Pick up at</span>
                            <h4>{selectedCafe.nextStop}</h4>
                        </div>

                        <p className="order-popup-email">
                            Receipt will be sent to <strong>{paymentInfo.email}</strong>.
                        </p>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default CoffeeOrdering;