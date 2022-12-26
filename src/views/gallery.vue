<template>
  <div class="wrapper">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        title="六合图库"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="wrp">
        <van-search
          class="put-on-head"
          v-model="value"
          show-action
          clearable
          placeholder="请输入搜索关键词"
        > 
          <template #left>
            <select class="sel" @change="tukuSearch" v-model="value1">
              <option value="1">彩色</option>
              <option value="2">黑白</option>
            </select> 
          </template>
          <template #action>
            <div style="color: #1aae3d" @click="tukuSearch">搜索</div>
          </template>
        </van-search>
      </div>
    </van-sticky>
    <div class="listWrpa">
      <van-index-bar class="list">
        <div v-for="(item, name, index) in list" :key="index">
          <van-index-anchor :index="name" />
          <div
            class="contentList"
            v-for="(item1, index1) in item"
            :key="index1"
          >
            <div class="left">{{ item1.name }}</div>
            <div class="right">{{ item1.issue }}</div>
          </div>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { tukuSearch } from "@/api/index";
export default {
  data() {
    return {
      value: "",
      value1: "1",
      list: [],
    };
  },
  created() {
    this.tukuSearch();
  },
  methods: {
    async tukuSearch() {
      const res = await tukuSearch({
        lottery_type: "1",
        color: this.value1,
        title: this.value,
      });
      if (res.code === 1) {
        this.list = res.data.list;
      }
    }, 
    onSearch() {
      this.$toast(this.value);
    },
    onClickLeft() {
      this.$router.go(-1);
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
  .wrp {
    width: 100%;
    height: 100%;
    .put-on-head {
      padding: 15px;
      border-radius: 8px;
      display: flex;
      overflow: hidden;
      border: none;
      .sel {
        color: #1aae3d;
        border: none;
        padding: 10px 2px 10px 15px;
        height: 64px;
        outline: none;
        background: #f7f8fa;
        border-radius: 8px 0 0 8px;
        border-right: 1px solid #e1e1e1;
      }
      .van-popover__wrapper {
        height: 60px;
        width: 200px;
        .vBtn {
          height: 60px;
        }
      }
    }
    .tab {
      margin: auto;
      width: 95%;
    }
  }

  .listWrpa {
    width: 100%;
    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      ::v-deep(.van-index-anchor) {
        color: #1aae3d;
        width: 100%;
        display: flex;
        justify-content: left;
      }
      .contentList {
        line-height: 80px;
        height: 80px;
        font-size: 26px;
        margin: 20px 50px 20px 30px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ebedf0;
        align-items: center;
        .right {
          line-height: 45px;
          height: 45px;
          width: 90px;
          background-color: #ebedf0;
          color: #1aae3d;
        }
      }
    }
  }
}
</style>