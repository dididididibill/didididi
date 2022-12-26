<template>
  <div class="home">
    <div class="navBar">
      <div class="leftNav" @click="routerLink">
        <van-icon name="arrow-left" size="18" color="#FFF" />
      </div>
      <div class="rightNav">
        <div class="right" @click="popup">
          <img src="../assets/img/menuIcon.png" />
          <div class="text">菜单</div>
        </div>
      </div>
    </div>
    <div class="contentWarp">
      <div class="bg"></div>
      <div class="formWrap">
        <div class="loginForm">
          <div class="formItem">
            <input
              v-model="form.username"
              type="text"
              class="formInput"
              placeholder="请输入手机号"
            />
            <div class="btn" @click="code" v-if="sendType">发送验证码</div>
            <div class="btn" v-else>{{ second }}秒后再试</div>
          </div>
          <div class="formItem">
            <input
              v-model="form.verify"
              type="verify"
              class="formInput"
              placeholder="请输入验证码"
            />
          </div>
          <div v-if="type == 2" class="formItem">
            <input
              v-model="form.nickname"
              type="text"
              class="formInput"
              placeholder="请输入昵称"
            />
          </div>
          <div class="formItem" v-if="type == 3">
            <input
              v-model="form.old_password"
              type="password"
              class="formInput"
              placeholder="请输入原密码"
            />
          </div>
          <div class="formItem" v-if="type == 3">
            <input
              v-model="form.password"
              type="password"
              class="formInput"
              placeholder="请输入新密码"
            />
          </div>
          <div v-if="type == 3" class="formItem">
            <input
              v-model="form.repassword"
              type="password"
              class="formInput"
              placeholder="请再次输入新密码"
            />
          </div>
          <div class="upload" 
              v-if="type == 1">
            <van-uploader
            style="margin-left:15px;"
              v-model="avatar"
              preview-image
              :before-delete="onDelete"
              :max-count="1"
              :after-read="afterRead"
            />
          </div>
        </div>
        <van-button class="btn1" size="large" type="info" @click="onSubmit"
          >提交修改</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { uploadImg, userInfo, verify, editInfo } from "@/api/index";
export default {
  data() {
    return {
      editType: "1",
      value: {},
      avatar: [],
      form: {
        avatar: "",
        verify_token: "",
        verify: "",
        username: "",
        password: "",
        old_password: "",
        nickname: "",
      },
      sendType: true,
      second: 30,
      type: "",
    };
  },
  created() {
    this.type = this.$route.query.type;
  },
  methods: {
    async onSubmit() {
      const phone = /^1(3d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8d|9[0-35-9])d{8}$/;
      if (phone.test(this.form.username)) {
        this.$toast("请输入正确手机号");
        return;
      } else if (!this.form.username) {
        this.$toast("请输入手机号");
        return;
      } else if (!this.form.verify) {
        this.$toast("请输入验证码");
        return;
      } else if (!this.form.verify_token) {
        this.$toast("请获取验证码");
        return;
      }

      if (this.type == 1 && !this.form.avatar) {
        this.$toast("请上传新头像");
        return;
      }
      if (this.type == 2 && !this.form.nickname) {
        this.$toast("请输入昵称 ");
        return;
      }
      let form = this.form;
      const res = await editInfo(form);
      if (res.code == 1) {
        this.$toast(res.msg);
        setTimeout(() => {
          this.$router.go(-1);
        }, 500);
      } else {
        this.$toast(res.msg);
      }
    },
    async verify() {
      const res = await verify();
      if (res.code == 1) {
        this.form.verify = res.data.verify;
        this.form.verify_token = res.data.verify_token;
      } else {
        this.$toast(res.msg);
      }
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
    onDelete() {
      this.form.avatar = "";
    },
    afterRead(img) {
      this.uploadImg(img.content);
    },
    async uploadImg(base64) {
      const res = await uploadImg({ base64_img: base64 });
      if (res.code === 1) {
        this.form.avatar = res.data.img_url;
        this.avatar[0].url = res.data.img_url;
      }
    },
    async userInfo() {
      const res = await userInfo();
      this.value = res.data;
    },
    routerLink() {
      this.$router.go(-1);
    }, 
    popup() {
      this.show = true;
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 25px;
  width: 100%;
  margin-bottom: 100px;
  background: #fff;
  .navBar {
    position: fixed;
    top: 0;
    z-index: 999;
    left: 0;
    width: 100%;
    z-index: 999999;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    height: 80px;
    background: linear-gradient(#1aae3d, #177900);
    color: #fff;
    .leftNav {
      width: 150px;
      margin: auto 20px;
      display: flex;
      flex-direction: column;
      text-align: left;
      .text {
        margin-top: 5px;
      }
    }
    img {
      width: 150px;
      height: 70px;
      margin: auto;
    }
    .rightNav {
      // width: 150px;
      margin: auto 20px;
      display: flex;
      justify-content: space-around;
      img {
        width: 30px;
        height: 30px;
      }
      .left {
        .text {
          margin-top: 5px;
        }
      }
      .right {
        .text {
          margin-top: 5px;
        }
      }
    }
  }
  .formWrap {
    width: 700px;
    margin: 90px auto 0;
    .wjmm {
      margin-top: 10px;
      font-size: 26px;
      text-align: right;
    }
    .loginForm {
      width: 100%;
      .upload {
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: left;
        border-bottom: 1px solid #ddd;
        .btn{
          margin-left: 30px;
        }
      }
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
    color: #fff;
  }
}
</style>
