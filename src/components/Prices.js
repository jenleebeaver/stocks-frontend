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
        </div>
    )
}

export default Price;
