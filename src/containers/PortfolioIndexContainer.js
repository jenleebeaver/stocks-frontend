import React, { Component } from 'react';
import Portfolios from '../components/Portfolios';
// import PortfolioInput from '../components/PortfolioInput';
import {connect} from 'react-redux';
import {fetchPortfolios} from '../actions/fetchPortfolios';

class PortfoliosContainer extends Component {
    state = {
        portfolios: [],
        loading: true,
    }

    //use props to connect to redux store. accesses fetchPortfolios which has fetch request to backend.  
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                portfolios: [
                    this.props.fetchPortfolios()
                ],
                loading: false,
            })
        }, 1000)
        }   

    render() {
        return (
            <section className="max-w-6xl mx-auto mt-16">
                {this.state.loading
                ? ( 'loading spinner' )
                : ( <Portfolios portfolios={this.state.portfolios} /> )}
            </section>
            // <div>
            //     {/* <PortfolioInput /> 
            //     <Portfolios portfolios={this.props.portfolios}/> */}
            // </div>
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