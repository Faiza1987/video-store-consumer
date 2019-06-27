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


            })
    }

    wrapperCheckoutProcess = () => {

        this.checkoutMovie();
        this.props.clearRentalDetailsCallback();
    }

    render() {
        const { rentalCustomer, rentalMovie } = this.props;

        console.log(this.addDays(Date.now(), 7));

        return (
            <div>

                <div>
                    <h3>Checkout A Movie</h3>


                    {rentalMovie && <div>
                        <h4>Movie</h4>
                        <img src={rentalMovie.image_url} alt={`${rentalMovie.title}`} />
                        <div>Title: {rentalMovie.title}</div>
                        <div>Summary: {rentalMovie.overview}</div>
                        <div>Release Date: {rentalMovie.release_date}</div>
                    </div>}

                    {rentalCustomer && <div>
                        <h4>Customer</h4>
                        <div>ID #: {rentalCustomer.id}</div>
                        <div>Name: {rentalCustomer.name}</div>
                        <div>Phone: {rentalCustomer.phone}</div>
                        <div>Credit: ${rentalCustomer.account_credit}</div>
                        <div>Movies Checkout Out: {rentalCustomer.movies_checked_out_count}</div>

                    </div>}
                    
                </div>

                <div>
                    <button type='button' onClick={this.wrapperCheckoutProcess}>Checkout Movie</button>
                </div>
            </div>
        )
    }
}

export default Rental;