<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="历史开奖"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img src="../assets/img/rlIcon.png" />
      </template>
    </van-nav-bar>
    <div class="content">
      <van-tabs
        @click="onClick"
        line-width="80px"
        title-active-color="#07c160"
        color="#07c160"
      >
        <van-tab title="开奖记录"></van-tab>
        <van-tab title="开奖日期"></van-tab>
      </van-tabs>
      <div class="kjjlWrap">
        <div class="title">
          <div class="left">2021年历史开奖记录</div>
          <div class="right">
            <div class="btn">降序</div>
            <div class="btn">五行</div>
          </div>
        </div>
        <div class="listWrap">
          <div
            class="recordList"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <div class="top">
              <div class="left">第{{ item.qs }}期最新开奖结果</div>
              <div class="right">{{ item.time }}</div>
            </div>
            <div class="boxContent">
              <div
                class="box"
                v-for="(item1, index1) in item.num"
                :key="index1"
              >
                <div class="top" :class="getCss(item1)">{{ item1 }}</div>
                <div class="btm">
                  {{ item.wx[index1] }}/{{ item.sx[index1] }}
                </div>
              </div>
              <div class="box">
                <div class="top">+</div>
                <div class="btm"></div>
              </div>
              <div class="box">
                <div class="top" :class="getCss(item.num[6])">
                  {{ item.num[6] }}
                </div>
                <div class="btm">{{ item.wx[6] }}/{{ item.sx[6] }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      dataList: [
        {
          qs: 240,
          time: "2021年08月28日",
          num: [1, 2, 3, 4, 5, 6, 7],
          wx: ["木", "木", "木", "木", "木", "木", "木"],
          sx: ["鸡", "牛", "虎", "龙", "蛇", "猪", "狗"],
        },
        {
          qs: 240,
          time: "2021年08月28日",
          num: [1, 2, 3, 4, 5, 6, 7],
          wx: ["木", "木", "木", "木", "木", "木", "木"],
          sx: ["鸡", "牛", "虎", "龙", "蛇", "猪", "狗"],
        },
        {
          qs: 240,
          time: "2021年08月28日",
          num: [1, 2, 3, 4, 5, 6, 7],
          wx: ["木", "木", "木", "木", "木", "木", "木"],
          sx: ["鸡", "牛", "虎", "龙", "蛇", "猪", "狗"],
        },
        {
          qs: 240,
          time: "2021年08月28日",
          num: [1, 2, 3, 4, 5, 6, 7],
          wx: ["木", "木", "木", "木", "木", "木", "木"],
          sx: ["鸡", "牛", "虎", "龙", "蛇", "猪", "狗"],
        },
      ],
    };
  },
  computed: {
    getCss() {
      return (index) => {
        return "css" + Number(index);
      };
    },
  },
  methods: {
    onClick(name, title) {
      this.$toast(title);
    },
    routerLink() {
      this.$router.push("/masterDetails");
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
    margin: 93px 0 25px 0;
    /deep/ .van-tab {
      font-size: 34px;
    }
    .kjjlWrap {
      .title {
        padding: 0 0 0 15px;
        height: 80px;
        background: #e1e1e1;
        font-size: 26px;
        display: flex;
        justify-content: space-between;
        line-height: 80px;
        .right {
          display: flex;
          align-items: center;
          .btn {
            font-size: 24px;
            color: #000;
            height: 35px;
            line-height: 35px;
            margin-right: 20px;
            padding: 4px 10px;
            border-radius: 20px;
            background: #fff;
            border: 1px solid #000;
          }
        }
      }
      .listWrap {
        padding: 30px 15px;
        font-size: 24px;
        .recordList {
          display: flex;
          flex-direction: column;
          padding: 20px 0;
          border-bottom: 1px solid #e1e1e1;
          > .top {
            display: flex;
            justify-content: space-between;

            margin: 20px 0;
            .left {
              font-size: 30px;
              color: black;
            }
            .right {
              color: #7c7c7c;
            }
          }
          .boxContent {
            display: flex;
            justify-content: space-between;
            border: 1px solid #07c160;
            border-radius: 10px;
            .box {
              padding: 20px 10px;
              font-size: 26px;
              .top {
                width: 70px;
                height: 70px;
                background-size: 100% 100%;
                line-height: 70px;
                font-size: 30px;
                font-weight: 700;
                margin-bottom: 20px;
              }
              .btm {
                color: #7c7c7c;
              }
            }
            .box:nth-child(7) {
              display: none;
            }
            .box:nth-child(8) {
              padding: 20px 0;
              .top {
                width: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>