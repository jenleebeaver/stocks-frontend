import React from 'react';

const Result = ({
 data
}) => {
  return (

    <div
      // className="result"
      className="max-w-xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6 rounded-xl"
    >
       <h1 className="font-semibold">Display Symbol:</h1>
       <p>{data.displaySymbol}</p>
      <h2 className="font-semibold">Symbol:</h2> 
      <p>{data.symbol}</p>
      <h3 className="font-semibold">Type:</h3> 
      <p>{data.type}</p>
      <h4 className="font-semibold">Description:</h4><p>{data.description}</p>
    </div>
  );
};

export default Result;