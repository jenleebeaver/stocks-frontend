import React, { Component } from 'react';
// import 'isomorphic-fetch';
import Portfolio from '../components/Portfolio.js'
import SearchStockPricesContainer from './searchStockPrices.js';
import SymbolLookupContainer from './symbolLookupContainer.js';


class PortfolioContainer extends Component {
    state = {
     portfolio: []
    }

    componentDidMount(){
        const id = this.props.match.params.id
        fetch(`http://localhost:3000/api/v1/portfolios/${id}`)
        .then(res => res.json())
        .then(payload => this.setState({
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
                <Portfolio portfolio={ this.state.portfolio }/>
                <SymbolLookupContainer />
                <SearchStockPricesContainer />
            </div>
        )
    }
}

export default PortfolioContainer;