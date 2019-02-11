import React, { useState } from 'react'
import { Layout, Menu, Icon } from 'antd'
import routes from '../routes'
import { navigate } from '@reach/router'
import './Sidebar.css'
const { Sider } = Layout
const SubMenu = Menu.SubMenu

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => setCollapsed(collapsed)
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="h3 w3 br-pill bg-light-red ma2" />
      <Menu theme="dark" defaultSelectedKeys={['1']}>
        {renderRoutes(routes)}
      </Menu>
    </Sider>
  )
}

export default Sidebar

function renderRoutes(routes, parent = null) {
  return routes.map(({ key, title, icon, path, children }) => {
    const fullPath = parent ? parent + path : path
    if (children) {
      return (
        <SubMenu
          key={key}
          title={
            <>
              {icon && <Icon type={icon} />}
              <span className="menu-item" to={fullPath}>
                {title}
              </span>
            </>
          }
        >
          {renderRoutes(children, fullPath)}
        </SubMenu>
      )
    }
    return (
      <Menu.Item key={key} onClick={() => navigate(fullPath)}>
        {icon && <Icon type={icon} />}
        <span className="menu-item">{title}</span>
      </Menu.Item>
    )
  })
}
