<template>
  <view class="buy-container">
    <div class="text">
      <text>请选择您的角色：</text>
      <select name="role" id="" v-model="role">
        <option value=""></option>
        <option value="0">普通用户</option>
        <option value="1">养牛户</option>
        <option value="2">服务商</option>
        <option value="3">兽医</option>
      </select>
    </div>
    <button @tap="sureRole()">确认</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        role: '',
      }
    },
    onLoad() {

    },
    methods: {
      async sureRole() {
        if (this.role) {
          const res = await uni.$http.post('/user/auth', {
            base: {token: JSON.parse(uni.getStorageSync('token'))},
            role: this.role
          })
          console.log(res)
          if (res.data.code == 200) {
            uni.showToast({
              title: '角色修改成功!',
              icon: 'success',
              duration: 2000
            })
            uni.navigateTo({
              url:'/pages/login/login'
            })
          } else {
            uni.showToast({
              title: '角色失败!',
              icon: 'error',
              duration: 2000
            })
          }
        } else {
          uni.showToast({
            title: '请选择角色!',
            duration: 2000
          })
        }
      }
    },
    onReady() {
      uni.setNavigationBarTitle({
        title: '身份认证'
      });
    }
  }
</script>

<style scoped>
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
    width: 60%;
    background-color: #02A7F0;
    color: #fff;
    font-weight: 700;
    margin-top: 30px;
  }
</style>
