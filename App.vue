<script>
  import {
    getToken
  } from './util/auth';
  import {user,farmers,servicer,doctorBar} from '@/util/tabBar.js';
  export default {
    data() {
      return {
         tabBarList: []
      };
    },
    onLaunch: function() {
      //判断是否登录
      let token = getToken()
      if (!token) {
        //不存在则跳转至登录页
        uni.reLaunch({
          url: "/pages/login/login"
        })
      }
    },
    onShow() {
      let token = getToken()
      uni.hideTabBar({});
      if (token) {
        let role = JSON.parse(uni.getStorageSync("role"))
        console.log("role",role)
        // 0 普通用户  1 养牛户 2 服务商  3 兽医
        if (role == 0) {
          this.tabBarList=user
        }else if(role == 1){
          this.tabBarList= farmers
        }else if(role == 2){
          this.tabBarList=servicer
        }else if(role == 3){
          this.tabBarList=doctorBar
        }
        uni.setStorageSync('tabBar',JSON.stringify(this.tabBarList))
      } else {
        uni.reLaunch({
          url: "/pages/login/login"
        })
      }
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  /*每个页面公共css */
</style>
