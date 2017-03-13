import api from '../api'
import * as types from '../types'

// 创建一个对象来保存应用启动时的初始状态
const state = {
    detail:null,
}
//同步的修改状态数据
const mutations = {
    // TODO: 放置我们的状态变更函数
    //状态修改函数
    [types.COM_CONF](state,settings){
        state.detail=settings
    },
}
//异步的修改状态数据
const actions = {
    //context 代表整个的store
    //获取影片详情并设置标题
    getFilmDetailId:function({commit},id){
        api.getFilmDetail(id,function(res){
            commit(types.COM_CONF,res.data.film)
            commit(types.SET_TITLE_NAME,res.data.film.name)
        })
    },
}
//getter 可以理解为计算属性
const getters = {
    getFilmDetails: state => state.detail,
}
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default {
    state,
    actions,
    getters,
    mutations
}