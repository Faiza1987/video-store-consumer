import React, { Component } from 'react';
import './Library.css';
import axios from 'axios';

class Library extends Component {
  constructor(props){
    super(props);

<<<<<<< HEAD
    this.state = {
      displayMovieList: false
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:3000/movies')
      .then((response) => {

        console.log('movie response.data', response.data);
=======
const Library = (props) => {

    const mappedMovies = props.allMovies.map((movie, i) => {
        return (

            <div key={i}>
                <div onClick={props.onSelectMovie(movie.id)}>
                    {movie.title}
                </div>
            </div>

    );
    });
>>>>>>> hki-customers

        this.props.setAllMoviesCallback(response.data);
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
  }

<<<<<<< HEAD
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
        <div key={i}>
          <div  
            onClick={onSelectMovie(movie.id)}> 
              {movie.title} 
          </div>
        </div>
      );
    });
    return(
      <div>
        <section >
          <button type='button' onClick={this.toggleDisplayMovieList} className="movie-list">
            See All Movies
          </button>
        </section>
      
        {displayMovieList && <section className="movies">
          {mappedMovies}
        </section>}
      </div>
    );
  }
=======
    return (
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
>>>>>>> hki-customers
}

export default Library;