import React, { useState } from 'react'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import MainScreen from './components/MainScreen'
import './App.scss'

function App() {
  return (
    <Layout style={{}} className="App">
      <Sidebar />
      <MainScreen />
    </Layout>
  )
}

export default App
