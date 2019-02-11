import { createContext } from 'react'
import { useSetState } from 'service/hooks'
import * as api from 'service/api'
import { v4 } from 'uuid'
import { message } from 'antd'

export default createContext()

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

export function initContext() {
  const delay = ms => new Promise(_ => setTimeout(_, ms))

  const [state, setState] = useSetState({ data: [], loading: false })

  const withRequest = func => async (...args) => {
    setState({ loading: true })
    await delay(1000)
    setState({ loading: false })
    if (Math.random() > 0.2) {
      return func(...args)
    } else {
      message.warning('Connection failure, plz try again')
    }
  }
  const loadData = async () => {
    setState({ loading: true })
    const res = await api.tableList.load()
    setState({
      data: res,
      loading: false,
    })
  }

  let editItem = values => {
    setState({ data: state.data.map(d => (d.key === values.key ? values : d)) })
  }

  let createItem = values => {
    setState({ data: [{ ...values, key: v4() }, ...state.data] })
  }

  createItem = withRequest(createItem)
  editItem = withRequest(editItem)

  return {
    ...state,
    columns,
    actions: {
      loadData,
      editItem,
      createItem,
    },
  }
}
