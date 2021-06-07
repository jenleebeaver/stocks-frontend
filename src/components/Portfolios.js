//List of Portfolios
import React from 'react';
// import PortfoliosTable from './portfoliosTable.js'
import Portfolio from './Portfolio.js'

//functional. props need to be passed in as an arg unlike class components where we can call this.props 
//can also pass in specific props if neccessary 
const Portfolios = (props) => {
    //props is an object with portfolios -> array (being passed from Portfolios Container)
    console.log(props.portfolios);
    return (
        <div>
            <h2>
                <b>Portfolios</b>
            </h2>
                {/* iterate over each portfolio and use JSX tags */}
            <ul>
                {props.portfolios.map(portfolio => (
                    <Portfolio key={portfolio.id} portfolio={portfolio} /> 
                ))}
            </ul>
        </div>
    )
}

export default Portfolios

