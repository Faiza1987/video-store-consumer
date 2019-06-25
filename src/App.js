import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import Library from './components/Library';
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
      <div>
        <Library
          allMovies={this.state.allMovies}
          displayStatus={this.state.displayStatus}
          toggleDisplayStatusCallback={this.toggleDisplayStatus}
          
        />
      </div>
    );
  }
}

export default App;
