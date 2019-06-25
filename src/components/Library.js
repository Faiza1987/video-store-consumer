import React, { Component } from 'react';
import './Library.css';


const Library = (props) => {
  
  const mappedMovies = props.allMovies.map((movie, i) => {
    return(
      <button key={i} onClick={props.onSelectMovie(movie.id)} className="movie-button"> {movie.title} </button>
    );
  });


  return(
    <div>
      <section>
        <button type='button' onClick={props.toggleDisplayStatusCallback}>
          See All Movies
        </button>
      </section>
    
      {props.displayStatus && <section>
        {mappedMovies}
      </section>}

    </div>
    
  );
}

export default Library;