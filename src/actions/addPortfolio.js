export const addPortfolio = (data) => {

    //sending data to the reducer (store). Possible because of thunk.
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/portfolios', {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        })
        //convert string to object notation (json)
        .then(res => res.json())
        .then(portfolio => dispatch({type: 'ADD_PORTFOLIO', payload: portfolio}))
    }
}