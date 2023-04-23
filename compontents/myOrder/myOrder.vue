<template>
  <view class="my-order">
    <view class="item" v-for="item in orderList" :key="item.time">
      <view class="time">{{item.time}}</view>
      <div class="bottom">
        <view class="order">预约者：{{item.username}}</view>
        <view class="unorder">取消预约</view>
      </div>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        orderList: [
          {
            time: '2022年2月13号 14:00-16:00',
            username: '牛牛向前冲',
          },
          {
            time: '2022年2月13号 14:00-16:00',
            username: '牛牛向前冲',
          },
          {
            time: '2022年2月13号 14:00-16:00',
            username: '牛牛向前冲',
          },
          {
            time: '2022年2月13号 14:00-16:00',
            username: '牛牛向前冲',
          }
        ]
      }
    },
    methods: {
      
    }
  }
</script>

<style>
.my-order{
  padding: 10px 30rpx;
}
.item{
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  margin: 10rpx 0;
  padding: 20rpx;
  font-size: 32rpx;
  font-weight: 700;
  box-sizing: border-box;
}
.item .time{
  height: 40px;
  line-height: 40px;
}
.item .bottom{
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item .bottom .unorder{
  font-weight: normal;
  color: #02A7F0;
  border: 1px solid #02A7F0;
  border-radius: 20px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 28rpx;
}
</style>
