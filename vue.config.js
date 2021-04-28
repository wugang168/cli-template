const locaProxy = {
  port: 8080,
  https: false,
  hotOnly: true,
  disableHostCheck: true,
  open: true
}

if (process.env.VUE_APP_DATA_SIMULATION === 'true') {
  // 使用本地模拟数据开发
  locaProxy.before = require('./mock')
} else {
  // 使用本地开发,直接代理到测试或者正式环境测试开发
  locaProxy.proxy = {
    '/': {
      target: 'https://xxxxx.com/',
      changeOrigin: true,
      ws: true
    }
  }
}

module.exports = {
  publicPath: './',
  assetsDir: './static',
  productionSourceMap: false,
  configureWebpack: {
    plugins: []
  },
  devServer: locaProxy,
  css: {
    // 在每个组件自动引入一些配置好的公用sass变量
    // 不用再组件单独使用@import "src/style/variables.scss"引入
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style/variables.scss";`
      }
    }
  }
}
