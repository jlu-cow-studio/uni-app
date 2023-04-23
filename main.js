import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
import {$http} from '@escook/request-miniprogram'

// 将 $http 挂载到顶级对象 uni
uni.$http = $http

// 设置请求根地址
// uni.$http.baseUrl = "/api"
uni.$http.baseUrl = "http://cowstudio2.wayne-lee.cn:3080"
// 请求拦截器
uni.$http.beforeRequest = function(options) {
  uni.showLoading({
    title: "数据加载中..."
  })
}
// 响应拦截器
uni.$http.afterRequest = function(optons) {
  uni.hideLoading()
}
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
