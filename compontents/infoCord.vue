<template>
  <view class="content">
    <div class="info-content">
      <div class="item" @tap="goDetail()" v-for="(item,index) in dataList" :key="index">
        <div class="letf">
          <div class="title">{{item.title}}</div>
          <div class="l-content">
            <div class="user">
              <img :src="item.avatar" alt="">
              <div class="name">{{item.username}}</div>
            </div>
            <div class="time">{{item.time}}</div>
          </div>
        </div>
        <div class="right">
          <img :src="item.prodImg" alt="">
        </div>
      </div>
    </div>
  </view>
</template>

<script>
  export default {
    props: {
      dataList: {
        type: Array,
        default: []
      },
      activeName: {
        type: String,
        default: '推文'
      }
    },
    data() {
      return {}
    },
    onLoad() {

    },
    methods: {
      goDetail() {
        if(this.activeName === '推文'){
          uni.navigateTo({
            url: '/compontents/details/details'
          })
        }else if(this.activeName === '直播间'){
          uni.navigateTo({
            url: '/compontents/play/play'
          })
        }
      }
    }
  }
</script>

<style scoped>
  .info-content {
    width: 100%;
    margin-top: 15px;
    box-sizing: border-box;
  }

  .info-content .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #333333;
    margin-bottom: 10px;
    padding: 5px;
    padding-left: 15px;
  }

  .info-content .item .letf {
    height: 110px;
    display: flex;
    flex-direction: column;
  }

  .info-content .item .letf .title {
    height: 50%;
    font-size: 18px;
    font-weight: 700;
    line-height: 55px;
  }

  .info-content .item .l-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
  }

  .info-content .item .l-content .user {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .info-content .item .l-content .user img {
    margin-right: 10px;
  }

  .info-content .item .l-content .time {
    font-size: 12px;
    color: #aaa;
  }

  .info-content .item .right {
    width: 110px;
    height: 110px;
  }

  .info-content .item .right img {
    width: 100%;
    height: 100%;
  }
</style>
