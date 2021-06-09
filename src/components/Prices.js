import React from 'react';
import PricesTable from './pricesTable.js';

// c is current price 

const Price = ({
        prices
}) => {
    return (
        <div
            className="current-price">
                <h4 className="text-center text-l font-semibold">
                    Current Price:
                </h4>
                <p className="text-center">{prices.c}</p>
                <br/>
                <PricesTable prices={prices}/>
            {/* use shape for company Profile 2 data */}
            {/* <header>
                <a className="stock-link"
                    href="">
                        {symbol}
                </a>
                <br/>
                <span className="displaySymbol">
                    {displaySymbol}
                </span>
            </header>
            <blockquote>{description}</blockquote> */}
        </div>
    )
}

// const Stocks = ({ stocks }) => {
//     return (
//     <div className="stock-list">
//         {stocks.map(Stock)}
//     </div>
//     )
// }


// Stocks.defaultProps = {
//     stocks: []
// };

export default Price;
