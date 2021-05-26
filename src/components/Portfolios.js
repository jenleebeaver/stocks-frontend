//List of Portfolios
import React from 'react';
import PortfoliosTable from './portfoliosTable.js'

//functional. props need to be passed in as an arg unlike class components where we can call this.props 
//can also pass in specific props if neccessary 
const Portfolios = (props) => {
    //props is an object with portfolios -> array (being passed from Portfolios Container)
    return (
        <div>
            <h1>Portfolios</h1>
                {/* iterate over each portfolio and use JSX tags */}
               
                {props.portfolios.map(portfolio =>
                <ul key={portfolio.id} id="portfolio-list">
                    <li> 
                        <h1>{portfolio.username}</h1> 
                        <PortfoliosTable portfolios={portfolio}/> 
                    </li>  
                </ul>
            )}
        </div>
    )
}

export default Portfolios

