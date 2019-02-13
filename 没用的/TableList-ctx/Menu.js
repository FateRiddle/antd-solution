import React, { useContext } from 'react'
import { Ctx } from './model'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'

function Menu() {
  const tableList = useContext(Ctx)

  const loadData = () => {
    console.log('object')
    tableList.add({
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    })
  }

  return (
    <div className="mb3 flex justify-end">
      <Button type="primary" onClick={loadData}>
        +
      </Button>
    </div>
  )
}

export default observer(Menu)
