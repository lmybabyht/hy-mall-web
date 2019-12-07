var webpack = require('webpack');
module.exports = {

  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  outputDir: "dist",
  
  runtimeCompiler: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => { },
  // 配置文件路径别名
  configureWebpack: {
    resolve: {  
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }  
    }
  },
  // webpack-dev-server 相关配置

  devServer: {
    host: '127.0.0.1',
    port: 9000,
    hotOnly: false,
    proxy : {
      '/api':{
        target: 'http://47.92.250.207:30089/',
        changeOrigin: true
      } 
    },
  },
  // 第三方插件配置
  pluginOptions: {
      // ...
  }
}
