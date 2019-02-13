import { types } from 'mobx-state-tree'

const mockData = [
  {
    id: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    id: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    id: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]

export const TableListItem = types
  .model({
    id: types.number,
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
      self.items = mockData
    },
  }))
