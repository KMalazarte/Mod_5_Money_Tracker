import { FETCH_MONTHLIES_PENDING,
         FETCH_MONTHLIES_SUCCESS,
         FETCH_MONTHLIES_ERROR,
         MONTHLY_SUBMITTED,
         MONTHLY_EDITED,
         MONTHLY_DELETED } from '../actions'

const initialState = {
  pending:false,
  monthlies: [],
  error: null
}

const monthlyReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MONTHLIES_PENDING:
      return {
        ...state, ///make a copy of the old state with spread operator
        pending:true // update only the pending part of the initialState
      }
    case FETCH_MONTHLIES_SUCCESS:
      return {
        ...state,
        pending: false,
        monthlies: action.payload
      }
    case FETCH_MONTHLIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case MONTHLY_SUBMITTED:
      return {
        ...state,
        monthlies: [...state.monthlies, action.monthlyObj]
      }
    case MONTHLY_EDITED:
      let newMonthlies = state.monthlies.filter( (monthly) => {
        return parseInt(action.id) !== monthly.id
      })
      return {
        ...state,
        monthlies: newMonthlies
      }
    case MONTHLY_DELETED:
      let afterDelete = state.monthlies.filter( (monthly) => {
        return parseInt(action.id) !== monthly.id
      })
      return {
        ...state,
        monthlies: afterDelete
      }
    default:
      return state;
  }
}

// export const getPurchases = state => state.purchases;
// export const getPurchasesPending = state => state.pending;
// export const getPurchasesError = state => state.error;

export default monthlyReducer
