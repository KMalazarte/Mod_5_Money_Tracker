import { FETCH_PURCHASES_PENDING,
         FETCH_PURCHASES_SUCCESS,
         FETCH_PURCHASES_ERROR,
         FILTER_PURCHASES,
         PURCHASE_SUBMITTED,
         PURCHASE_EDITED,
         PURCHASE_DELETED } from '../actions'

const initialState = {
  pending:false,
  purchases: [],
  error: null
}

const purchaseReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PURCHASES_PENDING:
      return {
        ...state, ///make a copy of the old state with spread operator
        pending:true // update only the pending part of the initialState
      }
    case FETCH_PURCHASES_SUCCESS:
      return {
        ...state,
        pending: false,
        purchases: action.payload
      }
    case FETCH_PURCHASES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case PURCHASE_SUBMITTED:
      return {
        ...state,
        purchases: [...state.purchases, action.purObj]
      }
    case PURCHASE_EDITED:
      let newPurchases = state.purchases.filter( (purchase) => {
        return parseInt(action.id) !== purchase.id
      })
      return {
        ...state,
        purchases: newPurchases
      }
    case PURCHASE_DELETED:
      let afterDelete = state.purchases.filter( (purchase) => {
        return parseInt(action.id) !== purchase.id
      })
      return {
        ...state,
        purchases: afterDelete
      }
    default:
      return state;
  }
}


export default purchaseReducer
