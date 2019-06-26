import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Library from './components/Library';
import Customers from './components/Customers';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCustomers: [],
      allMovies: [],
      tmdbId: null,
      customerId: null,
      movieId: null,
      errorMessage: null,
      // displayStatus: false
    }
  }


  // componentDidMount() {
  //   axios.get('http://localhost:3000/movies')
  //     .then((response) => {


  //       this.setState({
  //         allMovies: response.data,
  //       });

  //     })
  //     .catch((error) => {
  //       this.setState({
  //         errorMessage: error.message
  //       })
  //     })
  // }

  setAllMovies = (moviesArray) => {
    this.setState({
      allMovies: moviesArray,
    });
  }
  
  
  // toggleDisplayMovieList = () => {
  //   console.log("I'm in toggleAllMovies Function!");
  //   this.setState({
  //     displayMovieList: !this.state.displayMovieList,
  //   });
  // }
  
  selectMovie = (id) => {
    return () => {
      this.setState({
        movieId: id,
      });
    }
  }
  
  setAllCustomers = (customerArray) => {
    this.setState({
      allCustomers: customerArray,
    })
    console.log('hi', this.state.allCustomers);
  }
  

  render() {
    console.log(this.state.movieId);

    const {allCustomers, allMovies} = this.state;

    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/movies">Movies</Link>
            </li>

            <li>
            <Link to="/customers">Customers</Link>
            </li>

          </ul>

          <hr />

          <Route path="/" />
          <Route path="/movies" 
            render={(props) => 
              <Library 
                setAllMoviesCallback={this.setAllMovies}
                movies={allMovies}
                onSelectMovie={this.selectMovie}
                isAuthed={true} 
              />
            } 
          />
          <Route path="/customers"
          render={(props) => 
            <Customers
            setAllCustomersCallback={this.setAllCustomers}
            customers={allCustomers}
            isAuthed = {true}
          />
          }
          />
        </div>
      </Router>

    );
  }
  }

export default App;
