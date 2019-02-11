import React from 'react'
import { Layout } from 'antd'
import { Router } from '@reach/router'
import ROUTES from '../routes'
import NotFound from '../pages/404'
import { Suspense } from 'react'
const { Content, Header, Footer } = Layout

function MainScreen() {
  return (
    <Layout>
      <Header style={{ background: '#fff' }} />
      <Content className="pt3 ph2">
        <Suspense fallback={null}>
          <Router>
            {renderRoutes(ROUTES)}
            <NotFound default />
          </Router>
        </Suspense>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default MainScreen

function renderRoutes(routes) {
  const Container = ({ children, path }) => <div path={path}>{children}</div>
  return routes.map(({ key, Component, path, children }) => {
    if (children) {
      return (
        <Container key={key} path={path}>
          {renderRoutes(children)}
        </Container>
      )
    }
    return <Component key={key} path={path} />
  })
}
