export * from './user'
export const FETCH_PURCHASES_PENDING = "FETCH_PURCHASES_PENDING"
export const FETCH_PURCHASES_SUCCESS = "FETCH_PURCHASES_SUCCESS"
export const FETCH_PURCHASES_ERROR = "FETCH_PURCHASES_ERROR"
export const FETCH_MONTHLIES_PENDING = "FETCH_MONTHLIES_PENDING"
export const FETCH_MONTHLIES_SUCCESS = "FETCH_MONTHLIES_SUCCESS"
export const FETCH_MONTHLIES_ERROR = "FETCH_MONTHLIES_ERROR"
export const PURCHASE_SUBMITTED = "PURCHASE_SUBMITTED"


// NOTE: ACTIONS CAN ALSO HAVE PAYLOADS
// WITH THUNK WE CAN RETURN A FUNCTION THAT USES DISPATCH
// BELOW ARE ACTIONS CREATORS: FUNCTIONS THAT RETURN ACTIONS


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

const fetchMonthliesPending = () => {
  return {
    type: FETCH_MONTHLIES_PENDING
  }
}

const fetchMonthliesSuccess = (monthlies) => {
  return {
    type: FETCH_MONTHLIES_SUCCESS,
    monthlies: monthlies
  }
}

const fetchMonthliesError = (error) => {
  return {
    type: FETCH_MONTHLIES_ERROR,
    error: error
  }
}

const purchaseSubmitted = (purObj) => {
  console.log("submitted");
  return {
    type: PURCHASE_SUBMITTED,
    payload: purObj
  }
}
