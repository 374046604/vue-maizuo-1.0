import api from '../api'
import * as types from '../types'

// 创建一个对象来保存应用启动时的初始状态
const state = {
    nowplaylist:[],
    cominglist:[],
    nowIndex:1,
    comIndex:1
}
//同步的修改状态数据
const mutations = {
    // TODO: 放置我们的状态变更函数
    //状态修改函数
    [types.HOME_GET_NOWPLAYING_LIST_1](state,res){
        //state.nowplaylist = res.films
        for(var i=(state.nowIndex-1)*10;i<state.nowIndex*10;i++){
            if(res.films[i]){
                state.nowplaylist.push(res.films[i]);
            }
        }
        state.nowIndex++
    },
    [types.HOME_GET_COMINGSOON_LIST_1](state,res){
        //state.nowplaylist = res.films
        for(var i=(state.comIndex-1)*10;i<state.comIndex*10;i++){
            if(res.films[i]){
                state.cominglist.push(res.films[i]);
            }
        }
        state.comIndex++
    }
}
//异步的修改状态数据
const actions = {
    //context 代表整个的store
    // 获取热映
    getNowPlayListAct:function({commit}){
        api.getNowPlayList(function(res){
            commit(types.HOME_GET_NOWPLAYING_LIST_1,res.data)
        })
    },
    // 获取即将上映
    getComingListAct:function({commit}){
        api.getComingList(function(res){
            commit(types.HOME_GET_COMINGSOON_LIST_1,res.data)
        })
    }
}
//getter 可以理解为计算属性
const getters = {
    getComingList: state => state.cominglist,
    getNowPlayList: state => state.nowplaylist,

}
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default {
    state,
    actions,
    getters,
    mutations
}