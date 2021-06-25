// 引入 createStore 专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
// 引入 redux-thunk, 用于支持异步 action
import thunk from 'redux-thunk'
// 使用 readux-devtools
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

export default createStore(
  reducers, 
  composeWithDevTools(applyMiddleware(thunk))
)