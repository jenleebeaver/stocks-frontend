//List of Portfolios
import React from 'react';
// import PortfoliosTable from './portfoliosTable.js'
import {
  Link
} from "react-router-dom";

//functional. props need to be passed in as an arg unlike class components where we can call this.props 
//can also pass in specific props if neccessary 
const Portfolios = (props) => {
    //props is an object with portfolios -> array (being passed from Portfolios Container)
    return (
        <div>
            <h2>
                <b>Current Portfolios</b>
            </h2>
                {/* iterate over each portfolio and use JSX tags */}
            <ul>
                {props.portfolios.map(portfolio => (
                    <li key={portfolio.id}>
                    {/* <Portfolio key={portfolio.id} portfolio={portfolio} /> */}
                    <Link className="hover:underline" to={`/portfolio/${portfolio.id}`}>{ portfolio.portfolio_name }</Link>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default Portfolios

