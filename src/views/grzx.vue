<template>
  <div class="home">
    <div class="navBar">
      <div class="leftNav" @click="routerLink">
        <van-icon name="arrow-left" size="18" color="#FFF" />
      </div>
      <div class="rightNav">
        <div class="left" @click="exit">
          <img src="../assets/img/exit.png" />
          <div class="text">退出</div>
        </div>
        <div class="right" @click="popup">
          <img src="../assets/img/menuIcon.png" />
          <div class="text">菜单</div>
        </div>
      </div>
    </div>
    <div class="contentWarp">
      <div class="bg"></div>
      <van-cell class="txCell" value="更改头像" is-link>
        <template #title>
          <img class="tx" :src="value.avatar" />
        </template>
      </van-cell>
      <van-cell title="用户名" is-link :value="value.username" />
      <van-cell class="colorCell" title="手机号码" :value= "`${value.username.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}`" />
      <van-cell title="修改密码" is-link />
      <div class="bg"></div>
      <van-cell title="我的评论" is-link />
      <van-cell title="我的贴子" is-link />
      <van-cell title="我的收藏" is-link />
    </div>
  </div>
</template>
<script>
import { uploadImg } from "@/api/index";
import { getSessStore, removeSessStore } from "@/utils/mUtils";
export default {
  data() {
    return {
      value: {},
    };
  },
  created() {
    this.value = getSessStore("authInfo");
  },
  methods: {
    exit() {
      this.$dialog
        .confirm({
          title: "确定退出登陆吗",
        })
        .then(() => {
          removeSessStore("authInfo");
          this.$router.replace({path: '/'});
          location.reload();
        })
        .catch(() => {
          // on cancel
        });
    },
    routerLink() {
      this.$router.go(-1);
    },
    onClickLeft() {
      console.log("1");
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
      width: 150px;
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
  .contentWarp {
    margin-top: 80px;
    text-align: left;
    .van-cell__value {
      color: #000;
    }
    .bg {
      width: 100%;
      height: 10px;
      background: rgba(99, 99, 99, 0.1);
    }
    .txCell {
      display: flex;
      align-items: center;
      .van-cell__title {
        height: 80px;

        .tx {
          border-radius: 50%;
          width: 80px;
        }
      }
    }
    .colorCell {
      .van-cell__value {
        color: #ddd;
      }
    }
  }
}
</style>
