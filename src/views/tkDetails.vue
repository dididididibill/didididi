<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="澳门传真"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    >
      <template #right>
        <div class="navRight">
          <div @click="onClickRight('/kjRecord')" class="btn">
            <img src="../assets/img/plIcon.png" />
            <div class="text">开奖记录</div>
          </div>
          <div @click="onClickRight(2)" class="btn">
            <img src="../assets/img/plIcon.png" />
            <div class="text">发表评论</div>
          </div>
        </div>
      </template>
    </van-nav-bar>
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
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1">
        <template #title>
          <div class="left">
            <div
              class="btnList"
              :class="[chooseIndex == index ? 'choose' : '']"
              v-for="(item, index) in yearBtn"
              :key="index"
              @click.stop="yearUnit(item.id, index)"
            >
              {{ item.year }}
            </div>
          </div>
        </template>
        <template #right-icon>
          <div class="right">
            <div class="btnRight">
              <span>展开</span>
              <img src="../assets/img/qszk.png" />
            </div>
          </div>
        </template>
        <div class="listWrap">
          <div
            class="list"
            :style="{ border: item.id === '00000' ? '1px solid #FFF' : '' }"
            :class="[chooseIndex == index ? 'choose' : '']"
            v-for="(item, index) in yearBtn"
            :key="index"
            @click="yearUnit(item.id, index)"
          >
            {{ item.year }}
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>

    <div class="content">
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
      activeNames: [],
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
  mounted() {
    this.getYear();
  }, 
  methods: {
    routerLink(id) {
      // this.$router.push("/masterDetails");
      this.$toast("id" + id);
    },
    onClickRight(link) {
        this.$router.push(link);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    yearUnit(id, index) {
      if (id === "00000") {
      } else {
        if (index == this.chooseIndex) {
          console.log("点击相同频道", id);
        } else {
          this.chooseIndex = index;
          console.log("切换频道", id);
          this.activeNames = [];
        }
      }
    },
    getYear() {
      let arr = [];
      for (let i = 0; i < 30; i++) {
        arr.push({
          year: new Date().getFullYear() - i + "年",
          id: i,
        });
      }
      if (arr.length % 4 == 0) {
        this.yearBtn = arr;
      } else {
        let i = arr.length % 4;

        console.log(i);
        for (let x = 0; x < i; x++) {
          arr.push({
            year: "",
            id: "00000",
          });
        }
        this.yearBtn = arr;
      }
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
    /deep/ .van-nav-bar__right {
      padding-right: 15px !important;
    }
    .navRight {
      display: flex;
      font-size: 24px;
      color: #fff;
      .btn {
        display: flex;
        margin-left: 10px;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  .btnWrap {
    margin-top: 110px;
    font-size: 26px;
    width: 735px;
    height: 70px;
    padding-left: 15px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: left;
    overflow: hidden;
    overflow-x: auto;
    border-bottom: 1px solid #e1e1e1;
    .btnList {
      border: 1px solid #7c7c7c;
      border-radius: 25px;
      padding: 2px 10px;
      margin-right: 10px;
      white-space: nowrap;
      line-height: 40px;
      height: 40px;
    }
    .choose {
      background: #07c610;
      color: #fff;
      border: 1px solid #07c610;
    }
  }
  /deep/.van-cell {
    margin: 20px 0 0 0 !important;
    padding: 0 0 10px 0 !important;
    display: flex;
    align-items: center;
    height: 70px;
    .left {
      font-size: 28px;
      width: 600px;
      height: 50px;
      flex: 1;
      display: flex;
      flex-wrap: nowrap;
      text-align: center;
      align-items: center;
      justify-content: left;
      overflow: hidden;
      overflow-x: auto;
      padding: 10px 0 15px 15px;
      .btnList {
        border-radius: 25px;
        padding: 10px 20px;
        margin-right: 10px;
        white-space: nowrap;
      }
      .choose {
        color: #07c610;
      }
    }
    .right {
      font-size: 24px;
      flex-wrap: nowrap;
      width: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      .btnRight {
        padding: 0 10px;
        display: flex;
        align-items: center;
        background: #07c610;
        border-radius: 25px;
        color: #fff;
        img {
          width: 20px;
          height: 15px;
          margin-left: 10px;
        }
      }
    }
  }
  .listWrap {
    font-size: 26px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list {
      color: #000;
      border: 1px solid #7c7c7c;
      width: 23%;
      border-radius: 5px;
      margin: 3px;
      text-align: center;
      line-height: 50px;
      height: 50px;
    }
    .choose {
      background: #07c610;
      color: #fff;
      border: 1px solid #07c610;
    }
  }
  .content {
    padding-bottom: 140px;
    margin: 0 25px 25px 25px;
    .contentText {
      margin-top: 20px;
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
          .left {
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