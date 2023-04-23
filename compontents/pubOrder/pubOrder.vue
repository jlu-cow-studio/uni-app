<template>
  <view class="pubOrder">
    <h2>预约基本信息：</h2>
    <div class="pub-row"  v-for="(item,index) in pubList" :key="item">
      <div class="left">
        <div>请选择可预约时间：</div>
        <input name="deadlinetime" type="datetime-local" :value="item" th:min="${date}">
      </div>
      <div class="right" @tap="addOrJ(index === (pubList.length-1)?'+':'-',index)">{{index === (pubList.length-1)?'+':'-'}}</div>
    </div>
    <div class="pub-row">
      <div>描述：</div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <button @tap="pubOrder()">发布</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        pubList: ['2023-04-14T23:57','2023-04-14T23:57'],
        deadlinetime: '0',
      }
    },
    methods: {
      pubOrder(){
        console.log(this.deadlinetime)
      },
      addOrJ(item,index){
        if(item == '-'){
          this.pubList.splice(index, 1)
        }else{
          this.pubList.push('')
        }
      }
    }
  }
</script>

<style scoped>
.pubOrder{
  padding: 0 30rpx;
}
.pubOrder h2{
  margin: 10px 0;
}
.pubOrder .pub-row{
  display: flex;
  justify-content: space-between;
  font-size: 28rpx;
  font-weight: 700;
  margin-bottom: 30rpx;
}
.pubOrder .pub-row input,textarea{
  flex: 1;
  border: 1px solid #ccc;
  font-size: 14px;
  font-weight: normal;
}
.pubOrder .pub-row .left{
  width: 80%;
  display: flex;
}
button{
  background-color: #02A7F0;
  color: #fff;
  margin-top: 30px;
  width: 250px;
  border-radius: 10px;
}
</style>
