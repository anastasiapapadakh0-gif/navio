/* Επαναχρησιμοποιούμενο component κάρτας.
Χρησιμοποιείται για την εμφάνιση διαθέσιμων λειτουργιών στην εφαρμογή.
Το περιεχόμενό του προσαρμόζεται μέσω props. */

import "./ActionCard.css";

function ActionCard({
    title,
    description,
    buttonText,
    background,
    onClick,
    buttonClass}) {

     return (

        <div className="action-card" style={{ backgroundImage: `url(${background})` }} onClick={onClick}>
            <h2>{title}</h2>
            <p>{description}</p>

            <button className={buttonClass}>
                {buttonText}
            </button>

        </div>
    );
}
export default ActionCard;
