<template>
  <view class="mycontainer">
    <div class="the-header">
      <div class="top">
        <img src="../../static/user.jpg" alt="">
        <div class="the-detail">
          <div class="name">{{username}}</div>
          <div class="r-detail">
            <div class="role">{{role}}</div>
            <div class="address">{{address}}</div>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="item">
          <div class="count">356</div>
          <div class="txt">粉丝数</div>
        </div>
        <div class="item">
          <div class="count">2378</div>
          <div class="txt">余额</div>
        </div>
        <div class="item">
          <div class="count">15244</div>
          <div class="txt">收入</div>
        </div>
        <div class="item">
          <div class="count">4988</div>
          <div class="txt">支出</div>
        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="container">
      <div class="mytask">我的任务</div>
      <div class="mytask-content">
        <div class="task-item" @tap="goPage(item.path)" v-for="item in taskList" :key="item.content">
          <img :src="item.imgSrc" alt="">
          <div class="task-txt">{{item.content}}</div>
        </div>
      </div>
      <div class="check-item" @tap="goPage(item.path)" v-for="item in checkList" :key="item.title">{{item.title}}</div>
      <button @tap="loginout()">退出登录</button>
    </div>
  </view>
  <tabBar :tabbar="tabbar" :pagePath="'/pages/my/my'"></tabBar>
</template>

<script>
  import {
    setToken
  } from '../../util/auth';
  import tabBar from "@/compontents/tabBar.vue"
  import {
    user,
    farmers,
    servicer,
    doctor
  } from "@/util/myList.js"
  export default {
    data() {
      return {
        tabbar: [],
        username: '',
        address: '',
        role: '',
        taskList: [{
            imgSrc: '../../static/my1.jpg',
            content: '我的关注',
            path: '../../compontents/myCare/myCare'
          },
          {
            imgSrc: '../../static/my2.jpg',
            content: '我的喜欢',
            path: '../../compontents/myLike/myLike'
          },
          {
            imgSrc: '../../static/my3.jpg',
            content: '兴趣管理',
            path: '../../compontents/myInterest/myInterest'
          },
          {
            imgSrc: '../../static/my4.jpg',
            content: '虚拟充值',
            path: '../../compontents/myBuy/myBuy'
          }
        ],
        checkList: [],
      }
    },
    components: {
      tabBar
    },
    methods: {
      async getData() {
        const res = await uni.$http.post('/user/follow_count', {
          base: {
            logid: '',
            token: JSON.parse(uni.getStorageSync('token'))
          }
        })
        console.log(res)
      },
      getCheckList() {
        let role = JSON.parse(uni.getStorageSync("role"))
        // 0 普通用户  1 养牛户 2 服务商  3 兽医
        if (role == 0) {
          this.checkList = user
        } else if (role == 1) {
          this.checkList = farmers
        } else if (role == 2) {
          this.checkList = servicer
        } else if (role == 3) {
          this.checkList = doctor
        }
      },
      goPage(path) {
        uni.navigateTo({
          url: path
        })
      },
      loginout() {
        localStorage.setItem('userinfo', JSON.stringify("{}"))
        setToken('')
        uni.navigateTo({
          url: '/pages/login/login'
        })
      },

    },

    onReady() {
      this.tabbar = JSON.parse(uni.getStorageSync('tabBar'))
      let userinfo = JSON.parse(uni.getStorageSync('userinfo'));
      this.username = userinfo['username']
      this.address = userinfo['province'] + '-' + userinfo['city'] + '-' + userinfo['district']
      this.role = userinfo['role']
      this.getData()
      this.getCheckList();
    },

  }
</script>

<style>
  .mycontainer {
    margin-bottom: 300px;
    ;
  }

  .the-header {
    width: 100%;
    height: 200px;
    background-color: #02A7F0;
    padding: 10px 20px;
    box-sizing: border-box;
  }

  .the-header .top {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .the-header .top img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  .the-header .top .the-detail {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 70px;
  }

  .the-header .top .the-detail .name {
    font-size: 20px;
    font-weight: 700;
  }

  .the-header .top .the-detail .r-detail {
    display: flex;
  }

  .the-header .top .the-detail .role {
    width: 50px;
    overflow: hidden;
    margin-right: 10px;
  }

  .the-header .top .the-detail .r-detail .address {
    background-color: #CAF982;
    font-size: 14px;
    border-radius: 10px;
    padding: 0 3px;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .bottom .item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* 内容 */
  .container {
    padding: 15px;
  }

  .mytask {
    font-size: 20px;
    font-weight: 700;
  }

  .mytask-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #333;
  }

  .mytask-content .task-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
  }

  .mytask-content .task-item img {
    width: 30px;
    height: 30px;
  }

  .check-item {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #333;
  }

  .container button {
    background-color: #EC808D;
    margin-top: 25px;
    margin-bottom: 100upx;
  }
</style>
