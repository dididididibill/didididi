<template>
  <div class="wrap">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        title="高手论坛"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <img src="../assets/img/pltab.png" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <div class="top">
      <img width="100%" src="../assets/img/u12.png" />
    </div>
    <!-- <van-tabs type="card" @click="onClick" color="#07c160">
      <van-tab title="全部" />
      <van-tab title="澳彩" />
      <van-tab title="港彩" />
      <van-tab title="台彩" />
      <van-tab title="新彩" />
    </van-tabs> -->
    <div class="tabWarp">
      <van-tabs
        class="selectTab"
        v-model="active"
        color="#07c160"
        title-active-color="#07c160"
        title-inactive-color="#7c7c7c"
      >
        <van-tab title="综合" name="all" />
        <van-tab title="精华" name="ess" />
        <van-tab title="最多赞" name="like" />
        <van-tab title="最新" name="new" />
      </van-tabs>
    </div>
    <div class="plList">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="list"
            @click="details(item.id)"
            v-for="(item, index) in listData"
            :key="index"
          >
            <div class="top">
              <div class="left">
                <img :src="item.img" />
              </div>
              <div class="right">
                <div class="name">{{ item.name }}</div>
                <div class="time">{{ item.time }}</div>
              </div>
            </div>
            <div class="center">
              <div class="title">
                <div class="left">{{ item.qishu }}</div>
                <div class="right">{{ item.title }}</div>
              </div>
              <div class="text">
                {{ item.content }}
              </div>
            </div>
            <div class="btm">
              <div class="box">
                <img src="../assets/img/pl.png" />
                <div class="num">{{ item.pl }}</div>
              </div>
              <div class="box">
                <img src="../assets/img/dz.png" />
                <div class="num">{{ item.dz }}</div>
              </div>
              <div class="box">
                <img src="../assets/img/liul.png" />
                <div class="num">{{ item.liul }}</div>
              </div>
              <div v-if="item.type == '1'" class="ltType">
                <img src="../assets/img/ac.png" />
                <div class="ltTypeText" style="color: #07c160">澳彩</div>
              </div>
              <div v-if="item.type == '2'" class="ltType">
                <img src="../assets/img/gc.png" />
                <div class="ltTypeText" style="color: #ff0000">港彩</div>
              </div>
              <div v-if="item.type == '3'" class="ltType">
                <img src="../assets/img/tc.png" />
                <div class="ltTypeText" style="color: #0755c1">台彩</div>
              </div>
              <div v-if="item.type == '4'" class="ltType">
                <img src="../assets/img/xc.png" />
                <div class="ltTypeText" style="color: #b907c1">新彩</div>
              </div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
 
<script>
export default { 
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      active: 0,
      listData: [
        {
          name: "徐国栋",
          time: "2022-10-18 23:02:31",
          qishu: "241",
          title: "241期澳彩特肖(玉林站)参赛帖",
          img: require("../assets/img/pltx.png"),
          content: "241期澳彩特肖(玉林站)参赛帖",
          pl: "255",
          dz: "266",
          liul: "700",
          type: "2",
          id: "001",
        },
        {
          name: "徐国栋",
          time: "2022-10-18 23:02:31",
          qishu: "241",
          title: "241期澳彩特肖(玉林站)参赛帖",
          img: require("../assets/img/pltx.png"),
          content: "241期澳彩特肖(玉林站)参赛帖",
          pl: "255",
          dz: "266",
          liul: "700",
          type: "3",
          id: "002",
        },
        {
          name: "徐国栋",
          time: "2022-10-18 23:02:31",
          qishu: "241",
          title: "241期澳彩特肖(玉林站)参赛帖",
          img: require("../assets/img/pltx.png"),
          content: "241期澳彩特肖(玉林站)参赛帖",
          pl: "255",
          dz: "266",
          liul: "700",
          type: "4",
          id: "003",
        },
        {
          name: "徐国栋",
          time: "2022-10-18 23:02:31",
          qishu: "241",
          title: "241期澳彩特肖(玉林站)参赛帖",
          img: require("../assets/img/pltx.png"),
          content: "241期澳彩特肖(玉林站)参赛帖",
          pl: "255",
          dz: "266",
          liul: "700",
          type: "1",
          id: "004",
        },
      ],
    };
  },
  methods: {
    details(id) {
      this.$router.push({ path: "/gsFormDetails", query: { id } });
    },
    onClick(name, title) {
      this.$toast(name);
      this.active = 0;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/message");
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.listData = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.listData.push(this.listData.length + 1);
        }
        this.loading = false;

        if (this.listData.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>
 
<style lang="less" scoped>
.wrap {
  width: 100%;
  min-height: 100vh;
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
  .tabWarp {
    margin-top: 15px;
    width: 70%;
    .selectTab /deep/ .van-tabs--line {
      height: 60px;
    }
    .selectTab /deep/ .van-tabs__wrap {
      height: 60px;
    }
  }
  .plList {
    width: 100%;
    margin-top: 15px;
    .list {
      border-bottom: 15px solid #dddddd;
      // &:first-child{
      //   border: none;
      // }

      .top {
        padding: 20px 45px 15px 45px;
        display: flex;
        height: 70px;
        justify-content: left;
        align-items: center;
        .left {
          width: 70px;
          margin-right: 15px;
          img {
            width: 100%;
          }
        }
        .right {
          text-align: left;
          font-size: 26px;
          .name {
            margin-bottom: 10px;
          }
        }
      }
      .center {
        display: flex;
        flex-direction: column;
        align-items: left;
        text-align: left;
        padding: 0 45px;
        font-size: 28px;
        .title {
          height: 35px;
          display: flex;
          .left {
            font-size: 24px;
            height: 35px;
            line-height: 35px;
            padding: 0 5px;
            background: #07c160;
            color: #fff;
            margin-right: 15px;
          }
          .right {
            height: 35px;
            line-height: 35px;
            font-weight: 700;
          }
        }
        .text {
          height: 35px;
          width: 100%;
          line-height: 35px;
          padding: 20px 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .btm {
        border-top: 1px solid #dddddd;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px 0;
        .box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          height: 60px;
          width: 60px;
          img {
            width: 40px;
          }
          .num {
            margin-top: 10px;
            color: #b1aaaa;
            font-size: 26px;
          }
        }
        .ltType {
          display: flex;
          height: 40px;
          padding: 8px 15px;
          background-color: #eeecec;
          border-radius: 15px;
          img {
            width: 40px;
            margin-right: 10px;
          }
          .ltTypeText {
            line-height: 44px;
            font-size: 26px;
          }
        }
      }
    }
  }
}
</style>