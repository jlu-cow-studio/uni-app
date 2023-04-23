<template>
  <view class="content">
    <div class="info-content">
      <div class="item" @tap="goDetail()" v-for="(item,index) in dataList" :key="index">
        <div class="left">
          <img :src="item.prodImg" alt="">
        </div>
        <div class="right">
          <div class="details">
            <p><span>兽医阿华</span>一级专家</p>
            <p>禾丰动物医院</p>
            <p>专业：精通诊治各种牛皮肤病</p>
          </div>
          <div class="tip">
            <div class="tip-item">关注</div>
            <div class="tip-item">预约</div>
          </div>
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
    },
    data() {
      return {}
    },
    onLoad() {

    },
    methods: {
      goDetail() {
        uni.navigateTo({
          url: '/compontents/consult/consult'
        })
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
  }

  .info-content .item .left {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5px;
  }

  .info-content .item .left img {
    width: 100%;
    height: 100%;
  }

  .info-content .item .right {
    flex: 1;
    height: 110px;
  }

  .info-content .item .right .details {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 16px;
  }
  .info-content .item .right .details p{
    white-space: nowrap;
     text-overflow: ellipsis;
  }

  .info-content .item .right .details span {
    font-weight: 700;
    font-size: 20px;
    margin-right: 10px;
  }
  .info-content .item .right .tip{
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
    box-sizing: border-box;
  }
  .info-content .item .right .tip .tip-item{
    width: 20%;
    font-size: 12px;
    border: 1px solid #02A7F0;
    color: #02A7F0;
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    margin-right: 10px;
  }
</style>
