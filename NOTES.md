### antd-solution

Simple, simple, simple.

So new, shining stuffs have progressed so much when we crumbling in our daily job.

Wake up, the world of frontend is so much different from a year ago. Or maybe even 6 months ago.

Doing stuff the new way:

1. router: @reach/router (Gatsby.js is switching to it)
2. data management: useReducers + new context api (currently planning: 1 for global states, 1 for each page)
3. data passing: new context api + useContext
4. code splitting at routes: suspense. Also with preload
5. api fetching / async management: custom hooks
6. css-grid. Cuz why not?

Let's build something simple, clear, powerful!

# 1.27

service: api,hooks,util
components: 一定是被多处复用的组件
pages:

1. 以每个页面为一个文件夹层叠摆放
2. 使用 hooks 封装所有的信息，包括 api 块。

# 2.12

状态管理最终决定使用 `dva-core` + `react-redux`

写了一个常用的 table CRUD 页面。用自定义 hook 和路由封装了表单状态的逻辑。要求规范是：

1. 表单接受添加和修改两个方法 props，名称必须是 `add` 和 `edit`
2. 表单所在路由必须是/form/:id(修改) 或者 /form/new(添加)
   考虑过在外部处理统一传入一个 onSubmit，但代码反而有点冗余。

需要解决的：antd 似乎还是整个包引入了，和解？

# Get Started

分析包大小：

```
yarn build
yarn see
```
