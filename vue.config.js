module.exports = {
  publicPath: './',
  lintOnSave: false,
  css: {},
  devServer: {
    proxy: {
      '/api': {
        target: 'http://httpbin.org',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        network: '@/network',
        components: '@/components',
        views: '@/views',
        utils: '@/utils'
      }
    }
  }
};
