import React from "react";


function MovieCard({ 
  title, 
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres
 }) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}




// function MovieCard(props) {
//   return (
//     <div className="movie-card">
//       <img src={props.posterSrc} alt={props.title} />
//       <h2>{props.title}</h2>
//       <small>{props.genres.join(", ")}</small>
//     </div>
//   );
// }

export default MovieCard;


// hard-coded version

// function MovieCard({
//   title,
//   posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
//   genres,
// }) {
//   return (
//     <div className="movie-card">
//       <img src={posterSrc} alt={title} />
//       <h2>{title}</h2>
//       <small>{genres.join(", ")}</small>
//     </div>
//   );
// }
