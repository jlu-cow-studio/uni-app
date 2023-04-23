const {
  defineConfig
} = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    host: "0.0.0.0", //指定使用一个 host。默认是 localhost，这里默认值即可
    port: 8080, //指定端口
    hot: true, // 开启热更新
    https: false, // 是否开启https模式
    proxy: {
      '/api': {
        target: 'http://cowstudio2.wayne-lee.cn:3080',
        pathRewrite: {
          '^/api': ''
        }, //路径改写
      },
    }
  },
});
