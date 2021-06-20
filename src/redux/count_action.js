// 创建 anction 对象
import { INCREAMENT, DECREAMENT } from './constant'
// import store from './store'
export const increment = data => ({ type: INCREAMENT, data })
export const decrement = data => ({ type: DECREAMENT, data })
// 异步 action ,就是 action 值为函数, 异步 action 中,一般都会调用不同 action
export const incrementAsync = (data, time) => {
  // action 帮我们调用 返回函数,所以返回函数的参数就带有 dispatch 函数
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time)
  }
}