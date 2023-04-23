<template>
  <view class="interest-container">
    <div class="item" v-for="(item,index) in interestList" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="tip-container">
        <div class="tip" v-for="i in item.tipList" :key="i">{{i}}</div>
      </div>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        interestList: [{
            title: '牛的品种',
            tipList: ['安格斯牛', '北美红牛', '吉林肉牛', '吉林奶牛', '优质黄牛', '黑白花牛', '太行山牛', '松花江黑牛', '西门塔尔牛', '荷斯坦奶牛', '荷斯坦公牛',
              '松花江黑母牛', '草原黑毛牛', '黑龙江大公牛', '东北大草原肉牛', '南犬牛', '黑金牛'
            ]
          },
          {
            title: '体型',
            tipList: ['轻型', '中型', '重型']
          },
          {
            title: '年龄',
            tipList: ['1岁以下', '1-2岁', '2-3岁', '3岁以上']
          },
          {
            title: '性别',
            tipList: ['公牛', '母牛']
          },
          {
            title: '产地',
            tipList: ['本地', '外地']
          },
          {
            title: '营养饲料',
            tipList: ['精料', '饲草', '玉米', '麦麸']
          },
          {
            title: '销售方式',
            tipList: ['按斤销售', '整只销售']
          },
          {
            title: '繁殖历史',
            tipList: ['已怀孕', '未怀孕', '已生育', '未生育']
          },
          {
            title: '配种方式',
            tipList: ['自然配种', '人工授精']
          },
          {
            title: '产品类型',
            tipList: ['鲜奶', '牛肉', '牛骨', '牛筋', '牛尾', '牛杂', '乳制品', '其他']
          },
          {
            title: '商品',
            tipList: ['饲料', '药品', '养殖工具和设备', '养殖用品']
          },
          {
            title: '服务',
            tipList: ['检疫', '配种', '场地租赁或设计', '运输', '加工']
          }
        ]
      }
    },
    methods: {
      async getData() {
        const res = await uni.$http.post('/tag/list_scene', {
          base: {
            logid: '',
            token: JSON.parse(uni.getStorageSync('token'))
          },
          scene: '牛的品种'
        })
        console.log(res)
      }
    },
    onReady() {
      this.getData()
    }
  }
</script>

<style>
  .interest-container {
    padding: 15px;
  }

  .interest-container .item .title {
    margin: 5px 0;
  }

  .interest-container .tip-container {
    display: flex;
    flex-wrap: wrap;
  }

  .interest-container .tip {
    min-width: 40px;
    color: #02A7F0;
    border: 1px solid #02A7F0;
    border-radius: 15px;
    padding: 0 5px;
    text-align: center;
  }
</style>
