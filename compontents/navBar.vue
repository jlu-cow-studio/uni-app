<template>
  <view class="status_title">
    <div class="status_left">
      <image class="back" src="@/static/back.png" mode="widthFix" @click="back"></image>
      <div class="status_content">
        <image class="user-img" src="@/static/user.jpg" mode="widthFix"></image>
        <view class="username">紫色小妖精</view>
      </div>
    </div>
    <view class="status_right">
      <view class="care">关注</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  }
</script>

<style>
  /* 自定义状态栏 */
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
  }

  /* 自定义导航栏 */
  .status_title {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    padding: 0 16px;
    background-color: #FFFFFF;
    position: sticky;
    top: 0;
    z-index: 999;
    border-bottom: 1px solid #333;
  }

  .status_left {
    display: flex;
    align-items: center;
    width: 200px;
  }

  .back {
    width: 22px;
    margin-right: 10px;
  }

  .status_content {
    display: flex;
    align-items: center;
    height: 100%;
    width: 130px;
  }

  .user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .status_right {
    height: 100%;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .care {
    width: 50%;
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    color: #02A7F0;
    border: 1px solid #02A7F0;
  }
</style>