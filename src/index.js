import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//compose combines middleWares
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
//where redux lives 

//enable Redux DevTools Extension 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//storing global data, sending action object -> reducers decide what to update -> return new store
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

//

ReactDOM.render(
  //strict mode highlights potential problems in application 
  <React.StrictMode>
    {/* Provider component makes Redux store available to any nested components that need access to the Redux store. Here we are providing store as a prop.  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//package.json has all of our react version info
