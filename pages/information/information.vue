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
    <InfoCord v-if="activeName !== '预约咨询'" :dataList="dataList" :activeName="activeName"></InfoCord>
    <ConsultCord v-else :dataList="dataList"></ConsultCord>
  </view>
  <tabBar :tabbar="tabbar" :pagePath="'/pages/information/information'"></tabBar>
</template>

<script>
  import Search from "@/compontents/search.vue"
  import InfoCord from "@/compontents/infoCord.vue"
  import ConsultCord from "@/compontents/consultCord.vue"
  import tabBar from "@/compontents/tabBar.vue"
  export default {
    data() {
      return {
        tabbar: [],
        switchList: ['推文', '直播间', '预约咨询'],
        activeName: '推文',
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
      Search,
      InfoCord,
      ConsultCord,
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
              prodImg: '../../static/6.jpg',
              title: '安格斯牛，有卖，肉质鲜美！',
              avatar: '../../static/user.jpg',
              username: '紫色小妖精',
              starImg: '../../static/star.jpg',
              time: '63'
            },
            {
              prodImg: '../../static/6.jpg',
              title: '安格斯牛，有卖，肉质鲜美！',
              avatar: '../../static/user.jpg',
              username: '紫色小妖精',
              starImg: '../../static/star.jpg',
              time: '63'
            }, {
              prodImg: '../../static/6.jpg',
              title: '安格斯牛，有卖，肉质鲜美！',
              avatar: '../../static/user.jpg',
              username: '紫色小妖精',
              starImg: '../../static/star.jpg',
              time: '63'
            }, {
              prodImg: '../../static/6.jpg',
              title: '安格斯牛，有卖，肉质鲜美！',
              avatar: '../../static/user.jpg',
              username: '紫色小妖精',
              starImg: '../../static/star.jpg',
              time: '63'
            }
          ]
        } else {
          this.dataList = [{
            prodImg: '../../static/5.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            time: '55'
          }, {
            prodImg: '../../static/5.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            time: '15'
          }, {
            prodImg: '../../static/5.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            time: '15'
          }, {
            prodImg: '../../static/5.jpg',
            title: '安格斯牛，有卖，肉质鲜美！',
            avatar: '../../static/user.jpg',
            username: '紫色小妖精',
            starImg: '../../static/star.jpg',
            time: '15'
          }]
        }
      },
      
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
    box-sizing: border-box;
  }

  .switch .switch-item {
    height: 50px;
  }

  .switch .switch-item-active {
    color: #02A7F0;
  }
</style>
