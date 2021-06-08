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

        console.log(value)
        //Quote
        finnhubClient.quote(value, (error, data, response)     => {
            console.log(error)
            this.setState({ prices: data })
            console.log(data)
        });    
    };

    render() {
        return (
            <div className="search-prices">
                <form onSubmit={this.handleSubmit}
                    className="max-w-xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6 rounded-xl font-semibold">
                    <label htmlFor="search-input">
                        <h4 className="text-center text-l">
                            Search Current Stock Price
                        </h4>
                    </label>
                    <input id="search-input"
                        type="text"
                        placeholder="Search Current Stock Price Using Symbol"
                        value={this.state.searchSymbol}
                        name="symbol-input"
                        className="text-center w-full border p-4 my-4"
                        onChange={this.handleSearchInputChange}/>
                    <br/>
                    <br />
                    <button type="submit"
                        className="w-full p-3 bg-purple-300 hover:bg-purple-400 transition-all duration-200 rounded-xl">
                            Submit
                    </button>
                </form>
                {typeof this.state.prices === 'object' && this.state.prices.length > 0 && <h4> Current Stock Price By Search</h4>}
                <br/>
                <br/>
                <Prices prices={this.state.prices}/>
            </div>
        )
    }
}; 