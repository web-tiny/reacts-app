// 引入 contener 的左右手
// 引入 Count 的UI 组件
import CountUI from '../../pages/reactReduxExample/Count'

// 引入 store, 需要从 props 引入
// import store from '../../redux/store'

// 引入connect 用于连接 UI 组件与 redux
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/count_action'
import { INCREAMENT, DECREAMENT } from '../../redux/constant'

// 返回值的 对象的key作为 传递给 UI 组件的key
const mapStateToProps = state => ({ count: state })

// value 为 传递操作状态的方法
const mapDispatchToProps = (dispatch) => {
  return {
    [INCREAMENT]: (ownProps) => dispatch(increment(ownProps)),
    [DECREAMENT]: (ownProps) => dispatch(decrement(ownProps)),
    incrementAsync: (data, time) => dispatch(incrementAsync(data, time))
  }
}

// 暴露一个 conteiner 组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
