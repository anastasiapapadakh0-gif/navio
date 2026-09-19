/* Επαναχρησιμοποιούμενο component.
   Προβάλλει σε πραγματικό χρόνο live
   εικόνα μέσα σε καρτέλα. */

import "./LiveImageView.css";

function LiveImageView({ title, image, placeholderText }) {
    return (
        <div className="liveview">
            <h3>{title}</h3>

            {image ? (
                <img
                    className="live-image"
                    src={image}
                    alt={title}
                />
            ) : (
                <div className="view-placeholder">
                    <p>{placeholderText}</p>
                </div>
            )}
        </div>
    );
}

export default LiveImageView;