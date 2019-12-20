import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions'

const initialState = {
  pending:false,
  purchases: [],
  error: null,
  pineapples: 0
}

const purchaseReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_PURCHASES_PENDING":
      return {
        ...state, ///make a copy of the old state with spread operator
        pending:true // update only the pending part of the initialState
      }
    case "FETCH_PURCHASES_SUCCESS":
      return {
        ...state,
        pending: false,
        purchases: action.payload
      }
    case "FETCH_PURCHASES_ERROR":
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export const getPurchases = state => state.purchases;
export const getPurchasesPending = state => state.pending;
export const getPurchasesError = state => state.error;

export default purchaseReducer
