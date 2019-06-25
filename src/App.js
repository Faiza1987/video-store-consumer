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
      displayStatus: false
    }
  }


  componentDidMount() {
    console.log('I AM IN COMPONENT DID MOUNT')
    axios.get('http://localhost:3000/movies')
      .then((response) => {

        console.log('this is response.data', response.data);

        this.setState({
          allMovies: response.data,
        });

        console.log('im in component did mount', this.state.allMovies);

      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
  }

  toggleDisplayStatus = () => {
    console.log("I'm in toggleAllMovies Function!");
    this.setState({
      displayStatus: !this.state.displayStatus,
    });
  }

  render() {
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
          </ul>

          <hr />

          <Route path="/" />
          <Route path="/movies" 
            render={(props) => 
              <Library 
                allMovies={this.state.allMovies} displayStatus={this.state.displayStatus}toggleDisplayStatusCallback={this.toggleDisplayStatus} 
                isAuthed = { true} 
              />
            } 
          />
        </div>
      </Router>

      // <div>
      //   <Library
      //     allMovies={this.state.allMovies}
      //     displayStatus={this.state.displayStatus}
      //     toggleDisplayStatusCallback={this.toggleDisplayStatus}
          
      //   />
      // </div>
    );
  }
}

export default App;
