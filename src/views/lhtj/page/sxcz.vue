<template>
  <div class="wrapperD">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        title="属性参照"
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </van-sticky>
    <div class="wrapper">
      <van-tabs
        class="tabs"
        swipeable
        line-height="0px"
        title-active-color="#07c160"
      >
        <van-tab title="波色">
          <div class="listWrapper">
            <div
              v-for="(item, index) in dataList.colorList"
              :key="index"
              class="colorList"
            >
              <div class="top">{{ item.name }}</div>
              <div class="btm">
                <div
                  class="numBox"
                  v-for="(item1, index1) in item.list"
                  :key="index1"
                  :class="getCss(item1.number)"
                >
                  {{ item1.number }}
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="生肖">
          <div class="listWrapper">
            <div
              v-for="(item, index) in dataList.shengxiaoList"
              :key="index"
              class="colorList sxList"
            >
              <div class="top">{{ item.name }}</div>
              <div class="btm">
                <div
                  class="numBox"
                  v-for="(item1, index1) in item.list"
                  :key="index1"
                  :class="getCss(item1.number)"
                >
                  {{ item1.number }}
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="五行">
          <div class="listWrapper">
            <div
              v-for="(item, index) in dataList.wuxingList"
              :key="index"
              class="colorList sxList"
            >
              <div class="top">{{ item.name }}</div>
              <div class="btm">
                <div
                  class="numBox"
                  v-for="(item1, index1) in item.list"
                  :key="index1"
                  :class="getCss(item1.number)"
                >
                  {{ item1.number }}
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="家禽风暴">
          <div class="listWrapper">
            <div
              v-for="(item, index) in dataList.animalTypeList"
              :key="index"
              class="colorList sxList"
            >
              <div class="top">{{ item.name }}</div>
              <div class="btm">
                {{ item.list.join("、") }}
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { zxcountAttribute } from "@/api/index";
export default {
  data() {
    return {
      active: 0,
      dataList: {},
    };
  },
  created() {
    this.zxcountAttribute();
  },
  methods: {
    async zxcountAttribute() {
      const res = await zxcountAttribute({ lottery_type: "1" });
      if (res.code === 1) {
        this.dataList = res.data;
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.show = true;
    },
  },
  computed: {
    getCss() {
      return (index) => {
        return "css" + Number(index);
      };
    },
  },
};
</script>

<style lang='less' scoped>
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
.wrapper {
  padding: 0 30px;

  /deep/ .van-tab {
    border-bottom: 1px solid #ddd;
  }
  .listWrapper {
    font-size: 28px;
    .colorList {
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      justify-content: left;
      text-align: left;
      border-bottom: 1px solid #ddd;
      .top {
        margin-bottom: 20px;
      }
      .btm {
        display: flex;
        flex-wrap: wrap;
        .numBox {
          margin: 5px 8px;
          text-align: center;
          line-height: 50px;
          width: 50px;
          height: 50px;
        }
      }
    }
    .sxList {
      display: flex;
      flex-direction: inherit;
      justify-content: left !important;
      align-items: center !important;
      text-align: center !important;
      .top {
        margin-bottom: 0px;
        margin-right: 30px;
      }
    }
  }
}
</style>