import React, { createContext, useContext, useReducer, useEffect } from 'react'
import reducer, { initialState } from './reducer'

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const localData = localStorage.getItem('myList')
  const initialData = {
    ...initialState,
    myList: localData ? JSON.parse(localData) : [],
  }

  const [state, dispatch] = useReducer(reducer, initialData)

  // Ruaj çdo ndryshim të myList në localStorage
  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(state.myList))
  }, [state.myList])

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext)
