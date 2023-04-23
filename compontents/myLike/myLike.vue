<template>
  <view class="content">
    <!-- 搜索 -->
    <Search></Search>
    <!-- 内容 -->
    <ProducCart :dataList="dataList" :isDefault="isDefault"></ProducCart>

  </view>
</template>

<script>
  import ProducCart from "@/compontents/produc-cart/produc-cart.vue"
  import Search from "@/compontents/search.vue"
  export default {
    data() {
      return {
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
        query: '',
        isDefault: true,
      }
    },
    components: {
      ProducCart,
      Search
    },
    onLoad() {
      
    },
    methods: {

    },
    onReady() {
      var paraString = location.href;
      var paras = paraString.split("=");
      this.query = paras[1]
      if(paras[1]){
        this.isDefault = false;
        uni.setNavigationBarTitle({ title: '我的商品' });
      }else{
        this.isDefault = true;
        uni.setNavigationBarTitle({ title: '我的喜欢' });
      }
      console.log(paras[1])
    }
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
</style>
