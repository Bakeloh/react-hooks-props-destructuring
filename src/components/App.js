import React from "react";
import MovieCard from "./MovieCard";


// PARENT
function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      {/* passing down props from the parent component */}
      <MovieCard title={title}  genres={genresArr} />
    </div>
  );
}

export default App;



// hardcoded, static data
// function MovieCard() {                             posterSrc={posterURL}
//   return (
//     <div className="movie-card">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM"
//         alt="Mad Max: Fury Road"
//       />
//       <h2>Mad Max: Fury Road</h2>
//       <small>Genres: Action, Adventure, Science Fiction, Thriller</small>
//     </div>
//   );
// }


// By using destructuring in our components, we can make the returned JSX elements easier to read, because we don't need to reference props.whatever everywhere.

// Destructuring also makes it easier to tell what props a component expects, since we can just look at the destructured parameters instead of reading through the whole component and looking for references to the props object.

// When we use destructuring, we can provide a default value for any prop keys we want, so that if the component doesn't receive those props from its parents, we can still render some default information.