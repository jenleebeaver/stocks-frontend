import React, { Component } from 'react';
import Cryptocurrencies from '../components/Cryptocurrencies';
import finnhubClient from '../actions/finnhub_api';

class CryptocurrencyIndexContainer extends Component {
    state = {
        loading: true,
        data: []
    }

    //use props to connect to redux store. accesses fetchCryptocurrencies which has fetch request to finnhub api.  
    componentDidMount() {
        finnhubClient.cryptoExchanges((error, data, response) => {
            this.setState({ data, loading: false })
            console.log(data)
        })
        // setTimeout(() => {
        //         .then(x => this.setState({ loading: false }))
        //     }, Math.random() * 1000)
        }     

    render() {
        return (
            <>
            <div>
                <section className="max-w-6xl mx-auto mt-16">
                    {this.state.loading
                    ? ( <img width="100" height="100" src="https://media.giphy.com/media/l31p1SkNXGz3l1nwwu/giphy.gif" alt="Loading..." /> )
                    : ( <Cryptocurrencies data={this.state.data} /> )}
                </section>
            </div>
            <div>
                {/* <PortfolioInput />  */}
            </div>
            </>   
        )
    }
}

export default CryptocurrencyIndexContainer
//render class container component in app.js