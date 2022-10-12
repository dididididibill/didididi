// postcss.config.js
module.exports = {
    plugins: {
      // postcss-pxtorem 插件的版本需要 >= 5.0.0
      'postcss-pxtorem': {
        rootValue({ file }) {
  　　　　　// vant得设计稿是按照375设计的，而我们得设计稿是按照750来设计的，所以vant按37.5走，750的设计稿按75走，换算基准都是设计稿得十分之一，这是因为lib-flexible是将设计稿分为10分之一来做的适配
          return file.indexOf('vant') !== -1 ? 37.5 : 75;
        },
        propList: ['*'],
      },
    },
  };