import { lazy } from 'react'
const Page1 = lazy(() => import('pages/Page1'))
const Page2 = lazy(() => import('pages/Page2'))
const TableList = lazy(() => import('pages/TableList'))
const TableList2 = lazy(() => import('pages/TableList2'))
const TableList3 = lazy(() => import('pages/TableList3'))

const routes = [
  {
    key: 1,
    title: 'Option1',
    icon: 'pie-chart',
    path: '/option1',
    Component: TableList,
  },
  {
    key: 2,
    title: 'Option2',
    icon: 'desktop',
    path: '/option2',
    Component: TableList3,
  },
  {
    key: 3,
    title: 'User',
    icon: 'user',
    path: '/user',
    children: [
      { key: 31, title: 'Tom', path: '/tom', Component: TableList2 },
      { key: 32, title: 'Bill', path: '/bill', Component: Page2 },
      { key: 33, title: 'Alex', path: '/alex', Component: Page2 },
    ],
  },
  {
    key: 4,
    title: 'Team',
    icon: 'team',
    path: '/team',
    children: [
      { key: 41, title: 'Team 1', path: '/1', Component: Page2 },
      { key: 42, title: 'Team 2', path: '/2', Component: Page2 },
    ],
  },
  { key: 5, title: 'File', icon: 'file', path: '/file', Component: Page1 },
]

export default routes
