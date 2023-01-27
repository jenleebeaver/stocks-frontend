import React from 'react';

const Result = ({
 data
}) => {

  const handleSubmit = e => {
    // e.preventDefault;
    console.log('test')
    console.log(data)
    fetch(data)
    .then(res => res.json())
    
  }

  return (
  
    <div
      // className="result"
      className="max-w-xs w-3/4 mx-auto mt-16 shadow-lg px-4 py-6 rounded-xl"
    >
       <h1 className="font-semibold">Display Symbol:</h1>
       <p>{data.displaySymbol}</p>
      <h2 className="font-semibold">Symbol:</h2> 
      <p>{data.symbol}</p>
      <h3 className="font-semibold">Type:</h3> 
      <p>{data.type}</p>
      <h4 className="font-semibold">Description:</h4><p>{data.description}</p>
      <br/>
      <button onClick={handleSubmit}
              className="w-full p-3 bg-purple-300 hover:bg-purple-400 transition-all duration-200 rounded-xl">
        Submit
      </button>
    </div>
  );
};

export default Result;