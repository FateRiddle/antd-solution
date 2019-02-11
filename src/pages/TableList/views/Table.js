import React, { useContext } from 'react'
import { Table } from 'antd'
import { usePopForm } from '../hooks'
import MyForm from './MyForm'
import Ctx from '../context'

let actionField

const MyTable = () => {
  const { data, loading, columns } = useContext(Ctx)
  return (
    <Table
      rowKey={r => r.key}
      loading={loading}
      boardered
      columns={[...columns, actionField]}
      dataSource={data}
    />
  )
}

export default MyTable

actionField = {
  title: 'Action',
  key: 'action',
  render: (text, record) => <Field text={text} record={record} />,
}

const Field = ({ text, record }) => {
  const { columns, actions } = useContext(Ctx)
  let formData = columns.map(c => ({
    title: c.title,
    key: c.dataIndex,
    value: record[c.dataIndex],
  }))
  formData = [...formData, { title: undefined, key: 'id', value: record.id }]
  const { toggle, Modal } = usePopForm()
  return (
    <React.Fragment>
      <span>
        <a href="javascript:;" onClick={toggle}>
          Edit
        </a>
      </span>
      <Modal title="Edit Info" submit={actions.editItem}>
        <MyForm formData={formData} />
      </Modal>
    </React.Fragment>
  )
}
