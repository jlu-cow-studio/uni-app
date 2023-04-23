<template>
  <view>
    <div class="goods-content">
      <div class="title">推文基本信息：</div>
      <!-- 交易张牛 -->
      <div class="form-content">
        上传图片：
        <div class="upload" @tap="updateImg()">
          <span  v-if="imgSrc1 == ''" >+</span>
          <img :src="imgSrc1" alt="">
        </div>
        <div class="upload">+</div>
        <div class="upload">+</div>
        
        <div class="n_title">
          <label for="weight">标题:</label>
          <input type="text" name="weight">
        </div>
        <div class="n_desc">
          <label for="desc">描述：</label>
          <textarea name="desc" id="" cols="30" rows="5"></textarea>
        </div>
      </div>

      <button>发布</button>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        imgSrc1: '',
        switchList: ['整牛交易', '肉牛配种', '牛制品销售'],
        activeName: '整牛交易',
        typeList: ['安格斯牛', '北美红牛', '吉林肉牛', '吉林奶牛', '优质黄牛', '黑白花牛', '太行山牛', '松花江黑牛', '西门塔尔牛', '荷斯坦奶牛', '荷斯坦公牛', '松花江黑母牛',
          '草原黑毛牛', '黑龙江大公牛', '东北大草原肉牛', '南犬牛', '黑金牛'
        ],
        dataList: []
      }
    },
    methods: {
      change(item) {
        this.activeName = item
        uni.showLoading({
          title: '加载中'
        });
        setTimeout(function() {
          uni.hideLoading();
        }, 1300);
      },
      updateImg() {
        uni.chooseImage({
          count: 6, //默认9
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album'], //从相册选择
          success: function(res) {
            this.imgSrc1 = res.tempFilePaths
            console.log(this.imgSrc1);
          }
        });
      }



    }
  }
</script>

<style>
  .switch {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
  }

  .switch .switch-item {
    height: 45px;
  }

  .switch .switch-item span {
    text-align: center;
    line-height: 45px;
  }

  .switch .switch-item-active {
    color: #02A7F0;
  }

  .goods-content {
    padding: 15px;
    box-sizing: border-box;
  }

  .goods-content .title {
    font-weight: 700;
    font-size: 20px
  }

  .goods-content .form-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
  }

  .goods-content .form-content .upload {
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

  .goods-content .form-content .form-item {
    display: flex;
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    line-height: 30px;
  }

  .goods-content .form-item select,
  input {
    width: 45%;
    height: 30px;
  }

  .goods-content .form-item input {
    border: 1px solid #333;
  }

  .goods-content input,
  textarea {
    border: 1px solid #333;
  }

  .goods-content .form-item select {
    width: 50%;
    height: 30px;
  }

  .goods-content .n_title {
    width: 100%;
    display: flex;
    text-align: center;
    line-height: 30px;
    margin: 10px 0;
    padding-right: 10px;
  }

  .goods-content .n_title input {
    flex: 1;
    margin: 0 15px;
    display: flex;
  }

  .goods-content .n_desc {
    width: 100%;
    display: flex;
  }

  .goods-content button {
    margin-top: 30px;
    width: 280px;
    background-color: #02A7F0;
    color: #fff;
  }
</style>
