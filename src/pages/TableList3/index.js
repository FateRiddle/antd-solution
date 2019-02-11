import React from 'react'
import TableList from './TableList'
import Menu from './Menu'
import { tableList, Ctx } from './model'

function Root() {
  return (
    <Ctx.Provider value={tableList}>
      <Menu />
      <TableList />
    </Ctx.Provider>
  )
}

export default Root
