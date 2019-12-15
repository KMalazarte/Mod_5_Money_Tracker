import usersReducer from './usersReducer';
import purchaseTrackerReducer from './purchaseTracker';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  purchaseTrackerReducer: purchaseTrackerReducer
})

export default rootReducer
