//responsible for updating parts of the store associated with portfolio
//reducer takes in previous state, action args and updates reducer acording to action typ 
//keep initial state as an array inside object 
export default function portfolioReducer(state = {portfolios: []}, action) {

    switch (action.type){
        case 'FETCH_PORTFOLIOS':
            //returning new version of action object (our new redux state)
            return {portfolios: action.payload}
        default:
            return state
    }
};
