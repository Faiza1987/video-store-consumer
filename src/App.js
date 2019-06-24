import React, { Component } from 'react';
import axios from 'axios';

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
      errorMessage: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        console.log('this is response.data', response.data);

        this.setState({
          allMovies: response.data
        })
        console.log('im in component did mount', this.state.allMovies);

      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })

  }

  render() {







    return (
      <div>

        
      </div>
    );
  }
}

export default App;
