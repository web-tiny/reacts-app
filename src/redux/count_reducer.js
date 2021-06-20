/**
 * 该文件用于创建一个 为 Count 组件服务的 reducer, reducer
 * 的本质就是一个函数
 * 接收两个参数:
 * 1. 之前的状态,preState
 * 2. 动作对象 action
 */
import { INCREAMENT, DECREAMENT } from './constant'

let initData = 0
export default function countReducer (preState = initData, action) {
  const { type, data } = action
  switch (type) {
    case INCREAMENT:
      return preState + data
    case DECREAMENT:
      return preState - data
  
    default:
      return preState
  }
}
