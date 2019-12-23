export * from './user'
export const FETCH_PURCHASES_PENDING = "FETCH_PURCHASES_PENDING"
export const FETCH_PURCHASES_SUCCESS = "FETCH_PURCHASES_SUCCESS"
export const FETCH_PURCHASES_ERROR = "FETCH_PURCHASES_ERROR"


// NOTE: ACTIONS CAN ALSO HAVE PAYLOADS
// WITH THUNK WE CAN RETURN A FUNCTION THAT USES DISPATCH


const fetchPurchasesPending = () => {
  return {
    type: FETCH_PURCHASES_PENDING
  }
}

const fetchPurchasesSuccess = (purchases) => {
  return {
    type: FETCH_PURCHASES_SUCCESS,
    purchases: purchases
  }
}

const fetchPurchasesError = (error) => {
  return {
    type: FETCH_PURCHASES_ERROR ,
    error: error
  }
}
