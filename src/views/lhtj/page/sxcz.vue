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
              v-for="(item, index) in colorData"
              :key="index"
              class="colorList"
            >
              <div class="top">{{ item.text }}</div>
              <div class="btm">
                <div
                  class="numBox"
                  v-for="(item1, index1) in item.number"
                  :key="index1"
                  :class="getCss(item1)"
                >
                  {{ item1 }}
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="生肖">
          <div class="listWrapper">
            <div
              v-for="(item, index) in sxlist"
              :key="index"
              class="colorList sxList"
            >
              <div class="top">{{ item.text }}</div>
              <div class="btm">
                <div
                  class="numBox"
                  v-for="(item1, index1) in item.number"
                  :key="index1"
                  :class="getCss(item1)"
                >
                  {{ item1 }}
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="五行">
          <div class="listWrapper">
            <div
              v-for="(item, index) in wxList"
              :key="index"
              class="colorList sxList"
            >
              <div class="top">{{ item.text }}</div>
              <div class="btm">
                <div
                  class="numBox"
                  v-for="(item1, index1) in item.number"
                  :key="index1"
                  :class="getCss(item1)"
                >
                  {{ item1 }}
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="家禽风暴">
          <div class="listWrapper">
            <div
              v-for="(item, index) in jqlist"
              :key="index"
              class="colorList sxList"
            >
              <div class="top">{{ item.text }}</div>
              <div class="btm">
                {{ item.number.join("、") }}
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
     
  </div>
</template>

<script>
export default {
  data() {
    return { 
      active: 0,
      wxList: [
        {
          text: "金",
          number: ["07", "08", "21", "22", "29", "30", "37", "38"],
        },
        {
          text: "木",
          number: [
            "03",
            "04",
            "11",
            "12",
            "19",
            "20",
            "33",
            "34",
            "41",
            "42",
            "49",
          ],
        },
        {
          text: "水",
          number: ["09", "10", "17", "18", "25", "26", "39", "40", "47", "48"],
        },
        {
          text: "火",
          number: ["05", "06", "13", "14", "27", "28", "35", "36", "43", "44"],
        },
        {
          text: "土",
          number: ["01", "02", "15", "16", "23", "24", "31", "32", "45", "46"],
        },
      ],
      sxlist: [
        { text: "鼠", number: ["03", "15", "27", "39"] },
        { text: "牛", number: ["02", "14", "26", "38"] },
        { text: "虎", number: ["01", "13", "25", "37", "49"] },
        { text: "兔", number: ["12", "24", "36", "48"] },
        { text: "龙", number: ["11", "23", "35", "47"] },
        { text: "蛇", number: ["10", "22", "34", "46"] },
        { text: "马", number: ["09", "21", "33", "45"] },
        { text: "羊", number: ["08", "20", "32", "44"] },
        { text: "猴", number: ["07", "19", "31", "43"] },
        { text: "鸡", number: ["06", "18", "30", "42"] },
        { text: "狗", number: ["05", "17", "29", "41"] },
        { text: "猪", number: ["04", "16", "28", "40"] },
      ],
      jqlist: [
        { text: "家禽", number: ["牛", "马", "羊", "鸡", "狗", "猪"] },
        { text: "野兽", number: ["鼠", "虎", "兔", "龙", "蛇", "猴"] },
      ],
      colorData: [
        {
          text: "红波",
          number: [
            "01",
            "02",
            "07",
            "08",
            "12",
            "13",
            "18",
            "19",
            "23",
            "24",
            "29",
            "30",
            "34",
            "35",
            "40",
            "45",
            "46",
          ],
        },
        {
          text: "绿波",
          number: [
            "05",
            "06",
            "11",
            "16",
            "17",
            "21",
            "22",
            "27",
            "28",
            "32",
            "33",
            "38",
            "39",
            "43",
            "44",
            "49",
          ],
        },
        {
          text: "蓝波",
          number: [
            "03",
            "04",
            "09",
            "10",
            "14",
            "15",
            "20",
            "25",
            "26",
            "31",
            "36",
            "37",
            "41",
            "42",
            "47",
            "48",
          ],
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.show=true
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