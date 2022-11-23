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
      <div class="title" style="margin: 20px 0; font-size: 22px">
        高手解挂牌
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
      <div class="contentText">
        <div class="title" v-if="list.details">{{ this.list.details }}</div>
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
        <div class="top" @click="changeDeatails(this.list.prev.id)">
          上一篇 {{ list.prev.title ? list.prev.title : "没有了" }}
        </div>
        <div class="btm" @click="changeDeatails(this.list.next.id)">
          下一篇 {{ list.next.title ? list.next.title : "没有了" }}
        </div>
      </div>
    </div>
    <div class="btmNab">
      <div class="top">记住域名：66bd.com</div>
      <div class="btm">© 66宝典 版权所有</div>
    </div>
  </div>
</template>

<script>
import { zlDataDetails } from "@/api/index";
export default {
  data() {
    return {
      list: {
        details: "",
        next: {
          id: "",
          title: "1",
        },
        prev: {
          id: "",
          title: "1",
        },
      },
      id: "",
      currentPage: 1,
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.zlDataDetails();
  },
  methods: {
    changeDeatails(id) {
      const nextId = id
      if (nextId) {
        this.id = nextId;
        this.zlDataDetails();
      }else{
        this.$toast('没有了')
      }
    },
    async zlDataDetails() {
      const res = await zlDataDetails({
        id: this.id,
        p_id: "94",
      });
      if (res.code === 1) { 
        this.list = res.data;
      }
    },
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
        width: 700px;
        margin: 5px;
      }
    }
    .pageNum {
      font-size: 30px;
      display: flex;
      flex-direction: column;
      text-align: left;
      color: goldenrod;
      div {
        width: 100%;
      }
      .top {
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
    .top {
      margin-bottom: 15px;
    }
  }
}
</style>