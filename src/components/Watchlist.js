import React from 'react';

const Watchlist = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h2>Watchlist</h2>
            <ul>
                {data&&data.map(entry => (
                    <li key={entry}>
                        {entry}
                    </li>              
                ))}
            </ul>
        </div>
    )
}

export default Watchlist 