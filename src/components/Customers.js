import React, { Component } from 'react';
import './Customers.css';

const Customers = (props) => {

    const onClickListCustomers = () => {
        props.listAllCustomersCallback();
    }

    // const mappedCustomers = props.customers.map((customer, i) => {
    //     return (
    //         <div key={i}>
    //             <div>customer.name</div>

    //         </div>

    //     )
    // });

    return (

        <div>

            <button type='button' onClick={onClickListCustomers}>List all Customers</button>
            
        </div>

    );

}

export default Customers;