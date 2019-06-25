import React, { Component } from 'react';
import axios from 'axios';
import Library from './components/Library';
import Customers from './components/Customers';
import './App.css';
import { all } from 'q';

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

      // console.log('what is this?', this);
  }

  setAllCustomers = (customerArray) => {
    this.setState({
      allCustomers: customerArray,
    })
    console.log('hi', this.state.allCustomers);
  }

  // listAllCustomers = () => {
  //   axios.get('http://localhost:3000/customers')
  //     .then((response) => {

  //       console.log('customer response.data', response.data);

  //       this.setState({
  //         allCustomers: response.data,
  //       });

  //       console.log('in listAllCustomers', this.state.allCustomers);

  //     })
  //     .catch((error) => {
  //       this.setState({
  //         errorMessage: error.message
  //       })
  //     })
  // }

  render() {
    const { allMovies, allCustomers } = this.state;

    const mappedMovies = allMovies.map((movie, i) => {
      return <Library
        key={i}
        {...movie}
      />
    });




    return (
      <div>
        <h3>All Movies</h3>
        <div>
          {mappedMovies}

        </div>

        <div>
          <Customers
            setAllCustomersCallback={this.setAllCustomers}
            customers={allCustomers}
            

          />

        </div>


      </div>
    );
  }
}

export default App;
