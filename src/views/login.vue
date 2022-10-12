<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="会员登录"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
    <div class="formWrap">
      <div class="loginForm">
        <div class="formItem">
          <img class="formImg" src="../assets/img/username.png" />
          <input type="text" class="formInput" placeholder="用户名/手机号" />
        </div>
      </div>
      <div class="loginForm">
        <div class="formItem">
          <img class="formImg" src="../assets/img/password.png" />
          <input type="password" class="formInput" placeholder="请输入密码" />
        </div>
      </div>
      <div class="wjmm">忘记密码?</div>
      <van-button class="btn1" size="large" type="info">登录</van-button>
      <van-button class="btn2" size="large" type="info" @click="routerLink('/register')">立即注册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    routerLink(link){
      this.$router.push(link)
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
    .wjmm{
      margin-top: 10px;
      font-size: 26px;
      text-align: right;
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
      }
      .wjmm {
        align-items: right;
        margin-top: 10px;
        font-size: 22px;
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
    color: #FFF;
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