import { ADD_PERSON } from '../constant'
const initPersion = [{
  id: 1,
  name: 'tom',
  age: 18
}]
/**
 * reducer必须是一个纯函数:
 * 不能有网络请求,不能有输入输出设备
 * 
 * @param {*} preState 
 * @param {*} action 
 * @returns 
 */
export default function addPersion (preState = initPersion, action) {
  console.log('persion reducer')
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      // 注意: preState.unshift(data) 是不会更新视图的
      // 因为 此时 addPersion 不是一个纯函数
      return [data, ...preState]
    default:
      return preState
  }
}