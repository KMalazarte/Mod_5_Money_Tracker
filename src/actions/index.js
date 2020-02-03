export * from './user'
export const FETCH_PURCHASES_PENDING = "FETCH_PURCHASES_PENDING"
export const FETCH_PURCHASES_SUCCESS = "FETCH_PURCHASES_SUCCESS"
export const FETCH_PURCHASES_ERROR = "FETCH_PURCHASES_ERROR"
export const FETCH_MONTHLIES_PENDING = "FETCH_MONTHLIES_PENDING"
export const FETCH_MONTHLIES_SUCCESS = "FETCH_MONTHLIES_SUCCESS"
export const FETCH_MONTHLIES_ERROR = "FETCH_MONTHLIES_ERROR"
export const PURCHASE_SUBMITTED = "PURCHASE_SUBMITTED"
export const PURCHASE_EDITED = "PURCHASE_EDITED"
export const PURCHASE_DELETED = "PURCHASE_DELETED"
export const MONTHLY_SUBMITTED = "MONTHLY_SUBMITTED"
export const MONTHLY_EDITED = "MONTHLY_EDITED"
export const MONTHLY_DELETED = "MONTHLY_DELETED"


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
  return {
    type: PURCHASE_SUBMITTED,
    purObj: purObj
  }
}

const purchaseEdited = (id) => {
  return {
    type: PURCHASE_EDITED,
    id: id
  }
}

const purchaseDeleted = (id) => {
  return {
    type: PURCHASE_DELETED,
    id: id
  }
}

const monthlySubmitted = (monthlyObj) => {
  return {
    type: MONTHLY_SUBMITTED,
    monthlyObj: monthlyObj
  }
}

const monthlyEdited = (id) => {
  return {
    type: MONTHLY_EDITED,
    id: id
  }
}

const monthlyDeleted = (id) => {
  return {
    type: MONTHLY_DELETED,
    id: id
  }
}
