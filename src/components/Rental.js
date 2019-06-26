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
    
    
    checkoutMovie = () => {

        const checkoutParams = {
            customer_id: this.props.rentalCustomer.id,
            due_date: this.addDays(Date.now(), 7)
        };

        console.log('Checkout date:', checkoutParams.due_date);


        console.log('selected customer in rental:', checkoutParams.customer_id);

        axios.post(`http://localhost:3000/rentals/${this.props.rentalMovie.title}/check-out`, checkoutParams)
            .then((response) => {

                console.log(response.data);

                
            })
        

    }

    render() {
        const { rentalCustomer, rentalMovie } = this.props;

        console.log(this.addDays(Date.now(), 7));

        return (
            <div>
                <div>Create a Rental</div>
                
                {rentalMovie && <div>{rentalMovie.title}</div>}
                {rentalCustomer && <div>{rentalCustomer.name}</div>}

                <div>
                    <button type='button' onClick={this.checkoutMovie}>Checkout Movie</button>
                </div>
            </div>
        )
    }
}

export default Rental;