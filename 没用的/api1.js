import { message } from 'antd'
import { v4 } from 'uuid'
import { useState } from 'react'

const delay = ms => new Promise(_ => setTimeout(_, ms))

const mock = async ({ mockData, successMsg, failureMsg }) => {
  await delay(500)
  if (Math.random() > 0.1) {
    if (successMsg) message.success(successMsg)
    return mockData
  } else {
    if (failureMsg) message.error(failureMsg)
  }
}

const mockData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]

function getData({ url = ``, isMock }) {
  if (isMock) return mock
  return fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer',
  }).then(response => response.json())
}

function postData({ url = ``, data = {}, isMock }) {
  if (isMock) return mock
  // Default options are marked with *
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }).then(response => response.json()) // parses response to JSON
}

const api = {
  get: getData,
  post: postData,
}

export const tableList = {
  load: () =>
    api.get({ url: 'www.taobao.com', isMock: true })({
      mockData,
      successMsg: '成功',
      failureMsg: '报错',
    }),
}
