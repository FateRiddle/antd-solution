import React, { useContext, useLayoutEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Table } from 'antd'
import { Ctx } from './model'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => <span>edit</span>,
  },
]

function TableList() {
  const tableList = useContext(Ctx)

  const loadData = () => {
    tableList.add({
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    })
  }

  useLayoutEffect(loadData, [])

  return <Table columns={columns} dataSource={tableList.items} />
}

export default observer(TableList)
