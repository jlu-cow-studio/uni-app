<template>
  <!-- 自定义的导航栏 -->
  <view class="status_title">
    <div class="status_left">
      <image class="back" src="@/static/back.png" mode="widthFix" @click="back"></image>
      <div class="status_content">
        <image class="user-img" src="@/static/user.jpg" mode="widthFix"></image>
        <view class="username">紫色小妖精</view>
      </div>
    </div>
    <view class="status_right">
      <image src="@/static/star.jpg" mode="widthFix"></image>
      <view @tap="isFollow()" class="care">关注</view>
    </view>
  </view>
  <!-- 内容区 -->
  <view class="detail">
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
      <swiper-item v-for="item in 4" :key="item">
        <img src="../../static/1.jpg" alt="">
      </swiper-item>
    </swiper>
    <div class="detail-text">
      <view class="title">
        安格斯牛，有卖，肉质鲜美！
      </view>
      <div class="text-content">
        安格斯牛的特征是黑色无角肉用牛。起源于苏格兰东北部
        的阿佰丁，金卡和安格斯郡，是英国古老的肉用品种之一。
        安格斯牛只是一个品种。即使美国的安格斯牛，也是从欧
        洲体系带过去的，虽然全世界各个地方都可以养安格斯牛，
        但是根据自然环境，养殖模式，其直接影响牛肉品质，不
        可否认，到目前为止，美国的安格斯牛的品质是最受欢迎
        的。但是美国安格斯牛肉在中国国内是买不到的，能买到
        的都是走私或者改装假冒品。根据国家质检总局最新的肉
        类产品检验检疫准入名单，目前我国仅允许澳大利亚、新
        西兰、乌拉圭、阿根廷、加拿大、哥斯达黎加、智利、匈
        牙利等8个国家的牛肉进口。安格斯牛的品质相当出色，
        油花分布均匀，瘦肉和油脂巧妙地相互交织，使得肉质十
        分细腻，鲜嫩多汁。
      </div>
      <div class="time">2022年12月9日</div>
      <div class="tip-container">
        <div class="tip" v-for="item in tipList" :key="item">{{item}}</div>
      </div>
      <div class="weight">体重：{{weight}}KG</div>
      <div class="price">销售价格：{{pice}}元</div>
    </div>
    <button>点击购买</button>
  </view>
</template>

<script>
  export default {
    props: {
      // tipList: {
      //   type: Array,
      //   default: []
      // },
      weight: {
        type: Number,
        default: 0
      },
      pice: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        tipList: [],
      };
    },
    serverPrefetch() { // 仅vue3版本支持
      this.keyword = "ServerKeyword"
    },
    mounted() {
      this.tipList = ['中型', '2岁', '安格斯牛', '公牛', '外地', '精料', '种牛', '整只销售']
    },
    methods: {
      back() {
        uni.navigateBack({
          delta:1
        })
      },
      async isFollow(){
        await uni.request({
          url: 'http://mockjs.xiaoyaoji.cn/mock/1wzIzRr8TuD/user/follow',
          data: {
            following_id: '',
            action: 'follow'
          },
          method: "POST",
          success: (res) => {
            uni.showToast({
              title: '关注成功!',
              icon: 'none'
            })
          }
        })
      }
    },
    onReady() {

    }
  }
</script>

<style>
  /* 自定义状态栏 */
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
  }

  /* 自定义导航栏 */
  .status_title {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    padding: 0 16px;
    background-color: #FFFFFF;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .status_left {
    display: flex;
    align-items: center;
    width: 200px;
  }

  .back {
    width: 22px;
    margin-right: 10px;
  }

  .status_content {
    display: flex;
    align-items: center;
    height: 100%;
    width: 130px;
  }

  .user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .status_right {
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .status_right image {
    width: 30px;
  }

  .care {
    width: 50%;
    border-radius: 20px;
    padding: 5px;
    text-align: center;

    color: #02A7F0;
    border: 1px solid #02A7F0;
  }
</style>
<style>
  swiper {
    width: 100%;
    height: 200px;
  }

  swiper img {
    width: 100%;
    height: 100%;
  }

  .detail-text {
    padding: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .detail-text .title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 5px;
  }

  .detail-text .time {
    float: right;
    font-size: 12px;
    margin: 10px 0;
  }

  .tip-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
  }

  .tip-container .tip {
    height: 10px;
    border-radius: 30px;
    border: 1px solid #02A7F0;
    text-align: center;
    line-height: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    color: #02A7F0;
    padding: 8px;
    font-size: 14px;
  }

  .weight,
  .price {
    font-weight: 700;
    font-size: 18px;
  }

  .detail button {
    width: 100%;
    background-color: #02A7F0;
    color: #fff;
    font-weight: 700;
    position: sticky;
    bottom: 0;
  }
</style>
