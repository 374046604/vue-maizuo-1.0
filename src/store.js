import Vue from 'vue'
import Vuex from 'vuex'
import com from './vue_x/modules/com'
import home from './vue_x/modules/home'
import detail from './vue_x/modules/detail'
import cinema from './vue_x/modules/cinema'
import film from './vue_x/modules/film'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        com,
        home,
        detail,
        cinema,
        film
    },
    strict:process.env.NODE_ENV !== 'production'
})

export default store;