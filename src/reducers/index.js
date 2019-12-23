import usersReducer from './usersReducer';
import purchaseReducer from './purchaseReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  purchases: purchaseReducer
})

export default rootReducer
