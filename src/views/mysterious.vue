<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="玄机锦囊"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="contentWrap">
      <div class="text">
        10万六合彩用户都说准的谜题,这一期,您猜出了什么玄机?
      </div>
      <div class="content">
        <div class="title">2022年第242期六合彩</div>
        <img src="../assets/img/jinnang.png" />
        <div class="btns">
          <van-button v-if="!open" class="btn1" size="large" type="info" @click="open = true">打开锦囊</van-button>
          <div v-else class="text">临危不惧有胆色一意孤行太固执。</div>
          <van-button
            class="btn2"
            size="large"
            type="info"
            @click="open = false"
            >前往历史</van-button
          >
        </div>
      </div>
      <div class="btmText">
        <span
          >提示：打开锦囊是本期的六合彩的一道谜题,参透谜题将获得本期中奖号码,快来打开您的玄机吧!</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open:false
    };
  },
  methods: {
    routerLink(link) {
      this.$router.push(link);
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
  }
  .contentWrap {
    min-height: calc(100vh - 200px);
    width: 700px;
    margin: 80px 25px 0px 25px;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .content {
      flex: 1;
      margin-top: 50px;
      font-size: 40px;
      font-weight: 800;
      .title {
        margin-bottom: -40px;
      }
      img {
        width: 500px;
        height: 550px;
      }
      .btns {
        display: flex;
        flex-direction: column;
        align-items: center;
        .text{
          text-indent: 40px;
          width: 320px;
          color: red;
          margin-bottom: 50px;
        }
        .btn1 {
          margin-bottom: 50px;
          width: 400px;
          height: 70px;
          border: 1px solid #e1e1e1;
          background: linear-gradient(#1aae3d, #177900);
          color: #fff;
          border-radius: 10px;
        }
        .btn2 {
          border-radius: 10px;
          width: 400px;
          height: 70px;
          border: 1px solid #1aae3d;
          background: #fff;
          color: #1aae3d;
        }
      }
    }
    .btmText {
      margin-bottom: 60px;
    }
  }
}
</style>