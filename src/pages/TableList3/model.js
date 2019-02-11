import { types } from 'mobx-state-tree'
import { createContext } from 'react'

const mockData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]

export const TableListItem = types
  .model({
    key: types.string,
    name: types.string,
    age: types.number,
    address: types.string,
  })
  .actions(self => ({
    changeName(name) {
      self.name = name
    },
    changeAge(price) {
      self.price = price
    },
    changeAddress(address) {
      self.address = address
    },
  }))

export const TableList = types
  .model({
    items: types.array(TableListItem),
  })
  .actions(self => ({
    add(item) {
      self.items.push(item)
    },
    load() {
      self.items.
      (mockData[0])
    },
  }))

export const tableList = TableList.create({
  items: [],
})

export const Ctx = createContext()
