<template>
  <view class="buy-container">
    <div class="text">
      <text>请输入您充值的金额：</text>
      <input v-model="buyMon" type="number" name="" id="">
      <span>元</span>
    </div>
    <button @tap="buy">确认</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        buyMon: ''
      }
    },
    methods: {
      async buy() {
        if (this.buyMon) {
          const res = await uni.$http.post('/trade/recharge', {
            base: {
              logid: '',
              token: JSON.parse(uni.getStorageSync('token'))
            },
            money: Number(this.buyMon)
          })
          console.log(res)
        } else {
          uni.showToast({
            title: '请输入充值金额!',
            icon: 'none',
            duration: 2000
          })
        }
      }
    }
  }
</script>

<style>
  .buy-container {
    padding: 15px;
  }

  .buy-container .text {
    font-size: 24px;
    font-weight: 700;
    display: flex;
  }

  .buy-container .text input {
    width: 50px;
    height: 30px;
    border: 1px solid #333;
    margin: 0 10px;
  }

  .buy-container button {
    background-color: #02A7F0;
    color: #fff;
    font-weight: 700;
    margin-top: 30px;
  }
</style>
