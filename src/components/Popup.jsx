import React from "react";
import "./Popup.css";

function Popup({ selected, closePopup}) {
  const posterErr = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
  

  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Released})</span>
        </h2>
        <p className="rating">
          Rating: {selected.imdbRating} - Rated: {selected.Rated}
        </p>
        <h5>{selected.Genre}</h5>
        <div className="plot">
          <img
            src={selected.Poster}
            onError={(e) => {
              e.target.onError = null;
              e.target.src = posterErr;
            }}
            alt="poster"
          />
          <div className="description">
            <p>{selected.Plot}</p>
            <h3>
              Director: <span>{selected.Director}</span>
            </h3>
            <h3>
              Writer: <span>{selected.Writer}</span>
            </h3>
            <h3>
              Stars: <span> {selected.Actors}</span>
            </h3>
            <h3>
              Awards: <span>{selected.Awards}</span>{" "}
            </h3>
            <h3>
              Language: <span>{selected.Language}</span>{" "}
            </h3>
            <h3>
              Type: <span>{selected.Type}</span>{" "}
            </h3>
          </div>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
