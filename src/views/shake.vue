<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="摇一摇"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="contentWrap">
      <div class="text">
        试试您的手气到底有多准!只要摇一摇,就能算出专属您的本期号码!
      </div>
      <div class="content">
        <img src="../assets/img/yaoyiyao.png" />
      </div>
      <div class="btmText">
        <span>提示：每期只能进行一次摇一摇</span>
      </div>
    </div>
    <van-popup v-model="isTip" class="popInfo" :close-on-click-overlay="false">
      <div class="mainBody">
        <h4 class="systemTip">温馨提示</h4>
        <div class="confirm">
          由于ios系统需要手动获取访问动作与方向的权限，为保障游戏的正常进行，请在访问提示中点击允许。
        </div>
      </div>
      <button class="bottomButton" @click="handleInit">知道了</button>
    </van-popup>
  </div>
</template>

<script>
import Shake from "../assets/shake";
export default {
  data() {
    return {
      isTip: false,
    };
  },
  created() {
    this.initShake();
    const isAction = JSON.parse(localStorage.getItem("getAction"));
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("like mac os x") > 0) {
      var reg = /os [\d._]*/gi;
      var verinfo = ua.match(reg);
      var version = (verinfo + "")
        .replace(/[^0-9|_.]/gi, "")
        .replace(/_/gi, ".");
      if (parseFloat(version) >= 13.3 && !isAction) {
        localStorage.setItem("getAction", true);
        this.isTip = true;
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    initShake() {
      this.myShakeEvent = new Shake({
        threshold: 15, // 摇动阈值
        timeout: 1000, // 事件发生频率，是可选值
      });
      this.myShakeEvent.start();
      window.addEventListener("shake", this.shakeF, false);
    },
    handleInit() {
      this.isTip = false;
      this.ios13granted();
    },
    ios13granted() {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              this.initShake(); //摇一摇
            } else if (permissionState === "denied") {
              // 打开的链接不是https开头
              alert(
                "当前IOS系统拒绝访问动作与方向。请退出微信，重新进入活动页面获取权限。或直接点击抽签桶参与活动"
              );
            }
          })
          .catch((error) => {
            alert("请求设备方向或动作访问需要用户手势来提示");
          });
      } else {
        // 处理常规的非iOS 13+设备
        alert("处理常规的非iOS 13+设备");
      }
    },
    shakeF() {
      alert("开始摇一摇");
      this.myShakeEvent.stop();
      alert("摇完了");
    },
  },
  beforeDestroy() {
    this.myShakeEvent.stop();
    // window.removeEventListener("shake", this.shakeFFFF, false);
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
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .text {
      text-align: left;
    }
    .content {
      flex: 1;
      margin-top: 50px;
      font-size: 40px;
      font-weight: 800;
      .title {
        margin-bottom: -40px;
      }
      img {
        margin-top: 200px;
        width: 500px;
        height: 500px;
      }
      .btns {
        display: flex;
        flex-direction: column;
        align-items: center;
        .text {
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