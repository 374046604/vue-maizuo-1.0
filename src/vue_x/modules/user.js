import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建一个对象来保存应用启动时的初始状态
const state = {
    // TODO: 放置初始状态
    //初始化数据为0
    count: 100,
    tests: 200,
    users: [{ user: '123', 'psw': '123' },
    { user: '123456', 'psw': '123456' }],
    loginOk:false
}
//同步的修改状态数据
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO: 放置我们的状态变更函数
    //状态修改函数
    isUser(state,user) {
        state.users.forEach(function(element,index) {
            if(element.user===user[0]){
                if(element.psw===user[1]){
                    state.loginOk=true
                }else{
                    state.loginOk=false
                }
            }
        });
    },
    
}
//异步的修改状态数据
const actions = {
    //context 代表整个的store
    isUsers({commit},user) {
        commit('isUser',user)
    }
}
//getter 可以理解为计算属性
const getters = {
    getLoginOk(state){
        return state.loginOk
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