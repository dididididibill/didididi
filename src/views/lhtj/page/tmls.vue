<template>
  <div class="wrapperD">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        :title="title"
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
      <div class="tjqs">当前统计期数: {{ actQs }}</div>
      <div id="hot" style="height: 350px"></div>
      <div id="cool" style="height: 350px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { zxcountSpecialcode, zxcountPositivecode } from "@/api/index";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "正码历史冷热图",
      showPopover: false,
      actions: [
      { text: "100", id: "100" },
      { text: "50", id: "50" },
      { text: "20", id: "20" },
      { text: "10", id: "10" },
    ],
      actQs: "",
      chartData: {
        hot: {
          title: "",
          xAxis: {
            data: [],
          },
          series: {
            data: [],
          },
        },
        cold: {
          title: "",
          xAxis: {
            data: [],
          },
          series: {
            data: [],
          },
        },
      },
      myChart: null,
      myChart1: null,
      url: "",
    };
  },
  created() { 
    this.actQs = this.actions[0].text;
    if (this.tabindex == 2) {
      this.title = "特码历史冷热图";
      this.url = zxcountSpecialcode;
    }
    if (this.tabindex == 3) {
      this.title = "正码历史冷热图";
      this.url = zxcountPositivecode;
    }
    this.getEachartData();
  },
  computed: {
    ...mapGetters({
      lotterytype: "getLotterytype",
      tabindex: "getTabindex",
    }),
  },
  watch: {
    tabindex(newVal, oldVal) {
      if (newVal == 2) {
        this.title = "特码历史冷热图";
        this.url = zxcountSpecialcode;
      }
      if (newVal == 3) {
        this.title = "正码历史冷热图";
        this.url = zxcountPositivecode;
      } 
      this.actQs = this.actions[0].text;
      this.getEachartData();
    },
  },
  methods: {
    async getEachartData() {
      const res = await this.url({
        lottery_type: this.lotterytype,
        limit: this.actQs,
      });
      this.chartData = res.data;
      this.$nextTick(() => {
        this.createdEchart();
      });
    },
    createdEchart() {
      if (
        this.myChart != null &&
        this.myChart != "" &&
        this.myChart != undefined &&
        this.myChart1 != null &&
        this.myChart1 != "" &&
        this.myChart1 != undefined
      ) {
        this.myChart.dispose();
        this.myChart1.dispose();
      }
      let option = {
        title: {
          text: `${this.title}(所选期数范围内国内出现的次数)`,
          left: "left",
          textStyle: { fontSize: 14, color: "#7c7c7c", fontWeight: 500 },
        },
        xAxis: {
          type: "category",
          data: this.chartData.hot.xAxis.data,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.chartData.hot.series[0].data,
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
          text: `${this.title}(所选期数范围内国内出现的次数)`,
          left: "left",
          textStyle: { fontSize: 14, color: "#7c7c7c", fontWeight: 500 },
        },
        xAxis: {
          type: "category",
          data: this.chartData.cold.xAxis.data,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.chartData.cold.series[0].data,
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
      this.myChart = echarts.init(document.getElementById("hot"));
      this.myChart1 = echarts.init(document.getElementById("cool"));
      this.myChart.setOption(option);
      this.myChart1.setOption(option1);
      window.addEventListener("resize", () => {
        this.myChart.resize();
        this.myChart1.resize();
      });
    },
    onSelect(action) {
      this.actQs = action.text;
      this.getEachartData();
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