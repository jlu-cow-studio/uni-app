<template>
  <navBar></navBar>
  <view class="consult">
    <view class="person_detail">
      <p><text>兽医阿华</text>一级专家</p>
      <p>禾丰动物医院</p>
      <p>专业：精通诊治各种牛皮肤病</p>
    </view>
    <view class="time_content">
      <view class="time">可预约时间：</view>
      <view class="time_item">
        <view class="t_detaile">2022年2月13号 14:00-16:00</view>
        <view class="t_txt">预约</view>
      </view>
    </view>
  </view>
</template>

<script>
  import navBar from "@/compontents/navBar.vue"
  export default {
    components: {
      navBar
    },
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.consult{
  width: 100%;
  padding: 30rpx;
  box-sizing: border-box;
}
.consult .person_detail{
  font-size: 40rpx;
  color: #333;
  line-height: 80rpx;
}
.consult .person_detail p{
  font-size: 40rpx;
  color: #333;
  line-height: 80rpx;
}
.consult .person_detail text{
  font-size: 56rpx;
  font-weight: 700;
  margin-right: 40rpx;
}
.consult .time_content .time{
  font-size: 36rpx;
  font-weight: 700;
  margin: 40rpx 0;
}
.consult .time_content .time_item{
  height: 60rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40rpx;
  border: 1rpx solid #333;
  padding: 10rpx;
}
.consult .time_content .time_item .t_txt{
  width: 140rpx;
  height: 50rpx;
  font-size: 36rpx;
  text-align: center;
  line-height: 50rpx;
  border-radius: 60rpx;
  color: #02A7F0;
  border: 2rpx solid #02A7F0;
}
</style>
