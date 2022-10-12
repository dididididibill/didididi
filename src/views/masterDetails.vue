<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="高手解挂"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img src="../assets/img/syIcon@3x.png" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="title" style="margin:20px 0; font-size:22px;">高手解挂牌</div>
      <div class="linkWrap">
        <router-link class="link" to="#"
          >*香港/澳门六合彩,官方指定投注站,大额无忧</router-link
        >
        <router-link class="link" to="#"
          >*香港/澳门六合彩,官方指定投注站,大额无忧</router-link
        >
        <router-link class="link" to="#"
          >*香港/澳门六合彩,官方指定投注站,大额无忧</router-link
        >
        <router-link class="link" to="#"
          >*香港/澳门六合彩,官方指定投注站,大额无忧</router-link
        >
      </div>
      <div class="contentText">
        <div class="title">064期鬼谷子解正版挂牌OK064期鬼谷子解正版挂牌OK064期鬼谷子解正版挂牌OK064期鬼谷子解正版挂牌OK064期鬼谷子解正版挂牌OK064期鬼谷子解正版挂牌OK064期鬼谷子解正版挂牌OK064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
        <div class="title">064期鬼谷子解正版挂牌OK</div>
      </div>
      <div class="linkWrap">
        <router-link class="link" to="#"
          >*香港/澳门六合彩,官方指定投注站,大额无忧</router-link
        >
        <router-link class="link" to="#"
          >*香港/澳门六合彩,官方指定投注站,大额无忧</router-link
        >
        <router-link class="link" to="#"
          >*香港/澳门六合彩,官方指定投注站,大额无忧</router-link
        >
        <router-link class="link" to="#"
          >*香港/澳门六合彩,官方指定投注站,大额无忧</router-link
        >
      </div>
      <div class="pageNum">
        <div class="top">上一篇</div>
        <div class="btm">下一篇</div>
      </div>
    </div>
    <div class="btmNab">
      <div class="top">记住域名：66bd.com</div>
      <div class="btm">© 66宝典 版权所有</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onClickRight() {
      this.$router.push("/");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  .navBar {
    background: linear-gradient(#1aae3d, #177900);

    /deep/ .van-icon {
      color: white;
    }
    /deep/ .van-ellipsis {
      color: #fff;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
  .content {
    margin: 120px 25px 25px 25px;
    .linkWrap {
      width: 100%;
      .link {
        color: blue;
        font-size: 24px;
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .contentText {
      margin-top: 30px;
      width: 100%;
      font-size: 28px;
      display: flex;
      flex-direction: column;
      text-align: left;
      .title {
        margin: 5px;
      }
    }
    .pageNum{
      font-size: 30px;
      display: flex;
      flex-direction: column;
      text-align: left;
        color: goldenrod;
      .top{
        margin: 30px 0;
      }
    }
  }
  .btmNab {
    width: 100%;
    font-size: 32px;
    height: 120px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    .top{
        margin-bottom: 15px;
    }
  }
}
</style>