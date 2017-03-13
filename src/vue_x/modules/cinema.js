import api from '../api'
import * as types from '../types'

// 创建一个对象来保存应用启动时的初始状态
const state = {
}
//同步的修改状态数据
const mutations = {
    // TODO: 放置我们的状态变更函数
    //状态修改函数
}
//异步的修改状态数据
const actions = {
    //context 代表整个的store
}
//getter 可以理解为计算属性
const getters = {
}
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default {
    state,
    actions,
    getters,
    mutations
}