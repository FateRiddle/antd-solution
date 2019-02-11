import React, { useEffect } from 'react'
import Menu from './views/Menu'
import Table from './views/Table'
import Ctx from './context'
import { initContext } from './context'

const TableList = () => {
  const context = initContext()

  useEffect(() => {
    context.actions.loadData()
  }, [])

  return (
    <Ctx.Provider value={context}>
      <div className="pa3">
        <Menu />
        <Table />
      </div>
    </Ctx.Provider>
  )
}

export default TableList
