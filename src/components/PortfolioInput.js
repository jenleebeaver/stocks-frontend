import React, { Component } from 'react';
//allows us to dispatch to store 
import {connect} from 'react-redux';
import {addPortfolio} from '../actions/addPortfolio.js'

class PortfolioInput extends Component {

    //local state not redux store 
    state = {
        portfolio_name: '',
        created_at: '',
        updated_at: ''    
    }

    handlePortfolioNameChange = (e) => {
        this.setState({
            portfolio_name: e.target.value,
        })
    }

    handleSChange = (e) => {
        this.setState({
            s: e.target.value,
        })
    }

    handlePChange = (e) => {
        this.setState({
            p: e.target.value,
        })
    }

    handleSubmit = (e) => {
        //keeps our data in our inputs after submit and prevents page refresh
        e.preventDefault()
        this.props.addPortfolio(this.state)
        this.setState({
           portfolio_name: '',
           created_at: '',
           updated_at: '' 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* values give us control over the DOM in a controlled form  */}
                    <label>
                        <h4>Create a Portfolio</h4>
                    </label>
                    <input type="text" 
                    placeholder="Enter Portfolio Name" 
                    value={this.state.portfolio_name}
                    name="portfolio_name"
                    onChange={this.handlePortfolioNameChange}/>
                    <br/>
                    <br/>
                     <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

//no mapStateToProps so pass null because we don't need access to store
export default connect(null, {addPortfolio} )(PortfolioInput)