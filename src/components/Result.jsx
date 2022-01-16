import React from "react";
import "./Result.css";

function Result({ result, openPopup }) {
  const posterErr = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";

  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img
        src={result.Poster}
        onError={(e) => {
          e.target.onError = null;
          e.target.src = posterErr;
        }}
        alt="poster"
      />
      <div className="desc">
        <h3>{result.Title}</h3>
        <hr/>
        <h5>
          Release Year:
          {result.Year}
        </h5>
      </div>
    </div>
  );
}

export default Result;
