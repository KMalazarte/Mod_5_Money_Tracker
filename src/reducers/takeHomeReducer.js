import { TAKE_HOME_EDITED } from '../actions'

const initialState = {
  takeHome: localStorage.monthly_take_home
}


const takeHomeReducer= (state = initialState, action) => {
  switch(action.type) {
    case TAKE_HOME_EDITED:
      return {
        ...state
      }
  }
}
