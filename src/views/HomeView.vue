<template>
  <div class="home">
    <div class="navBar">
      <div class="leftNav" @click="routerLink('/gallery')">
        <van-icon name="search" size="18" color="#FFF" />
        <div class="text">搜索</div>
      </div>
      <img src="../assets/img/logo@2x.png" />
      <div class="rightNav">
        <div class="left" @click="routerLink('/login')">
          <van-icon name="user-circle-o" size="18" />
          <div class="text">登录</div>
        </div>
        <div class="right">
          <van-icon @click="popup" name="bars" size="18" />
          <div class="text">菜单</div>
        </div>
      </div>
    </div>

    <van-swipe class="vSwipe" width="100%" :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img style="width: 100%; object-fit: fill !important" :src="item"
      /></van-swipe-item>
    </van-swipe>
    <div class="center">
      <div class="card">
        <div class="cardList">
          <div
            class="btn"
            :class="[chooseIndex == index ? 'choose' : '']"
            v-for="(item, index) in unit"
            :key="index"
            @click="clickunit(item.id, index)"
          >
            <div class="title">{{ item.name }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
        <div class="cardCenter">
          <div class="top">
            <div class="left">第<span>108</span>期开奖结果</div>
            <div class="right">历史记录</div>
          </div>
          <div class="center">
            <div class="left" v-for="(item, index) in num" :key="index">
              <div class="box">
                <!-- <div class="num" :style="{ backgroundImage : item.type == 'red' ? 'url(' + require('../assets/img/red.png') + ')': item.type == 'blue' ? 'url(' + require('../assets/img/blue.png') + ')' :'url(' + require('../assets/img/green.png') + ')' }" >  -->
                <div
                  class="num" 
                  :class="getCss(item.n)"
                >
                  {{ item.n }}
                </div>
                <div class="type">{{ item.class }}</div>
              </div>
            </div>
            <div class="right">
              <div class="fh">+</div>
              <div class="box">
                <div class="num" >16</div>
                <div class="type">龙/金</div>
              </div>
            </div>
          </div>
          <div class="timer">第109期2020/12/18/周六21:34</div>
        </div>
      </div>
      <div class="navWrapper">
        <div
          class="navBox"
          v-for="(item, index) in navList"
          :key="index"
          @click="routerLink(item.link)"
        >
          <img :src="item.icon" class="icon" />
          <div class="title">{{ item.name }}</div>
        </div>
      </div>
      <div class="forecast">
        <div class="title">
          <div class="yellowText">059期: AA级公开</div>
          <div class="ddz">还等啥大胆砸</div>
        </div>
        <div class="forecastContent">
          <div
            class="forecastList"
            v-for="(item, index) in forecastArr"
            :key="index"
          >
            <div class="left">{{ item.num }}期: {{ item.title }} :</div>
            <div
              class="right"
              v-for="(item1, index1) in item.content"
              :key="index1"
            >
              {{ item1 }}
            </div>
          </div>
        </div>
      </div>
      <div class="galleryWrap">
        <div class="gallery" v-for="(item, index) in galleryList" :key="index">
          <div class="title">
            <img src="../assets/img/imgSy.png" />
            <div class="text">{{ item.galleryName }}</div>
          </div>
          <div class="galleryListWrap">
            <div
              class="galleryList"
              v-for="(item1, index1) in item.galleryNav"
              :key="index1"
              @click="routerLink(item1.link)"
            >
              {{ item1.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="switchBtn">
      <div
        class="btn"
        v-for="(item, index) in tabbars"
        :style="{ background: chooseIndex == index ? item.color : '#FFF' }"
        :key="index"
        @click="clickunit(item.id, index)"
      >
        <img :src="index == chooseIndex ? item.active : item.normal" />
        <div
          class="text"
          :style="{ color: chooseIndex != index ? item.color : '#FFF' }"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '35%', marginTop: '40px' }"
    >
      <div class="popWrapper">
        <div class="routeBox" @click="routerLink('/about')">
          <img src="../assets/img/icon_nav_10.png" />
          <div class="text">挑码助手</div>
        </div>
        <div class="routeBox" @click="routerLink('/fsjs')">
          <img src="../assets/img/icon_nav_10.png" />
          <div class="text">复数计算</div>
        </div>
        <div class="routeBox" @click="routerLink('/loverNum')">
          <img src="../assets/img/icon_nav_10.png" />
          <div class="text">恋人特码</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      chooseIndex: 0,
      galleryList: [
        {
          galleryName: "香港图库",
          galleryNav: [
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
            {
              name: "看图解码",
              link: "#",
            },
          ],
        },
      ],
      unit: [
        {
          name: "澳彩",
          time: "12月15日4开奖",
          id: 0,
        },
        {
          name: "港彩",
          time: "12月15日4开奖",
          id: 1,
        },
        {
          name: "台彩",
          time: "12月15日4开奖",
          id: 2,
        },
        {
          name: "新彩",
          time: "12月15日4开奖",
          id: 3,
        },
      ],
      forecastArr: [
        {
          num: "059",
          title: "精选九肖",
          content: ["鸡", "猴", "蛇", "龙", "鼠", "狗", "牛", "猪", "马"],
        },
        {
          num: "059",
          title: "精选七肖",
          content: ["鸡", "猴", "蛇", "龙", "鼠", "狗", "牛"],
        },
        {
          num: "059",
          title: "精选五肖",
          content: ["鸡", "猴", "蛇", "龙", "鼠"],
        },
        {
          num: "059",
          title: "精选三肖",
          content: ["鸡", "猴", "蛇"],
        },
        {
          num: "059",
          title: "精选一肖",
          content: ["鸡"],
        },
        {
          num: "059",
          title: "特选尾数",
          content: ["1-5-6-7-9"],
        },
        {
          num: "059",
          title: "精选两波",
          content: ["红波", "蓝波"],
        },
        {
          num: "059",
          title: "精选一尾",
          content: ["777"],
        },
        {
          num: "059",
          title: "精选一肖",
          content: ["龙 龙 龙"],
        },
        {
          num: "059",
          title: "精选十码",
          content: ["18", "42", "31", "43", "22", "46", "11", "23", "03", "17"],
        },
        {
          num: "059",
          title: "精选五码",
          content: ["18", "42", "31", "43", "22"],
        },
        {
          num: "059",
          title: "精选三码",
          content: ["18", "42", "31"],
        },
      ],
      num: [
        {
          n: "01",
          type: "red",
          class: "龙/金",
        },
        {
          n: "02",
          type: "blue",
          class: "龙/金",
        },
        {
          n: "03",
          type: "red",
          class: "龙/金",
        },
        {
          n: "01",
          type: "blue",
          class: "龙/金",
        },
        {
          n: "04",
          type: "green",
          class: "龙/金",
        },
        {
          n: "05",
          type: "green",
          class: "龙/金",
        },
      ],
      navList: [
        {
          icon: require("../assets/img/zbkj.png"),
          name: "直播开奖",
          link: "/tkDetails",
        },
        {
          icon: require("../assets/img/kjrq.png"),
          name: "开奖日期",
          link: "/openingDate",
        },
        {
          icon: require("../assets/img/sxsx.png"),
          name: "生肖属性",
          link: "/sxAttribute",
        },
        {
          icon: require("../assets/img/qnzl.png"),
          name: "全年资料",
          link: "/yearData",
        },
        {
          icon: require("../assets/img/gscs.png"),
          name: "高手参赛",
          link: "#",
        },
        {
          icon: require("../assets/img/lhtk.png"),
          name: "六合图库",
          link: "/imgs",
        },
        {
          icon: require("../assets/img/zbgp.png"),
          name: "正版挂牌",
          link: "#",
        },
        {
          icon: require("../assets/img/gsjg.png"),
          name: "高手解挂",
          link: "/master",
        },
        {
          icon: require("../assets/img/tptj.png"),
          name: "投票统计",
          link: "/voteStatistics",
        },
        {
          icon: require("../assets/img/gjbx.png"),
          name: "工具宝箱",
          link: "/toolChest",
        },
        {
          icon: require("../assets/img/zxtj.png"),
          name: "资讯统计",
          link: "#",
        },
        {
          icon: require("../assets/img/lyfk.png"),
          name: "留言反馈",
          link: "#",
        },
      ],
      images: [
        require("../assets/img/u12.png"),
        require("../assets/img/u14.png"),
        require("../assets/img/u16.png"),
      ],
      tabbars: [
        {
          id: "0",
          title: "澳彩",
          normal: require("../assets/img/ac.png"),
          active: require("../assets/img/acxz.png"),
          color: "#07c160",
        },
        {
          id: "1",
          title: "港彩",
          normal: require("../assets/img/gc.png"),
          active: require("../assets/img/gcxz.png"),
          color: "#FF0000",
        },
        {
          id: "2",
          title: "台彩",
          normal: require("../assets/img/tc.png"),
          active: require("../assets/img/tcxz.png"),
          color: "#0755c1",
        },
        {
          id: "3",
          title: "新彩",
          normal: require("../assets/img/xc.png"),
          active: require("../assets/img/xcxz.png"),
          color: "#b907c1",
        },
      ],
    };
  },
  computed: {
    getCss () {
      return (index) => {
        return 'css' + Number(index)
      };
    },
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    routerLink(link) {
      this.$router.push(link);
      this.show = false;
    },
    onClickLeft() {
      // this.$router.go(-1);
      console.log("1");
    },
    popup() {
      this.show = true;
    },

    clickunit(id, index) {
      if (index == this.chooseIndex) {
        console.log("点击相同频道", id);
      } else {
        this.chooseIndex = index;
        console.log("切换频道", id);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  padding-bottom: 25px;
  width: 100%;
  background: #fff;
  .popWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-content: flex-start;
    justify-content: left;
    flex-wrap: wrap;
    .routeBox {
      margin-top: 10px;
      width: 48%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      img {
        width: 65%;
        margin-bottom: 3px;
      }
    }
  }
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
      .left {
        .text {
          margin-top: 5px;
        }
      }

      .right {
        margin-left: 30px;
        .text {
          margin-top: 5px;
        }
      }
    }
  }
  .vSwipe {
    margin-top: 80px;
  }
  .center {
    margin: 0 25px;
    .galleryWrap {
      .gallery {
        margin-top: 25px;
        .title {
          display: flex;
          align-items: center;
          font-size: 42px;
          height: 65px;
          border-bottom: 1px solid #e2e2e2;
          box-shadow: 0 1px #e2e2e2;
          img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
          }
        }
        .galleryListWrap {
          display: flex;
          flex-wrap: wrap;
          font-size: 32px;
          .galleryList {
            width: 25%;
            height: 60px;
            line-height: 60px;
            border-bottom: 1px solid #e2e2e2;
          }
        }
      }
    }
    .cardList {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      .btn {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        border-radius: 15px 15px 0 0;
        width: 180px;
        height: 80px;
        margin-right: 15px;
        background: #f1f1f1;
        .title {
          font-size: 32px;
          font-weight: 700;
          margin-top: 10px;
        }
        .time {
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          margin-top: 4px;
          font-size: 22px;
        }
      }
      .btn:last-child {
        margin-right: 0;
      }
      .choose {
        background: #07c160;
        color: #fff;
      }
    }
    .cardCenter {
      font-size: 24px;
      width: 100%;
      border: 1px solid #07c160;
      border-radius: 0 0 15px 15px;
      background: #f1f1f1;
      .top {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        .left {
          span {
            color: #07c160;
          }
        }
        .right {
          color: #07c160;
        }
      }
      .center {
        display: flex;
        justify-content: space-between;
        .left {
          flex: 1;
          display: flex;
          justify-content: space-between;
          .num {
            width: 60px;
            height: 60px;
            //    background-image: url("../assets/img/blue.png");
            background-size: 100% 100%;
            line-height: 60px;
            text-align: center;
          }
          .type {
            margin-top: 10px;
          }
        }
        .right {
          width: 110px;
          display: flex;
          .fh {
            width: 20px;
            height: 60px;
            line-height: 60px;
            margin-right: 20px;
          }
          .box {
            .num {
              width: 60px;
              height: 60px;
              background-image: url("../assets/img/blue.png");
              background-size: 100% 100%;
              line-height: 60px;
              text-align: center;
            }
            .type {
              margin-top: 10px;
            }
          }
        }
      }
      .timer {
        padding: 20px 0;
        color: #ff0000;
      }
    }
    .navWrapper {
      padding: 0 23px;
      font-size: 26px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      text-decoration: 1;
      .navBox {
        margin-top: 30px;
        width: 25%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .icon {
          width: 60%;
        }
        .title {
          margin-top: 14px;
        }
      }
    }
    .forecast {
      margin-top: 30px;
      font-size: 24px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      .title {
        color: #fff;
        line-height: 70px;
        font-size: 30px;
        font-weight: 700;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        background: #ff0000;
        margin-bottom: 2px;
        .yellowText {
          color: #fc0;
          margin-right: 20px;
        }
      }
      .forecastContent {
        font-size: 28px;
        .forecastList {
          background: #000;
          margin-bottom: 2px;
          height: 60px;
          line-height: 60px;
          width: 700px;
          display: flex;
          justify-content: left;
          .left {
            margin-left: 10px;
            margin-right: 10px;
            color: #07c160;
          }
          .right {
            color: #a10000;
            margin-right: 7px;
          }
        }
      }
    }
  }
  .switchBtn {
    z-index: 99;
    position: fixed;
    width: 720px;
    bottom: 25px;
    left: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn {
      padding-left: -10px;
      line-height: 70px;
      text-align: center;
      font-size: 28px;
      width: 165px;
      height: 70px;
      display: flex;
      justify-content: left;
      background: #fff;
      margin-right: 20px;
      border-radius: 5px;
      img {
        display: inline-block;
        width: 60px;
        height: 50px;
        margin: auto 15px;
      }
    }
  }
}
</style>
