<template>
  <view class="content">
    <!-- 搜索 -->
    <Search></Search>
    <!-- 内容 -->
    <ProducCart :dataList="dataList"></ProducCart>
  </view>
  <tabBar v-if="isShow" :tabbar="tabbar" :pagePath="'/pages/index/index'"></tabBar>
</template>

<script>
  import ProducCart from "@/compontents/produc-cart/produc-cart.vue"
  import Search from "@/compontents/search.vue"
  import tabBar from "@/compontents/tabBar.vue"
  import {
    user,
    farmers,
    servicer,
    doctorBar
  } from '@/util/tabBar.js';
  export default {
    data() {
      return {
        tabbar: [],
        isShow: true,
        dataList: [{
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          },
          {
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }, {
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }, {
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }
        ],

      }
    },
    components: {
      ProducCart,
      Search,
      tabBar
    },
    onReady() {
      this.tabbar = JSON.parse(uni.getStorageSync('tabBar'))
      this.getTabBar()
    },
    methods: {
      // 获取tabTar的数据
      getTabBar() {
        this.isShow = false;
        let token = uni.getStorageSync("uni_token")
        uni.hideTabBar({});
        if (token) {
          let role = JSON.parse(uni.getStorageSync("role"))
          console.log("role", role)
          // 0 普通用户  1 养牛户 2 服务商  3 兽医
          if (role == 0) {
            this.tabbar = user
          } else if (role == 1) {
            this.tabbar = farmers
          } else if (role == 2) {
            this.tabbar = servicer
          } else if (role == 3) {
            this.tabbar = doctorBar
          }
          uni.setStorageSync('tabBar', JSON.stringify(this.tabbar))
        } else {
          uni.reLaunch({
            url: "/pages/login/login"
          })
        }
        this.isShow = true;
      }
    },
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }
</style>
