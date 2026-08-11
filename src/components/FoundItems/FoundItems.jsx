/* Επαναχρησιμοποιούμενο component.
   Εμφανίζει τα αντικείμενα που εντοπίζει
   το ρομπότ καθαρισμού κατά τη διάρκεια της διαδρομής.*/

import "./FoundItems.css";

function FoundItems({ foundItems }) {

    return (
        <div className="found-items">

            <h3>Found Items</h3>

            <div className="found-item">

                {foundItems.length === 0 ? (

                    <p>No valuable items found.</p>

                ) : (

                    <ol>
                        {foundItems.map((found, index) => (
                            <li key={index}>
                                {found.item} - Seat {found.seat}
                            </li>
                        ))}
                    </ol>

                )}

            </div>

        </div>
    );

}

export default FoundItems;