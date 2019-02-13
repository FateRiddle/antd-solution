import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons'
import './index.scss'
import { Provider } from 'react-redux'
import App from './App'
import { configureStore } from './model'

function Root() {
  return (
    <Provider store={configureStore()}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
