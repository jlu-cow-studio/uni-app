<template>
  <view class="container">
    <div class="item" @tap="goDetail()" v-for="(item,index) in dataList" :key="index">
      <img :src="item.prodImg" alt="">
      <div class="title">{{item.title}}</div>
      <div class="user-box">
        <div class="user">
          <img :src="item.avatar" alt="">
          <view class="username">{{item.username}}</view>
        </div>
        <img :src="item.starImg" alt="">
        <text>{{item.starcount}}</text>
      </div>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props:{
      dataList: {
        type: Array,
        default: []
      },
      isDefault:{
        type: Boolean,
        default: true
      }
    },
    methods: {
      goDetail() {
        console.log('xxx')
        if(this.isDefault){
          uni.navigateTo({
            url: '/compontents/details/details'
          })
        }else{
          uni.navigateTo({
            url: '/compontents/updateGoods/updateGoods'
          })
        }
        
      }
    }
  }
</script>

<style>
/* 内容 */
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .container .item {
    width: 48%;
    border: 1px solid #333;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    padding: 5px;
    box-sizing: border-box;
  }

  .container .item img {
    width: 100%;
  }

  .container .item .title {
    margin: 10px 0;
  }

  .container .item .user-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container .item .user-box .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #aaa;
    font-size: 12px;
  }

  .container .item .user-box .user img {
    margin-right: 10px;
  }

  .container .item .user-box img {
    width: 25px;
    height: 25px;
  }

  .container .item .user-box text {
    font-size: 12px;
  }
</style>
