<template>
  <view class="setting-container">
    <view>请选择您的定位：</view>
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
    <button @tap="sureAddress()">确认</button>
  </view>
</template>

<script>
  import {
    addressData
  } from '@/util/address_level.js';
  export default {
    data() {
      return {
        province: '',
        city: '',
        district: '',
        provinceList: [],
        cityList: [],
        districtList: [],
        provinceIndex: 0
      }
    },
    onReady() {
      this.changeCity()
    },
    methods: {
      sureAddress() {
        if (this.province == '' ||
          this.city == '' ||
          this.district == '') {
            uni.showToast({
              title: '地址不能为空!',
              duration: 2000
            })
          }else{
            // 请求
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

    }
  }
</script>

<style>
  .setting-container {
    padding: 15px;
    font-size: 24px;
    font-weight: 700;
  }

  .setting-container input {
    height: 30px;
    width: 70%;
    border: 1px solid #333;
    padding: 0 5px;
  }

  .setting-container input {
    height: 30px;
    width: 70%;
    border: 1px solid #333;
    padding: 0 5px;
  }

  .setting-container select {
    height: 30px;
    width: 24%;
    padding: 0 5px;
  }

  .setting-container button {
    width: 60%;
    background-color: #02A7F0;
    color: #fff;
    font-weight: 700;
    margin-top: 30px;
  }
</style>
