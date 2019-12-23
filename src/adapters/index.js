// import { store } from '../store.js'
//
// export const fetchPurchases = () => store.dispatch((dispatch) => {
//   dispatch({type: "FETCH_PURCHASES_PENDING"})
//   fetch(`http://localhost:3000/${localStorage.user_id}/purchases`)
//     .then(resp => resp.json())
//     .then(purchaseArr => {
//     dispatch({type: "FETCH_PURCHASES_SUCCESS", payload: purchaseArr.purchase })
//   })
//    .catch(error => {
//      dispatch({type: "FETCH_PURCHASES_ERROR", payload: error})
//    })
// })
