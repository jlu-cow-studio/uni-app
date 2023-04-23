<template>
  <view class="search">
    <div class="search-ipt">
      <img src="../static/search.jpg" alt="">
      <input type="text">
    </div>
    <button>搜索</button>
  </view>
</template>

<script>
</script>

<style>
  .search {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
    }
    .search-ipt{
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  .search .search-ipt img{
    width: 30px;
    height: 30px;
    border: 1px solid #333333;
    border-right: transparent;
    padding: 5px;
  }
    .search .search-ipt input {
      width: 230px;
      height: 40px;
      border: 1px solid #333333;
      border-left: transparent;
    }
  
    .search button {
      width: 80px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #333333;
      margin: 0;
    }
  
</style>