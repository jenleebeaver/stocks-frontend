import React, { Component } from 'react';
// import 'isomorphic-fetch';


class StocksContainer extends Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         company_profile
    //     };
    // }

    // componentDidMount() {
    //     e.preventDefault();

    //     const value = this.state.searchSymbol;

    //     //Quote
    //     finnhubClient.quote(value, (error, data, response)     => {
    //         this.setState({ prices: data })
    //     });
    // }

    render() {
        return (
            <div className="stocks-container">
                <h2>Stocks Container</h2>
            </div>
        )
    }
}

export default StocksContainer;