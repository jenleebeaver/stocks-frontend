import React, { Component } from 'react';
import Portfolios from '../components/Portfolios';
import PortfolioInput from '../components/PortfolioInput';
import {connect} from 'react-redux';
import {fetchPortfolios} from '../actions/fetchPortfolios';

class PortfoliosContainer extends Component {

    //use props to connect to redux store 
    componentDidMount(){
        this.props.fetchPortfolios()
    }

    render() {
        return (
            <div>
                Portfolios Container
                <PortfolioInput /> 
                <Portfolios />
            </div>
        )
    }
}

//sending data to store by getting access to props through state 
const mapStateToProps = state => {
    return {
        portfolios: state.portfolios
    }
}

export default connect(mapStateToProps, {fetchPortfolios})(PortfoliosContainer)
//render class container component in app.js