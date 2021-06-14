import React, { Component } from 'react';
//allows us to dispatch to store 
import {connect} from 'react-redux';
import {addPortfolio} from '../actions/addPortfolio.js'

class PortfolioInput extends Component {

    //local state not redux store 
    state = {
        portfolio_name: ''   
    }

    handlePortfolioNameChange = (e) => {
        this.setState({
            portfolio_name: e.target.value,
        })
    }

    handleSubmit = (e) => {
        //keeps our data in our inputs after submit and prevents page refresh
        e.preventDefault()
        this.props.addPortfolio(this.state)
        //clears our store after submit. asynchronous. 
        this.setState({
           portfolio_name: '' 
        })
    }

    render() {
        return (
            <div className="grid grid-cols-2">
                {/* work on padding with tailwindcss */}
                <form onSubmit={this.handleSubmit}
                    className="max-w-xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6 rounded-xl font-semibold">
                    {/* values give us control over the DOM in a controlled form  */}
                    <label>
                        <h4 className="text-center text-l">Create a Portfolio</h4>
                    </label>
                    <fieldset>
                        <input type="text" 
                            placeholder="Enter Portfolio Name" 
                            value={this.state.portfolio_name}
                            name="portfolio_name"
                            className="text-center w-full border p-4 my-4"
                            onChange={this.handlePortfolioNameChange}/>
                    </fieldset>
                    <br/>
                    <br/>
                     <button className="w-full p-3 bg-purple-300 hover:bg-purple-400 transition-all duration-200 rounded-xl"
                     type="submit">
                         Add Portfolio
                    </button>
                </form>
            </div>
        )
    }
}

//no mapStateToProps so pass null because we don't need access to store
export default connect(null, {addPortfolio} )(PortfolioInput)