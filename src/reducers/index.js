import usersReducer from './usersReducer';
import purchaseReducer from './purchaseReducer';
import monthlyReducer from './monthlyReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  purchaseReducer: purchaseReducer,
  monthlyReducer: monthlyReducer
})

export default rootReducer
