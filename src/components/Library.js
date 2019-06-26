import React, { Component } from 'react';
import './Library.css';
import axios from 'axios';

class Library extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayMovieList: false
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:3000/movies')
      .then((response) => {

        console.log('movie response.data', response.data);

        this.props.setAllMoviesCallback(response.data);
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
  }

  toggleDisplayMovieList = (props) => {
    console.log("I'm in toggleAllMovies Function!");
    this.setState({
      displayMovieList: !this.state.displayMovieList,
    });
  }
  
  render() {
    const {displayMovieList} = this.state;
    const {movies, onSelectMovie} = this.props;

    const mappedMovies = movies.map((movie, i) => {
      return(
        <button key={i} onClick={onSelectMovie(movie.id)} className="movie-button"> {movie.title} </button>
      );
    });
    return(
      <div>
        <section>
          <button type='button' onClick={this.toggleDisplayMovieList}>
            See All Movies
          </button>
        </section>
      
        {displayMovieList && <section>
          {mappedMovies}
        </section>}
  
      </div>
      
    );
  }
}

export default Library;