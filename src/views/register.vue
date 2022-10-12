<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="会员注册"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
    <div class="formWrap">
      <div class="loginForm">
        <div class="formItem">
          <img class="formImg" src="../assets/img/phone.png" />
          <input type="text" class="formInput" placeholder="用户名/手机号" />
          <div class="btn" @click="code" v-if="sendType">发送验证码</div>
          <div class="btn" v-else>{{ second }}秒后再试</div>
        </div>
      </div>
      <div class="loginForm">
        <div class="formItem">
          <img class="formImg" src="../assets/img/code.png" />
          <input type="password" class="formInput" placeholder="请输入密码" />
        </div>
      </div>
      <div class="yhxy">
        <van-checkbox
          checked-color="#177900"
          icon-size="16px"
          v-model="checked"
        ></van-checkbox>
        <div class="text">我已阅读并同意六合彩库<span>《用户协议》</span></div>
      </div>
      <van-button class="btn1" size="large" type="info">注册</van-button>
      <van-button class="btn2" size="large" type="info" @click="routerLink"
        >已有账号,登录</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      checked: false,
      sendType: true,
      second: 30,
    };
  },
  methods: {
    routerLink() {
      this.$router.go(-1);
    },
    code() {
      this.sendType = false;
      let result = setInterval(() => {
        --this.second;
        if (this.second == 0) {
          clearInterval(result);
          this.sendType = true;
          this.second = 30;
        }
      }, 1000);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 750px;
  .navBar {
    background: linear-gradient(#1aae3d, #177900);

    ::v-deep(.van-icon) {
      color: white;
    }
    ::v-deep(.van-ellipsis) {
      color: #fff;
    }
  }
  .formWrap {
    width: 700px;
    margin: 90px auto 0;
    .yhxy {
      display: flex;
      align-items: center;
      margin-top: 10px;
      font-size: 24px;
      .text {
        margin-left: 15px;
        color: #b1aeae;
        span {
          color: black;
        }
      }
    }
    .loginForm {
      width: 100%;
      .formItem {
        height: 100px;
        width: 700px;
        display: flex;
        justify-content: left;
        align-items: center;
        border-bottom: 1px solid #e1e1e1;
        .formImg {
          width: 40px;
          height: 45px;
        }
        .formInput {
          font-size: 30px;
          border: none;
          width: 600px;
          height: 100px;
          box-sizing: border-box;
          margin-left: 30px;
        }
        .btn {
          color: #ffcc00;
          width: 160px;
          height: 100px;
          text-align: center;
          line-height: 100px;
          font-size: 24px;
        }
      }

      .btn1 {
        width: 400px;
        height: 70px;
      }
    }
  }
  .btn1 {
    width: 400px;
    height: 70px;
    border: 1px solid #e1e1e1;
    background: linear-gradient(#1aae3d, #177900);
    color: #fff;
  }
  .btn2 {
    width: 400px;
    height: 70px;
    border: 1px solid #e1e1e1;
    background: #fff;
    color: black;
  }
}
</style>