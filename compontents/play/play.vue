<template>
  <!-- 自定义的导航栏 -->
  <navBar></navBar>
  <!-- 内容 -->
  <view class="play">
    <div class="title">一些你不可不知的养牛知识！</div>
    <div class="time">直播时间：2022年2月13号 14:00-16:00</div>
    <div class="person-content">
      <p>兽医阿华 一级专家</p>
      <p>禾丰动物医院</p>
      <p>专业：精通诊治各种牛皮肤病</p>
    </div>
    <div class="play-detail">
      <img src="../../static/tow.jpg" alt="">
      <div class="img-tip">请扫码观看直播</div>
    </div>
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


<style>
  .play {
    width: 100%;
    font-size: 20px;
    padding: 20px;
    color: #333;
  }

  .play .title {
    font-size: 24px;
    font-weight: 700;
  }

  .play .time {
    margin: 20px 0;
  }

  .play .play-detail {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
  }
</style>
