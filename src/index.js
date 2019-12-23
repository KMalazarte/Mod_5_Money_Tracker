import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import App from './App'

import rootReducer from './reducers'

// STORE IS THE GLOBALIZED STATE
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


store.dispatch((dispatch) => {
  dispatch({type: "FETCH_PURCHASES_PENDING"})
  fetch(`http://localhost:3000/${localStorage.user_id}/purchases`)
    .then(resp => resp.json())
    .then(purchaseArr => {
    dispatch({type: "FETCH_PURCHASES_SUCCESS", payload: purchaseArr.purchase })
  })
   .catch(error => {
     dispatch({type: "FETCH_PURCHASES_ERROR", payload: error})
   })
})


console.log(`%c INITIAL REDUX STORE`, 'color: orange', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
