import api from '../api'
import * as types from '../types'

// 创建一个对象来保存应用启动时的初始状态
const state = {
    title: '',
    isMenuOk:false,
    goTopType:false

}
//同步的修改状态数据
const mutations = {
    // TODO: 放置我们的状态变更函数
    //状态修改函数
    [types.SET_TITLE_NAME](state, title) {
        state.title = title
    },
    getMenuFun(state){
        state.isMenuOk=!state.isMenuOk
    },
    goTopShowFun(state,okOff){
        state.goTopType=okOff
    }
}
//异步的修改状态数据
const actions = {
    //context 代表整个的store
    //修改这个菜单
    getMenu({commit}){
        commit('getMenuFun')
    },
    goTopShow({commit},okOff){
        commit('goTopShowFun',okOff)
    }
}
//getter 可以理解为计算属性
const getters = {
    getTitleName(state) {
        return state.title
    },
    isMenuOks(state) {
        return state.isMenuOk
    },
    goTopTypes(state){
        return state.goTopType
    }

}
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default {
    state,
    actions,
    getters,
    mutations
}