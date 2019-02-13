import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import Table from './Table'
import NotFound from '../404'
import Form from 'components/Form'
import { Router } from '@reach/router'
import { useForm } from 'service/hooks'

const schema = [
  {
    key: 'id',
  },
  {
    title: '活动名称',
    key: 'name',
    placeholder: '填入活动名称',
  },
  {
    title: '活动类型',
    key: 'type',
    required: false,
    placeholder: '例如“酒店”',
  },
]

function Game({ games, load, location, loading }) {
  // 生成和根据path时时变化formData，自定义hooks
  const formData = useForm(schema, games, location.pathname)
  // 首次加载
  useEffect(() => {
    load()
  }, [])

  function MainPage() {
    return (
      <>
        <Menu />
        <Table loading={loading} data={games} />
      </>
    )
  }

  return (
    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
      <Router>
        <MainPage path="/" />
        <GameForm path="form/:id" formData={formData} />
        <NotFound default />
      </Router>
    </div>
  )
}

export default connect(
  ({ games, loading }) => ({
    games,
    loading: loading.models.games,
  }),
  {
    load: () => ({ type: 'games/fetch' }),
  }
)(Game)

const GameForm = connect(
  null,
  {
    add: () => ({ type: 'games/add' }),
    edit: () => ({ type: 'games/edit' }),
  }
)(Form)
