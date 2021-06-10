import React, { Component } from 'react';
// import 'isomorphic-fetch';
import Portfolio from '../components/Portfolio.js'
import SearchStockPricesContainer from './searchStockPrices.js';
import SymbolLookupContainer from './symbolLookupContainer.js';


class PortfolioContainer extends Component {
    state = {
     loading: true,
     portfolio: []
    }

    componentDidMount(){
        const id = this.props.match.params.id
        fetch(`http://localhost:3000/api/v1/portfolios/${id}`)
        .then(res => res.json())
        .then(payload => this.setState({
            loading: false,
            portfolio: payload 
        }))
    }

    render() {
        return (
            <div className="stocks-container">
                <h1 className="text-center text-xl">
                    <b>{this.state.portfolio.portfolio_name}</b>
                </h1>
                <br/>
                <section className="max-w-6xl mx-auto mt-16">
                    {this.state.loading
                    ? ( <img width="100" height="100" src="https://media.giphy.com/media/l31p1SkNXGz3l1nwwu/giphy.gif" alt="Loading..." /> )
                    : (  <Portfolio watchlist={ this.state.portfolio.watchlist }/> )}
                </section>
                <SymbolLookupContainer />
                <SearchStockPricesContainer />
            </div>
        )
    }
}

export default PortfolioContainer;