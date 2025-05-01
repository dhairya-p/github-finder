const AlertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        alert: action.payload
      }
    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: null
      }
    default:
      return this.state
  }
}

export default AlertReducer
