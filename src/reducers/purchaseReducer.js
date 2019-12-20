import { fetchPurchasesPending, fetchPurchasesSuccess, fetchProductsError } from '../actions'

const initialState = {
  pending:false,
  purchases: [],
  error: null
}

const purchaseReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_PRODUCTS_PENDING":
      return {
        ...state,
        pending:true
      }
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        pending: false,
        purchases: action.payload
      }
    case "FETCH_PRODUCTS_ERROR":
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
