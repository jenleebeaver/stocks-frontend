import React, { Component } from 'react';
//allows us to dispatch to store 
import {connect} from 'react-redux';
import {addPortfolio} from '../actions/addPortfolio.js'

class PortfolioInput extends Component {

    //local state not redux store 
    state = {
        portfolio_name: '',
        s: '',
        p: ''
        // created_at: '',
        // updated_at: ''    
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
           s: '',
           p: ''
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
                    <input type="text" 
                    placeholder="Enter symbol dummy data" 
                    value={this.state.s}
                    name="s"
                    onChange={this.handleSChange}/>
                    <input type="text" 
                    placeholder="Enter price dummy data " 
                    value={this.state.p}
                    name="p"
                    onChange={this.handlePChange}/>
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