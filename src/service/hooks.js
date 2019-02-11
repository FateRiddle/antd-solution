import { useReducer } from 'react'

export const useSetState = initState =>
  useReducer((state, newState) => ({ ...state, ...newState }), initState)
