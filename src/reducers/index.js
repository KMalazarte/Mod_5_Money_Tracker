import usersReducer from './usersReducer';
import purchaseReducer from './purchaseReducer';
import monthlyReducer from './monthlyReducer'
import takeHomeReducer from './takeHomeReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  purchaseReducer: purchaseReducer,
  monthlyReducer: monthlyReducer,
  takeHomeReducer: takeHomeReducer
})

export default rootReducer
