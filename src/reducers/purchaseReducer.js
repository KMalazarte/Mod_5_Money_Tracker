// JUST AN EXAMPLE
const initialState = {
  loading:false,
  loaded: false,
  purchases: [],
  error
}

const middleware = applyMiddleware ( thunk )

const purchaseReducer = (state = [], action) => {
  switch(action.type) {
    case "CHANGEMONTH":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}


export default purchaseReducer
