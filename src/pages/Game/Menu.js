import React from 'react'
import { Button } from 'antd'
import { Link } from '@reach/router'
import { connect } from 'react-redux'

const Menu = ({ load }) => {
  return (
    <div className="mb3 flex justify-end">
      <Button type="primary" className="mr2">
        <Link to="form/new">+</Link>
      </Button>
      <Button onClick={load}>刷新</Button>
    </div>
  )
}

const mapDispatch = {
  load: () => ({
    type: 'games/fetch',
  }),
}

export default connect(
  null,
  mapDispatch
)(Menu)
