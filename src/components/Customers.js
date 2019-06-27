import React, { Component } from 'react';
import './Customers.css';
import axios from 'axios';

class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayCustomerList: true
        }

    }

    componentDidMount() {
        console.log('what is this.props', this.props);
       
        axios.get('http://localhost:3000/customers')
            .then((response) => {

                console.log('customer response.data', response.data);

                this.props.setAllCustomersCallback(response.data);
            })
    }


    // onClickListCustomers = (props) => {
    //     this.setState({
    //         displayCustomerList: true
    //     })
    // }

    
    render() {

        const {displayCustomerList} = this.state;
        const {customers} = this.props;

        const mappedCustomers = customers.map((customer, i) => {
            return (
                <div key={i} >
                    <div onClick={this.props.selectCustomerCallback(customer)}>{customer.name}</div>
                </div>
            )
        });


        return (

            <div>
                {displayCustomerList && <div>
                    {mappedCustomers}
                </div>}

                {/* <button type='button' onClick={this.onClickListCustomers}>List all Customers</button> */}

            </div >

        );

    }
}

export default Customers;