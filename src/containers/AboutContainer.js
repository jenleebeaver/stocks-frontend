import React, { Component } from 'react';

export default class AboutContainer extends Component {

    render(){
        return (
            <div>
                <p className="text-center text-xl p-24">
                Stock app using the <a href="https://finnhub.io" className="text-purple-300 hover:underline">finnhub.io</a> API.

                Built by <a href="https://www.linkedin.com/in/jenniferleebeaver/" className="text-purple-300 hover:underline">Jennifer Beaver</a>. 
                </p>
            </div>
        )
    }
}