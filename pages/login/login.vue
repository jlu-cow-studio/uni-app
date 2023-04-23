<template>
  <view class="login">
    <div class="the-header">
      <div class="header-img">
        <img src="../../static/login.png" alt="">
      </div>
      <div class="header-txt">吉牛天下</div>
    </div>
    <div class="center-content">
      <div class="item" @tap="changePage(0)">登录</div>
      <div class="item" @tap="changePage(1)">注册</div>
    </div>
    <div class="footer-content">
      <!-- 登录 -->
      <div class="login" v-if="isLogin">
        <div class="item">
          <label for="username">昵称：</label>
          <input redistrictired type="text" name="username" v-model="username">
        </div>
        <div class="item">
          <label for="password">密码：</label>
          <input redistrictired type="password" name="password" v-model="password">
        </div>
        <div class="item">
          <button @tap="login()">登录</button>
        </div>
      </div>

      <!-- 注册 -->
      <div class="login" v-if="!isLogin">
        <div class="item">
          <label for="username">昵称：</label>
          <input type="text" name="username" v-model="username">
        </div>
        <div class="item">
          <label for="password">密码：</label>
          <input type="password" name="password" v-model="password">
        </div>
        <div class="item">
          <label for="address">地区：</label>
          <select v-model='province' id="province" @change="provinceChange()">
            <option v-for="(item,i) in provinceList">{{item.value}}</option>
          </select>
          <select v-model='city' id="city" @change="cityChange()">
            <option v-for="(item,i) in cityList">{{item.value}}</option>
          </select>
          <select v-model='district' id="district">
            <option v-for="(item,i) in districtList">{{item.value}}</option>
          </select>
        </div>
        <div class="item">
          <button @tap="register()">注册</button>
        </div>
      </div>
    </div>
  </view>
</template>

<script>
  import {
    setToken
  } from '../../util/auth';
  import {
    addressData
  } from '../../util/address_level.js';
  export default {
    data() {
      return {
        isLogin: true,
        username: '',
        password: '',
        province: '',
        city: '',
        district: '',
        provinceList: [],
        cityList: [],
        districtList: [],
        provinceIndex: 0
      }
    },
    methods: {
      // 切换登录注册页
      changePage(flag) {
        if (flag) {
          this.isLogin = false;
        } else {
          this.isLogin = true;
        }
      },
      // 登录请求
      async login() {
        let params = new URLSearchParams();
        if (this.username !== '' &&
          this.password !== '') {
          const res = await uni.$http.post('/user/login', {
            username: this.username,
            password: this.password
          })
          uni.setStorageSync("token", JSON.stringify(res.data.token))
          params.append("base", res.data.token);
          if (res.data.base.code == 200) {
            const result = await uni.$http.post('/user/info', {
              base: {
                token: res.data.token
              }
            })
            console.log(result)
            uni.showToast({
              title: '登录成功!',
              icon: 'none'
            })
            setToken('111111')
            // 0 普通用户  1 养牛户 2 服务商  3 兽医
            uni.setStorageSync("userinfo", JSON.stringify(result.data))
            if (result.data.role == "normal") {
              uni.setStorageSync('role', 0)
            } else {
              console.log("result.data.role",result.data.role)
              uni.setStorageSync('role', result.data.role)
            }
            // 登录成功以后
            uni.switchTab({
              url: '/pages/index/index'
            })
          }
        } else {
          uni.showToast({
            title: '昵称或密码不能为空!',
            icon: 'none'
          })
        }
      },
      // 注册
      async register() {
        const params = {
          username: this.username,
          password: this.password,
          province: this.province,
          city: this.city,
          district: this.district
        }
        if (this.username !== '' ||
          this.password !== '' ||
          this.province !== '' ||
          this.city !== '' ||
          this.district !== '') {
          const res = await uni.$http.post('/user/register', params)
          console.log('接口返回------', res);
          if(res.data.base.code == 200){
            console.log('xxx')
            uni.showToast({
              title: '注册成功!',
              icon: 'none'
            })
          }else if(res.data.base.code == 402){
          console.log('hh')
          uni.showToast({
            title: '用户名已存在!',
            icon: 'none'
          })
        }
        } else {
          console.log('x')
          uni.showToast({
            title: '昵称、密码或地址不能为空!',
            icon: 'none'
          })
        }
      },
    changeCity() {
      this.province = "";
      this.city = "";
      this.district = "";
      //创建省市区完毕
      //循环第一步
      for (var i = 0; i < addressData.length; i++) {
        this.provinceList.push({
          label: addressData[i].label,
          value: addressData[i].value
        });
      }
    },
    provinceChange() {
      this.city = '';
      this.district = '';
      this.cityList.length = 0;
      this.districtList.length = 0;
      this.provinceList.forEach((ele, index) => {
        if (ele.value === this.province) {
          for (var j = 0; j < addressData[index].children.length; j++) {
            this.provinceIndex = index;
            this.cityList.push({
              label: addressData[index].children[j].label,
              value: addressData[index].children[j].value
            }, );
          }
        }
      })
    },
    cityChange() {
      this.district = '';
      this.districtList = [];
      this.cityList.forEach((ele, index) => {
        if (ele.value === this.city) {
          for (var k = 0; k < addressData[this.provinceIndex].children[index].children.length; k++) {
            this.districtList.push({
              label: addressData[this.provinceIndex].children[index].children[k]
                .label,
              value: addressData[this.provinceIndex].children[index].children[k].value
            })
          }
        }
      })

    }

  },
  onReady() {
    this.changeCity()
  }
  }
</script>

<style>
  .the-header {
    background-color: #02A7F0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
  }

  .the-header .header-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid #333;

  }

  .the-header .header-img img {
    width: 100%;
    height: 100%;
  }

  .the-header .header-txt {
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
  }

  .center-content {
    display: flex;
    border-bottom: 1px solid #333;
  }

  .center-content .item {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
    line-height: 40px;

  }

  .center-content .item:first-of-type {
    border-right: 1px solid #333;
  }

  .footer-content {
    padding: 15px;
  }

  .footer-content .item {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 18px;
  }

  .footer-content .item input {
    height: 30px;
    width: 70%;
    border: 1px solid #333;
    padding: 0 5px;
  }

  .footer-content .item select {
    height: 30px;
    width: 24%;
    padding: 0 5px;
  }

  .footer-content .item button {
    width: 60%;
    height: 50px;
    background-color: #02A7F0;
    color: #fff;
    font-size: 20px;
    line-height: 50px;
    margin-top: 50px;
  }
</style>
