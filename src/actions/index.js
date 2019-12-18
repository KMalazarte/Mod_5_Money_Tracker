export * from './user'

// ACTIONS CAN ALSO HAVE PAYLOADS

export const changePurchases = () => {
  return {
    type: "CHANGEPURCHASES"
  }
}

store.dispatch( ( dispatch ) => {
  dispatch ( { type: 'LOADING'} )

  fetch(input: 'http://localhost:3000/${localStorage.user_id}/purchases')
  .then(onfulfilled: response => response.json())
  .then(onfulfilled: jsonData => {

    dispatch ( { type: 'LOADED', payload: jsonData } )
  })
  .catch( onrejected: err =>  {

    dispatch( {type: 'FETCH_PURCHASE_ERRORS'} )
  } )
})
