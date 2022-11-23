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
        <div
          class="title"
          @click="routerLink(item.id)"
          v-for="(item, index) in dataList.list"
          :key="index"
        >
          {{ item.title }}
        </div>
      </div>
      <van-pagination
        class="page"
        color="#1aae3d"
        v-model="currentPage"
        :total-items="24"
        :items-per-page="5"
        :page-count	= dataList.total
        @change="zlDataList"
      />
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
    </div>
    <div class="btmNab">
      <div class="top">记住域名：66bd.com</div>
      <div class="btm">© 66宝典 版权所有</div>
    </div>
  </div>
</template>

<script>
import { zlDataList } from "@/api/index";
export default {
  data() {
    return {
      dataList: [],
      currentPage: 1,
    };
  },
  created() {
    this.zlDataList();
  },
  methods: {
    async zlDataList() {
      const res = await zlDataList({
        id: "94",
        page: this.currentPage,
      });
      if (res.code === 1) {
        this.dataList = res.data;
      }
    },
    routerLink(id) {
      this.$router.push({
        path: "/masterDetails",
        query: {
          id
        },
      });
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
        width: 100%;
        height: 70px;
        line-height: 70px;
        border-bottom: 1px dashed #e2e2e2;
      }
    }
    /deep/ .van-pagination {
      color: #1aae3d;
    }

    /deep/ .van-pagination {
      margin: 20px 0;
      justify-content: center;
      font-size: 13px;
      .van-pagination__item {
        margin: 0 4.5px 0 0;
        color: #1aae3d;
      }
      .van-pagination__item--active {
        color: #ffffff;
        background-color: #1aae3d;
      }
      .van-pagination__item:active {
        color: #ffffff;
        background-color: #1aae3d;
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