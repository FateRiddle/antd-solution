import { create } from 'dva-core'
import createLoading from 'dva-loading'
import games from './Game'

export const configureStore = () => {
  const app = create()
  // models
  app.model(games)
  // plugins
  app.use(createLoading())
  app.start()
  return app._store
}
