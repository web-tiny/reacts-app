/**
 * 汇总 所有的 reducer
 */
import { combineReducers } from 'redux'

// 引入为 Count 组件服务的 reducer
import count from './count'
// 引入 Person 组件服务的 reducer
import person from './person'

// 汇总所有的 reducer 
export default combineReducers({
  count,
  person
})