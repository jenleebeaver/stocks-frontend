import React, { Component } from 'react';
//adds fetch as a global 
import 'isomorphic-fetch';
import Prices from './Prices.js'
import finnhubClient from '../actions/finnhub_api';


export default class SearchStockPricesContainer extends Component {
 
    state = {
        searchSymbol: '',
        prices: ''
    };

    handleSearchInputChange = e =>
        this.setState({ searchSymbol: e.target.value });

    handleSubmit = e => {
        e.preventDefault();

        const value = this.state.searchSymbol;

        //Quote
        finnhubClient.quote(value, (error, data, response)     => {
            this.setState({ prices: data })
            console.log(data)
        });    
    };

    render() {
        return (
            <div className="search-prices">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">
                        <h4>Search Current Stock Price</h4>
                    </label>
                    <input id="search-input"
                        type="text"
                        placeholder="Search Current Stock Price Using Symbol"
                        style={{ width: 300}}
                        value={this.state.searchSymbol}
                        onChange={this.handleSearchInputChange}/>
                    <br/>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.prices === 'object' && this.state.prices.length > 0 && <h4> Current Stock Price By Search</h4>}
                <Prices prices={this.state.prices}/>
            </div>
        )
    }
}; 