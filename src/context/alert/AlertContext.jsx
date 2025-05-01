import { createContext, useReducer } from "react"
import AlertReducer from "./AlertReducer"


const AlertContext = createContext()

export const AlertProvider = ({children}) => {
  const initialState = {
    alert: null
  }
  const [state, dispatch] = useReducer(AlertReducer, initialState)
  
  // Set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {msg, type}
    })

    // Remove alert after 3 seconds
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT'
      }) 
    }, 2000);
  }

  return (
    <AlertContext.Provider value={{alert: state.alert, setAlert: setAlert}}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext



