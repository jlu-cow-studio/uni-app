<template>
  <view class="uni-tabbar">
    <view class="uni-tabbar__item" v-for="(item,index) in tabbar" :key="index" @tap="changeTab(item)">
      <view class="icon" :class="[item.fontIcon , item.pagePath == pagePath?'uni-active':'']"></view>
      <!-- 上面使用的是字体图标，解决切换页面的时候图标会闪的效果，毕竟每切换一个页面都会闪一下不太好看，可以切换使用下面的图片方式 -->
      <!-- <view v-if="false" class="uni-tabbar__bd">
        <view class="uni-tabbar__icon">
          <image v-if="item.pagePath == pagePath" class="uni-w-42 uni-h-42" mode="aspectFit"
            :src="item.selectedIconPath"></image>
          <image v-else class="uni-w-42 uni-h-42" mode="aspectFit" :src="item.iconPath"></image>
        </view>
      </view> -->
      <view class="uni-tabbar__label" :class="{'active': item.pagePath == pagePath}">
        {{item.text}}
      </view>
    </view>
  </view>
</template>

<script>
  import {user,farmers,servicer,doctorBar} from '@/util/tabBar.js';
  export default {
    props: {
      pagePath: {
        type: String,
        default: '/pages/index/index'
      },
      tabbar: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
        page: 'contact',
        showPage: false,
        containerHeight: 400,
      };
    },
    mounted() {
      console.log("xxx",this.tabbar)
      // this.tabbar = JSON.parse(uni.getStorageSync('tabBar'))
      // let token = uni.getStorageSync("uni_token")
      // uni.hideTabBar({});
      // if (token) {
      //   let role = uni.getStorageSync("role")
      //   console.log("index", role == 1)
      //   // 0 普通用户  1 养牛户 2 服务商  3 兽医
      //   if (role == 0) {
      //     this.tabbar = user
      //   } else if (role == 1) {
      //     this.tabbar = farmers
      //   } else if (role == 2) {
      //     this.tabbar = servicer
      //   } else if (role == 3) {
      //     this.tabbar = doctorBar
      //   }
      //   console.log(this.tabbar)
      // } else {
      //   uni.reLaunch({
      //     url: "/pages/login/login"
      //   })
      // }
    },
    methods: {
      changeTab(item) {
        console.log(item.pagePath)
        this.page = item.pagePath; // 这里使用reLaunch关闭所有的页面，打开新的栏目页面
        uni.reLaunch({
          url: this.page
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
  [nvue] uni-scroll-view,
  [nvue] uni-swiper-item,
  [nvue] uni-view {
    flex-direction: unset;
  }

  [nvue-dir-column] uni-swiper-item,
  [nvue-dir-column] uni-view {
    flex-direction: unset;
  }

  .uni-tabbar {
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 98upx;
    padding: 16upx 0;
    box-sizing: border-box;
    border-top: solid 1upx #ccc;
    background-color: #fff;
    box-shadow: 0px 0px 17upx 1upx rgba(206, 206, 206, 0.32);

    .uni-tabbar__item {
      display: block;
      line-height: 24upx;
      font-size: 20upx;
      text-align: center;
    }

    .uni-tabbar__icon {
      height: 42upx;
      line-height: 42upx;
      text-align: center;
    }

    .icon {
      display: inline-block;
    }

    .uni-tabbar__label {
      line-height: 24upx;
      font-size: 24upx;
      color: #999;

      &.active {
        color: #1ca6ec;
      }
    }
  }
</style>
