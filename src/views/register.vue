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
          <input
            v-model="form.username"
            type="text"
            class="formInput"
            placeholder="用户名/手机号"
          />
          <div class="btn" @click="code" v-if="sendType">发送验证码</div>
          <div class="btn" v-else>{{ second }}秒后再试</div>
        </div>
        <div class="formItem">
          <img class="formImg" src="../assets/img/code.png" />
          <input
            v-model="form.verify"
            type="verify"
            class="formInput"
            placeholder="请输入验证码"
          />
        </div>
        <div class="formItem">
          <img class="formImg" src="../assets/img/password.png" />
          <input
            v-model="form.password"
            type="password"
            class="formInput"
            placeholder="请输入密码"
          />
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
      <van-button class="btn1" size="large" type="info" @click="onSubmit"
        >注册</van-button
      >
      <van-button class="btn2" size="large" type="info" @click="routerLink"
        >已有账号,登录</van-button
      >
    </div>
  </div>
</template>

<script>
import { verify, register } from "@/api/index";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        verify_token: "",
        verify: "",
      },
      checked: false,
      sendType: true,
      second: 30,
    };
  },
  methods: {
    async verify() {
      const res = await verify();
      if (res.code == 1) {
        this.form.verify = res.data.verify;
        this.form.verify_token = res.data.verify_token;
      } else {
        this.$toast(res.msg);
      }
    },
    routerLink() {
      this.$router.go(-1);
    },
    code() {
      const phone = /^1(3d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8d|9[0-35-9])d{8}$/;
      if (phone.test(this.form.username)) {
        this.$toast("请输入正确手机号");
        return;
      } else if (!this.form.username) {
        this.$toast("请输入手机号");
        return;
      }
      this.verify();
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
    async onSubmit() {
      const phone = /^1(3d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8d|9[0-35-9])d{8}$/;
      if (phone.test(this.form.username)) {
        this.$toast("请输入正确手机号");
        return;
      } else if (!this.form.username) {
        this.$toast("请输入手机号");
        return;
      } else if (!this.form.password) {
        this.$toast("请输入密码");
        return;
      } else if (!this.form.verify) {
        this.$toast("请输入验证码");
        return;
      } else if (!this.form.verify_token) {
        this.$toast("请获取验证码");
        return;
      } else if (!this.checked) {
        this.$toast("请勾选用户协议");
        return;
      }
      let form = this.form;
      const res = await register(form);
      if (res.code == 1) {
        this.$toast(res.msg);
        setTimeout(() => {
          this.$router.go(-1);
        }, 500);
      } else {
        this.$toast(res.msg);
      }
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
      margin-left: 10px;
      display: flex;
      align-items: center;
      margin-top: 20px;
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
        display: flex;
        justify-content: left;
        align-items: center;
        border-bottom: 1px solid #e1e1e1;
        .formImg {
          width: 40px;
          height: 45px;
          margin-left: 10px;
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