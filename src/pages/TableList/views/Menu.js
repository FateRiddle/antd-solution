import React, { useContext } from 'react'
import { usePopForm } from '../hooks'
import MyForm from './MyForm'
import Ctx from '../context'

const Tools = ({ form }) => {
  const { Button, Modal } = usePopForm()
  const { columns, actions } = useContext(Ctx)
  const formData = columns
    ? columns.map(c => ({
        title: c.title,
        key: c.dataIndex,
        value: undefined,
      }))
    : []
  return (
    <div className="mb3 flex justify-end">
      <Button type="primary">+</Button>
      <Modal title="Create Info" submit={actions.createItem}>
        <MyForm formData={formData} />
      </Modal>
    </div>
  )
}

export default Tools
