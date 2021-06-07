import React, { Component } from 'react';
import Portfolios from '../components/Portfolios';
// import PortfolioInput from '../components/PortfolioInput';
import {connect} from 'react-redux';
import {fetchPortfolios} from '../actions/fetchPortfolios';
import PortfolioInput from '../components/PortfolioInput';

class PortfoliosContainer extends Component {
    state = {
        loading: true
    }

    //use props to connect to redux store. accesses fetchPortfolios which has fetch request to backend.  
    componentDidMount() {
        setTimeout(() => {
            this.props.fetchPortfolios()
            .then(x => this.setState({ loading: false }))
        }, Math.random() * 1000)
        
    }   

    render() {
        return (
            <>
            <div>
                <section className="max-w-6xl mx-auto mt-16">
                    {this.state.loading
                    ? ( <img width="100" height="100" src="https://media.giphy.com/media/l31p1SkNXGz3l1nwwu/giphy.gif" alt="Loading..." /> )
                    : ( <Portfolios portfolios={this.props.portfolios} /> )}
                </section>
            </div>
            <div>
                <PortfolioInput /> 
            </div>
            </>   
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