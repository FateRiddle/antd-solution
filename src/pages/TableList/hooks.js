import React, { useState, useReducer } from 'react'
import { Form, Modal, Button } from 'antd'

export const usePopForm = () => {
  const [on, setOn] = useState(false)
  const toggle = () => setOn(on => !on)
  const MyButton = props => <Button {...props} onClick={toggle} />
  const _Modal = ({ submit, onOK, children, form, ...rest }) => {
    const handleSubmit = () => {
      if (submit !== undefined) {
        form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
            submit(values)
            toggle()
          }
        })
      }
    }
    return (
      <Modal
        {...rest}
        destroyOnClose
        visible={on}
        onOk={handleSubmit}
        onCancel={toggle}
        children={React.cloneElement(children, { form })}
      />
    )
  }
  const MyModal = Form.create()(_Modal)

  return {
    on,
    toggle,
    Button: MyButton,
    Modal: MyModal,
  }
}

export const useSetState = initState =>
  useReducer((state, newState) => ({ ...state, ...newState }), initState)
