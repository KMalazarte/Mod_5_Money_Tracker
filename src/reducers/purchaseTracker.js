const purchaseTrackerReducer = (state = 0, action) => {
  switch(action.type) {
    case "CHANGEPURCHASES":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default purchaseTrackerReducer
