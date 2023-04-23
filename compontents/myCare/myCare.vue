<template>
  <view class="care-container">
    <div class="care-item" v-for="item in careList" :key="item.username">
      <div class="user">
        <img :src="item.image_url" alt="">
        <div class="name">{{item.username}}</div>
      </div>
      <div class="care-tip" @tap="unfollow()">已关注</div>
    </div>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        careList: []
      }
    },
    onReady() {
      this.getData()
    },
    methods: {
      async getData() {
        const res = await uni.$http.post('/user/following', {
          base: {
            logid: '',
            token: JSON.parse(uni.getStorageSync('token'))
          },
          page: 1,
          page_size: 10
        })
        console.log(res)
        // this.careList = res.data.users;
        uni.showToast({
          title: '获取关注列表数据失败!',
          icon: 'error',
          duration: 2000
        })
      },
      async unfollow() {
        await uni.request({
          url: 'http://mockjs.xiaoyaoji.cn/mock/1wzIzRr8TuD/user/follow',
          data: {
            following_id: 1,
            action: 'unfollow'
          },
          method: "POST",
          success: (res) => {
            if (res.data.base) {
              uni.showToast({
                title: res.data.base.message,
                icon: 'success',
                duration: 2000
              })
            }
            this.getData()
          }
        })

      }
    }

  }
</script>

<style>
  .care-container {
    padding: 15px;
  }

  .care-container .care-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .care-container .care-item .user {
    display: flex;
    align-items: center;
  }

  .care-container .care-item img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .care-container .care-item .care-tip {
    border: 1px solid #333;
    width: 60px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 20px;
  }
</style>
