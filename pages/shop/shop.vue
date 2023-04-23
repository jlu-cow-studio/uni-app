<template>
  <view class="content">
    <div class="switch">
      <div class="switch-item" v-for="item in switchList" :key="item" @tap="getData(item)">
        <span :class="{'switch-item-active':activeName == item}">{{item}}</span>
      </div>
    </div>
    <!-- 搜索 -->
    <Search></Search>
    <!-- 内容 -->
    <ProducCart :dataList="dataList"></ProducCart>

  </view>
  <tabBar :tabbar="tabbar" :pagePath="'/pages/shop/shop'"></tabBar>
</template>

<script>
  import ProducCart from "@/compontents/produc-cart/produc-cart.vue"
  import Search from "@/compontents/search.vue"
  import tabBar from "@/compontents/tabBar.vue"
  export default {
    data() {
      return {
        tabbar: [],
        switchList: ['商品', '服务'],
        activeName: '商品',
        dataList: [{
            prodImg: '../../static/4.jpg',
            title: '牛饲料价格实惠，大小牛都能吃！',
            avatar: '../../static/user.jpg',
            username: 'Kim',
            starImg: '../../static/star.jpg',
            starcount: '13'
          },
          {
            prodImg: '../../static/4.jpg',
            title: '牛饲料价格实惠，大小牛都能吃！',
            avatar: '../../static/user.jpg',
            username: 'Kim',
            starImg: '../../static/star.jpg',
            starcount: '13'
          }, {
            prodImg: '../../static/4.jpg',
            title: '牛饲料价格实惠，大小牛都能吃！',
            avatar: '../../static/user.jpg',
            username: 'Kim',
            starImg: '../../static/star.jpg',
            starcount: '13'
          }, {
            prodImg: '../../static/4.jpg',
            title: '牛饲料价格实惠，大小牛都能吃！',
            avatar: '../../static/user.jpg',
            username: 'Kim',
            starImg: '../../static/star.jpg',
            starcount: '13'
          }
        ],

      }
    },
    components: {
      ProducCart,
      Search,
      tabBar
    },
    onReady() {
      this.tabbar = JSON.parse(uni.getStorageSync('tabBar'))
    },
    methods: {
      getData(item) {
        this.activeName = item
        uni.showLoading({
          title: '加载中'
        });
        this.dataList = []
        setTimeout(function() {
          uni.hideLoading();
        }, 1300);
        if (item == '商品') {
          this.dataList = [{
              prodImg: '../../static/4.jpg',
              title: '安格斯牛，有卖，肉质鲜美！',
              avatar: '../../static/user.jpg',
              username: '紫色小妖精',
              starImg: '../../static/star.jpg',
              starcount: '43'
            },
            {
              prodImg: '../../static/4.jpg',
              title: '安格斯牛，有卖，肉质鲜美！',
              avatar: '../../static/user.jpg',
              username: '紫色小妖精',
              starImg: '../../static/star.jpg',
              starcount: '43'
            }, {
              prodImg: '../../static/4.jpg',
              title: '安格斯牛，有卖，肉质鲜美！',
              avatar: '../../static/user.jpg',
              username: '紫色小妖精',
              starImg: '../../static/star.jpg',
              starcount: '43'
            }, {
              prodImg: '../../static/4.jpg',
              title: '安格斯牛，有卖，肉质鲜美！',
              avatar: '../../static/user.jpg',
              username: '紫色小妖精',
              starImg: '../../static/star.jpg',
              starcount: '43'
            }
          ]
        } else {
          this.dataList = [{
            prodImg: '../../static/5.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '55'
          }, {
            prodImg: '../../static/5.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '15'
          }, {
            prodImg: '../../static/5.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '15'
          }, {
            prodImg: '../../static/5.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '15'
          }]
        }

      }
    },
   
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  .switch {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
  }

  .switch .switch-item {
    height: 50px;
  }

  .switch .switch-item-active {
    color: #02A7F0;
  }
</style>
