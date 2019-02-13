import React from 'react'
import { Table } from 'antd'
import { Link } from '@reach/router'

function TestTable({ data, loading = false }) {
  const columns = [
    {
      title: '活动ID',
      dataIndex: 'id',
    },
    {
      title: '活动名称',
      dataIndex: 'name',
    },
    {
      title: '创建人',
      dataIndex: 'createdBy',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <div className="pointer">
          <Link to={'form/' + record.id}>编辑</Link>
        </div>
      ),
    },
  ]
  return (
    <Table
      rowKey={r => r.id}
      loading={loading}
      boardered
      columns={columns}
      dataSource={data}
    />
  )
}

export default TestTable
