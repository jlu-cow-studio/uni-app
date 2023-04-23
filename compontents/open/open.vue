<template>
  <view class="open">
    <h2>直播基本信息：</h2>
    <div class="open-row">
      <h3>上传直播二维码：</h3>
      <div class="upload" >
        <span>+</span>
       <!-- <span  v-if="imgSrc1 == ''" >+</span>
        <img :src="imgSrc1" alt=""> -->
      </div>
    </div>
    <div class="open-row">
      <h3>直播时间：</h3><input name="deadlinetime" type="datetime-local" th:value="${deadlinetime}" th:min="${date}">

    </div>
    <div class="open-row">
      <h3>标题：</h3><input type="text" name="" id="">
    </div>
    <div class="open-row">
      <h3>描述：</h3>
      <textarea name="" id="" cols="6" rows="8"></textarea>
    </div>
    <button>发布</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .open{
    padding: 0 30rpx;
  }
  .open h2{
    margin-bottom: 30rpx;
  }
  .open input,textarea{
    flex: 1;
    border: 1px solid #ccc;
  }
  .open-row h3{
    white-space: nowrap;
  }
.open-row{
  display: flex;
  margin-bottom: 20rpx;
}
button{
  width: 70%;
  margin-top: 12rpx;
  color: #fff;
  font-size: 32rpx;
  font-weight: 700;
  background-color: #02A7F0;
}
.open-row:first-of-type{
  height: 50px;
  display: flex;
  align-items: center;
}
.open-row .upload {
    width: 35px;
    height: 35px;
    border: 5px dashed #ccc;
    border-radius: 10px;
    font-size: 50px;
    color: #ccc;
    text-align: center;
    line-height: 35px;
    margin: 8px;
  }
</style>
