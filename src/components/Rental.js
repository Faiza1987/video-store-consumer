import React, { Component } from 'react';
import './Rental.css';
import axios from 'axios';


class Rental extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount(props) {
    //     console.log('I mounted! Here are my props: ', props);
    // };



      addDays = (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
    //   from https://stackoverflow.com/questions/563406/add-days-to-javascript-date


    // rentMovie = (movie, customer) => {


    // }

    render() {
        const { rentalCustomer, rentalMovie } = this.props;

        console.log(this.addDays(Date.now(), 7));

        return (
            <div>
                {rentalMovie && <div>{rentalMovie.title}</div>}
                {rentalCustomer && <div>{rentalCustomer.name}</div>}
            </div>
        )
    }
}

export default Rental;