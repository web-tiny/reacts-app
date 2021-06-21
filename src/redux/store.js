// 引入 createStore 专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'

// 引入为 Count 组件服务的 reducer
import countReducer from './reducers/count'

// 引入 redux-thunk, 用于支持异步 action
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))