// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vue_x'
import router from './router'

//自定义滚动指令
Vue.directive('scroll',{
  bind:function(el,binding){
    window.addEventListener('scroll',(el) => {
		//得到绑定的指令 scrollTop 添加监听
        let fnc = binding.value;
        fnc(el);
    })
  }
})

var obj=new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
