/* Σελίδα παραγγελίας από συνεργαζόμενη καφετέρια.
Επιτρέπει στους επιβάτες να επιλέγουν ροφήματα και σνακ, 
να ορίζουν τη στάση παράδοσης και να ολοκληρώνουν την πληρωμή με κάρτα. */

import React, { useState } from "react";
import "./CoffeeOrdering.css";
import Header from "../../components/Header/Header";
import BusInfo from "../../components/BusInfo/BusInfo";
import Footer from "../../components/Footer/Footer";

function CoffeeOrdering() {
    const [cart, setCart] = useState([]);
    const [selectedStop, setSelectedStop] = useState("Next Stop: Syntagma");
    const [paymentDone, setPaymentDone] = useState(false);
    const [cardNumber, setCardNumber] = useState("");

    const menuItems = [
        { id: 1, name: "Espresso / Cappuccino", category: "Coffee", price: 2.50 },
        { id: 2, name: "Iced Freddo Espresso", category: "Coffee", price: 3.00 },
        { id: 3, name: "Fresh Orange Juice", category: "Beverage", price: 3.50 },
        { id: 4, name: "Mineral Water (500ml)", category: "Beverage", price: 0.50 },
        { id: 5, name: "Turkey & Cheese Toast", category: "Snack", price: 2.80 },
        { id: 6, name: "Butter Croissant", category: "Snack", price: 2.00 }
    ];

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (indexToRemove) => {
        setCart(cart.filter((_, index) => index !== indexToRemove));
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    const handleCheckout = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert("Your cart is empty! Please select at least one item.");
            return;
        }
        if (cardNumber.trim().length < 4) {
            alert("Please enter a valid card number.");
            return;
        }
        setPaymentDone(true);
    };

    const resetOrder = () => {
        setCart([]);
        setPaymentDone(false);
        setCardNumber("");
    };

    return (
        <div className="page cafe-page">
            <Header
                title="Partner Cafe & Snacks"
                description="Order refreshments and pick them up freshly prepared at the next stop."
            />

            <BusInfo />

            <div className="cafe-container">
                {paymentDone ? (
                    <div className="order-success-card">
                        <div className="success-icon">✅</div>
                        <h2>Order Confirmed!</h2>
                        <p>Your order will be delivered to your bus seat at: <strong>{selectedStop}</strong></p>
                        <p>Total Paid: <strong>€{totalPrice}</strong></p>
                        <button className="cafe-btn new-order-btn" onClick={resetOrder}>
                            Make Another Order
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="menu-section">
                            <h3>Available Menu</h3>
                            <div className="menu-grid">
                                {menuItems.map((item) => (
                                    <div key={item.id} className="menu-card">
                                        <div className="menu-details">
                                            <h4>{item.name}</h4>
                                            <span className="category-tag">{item.category}</span>
                                            <p className="price">€{item.price.toFixed(2)}</p>
                                        </div>
                                        <button
                                            className="add-btn"
                                            onClick={() => addToCart(item)}
                                        >
                                            + Add
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="checkout-section">
                            <h3>Your Order</h3>
                            <div className="cart-list">
                                {cart.length === 0 ? (
                                    <p className="empty-cart-msg">No items selected yet.</p>
                                ) : (
                                    cart.map((item, idx) => (
                                        <div key={idx} className="cart-item">
                                            <span>{item.name}</span>
                                            <span>€{item.price.toFixed(2)}</span>
                                            <button
                                                className="remove-btn"
                                                onClick={() => removeFromCart(idx)}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="cart-total">
                                <strong>Total:</strong>
                                <strong>€{totalPrice}</strong>
                            </div>

                            <form onSubmit={handleCheckout} className="payment-form">
                                <label>Delivery Bus Stop:</label>
                                <select
                                    value={selectedStop}
                                    onChange={(e) => setSelectedStop(e.target.value)}
                                    className="cafe-input"
                                >
                                    <option value="Next Stop: Syntagma">Next Stop: Syntagma</option>
                                    <option value="Stop: Monastiraki">Stop: Monastiraki</option>
                                    <option value="Stop: Acropolis">Stop: Acropolis</option>
                                </select>

                                <label>Card Number (Simulation):</label>
                                <input
                                    type="text"
                                    placeholder="•••• •••• •••• 1234"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    className="cafe-input"
                                    required
                                />

                                <button
                                    type="submit"
                                    className="cafe-btn pay-btn"
                                    disabled={cart.length === 0}
                                >
                                    Pay with Card (€{totalPrice})
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default CoffeeOrdering;