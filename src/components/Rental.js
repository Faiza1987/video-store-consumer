import React, { Component } from 'react';
import './Rental.css';
import axios from 'axios';


class Rental extends Component {
    constructor(props) {
        super(props);
    }

    
    
    
    addDays = (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    //   from https://stackoverflow.com/questions/563406/add-days-to-javascript-date
    
    
    // rentMovie = (movie, customer) => {
    //     axios.post(`http://localhost:3000/rentals/${movie}/check-out`, movie, customer, this.addDays(Date.now(), 7))
    //         .then((response) => {

    //             console.log(response.data);

                
    //         })
        

    // }

    render() {
        const { rentalCustomer, rentalMovie } = this.props;

        console.log(this.addDays(Date.now(), 7));

        return (
            <div>
                <div>Create a Rental</div>
                
                {rentalMovie && <div>{rentalMovie.title}</div>}
                {rentalCustomer && <div>{rentalCustomer.name}</div>}

                <div>
                    <button type='button' onClick={this.rentMovie}>Checkout Movie</button>
                </div>
            </div>
        )
    }
}

export default Rental;