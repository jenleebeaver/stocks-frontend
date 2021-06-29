import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from 'react-router-dom';

export default class AboutContainer extends Component {

    render(){
        return (
            <div>
                <p className="text-center text-xl p-24">
                Stock app using the <a href="https://finnhub.io">finnhub.io</a> API.

                Built by <a href="https://www.linkedin.com/in/jenniferleebeaver/">Jennifer Beaver</a>. 
                </p>
            </div>
        )
    }
}