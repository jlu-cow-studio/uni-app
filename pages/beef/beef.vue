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
  <tabBar :tabbar="tabbar" :pagePath="'/pages/beef/beef'"></tabBar>
</template>

<script>
  import ProducCart from "@/compontents/produc-cart/produc-cart.vue"
  import Search from "@/compontents/search.vue"
  import tabBar from "@/compontents/tabBar.vue"
  export default {
    data() {
      return {
        tabbar: [],
        switchList: ['整牛交易', '肉牛配种', '牛制品销售'],
        activeName: '整牛交易',
        dataList: [{
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          },
          {
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }, {
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }, {
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }
        ],

      }
    },
    components:{
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
        setTimeout(function () {
        	uni.hideLoading();
        }, 2000);
        if(item =='整牛交易'){
          this.dataList = [{
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          },
          {
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }, {
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }, {
            prodImg: '../../static/1.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }
        ]
        }else if(item =='肉牛配种'){
          this.dataList = [{
            prodImg: '../../static/2.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          },{
            prodImg: '../../static/2.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          },{
            prodImg: '../../static/2.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          },{
            prodImg: '../../static/2.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          }]
        }else{
          this.dataList = [{
            prodImg: '../../static/3.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          },{
            prodImg: '../../static/3.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          },{
            prodImg: '../../static/3.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
          },{
            prodImg: '../../static/3.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            starcount: '20'
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

  .switch{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
  }
  .switch .switch-item{
    height: 50px;
  }
  .switch .switch-item-active{
    color: #02A7F0;
  }
  
</style>
