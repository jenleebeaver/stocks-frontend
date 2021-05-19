import './App.css';
import React, { Component } from 'react';

class App extends Component {

  //access fetch request 
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/portfolios', {
      method: 'GET'
    })
    //promise - response from request
    //return => arg
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    );
  }
}

export default App;
