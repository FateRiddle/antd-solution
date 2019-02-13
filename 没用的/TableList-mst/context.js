import { createContext } from 'react'
import { TableList } from './model'

export const Ctx = createContext()

const tableList = TableList.create({
  items: [],
})

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

// const useSetState = initState =>
//   useReducer((state, newState) => ({ ...state, ...newState }), initState)

export function initContext() {
  return {
    tableList,
    columns,
  }
}
