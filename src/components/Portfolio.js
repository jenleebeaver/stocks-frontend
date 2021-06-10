import React from 'react'
import Watchlist from './Watchlist.js'

const Portfolio = ({ watchlist }) => {
   
    return ( 
        <div>
            <h3 className="">
                {/* <u>{portfolio.portfolio_name}</u> */}
                <Watchlist data={watchlist}/>
            </h3>  
        </div>    
    )
}

export default Portfolio