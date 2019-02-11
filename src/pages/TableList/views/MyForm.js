import React from 'react'
import { Form, Input } from 'antd'
const FormItem = Form.Item

const MyForm = ({ formData, form }) => {
  return (
    <Form>
      {// Don't show field with no title, like id
      formData.map((d, index) => (
        <FormItem
          style={{ display: d.title ? 'inherit' : 'none' }}
          label={d.title}
          key={index}
        >
          {form.getFieldDecorator(d.key, {
            initialValue: d.value,
            rules: [
              {
                required: true,
                message: 'plz fill',
              },
            ],
          })(<Input />)}
        </FormItem>
      ))}
    </Form>
  )
}

const EnhancedMyForm = Form.create()(MyForm)

export default EnhancedMyForm
