import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import {connect} from 'react-redux';
//curly braces are used when we don't have export default 
import {fetchPortfolios} from './actions/fetchPortfolios';
import PortfolioIndexContainer from './containers/PortfolioIndexContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import CryptoCurrencyIndexContainer from './containers/CryptocurrencyIndexContainer';
// import StocksContainer from './containers/StocksContainer';

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
          <Router>
           <nav>
             <NavLink 
              className="inline-block px-4 py-2 hover:underline"
              activeClassName="text-purple-300"
              exact to="/">
              Portfolios
            </NavLink>
            <NavLink 
              className="inline-block px-4 py-2"
              activeClassName="text-purple-300"
              exact to="/cryptocurrency">
               CryptoCurrency
            </NavLink>
           </nav>
          <Switch>
          <Route 
            exact 
            path="/portfolio/:id" 
            component={PortfolioContainer}
          />
            <Route exact path="/">
              <PortfolioIndexContainer />
            </Route>
            <Route path="/cryptocurrency">
              <CryptoCurrencyIndexContainer />
            </Route>
           </Switch>
        </Router>  
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <br/>
        <br/>
        {/* <StocksContainer /> */}
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
