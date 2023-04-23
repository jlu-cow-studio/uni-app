<template>
  <view>
    <div class="switch">
      <div class="switch-item" v-for="item in switchList" :key="item" @tap="change(item)">
        <span :class="{'switch-item-active':activeName == item}">{{item}}</span>
      </div>
    </div>


    <div class="goods-content" v-if="activeName === '商品'">
      <div class="title">商品基本信息：</div>
      <div class="form-content">
        上传图片：
        <div class="upload" @tap="updateImg(1)">
          <span v-if="imgSrc1 == ''">+</span>
          <img v-else :src="imgSrc1" alt="">
        </div>
        <div class="upload" @tap="updateImg(2)">
          <span v-if="imgSrc2 == ''">+</span>
          <img v-else :src="imgSrc2" alt="">
        </div>
        <div class="upload" @tap="updateImg(3)">
          <span v-if="imgSrc3 == ''">+</span>
          <img v-else :src="imgSrc3" alt="">
        </div>
        <div class="form-item">
          商品类型：
          <select name="type" id="">
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div class="form-item">
          销售价格：
          <input type="text" name="weight">元
        </div>
        <div class="n_title">
          <label for="weight">标题:</label>
          <input type="text" name="weight">
        </div>
        <div class="n_desc">
          <label for="desc">描述：</label>
          <textarea name="desc" id="" cols="30" rows="5"></textarea>
        </div>
      </div>
      <div class="add" @tap="addInpt()">+</div>
      <button>发布</button>
    </div>

    <!-- 服务 -->
    <div class="goods-content" v-if="activeName === '服务'">
      <div class="title">服务基本信息：</div>
      <div class="form-content">
        上传图片：
        <div class="upload" @tap="updateImg(1)">
          <span v-if="imgSrc1 == ''">+</span>
          <img v-else :src="imgSrc1" alt="">
        </div>
        <div class="upload" @tap="updateImg(2)">
          <span v-if="imgSrc2 == ''">+</span>
          <img v-else :src="imgSrc2" alt="">
        </div>
        <div class="upload" @tap="updateImg(3)">
          <span v-if="imgSrc3 == ''">+</span>
          <img v-else :src="imgSrc3" alt="">
        </div>
        <div class="form-item">
          服务类型：
          <select name="type" id="">
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div class="form-item">
          销售价格：
          <input type="text" name="weight">元
        </div>
        <div class="n_title">
          <label for="weight">标题:</label>
          <input type="text" name="weight">
        </div>
        <div class="n_desc">
          <label for="desc">描述：</label>
          <textarea name="desc" id="" cols="30" rows="5"></textarea>
        </div>
      </div>
      <div class="add" @tap="addInpt">+</div>
      <button>发布</button>
    </div>
    <myInterest></myInterest>
  </view>
</template>

<script>
  import myInterest from "@/compontents/myInterest/myInterest.vue"
  export default {
    data() {
      return {
        imgSrc1:'',
        imgSrc2: '',
        imgSrc3:'',
        switchList: ['商品', '服务'],
        activeName: '商品',
        dataList: [],
      }
    },
    components: {
      myInterest
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
      updateImg(index) {
        let that =this
        uni.chooseImage({
          sourceType: ['album'], //album 从相册选图，camera 使用相机，默认二者都有
          sizeType: ['compressed'], //original 原图，compressed 压缩图，默认二者都有
          count: that.max_number,
          success: (res) => {
            console.log("tempFilePaths",res.tempFilePaths)
            if(index == 1){
              that.imgSrc1 = res.tempFilePaths[0]
            }else if(index == 2){
              that.imgSrc2 = res.tempFilePaths[0]
            }else if(index == 3){
              that.imgSrc3 = res.tempFilePaths[0]
            }
          },
        })
      },
      addInpt() {
        let inpt = document.createElement('input');
        inpt.style.height = '30px';
        inpt.style.width = '65%';
        inpt.style.marginLeft = '10px';
        let txt = document.createTextNode('自定义属性');
        let container = document.createElement('div');
        let form = document.querySelector('.form-content');
        container.appendChild(txt)
        container.appendChild(inpt)
        container.style.width = '100%';
        container.style.margin = '5px 0';
        form.appendChild(container)
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
  .goods-content .form-content .upload img{
    width: 100%;
    height: 100%;
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

  .goods-content .add {
    width: 100%;
    height: 40px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
</style>
