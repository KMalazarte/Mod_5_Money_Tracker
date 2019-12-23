// import { fetchPurchasesPending, fetchPurchasesSuccess, fetchPurchasesError } from '../actions'

// function fetchPurchases(dispatch) {
//   return dispatch => {
//     dispatch(fetchPurchasesPending())
//     console.log('%c INSIDE FETCH FOR FETCH PURCHASES ADAPTER', 'color: orange')
//     fetch(`http://localhost:3000/${localStorage.user_id}/purchases`)
//     .then(resp => resp.json())
//     .then(purchaseArr => {
//       if(purchaseArr.error) {
//         throw(purchaseArr.error)
//       }
//       dispatch(fetchPurchasesSuccess(purchaseArr.purchase))
//       return purchaseArr.purchase
//     })
//     .catch(error=> {
//       dispatch(fetchPurchasesError(error))
//     })
//   }
// }
