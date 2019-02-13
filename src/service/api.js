import axios from 'axios'

//host
const API_ROOT = '/api'

//setting up request
const request = axios.create({
  baseURL: API_ROOT,
})
//methods
// const encode = encodeURIComponent
const responseBody = res => res.data.recordset
const responseOutput = res => res.data

const ax = {
  del: url => request.delete(url).then(responseOutput),
  get: url => request.get(url).then(responseBody),
  put: (url, body) => request.put(url, body).then(responseOutput), //put is for update
  post: (url, body) => request.post(url, body).then(responseOutput), //post is for create
}

const Game = {
  // all: () => ax.get('/users'),
  // editName: ({ name, id }) => ax.put(`/users/${id}`, { name }),
  all: () => fetchState(),
  add: () => addState(),
  edit: () => editState(),
}

export default {
  request,
  Game,
}

const fakedb = [
  {
    id: '1',
    name: 'Booking红包小卡片',
    createdBy: '阿三',
    type: '酒店',
  },
  {
    id: '2',
    name: '商家私域配置',
    createdBy: '天天',
    type: '国际机票',
  },
  {
    id: '3',
    name: '机票自营活动',
    createdBy: '小绿',
    type: '度假',
  },
]

// mock
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const returnRandom = () => (Math.random() > 0.2 ? true : false)

const fetchState = () => delay(500).then(() => fakedb)
const addState = () => delay(500).then(returnRandom)
const editState = () => delay(500).then(returnRandom)
