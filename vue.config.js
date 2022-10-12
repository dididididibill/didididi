const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://192.168.0.1:8080/',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   },
  //   // 开启https 访问时使用https://172.31.120.61:8081 
  //   // https://localhost:8081 也可以访问，不过自带info请求会报错 不清楚具体原因
  //   https: true
  // }

  devServer: {
    https: true, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: {
        
    }
}
})
