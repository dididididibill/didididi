<template>
  <div class="wrapperD">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        title="六合统计"
        left-arrow
        @click-left="onClickLeft"
      >
        <template #right>
          <van-popover
            placement="bottom-end"
            class="popoverStyle"
            v-model="showPopover"
            trigger="click"
            :actions="actions"
            @select="onSelect"
          >
            <template #reference>
              <span>期数</span>
              <div class="num">{{ actQs }}</div>
            </template>
          </van-popover>
        </template>
      </van-nav-bar>
    </van-sticky>
    <div class="wrapper">
      <div class="tjqs">当前统计期数{{ actQs }}</div>
      <div id="hot" style="height: 350px"></div>
      <div id="cool" style="height: 350px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      showPopover: false,
      actions: [],
      actQs: "",
    };
  },
  created() {
    this.actions = [
      { text: "99", id: "99" },
      { text: "100", id: "100" },
      { text: "101", id: "101" },
    ];
    this.actQs = this.actions[0].text;

    this.$nextTick(() => {
      this.createdEchart();
    });
  },
  methods: {
    createdEchart() {
      let chartDom = document.getElementById("hot");
      let chartDom1 = document.getElementById("cool");
      let myChart = echarts.init(chartDom);
      let myChart1 = echarts.init(chartDom1);
      let option = {
        title: {
          text: "正码历史热图(所选期数范围内国内出现的次数)",
          left: "left",
          textStyle: { fontSize: 14, color: "#7c7c7c", fontWeight: 500 },
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
            itemStyle: {
              color: "red",
            },
            lineStyle: {
              color: "red",
            },
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            crossStyle: {
              color: "#fff",
            },
          },
        },
      };
      let option1 = {
        title: {
          text: "正码历史冷图(所选期数范围内国内出现的次数)",
          left: "left",
          textStyle: { fontSize: 14, color: "#7c7c7c", fontWeight: 500 },
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
            itemStyle: {
              color: "blue",
            },
            lineStyle: {
              color: "blue",
            },
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            crossStyle: {
              color: "#fff",
            },
          },
        },
      };

      option && myChart.setOption(option);
      option && myChart1.setOption(option1);
    },
    onSelect(action) {
      this.actQs = action.text;
      console.log(action.id);
    },
    onClickLeft() {
      this.$router.go(-1);
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
  /deep/.popoverStyle {
    height: 45px;
    display: flex;
    span {
      color: #fff;
    }
    .num {
      line-height: 45px;
      border-radius: 10px;
      width: 80px;
      height: 45px;
      color: #07c160;
      background-color: #fff;
      margin-left: 10px;
    }
  }
}
.wrapper {
  margin: 0 30px;
  .tjqs {
    margin: 20px 0;
    font-size: 28px;
    color: #07c160;
  }
}
</style>