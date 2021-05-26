import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
//curly braces are used when we don't have export default 
import {fetchPortfolios} from './actions/fetchPortfolios';
import PortfoliosContainer from './containers/PortfoliosContainer';

class App extends Component {

  // **testing access to fetch request 
  // componentDidMount() {
  // //here we would put a fetch request, but moved to actions/fetchPortfolios and are using fetchPortfolios as a prop
  // //passing in arg of action object
  // //testing fetchPortfolios
  // //this.props.fetchPortfolios({type: 'FETCH_PORTFOLIOS', payload: {s: '', p: '', updated_at: ''}})
  // }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <PortfoliosContainer />
      </div>
    );
  }
}

//updates redux store
const mapStateToProps = (state) => {
  return {
    portfolios: state.portfolios
  }
}

//can add mapDispatchToProps, but {fetchPortfolios} works the same. Sending data to store to act as props. 
export default connect(mapStateToProps, {fetchPortfolios})(App);
