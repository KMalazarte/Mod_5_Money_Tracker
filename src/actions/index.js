export * from './user'

// NOTE: ACTIONS CAN ALSO HAVE PAYLOADS

export const fetchPurchasesPending = () => {
  return {
    type: "FETCH_PRODUCTS_PENDING",
  }
}

export const fetchPurchasesSuccess = (purchases) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    purchases: purchases
  }
}

export const fetchProductsError = (error) => {
  return {
    type: "FETCH_PRODUCTS_ERROR",
    error: error
  }
}
