import React from 'react';
// import {
//   Link
// } from "react-router-dom";

//functional. props need to be passed in as an arg unlike class components where we can call this.props 
//can also pass in specific props if neccessary 
const Cryptocurrencies = ({ data }) => {
    //props is an object with portfolios -> array (being passed from Portfolios Container)
    return (
        <div>
            <h2>
                <b>Supported Cryptocurrencies</b>
            </h2>
            {
                data.map((entry,i) => <p key={i}>{entry}</p>)
            }
        </div>
    )
}

export default Cryptocurrencies