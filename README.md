# antd-solution

致力于使用 antd 写一套极简的后台管理系统模板。

## 技术栈

1. router: @reach/router (react-router 的原作者新作，Gatsby.js 使用)
2. 状态管理: 使用 dva-core + react-redux, 极简，独立，便于拥抱变化
3. code splitting: Suspense api

## 项目结构

- service: api(接口),hooks(公用 hooks),utils(其他公用函数)
- components: 多处复用的组件
- layout: 后台系统的基本布局组件，侧栏，顶栏，主内容区等的组件
- pages: 每个页面的组件。主开发区
- model: 每个页面对应一个 model，状态管理

## 开发一个页面的基本流程

1. 拷贝基础表单 CRUD 模板(后续添加各种其他模板)，改名为新组件名
2. 修改 routes.js，引入新组件
3. 修改 组件 index.js 头部的 SCHEMA 等常量、和尾部的 connect 状态管理
4. 写对应新页面的新 model
5. 写新用到的接口 api

# 命令流

分析包大小：

```
yarn build
yarn see
```
