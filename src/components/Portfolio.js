import React from 'react'
// import SearchStockPrices from '../components/searchStockPrices.js';

const Portfolio = ({ portfolio }) => {
    return ( 
        <div>
            <h3 className="" key={portfolio.id}>
                <u>{portfolio.portfolio_name}</u>
            </h3> 
            {/* <PortfoliosTable portfolios={portfolio}/>  */}
            {/* <SearchStockPrices /> */}  
        </div>    
    )
}

export default Portfolio