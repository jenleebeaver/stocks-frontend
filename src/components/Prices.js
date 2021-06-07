import React from 'react';

// c is current price 

const Price = ({
        c
}) => {
    return (
        <div key={c}
            className="current-price">
                <h4>Current Price:</h4>
                {c}
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
