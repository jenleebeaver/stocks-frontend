  
import React, { Component } from 'react';
import 'isomorphic-fetch';
import StockSymbolCard from '../components/StockSymbolCard';

function getSearch(searchTerm) {
    const BASE_URL =
    `https://finnhub.io/api/v1/search?q=${searchTerm}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`

    return BASE_URL
}


class SymbolLookupContainer extends Component {

    state = {
      searchTerm: '',
      results: []
    };
  
    handleSearchInputChange = event =>
      this.setState({ searchTerm: event.target.value });
  
    handleSubmit = event => {
      event.preventDefault();
      
        fetch(getSearch(this.state.searchTerm))
        .then(res => res.json())
        .then(res => res.result)
        // Filter 1
        // .then(res => res.includes(item => (item.description == this.state.searchTerm)))
        // Filter 2
        .then(res => res.filter(item => (item.type === "Common Stock")))
        .then(filteredRes => this.setState({ results: filteredRes }) );
        //No filter
        // .then(res => this.setState({ results: res }) );
    };
  
    render() {
      return (
        <div >
          <form onSubmit={this.handleSubmit}
            className="max-w-xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6 rounded-xl font-semibold">
            <label htmlFor="search-input">
                <h4 className="text-center text-l">
                    Search For Stock Symbol
                </h4>
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="Search For Stock Using Symbol"
              name="stock_symbol_input"
              className="text-center w-full border p-4 my-4"
              onChange={this.handleSearchInputChange}
            />
            <button className="w-full p-3 bg-purple-300 hover:bg-purple-400 transition-all duration-200 rounded-xl"
            type="submit">
                Submit
            </button>
          </form>
       
         <div className="grid grid-cols-5 grid-rows-3 gap-4">
            {this.state.results?.map(entry => 
            <StockSymbolCard data={entry} key={entry.id} />)
            }
         </div>
        </div>
      );
    }
  }
  
  export default SymbolLookupContainer;
  