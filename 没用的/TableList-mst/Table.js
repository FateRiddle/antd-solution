import React, { useContext, useEffect } from 'react'
import { Table } from 'antd'
import { Ctx } from './context'
import { observer } from 'mobx-react-lite'

let actionField

const MyTable = ({ tableList }) => {
  const { columns } = useContext(Ctx)

  useEffect(() => {
    tableList.load()
  }, [])

  return (
    <Table
      rowKey={r => r.key}
      loading={false}
      boardered
      columns={[...columns, actionField]}
      dataSource={tableList.items}
    />
  )
}

export default observer(MyTable)

actionField = {
  title: 'Action',
  key: 'action',
  render: (text, record) => <span>Edit</span>,
}
