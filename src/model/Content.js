import api from 'service/api'
import { message } from 'antd'

const msgControl = (success, msg1, msg2) =>
  success ? message.success(msg1) : message.error(msg2)

const content = {
  namespace: 'content',
  state: [],
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(api.Content.all, payload)
      yield put({
        type: 'load',
        payload: response,
      })
    },
    *add({ payload }, { call, put }) {
      const success = yield call(api.Content.add, payload)
      msgControl(success, '添加成功', '添加失败')
      yield put({
        type: 'fetch',
      })
    },
    *edit({ payload }, { call, put }) {
      const success = yield call(api.Content.edit, payload)
      msgControl(success, '修改成功', '修改失败')
      yield put({
        type: 'fetch',
      })
    },
  },
  reducers: {
    load(state, { payload }) {
      return payload || []
    },
  },
}

export default content
