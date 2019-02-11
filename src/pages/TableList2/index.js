import React, { useEffect } from 'react'
import Table from './Table'
import Menu from './Menu'
import { Ctx, initContext } from './context'

function TableList() {
  const context = initContext()
  console.log(context)
  return (
    <Ctx.Provider value={context}>
      <div className="pa5">
        <Menu />
        <Table tableList={context.tableList} />
      </div>
    </Ctx.Provider>
  )
}

export default TableList
