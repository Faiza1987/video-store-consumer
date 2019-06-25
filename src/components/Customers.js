import React, { Component } from 'react';
import './Customers.css';
import axios from 'axios';

class Customers extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log('what is this.props', this.props);
       
        axios.get('http://localhost:3000/customers')
            .then((response) => {

                console.log('customer response.data', response.data);

                this.props.setAllCustomersCallback(response.data);
            })

    }



    onClickListCustomers = (props) => {

        console.log('This is in onClickListCustomers:', this.props.customers)
    }

    // mappedCustomers = props.customers.map((customer, i) => {
    //     return (
    //         <div key={i}>
    //             <div>{customer.name}</div>
    //         </div>
    //     )
    // });




    render() {
        return (

            <div>
                <div>
                    placeholder
                </div>

                <button type='button' onClick={this.onClickListCustomers}>List all Customers</button>

            </div >

        );

    }
}

export default Customers;