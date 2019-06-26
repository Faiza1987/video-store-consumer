import React, { Component } from 'react';
import './Rental.css';
import axios from 'axios';


class Rental extends Component {
    constructor(props) {
        super(props);
    }
    


    componentDidMount(props) {
        console.log('I mounted! Here are my props: ', props);
    };

    render() {
        return (
            <div>I'm in rental!!!!!!</div>
        )
    }
}

export default Rental;