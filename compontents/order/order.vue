<template>
  <view class="order">
    <!-- 搜索 -->
    <Search></Search>
    <InfoCord :dataList="dataList"></InfoCord>
  </view>
</template>

<script>
    import Search from "@/compontents/search.vue"
  import InfoCord from "@/compontents/infoCord.vue"
  export default {
    data() {
      return {
        query:'',
        isDefault:true,
        dataList: [{
            prodImg: '../../static/6.jpg',
            title: '一些你不可不知的养牛知识！',
            avatar: '../../static/user.jpg',
            username: '兽医小明',
            starImg: '../../static/star.jpg',
            time: '2023年2月12日'
          },
          {
            prodImg: '../../static/6.jpg',
            title: '一些你不可不知的养牛知识！',
            avatar: '../../static/user.jpg',
            username: '兽医小明',
            starImg: '../../static/star.jpg',
            time: '2023年2月12日'
          }, {
            prodImg: '../../static/6.jpg',
            title: '一些你不可不知的养牛知识！',
            avatar: '../../static/user.jpg',
            username: '兽医小明',
            starImg: '../../static/star.jpg',
            time: '2023年2月12日'
          }, {
            prodImg: '../../static/6.jpg',
            title: '一些你不可不知的养牛知识！',
            avatar: '../../static/user.jpg',
            username: '兽医小明',
            starImg: '../../static/star.jpg',
            time: '2023年2月12日'
          }
        ],
      }
    },
    components: {
      InfoCord,
      Search
    },
    methods: {
      
    },
    onReady() {
      var paraString = location.href;
      var paras = paraString.split("=");
      this.query = paras[1]
      if(paras[1]){
        this.isDefault = false;
        uni.setNavigationBarTitle({ title: '我的订单' });
      }else{
        this.isDefault = true;
        uni.setNavigationBarTitle({ title: '我的推文' });
      }
      console.log(paras[1])
    }
  }
</script>

<style>
.order {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }
</style>
