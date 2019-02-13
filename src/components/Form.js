import React from 'react'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item

function GameForm({ formData = [], form, id, add, edit }) {
  const goBack = () => window.history.back()
  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (err) return
      console.log('Received values of form: ', values)
      const onSubmit = id === 'new' ? add : edit
      Promise.resolve(onSubmit(values)).then(goBack)
    })
  }
  return (
    <div className="center" style={{ maxWidth: 800 }}>
      <Form>
        {formData.map(d => (
          <FormItem
            style={{ display: d.title ? 'inherit' : 'none' }}
            label={d.title}
            key={d.key}
          >
            {form.getFieldDecorator(d.key, {
              initialValue: d.value,
              rules:
                d.title && d.required !== false
                  ? [
                      {
                        required: true,
                        message: '请填写',
                      },
                    ]
                  : [],
            })(<Input />)}
          </FormItem>
        ))}
      </Form>
      <div className="flex justify-end">
        <Button onClick={goBack} className="mr3">
          返回
        </Button>
        <Button type="primary" onClick={handleSubmit}>
          提交
        </Button>
      </div>
    </div>
  )
}

export default Form.create()(GameForm)
