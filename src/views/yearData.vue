<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="全年资料"
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
      <div class="btnWrap">
        <div
          class="btnList"
          :class="[chooseIndex == index ? 'choose' : '']"
          v-for="(item, index) in yearBtn"
          :key="index"
          @click="yearUnit(item.id, index)"
        >
          {{ item.year }}
        </div>
      </div>
      <div class="contentText">
        <div
          class="list"
          @click="routerLink(item.id)"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <div class="top">
            <div class="left">{{ item.titleL }} :</div>
            <div class="right">{{ item.titleR }}</div>
          </div>
          <div class="btm">
            <div class="name">{{ item.name }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
      </div>
      <van-pagination
        class="page"
        color="#1aae3d"
        v-model="currentPage"
        :total-items="24"
        :items-per-page="5"
      />
    </div>
    <div class="btmNab">
      <div class="top">记住域名：66bd.com</div>
      <div class="btm">© 66宝典 版权所有</div>
    </div>
  </div>
</template>

<script>
import { time } from "echarts";
export default {
  data() {
    return {
      dataList: [
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)11111111111111111",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        },
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        },
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        },
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        },
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        },
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        },
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        },
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        },
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        },
        {
          titleL: "┦2022全年资料┢",
          titleR: "【曾道人五字诗】(001-152期)",
          name: "66宝典-www.66bd.com",
          time: "2022-9-28 21:47:30",
          id: "001",
        }, 
 
      ],
      currentPage: 1,
      yearBtn: [],
      chooseIndex: 0,
    };
  },

  created() {
    this.getYear();
  },
  methods: {
    routerLink(id) {
      // this.$router.push("/masterDetails");
      this.$toast('id' + id )
    },
    onClickRight() {
      this.$router.push("/");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    yearUnit(id, index) {
      if (index == this.chooseIndex) {
        console.log("点击相同频道", id);
      } else {
        this.chooseIndex = index;
        console.log("切换频道", id);
      }
    },
    getYear() {
      for (let i = 1; i < 12; i++) {
        this.yearBtn.push({
          year: new Date().getFullYear() - (i - 1) + "年",
          id: i,
        });
      }
      this.yearBtn.push({ year: "全部年份", id: 0 });
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  width: 100%;
  // min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
    // min-height: calc(100vh - 150px);
    padding-bottom: 140px;
    margin: 120px 25px 25px 25px;
    .btnWrap {
      font-size: 26px;
      width: 100%;
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      .btnList {
        border: 1px solid #7c7c7c;
        width: 15%;
        border-radius: 10px;
        margin: 3px;
        text-align: center;
        line-height: 50px;
        height: 50px;
      }
      // .btnList:last-child {
      //  color: #FFF;
      //  background: rgb(22, 116, 240);
      // }
      .choose {
        background: #ff0000;
        color: #fff;
        border: 1px solid #f00;
      }
    }
    .contentText {
      margin-top: 30px;
      width: 100%;
      font-size: 32px;
      display: flex;
      flex-direction: column;
      text-align: left;
      .list {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        border-bottom: 1px solid #e1e1e1;
        .top {
          width: 700px;
          margin-top: 2px;
          height: 60px;
          line-height: 60px;
          display: flex;
          justify-content: left;
          .left{
            flex: 1;
            white-space: nowrap;
          }
          .right { 
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .btm {
          font-size: 28px;
          height: 40px;
          line-height: 40px;
          margin-bottom: 3px;
          color: #e1e1e1;
          display: flex;
          justify-content: space-between;
        }
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
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 32px;
    height: 140px;
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