## redux: 管理状态的js库

### 1. 求和案列精简版

1. 去除 Count 组件自身的状态

2. src 下建立:

   -redux

   ​	-store.js

   ​	-count_reducer.js

3. Store.js

   1. 引入 redux 中的 createStore函数, 创建一个store
   2. createStore 调用时要传入一个为其服务的 reducer
   3. 暴露 store 对象

4. count_reducer.js:

   1. reducer 的本质是一个函数, 接收: preState, action, 返回加工后的状态

   2. reducer 有两个作用: 初始化状态, 加工状态

   3. reducer 被第一次调用时, 是store 自动触发的

      传递的 preState 是 undefined

      传递的 action 是: { type: '@@redux/init...', data }

5. 在index.js 中监测 store 中状态的改变, 一旦发生改变重新渲染 <App />

6. 注: redux只负责管理状态, 至于状态的改变驱动着页面的展示,要考完没自己写



### 2. 求和案列 redux 异步action 版

1. 明确: 延迟的动作不想交给组件自身, 想交给action
2. 何时需要异步 action, 想要对状态进行操作, 但是具体的数据 依靠异步任务返回
3. 具体编码:
   1. yarn add redux-thunk, 并配置在 store 中 (创建 store 的函数: createStore的第二个参数中)
   2. 创建 action 的函数不再返回一般对象, 而是一个函数,该函数中写异步任务
   3. 异步任务有结果后,分发一个同步的 action 去真正操作数据
4. 备注: 异步 action 不是必须要写的, 完全可以自己等待异步任务的结果再去分发同步的action



### 3. React-redux 模型图

1. 所有的UI组件都应该包裹一个容器组件, 他们是父子关系
2. 容器组件 是真正和 redux 打交道的, 里面可以随意的使用redux的api
3. UI组件中 不能使用任何 redux 的 api
4. 容器组件会传给 UI 组件: 
   1. redux 中所保存的状态
   2. 用于操作状态的方法
5. 备注: 容器给 UI 传递: 状态,操作状态的 方法, 均通过props 传递

Todo: p106