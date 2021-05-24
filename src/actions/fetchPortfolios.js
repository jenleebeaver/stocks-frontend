
//!check out some learn lessons examples
export function fetchPortfolios(action){
    console.log('inside fetch portfolios.')
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/portfolios', {
      method: 'GET'
        })
        //promise - response from request
        //return => arg
        .then(response => response.json())
        .then(portfolios => 
        //update redux store
        //dispatch action object with a type and payload and update redux store 
        dispatch({
            type: 'FETCH_PORTFOLIOS',
            payload: portfolios
        }))
    }
}

//dispatching action object. action -> reducer which returns new version of state based on action 
// dispatch(action)