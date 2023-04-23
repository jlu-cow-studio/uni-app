<template>
  <view>
    <div class="switch">
      <div class="switch-item" v-for="item in switchList" :key="item" @tap="change(item)">
        <span :class="{'switch-item-active':activeName == item}">{{item}}</span>
      </div>
    </div>


    <div class="goods-content">
      <div class="title">{{switchList.length == 2 ?'服务基本信息：':'商品基本信息：'}}</div>
      <!-- 交易张牛 -->
      <div class="form-content" v-if="activeName === '整牛交易'">
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
          牛的品种：
          <select name="type" id="">
            <option value=""></option>
            <option v-for="item in typeList" :key="item" :value="item">{{item}}</option>
          </select>
        </div>
        <div class="form-item">
          牛的性别：
          <select name="sex" id="">
            <option value=""></option>
            <option value="公牛">公牛</option>
            <option value="母牛">母牛</option>
          </select>
        </div>
        <div class="form-item">
          牛的体型：
          <select name="weight" id="">
            <option value=""></option>
            <option value="轻型">轻型</option>
            <option value="中型">中型</option>
            <option value="重型">重型</option>
          </select>
        </div>
        <div class="form-item">
          牛的产地：
          <select name="address" id="">
            <option value=""></option>
            <option value="本地">本地</option>
            <option value="外地">外地</option>
          </select>
        </div>
        <div class="form-item">
          牛的年龄：
          <select name="age" id="">
            <option value=""></option>
            <option value="1岁以下">1岁以下</option>
            <option value="1-2岁">1-2岁</option>
            <option value="2-3岁">2-3岁</option>
            <option value="3岁以上">3岁以上</option>
          </select>
        </div>
        <div class="form-item">
          营养饲料：
          <select name="eatType" id="">
            <option value=""></option>
            <option value="精料">精料</option>
            <option value="饲草">饲草</option>
            <option value="玉米">玉米</option>
            <option value="麦麸">麦麸</option>
          </select>
        </div>
        <div class="form-item">
          牛的类型：
          <select name="NType" id="">
            <option value=""></option>
            <option value="种牛">种牛</option>
            <option value="母牛">母牛</option>
            <option value="小牛犊">小牛犊</option>
          </select>
        </div>
        <div class="form-item">
          销售方式：
          <select name="sale" id="">
            <option value=""></option>
            <option value="按斤销售">按斤销售</option>
            <option value="整只销售">整只销售</option>
          </select>
        </div>
        <div class="form-item">
          牛的体重：
          <input type="text" name="weight">KG
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
      <!-- 肉牛配种 -->
      <div class="form-content" v-if="activeName === '肉牛配种'">
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
          牛的品种：
          <select name="type" id="">
            <option value=""></option>
            <option v-for="item in typeList" :key="item" :value="item">{{item}}</option>
          </select>
        </div>
        <div class="form-item">
          牛的性别：
          <select name="sex" id="">
            <option value=""></option>
            <option value="公牛">公牛</option>
            <option value="母牛">母牛</option>
          </select>
        </div>
        <div class="form-item">
          牛的年龄：
          <select name="age" id="">
            <option value=""></option>
            <option value="1岁以下">1岁以下</option>
            <option value="1-2岁">1-2岁</option>
            <option value="2-3岁">2-3岁</option>
            <option value="3岁以上">3岁以上</option>
          </select>
        </div>
        <div class="form-item">
          牛养殖地：
          <select name="address" id="">
            <option value=""></option>
            <option value="本地">本地</option>
            <option value="外地">外地</option>
          </select>
        </div>
        <div class="form-item">
          繁殖历史：
          <select name="address" id="">
            <option value=""></option>
            <option value="已怀孕">已怀孕</option>
            <option value="未怀孕">未怀孕</option>
            <option value="已生育">已生育</option>
            <option value="未生育">未生育</option>
          </select>
        </div>
        <div class="form-item">
          配种方式：
          <select name="eatType" id="">
            <option value=""></option>
            <option value="自然配种">自然配种</option>
            <option value="人工授精">人工授精</option>
          </select>
        </div>
        <div class="form-item">
          牛的体重：
          <input type="text" name="weight">KG
        </div>
        <div class="form-item">
          配种价格：
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

      <!-- 牛制品销售 -->
      <div class="form-content" v-if="activeName === '牛制品销售'">
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
          产品类型：
          <select name="type" id="">
            <option value=""></option>
            <option value="鲜奶">鲜奶</option>
            <option value="乳制品">乳制品</option>
            <option value="牛肉">牛肉</option>
            <option value="牛骨">牛骨</option>
            <option value="牛筋">牛筋</option>
            <option value="牛尾">牛尾</option>
            <option value="牛杂">牛杂</option>
            <option value="其他">其他</option>
          </select>
        </div>
        <div class="form-item">
          产品产地：
          <select name="sex" id="">
            <option value=""></option>
            <option value="本地">本地</option>
            <option value="外地">外地</option>
          </select>
        </div>
        <div class="form-item">
          牛的品种：
          <select name="type" id="">
            <option value=""></option>
            <option v-for="item in typeList" :key="item" :value="item">{{item}}</option>
          </select>
        </div>
        <div class="form-item">
          营养饲料：
          <select name="address" id="">
            <option value=""></option>
            <option value="精料">精料</option>
            <option value="饲草">饲草</option>
            <option value="玉米">玉米</option>
            <option value="麦麸">麦麸</option>
          </select>
        </div>

        <div class="form-item">
          制品重量：
          <input type="text" name="weight">KG
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

      <!-- 商品 -->
      <div class="form-content" v-if="activeName === '商品'">
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
            <option value="鲜奶">鲜奶</option>
            <option value="乳制品">乳制品</option>
            <option value="牛肉">牛肉</option>
            <option value="牛骨">牛骨</option>
            <option value="牛筋">牛筋</option>
            <option value="牛尾">牛尾</option>
            <option value="牛杂">牛杂</option>
            <option value="其他">其他</option>
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
      
      <!-- 服务 -->
      <div class="form-content" v-if="activeName === '服务'">
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
            <option value="鲜奶">鲜奶</option>
            <option value="乳制品">乳制品</option>
            <option value="牛肉">牛肉</option>
            <option value="牛骨">牛骨</option>
            <option value="牛筋">牛筋</option>
            <option value="牛尾">牛尾</option>
            <option value="牛杂">牛杂</option>
            <option value="其他">其他</option>
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
      <button>发布</button>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        imgSrc1: '',
        imgSrc2: '',
        imgSrc3: '',
        switchList: [],
        activeName: '',
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
      // 添加商品
      pubGood(){
        if()
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
    },
    onReady() {
      var paraString = location.href;
      var paras = paraString.split("=");
      this.query = paras[1]
      if(paras[1]){
        this.switchList = ['商品','服务'];
      }else{
        this.switchList = ['整牛交易', '肉牛配种', '牛制品销售'];
      }
      this.activeName = this.switchList[0]
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
