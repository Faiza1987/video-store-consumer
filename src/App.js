import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Library from './components/Library';
import Customers from './components/Customers';
import Search from './components/Search';
import Rental from './components/Rental';
import './App.css';
  



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCustomers: [],
      allMovies: [],
      tmdbId: null,
      selectedCustomer: null,
      selectedMovie: null,
      newMovie: null,
      errorMessage: null,
      successMessage: null,
    }
  }

  setAllMovies = (moviesArray) => {
    this.setState({
      allMovies: moviesArray,
    });
  }
  
  selectMovie = (movie) => {
    return () => {
      this.setState({
        selectedMovie: movie,
        successMessage: null,
      });
    }
  }

  selectNewMovieFromExternalLibrary = (movie) => {
    return () => {
      this.setState({
        newMovie: movie,
      });
    }
  }

  selectCustomer = (customer) => {
    // console.log(id);
    return () => {
      this.setState({
      selectedCustomer: customer,
      successMessage: null,
    })
  }
}
  
  setAllCustomers = (customerArray) => {
    this.setState({
      allCustomers: customerArray,
    })
    console.log('hi', this.state.allCustomers);
  }

  clearRentalDetails = () => {
  //  return () => {
    this.setState({
      selectedCustomer: null,
      selectedMovie: null,
      successMessage: 'Successful rental!'
    })
  }
  // }

  render() {
    console.log('Movie object: ', this.state.selectedMovie);

    // console.log('NEW Movie object: ', this.state.newMovie);

    // console.log('Customer object: ', this.state.selectedCustomer);

    const {allCustomers, allMovies, selectedCustomer, selectedMovie, successMessage } = this.state;

    return(
      <Router>
        <div className="nav">
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

            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>

          <hr />

          {successMessage && <div>{`${successMessage}`}</div>}
          
          {(selectedCustomer || selectedMovie) && <div className='rentalSummary'><Rental 
          rentalCustomer={selectedCustomer}
          rentalMovie={selectedMovie}
          clearRentalDetailsCallback={this.clearRentalDetails} /></div>}

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
            selectCustomerCallback={this.selectCustomer}
            isAuthed = {true}
          />}/>
          <Route path="/search" 
            render={(props) => 
              <Search 
                onSelectMovie={this.selectNewMovieFromExternalLibrary}
                newMovie={this.state.newMovie}
                movies={allMovies}
              />
            }
          />
        </div>
      </Router>

    );
  }
}


export default App;
