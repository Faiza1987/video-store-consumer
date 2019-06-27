import React, { Component } from 'react';
import axios from 'axios';
import { thisExpression } from '@babel/types';

const SEARCH_MOVIES = "http://localhost:3000/movies?query="
// const ADD_MOVIE = "http://localhost:3000/movies/"

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      searchResults: [],
      error: null,
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
    console.log(this.state.title);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // call API request function here to pass in title
    this.findMovies(this.state.title);

    // reset form
    this.setState({
      title: '',
      searchResults: [],
    });
  }

  // NEEDS TO GET A GET REQUEST TO API
  findMovies = (title) => {
    console.log('Searching for: ', this.state.title)

    // NEED TO GET SEARCH TERM IN HERE FOR THE GET REQUEST
    axios.get(SEARCH_MOVIES + this.state.title)
      .then((response) => {
        console.log('TMDB movie response data', response.data);

        // Loop through the response data and push it into the searchResults array
        let searchedMovies = this.state.searchResults;
        response.data.map((movie, i) => {
          searchedMovies.push(movie);
        });

        this.setState({
          searchResults: searchedMovies,
        });

        console.log('searchReults: ', this.state.searchResults);

      }) // .then
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        })
      })
  }
  
  // NEEDS TO MAKE A POST REQUEST FOR SELECTED MOVIE FROM SEARCH RESULTS TO BE ADDED TO LIBRARY!
  addMovie = () => {
    const newMovieData = {
      title: this.props.newMovie.title,
      overview: this.props.newMovie.overview,
      release_date: this.props.newMovie.release_date,
      image_url: this.props.newMovie.image_url.slice(31),
      external_id: this.props.newMovie.external_id,
    };

    console.log('NEW MOVIE DATA: ', newMovieData);

    const {movies} = this.props;

    for(let movie in movies){

      if(movie.title !== newMovieData.title){

        axios.post("http://localhost:3000/movies/", newMovieData)
          .then((response) => {
    
            console.log("This is what response.data looks like from the API on a successful response", response.data);
    
          })
          .catch((error) => {
            this.setState({
              errorMessage: error.message,
            })
          })
          break;
      } else {
        console.log('Movie already exists');
      }
    }

  }

  addMovieAndClearDetails = () => {
    this.addMovie();
    this.props.clearNewMovieFromExternalLibraryDetailsCallback();
  }

  render(){
    const allResults = this.state.searchResults.map((movie, i) => {
      return (
        <div key={i}>
          <div onClick={this.props.onSelectMovie(movie)}> 
            {movie.title}
          </div>
        </div>
      );
    });

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3> Search for Movie </h3>
          <hr />
          <div>
            <input
              placeholder="Title"
              type="text"
              name="title"
              value={this.state.title}
              // defaultValue={this.state.title}
              onChange={this.onChangeHandler}
          />
          </div>

          <div>
            <button type="submit" > Search! </button>
          </div>
        </form>

        <div>{allResults}</div>

        <hr />


      
        {this.props.newMovie && <section>
          <img src={`${this.props.newMovie.image_url}`} alt={`${this.props.newMovie.title}`} />
          <div>{this.props.newMovie.image_url}</div>
          <div>Title: {this.props.newMovie.title}</div>
          <div>Overview: {this.props.newMovie.overview}</div>
          <div>Release date: {this.props.newMovie.release_date}</div>
        
          <div>
            <button type="button" onClick={this.addMovieAndClearDetails}> Add Movie </button>
          </div>
        </section>}

      


      </div>
    );


    
  }
}

export default Search;