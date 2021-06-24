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



### 4. 求和案例 react-redux 基本使用

1. 明确两个概念

   1. UI组件, 不能使用任何redux的api,只负责页面的呈现,交互等.
   2. 容器组件: 负责和redux通行,将结果交给UI组件

2. 如何创建一个容器组件-----靠react-redux 的 connect 函数

   connect (mapStateToProps, mapDispatchToProps)(UI组件)

   ​	--mapStateToProps: 映射状态, 返回值是一个对象

   ​	--mapDispatchToProps: 映射操作状态的方法,返回值是一个对象

3. 备注: 

   1. 容器组件中的store是靠props 传进去的, 而不是在容器组件中直接引入
   2. **mapDispatchToProps 也可以是一个对象, react-redux 自动dispatch**

### 5. 求和案例 react-redux 优化

1. 容器组件 和 UI 组件整合成一个文件

2. 无需自己给容器组件传递store, 给 <App /> 包括一个<Provider store={store} /> 即可

3. 使用 react-redux 后,不用再自己检测 redux 中状态的变化, 容器组件可以自动完成的这个工作.

4. mapDispatchToProps  可以简写成一个对象

5. 一个组件要 和 redux ‘打交道’ 要经过哪几步 ?

   1. 定义好 UI 组件--- 不暴露

   2. 引入connect 生成一个容器组件, 并暴露出去,写法如下:

      ```jsx
      export default connect(
        state => ({ count: state }),
        // mapDispatchToProps 的简写, react-redux 自动 dispatch
        {
          [INCREAMENT]: increment,
          [DECREAMENT]: decrement,
          incrementAsync
        }
      )(Count)
      ```

   3. 在 UI 组件中通过this.props.xxx 读取和操作状态
   
6. 数据共享 p113
