//Coding Challenge 

//Step 1: import React
import React, { Component } from 'react';

//Step 2: Create, class, state, and input form for word
export default class Counter extends Component {

    state = {
        word_count: 0,
        input_val: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.input_val)
        var count = this.state.input_val.trim().length
        this.setState({
            word_count: this.state.word_count += count
        }) 
        // this.setState({
        //     word_count: ''
        // })
    }

    handleOnChange = (e) => {
        this.setState({
            input_val: e.target.value
        });
    }

    render() {
        return (
            <div className="grid grid-cols-2">
                <form onSubmit={this.handleSubmit}
                    className="max-w-xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6 rounded-xl font-semibold">
                    <label>
                        <h4 className="text-center text-l">Text Counter</h4>
                    </label>
                    <fieldset>
                        <input type="text"
                                placeholder="Enter Word"
                                name="word"
                                value={this.state.input_val}
                                className="text-center w-full border p-4 my-4"
                                onChange={this.handleOnChange}
                        />
                    </fieldset>
                    <div> {this.state.word_count.toString()} </div>
                    <br/>
                    <br/>
                    <button type="submit" 
                            className="w-full p-3 bg-purple-300 hover:bg-purple-400 transition-all duration-200 rounded-xl"
                    >
                        Count Word 
                    </button>
                </form>
            </div>
        )
    }
}