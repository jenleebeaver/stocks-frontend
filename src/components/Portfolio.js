import React from 'react'
import SearchStockPrices from '../components/searchStockPrices.js';

const Portfolio = ({ portfolio }) => {
    return (
        <li className="" key={portfolio.id}> 
            <h3>
                <u>{portfolio.portfolio_name}</u>
            </h3> 
            {/* <PortfoliosTable portfolios={portfolio}/>  */}
            <SearchStockPrices />
        </li>       
    )
}

export default Portfolio