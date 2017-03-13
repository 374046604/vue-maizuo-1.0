import api from '../api'
import * as types from '../types'

// 创建一个对象来保存应用启动时的初始状态
const state = {
    banner:[],
    nowplay:[],
    coming:[],
}
//同步的修改状态数据
const mutations = {
    // TODO: 放置我们的状态变更函数
    //状态修改函数
    [types.HOME_GET_BANNER_LIST](state,res){
        state.banner = res.billboards
    },
    [types.HOME_GET_NOWPLAYING_LIST](state,res){
        state.nowplay = res.films
    },
    [types.HOME_GET_COMINGSOON_LIST](state,res){
        state.coming = res.films
    },
    
}
//异步的修改状态数据
const actions = {
    //context 代表整个的store
    getBannerLists({commit},user) {
        api.getBannerList(function(res){
            commit(types.HOME_GET_BANNER_LIST,res.data)
        })
    },
    // 获取热映
    getNowPlayings:function({commit}){
        api.getNowPlaying(function(res){
            commit(types.HOME_GET_NOWPLAYING_LIST,res.data)
        })
    },
    // 获取即将上映
    getComingSoons:function({commit}){
        api.getComingSoon(function(res){
            commit(types.HOME_GET_COMINGSOON_LIST,res.data)
        })
    }
    
}
//getter 可以理解为计算属性
const getters = {
    //其实就是为了得到数据
    getBannerList: state => state.banner,
    getNowPlaying: state => state.nowplay,
    getComingSoon: state => state.coming,
}
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default {
    state,
    actions,
    getters,
    mutations
}