<template>
  <div class="wrapperD">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        title="生肖正码统计"
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
    <van-tabs
      v-model="active"
      color="#07c160"
      title-active-color="#07c160"
      title-inactive-color="#7c7c7c"
      @change="changeTab"
    >
      <van-tab title="热图" />
      <van-tab title="冷图" />
    </van-tabs>
    <div class="bg"></div>
    <div class="wrapper">
      <div class="tjqs">当前统计期数{{ actQs }}</div>
      <div id="sxPie" style="height: 500px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { zxcountSxpiechart1 } from "@/api/index";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      active: 0,
      showPopover: false,
      actions: [],
      actQs: "",
      coldData: {
        series: {
          data: [],
        },
      },
      hotData: {
        series: {
          data: [],
        },
      },
      myChart: null,
    };
  },
  computed: {
    ...mapGetters({
      lotterytype: "getLotterytype",
    }),
  },
  created() {
    this.actions = [
      { text: "100", id: "100" },
      { text: "50", id: "50" },
      { text: "20", id: "20" },
      { text: "10", id: "10" },
    ];
    this.actQs = this.actions[0].text;
    this.zxcountSxpiechart1();
  },
  methods: {
    async zxcountSxpiechart1() {
      const res = await zxcountSxpiechart1({
        lottery_type: this.lotterytype,
        limit: this.actQs,
      });
      if (res.code === 1) {
        this.coldData = res.data.cold;
        this.hotData = res.data.hot;
        if (this.active === 0) {
          this.$nextTick(() => {
            this.createdEchart(this.coldData);
          });
        } else {
          this.$nextTick(() => {
            this.createdEchart(this.hotData);
          });
        }
      }
    },
    changeTab() {
      if (this.active === 0) {
        this.$nextTick(() => {
          this.createdEchart(this.coldData);
        });
      } else {
        this.$nextTick(() => {
          this.createdEchart(this.hotData);
        });
      }
    },
    createdEchart(chartData) {
      if (
        this.myChart != null &&
        this.myChart != "" &&
        this.myChart != undefined
      ) {
        this.myChart.dispose(); //销毁
      }
      var option = {
        legend: {
          bottom: 10,
          left: "center",
          formatter: function (name) {
            var e = chartData.series.data.find(function (i) {
              return i.name == name;
            });
            return name +':'+ e.value;
          },
        },
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}{d}%\n{time|{c}次}",
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 20,
          rich: {
            time: {
              fontSize: 12,
              color: "#999",
            },
          },
        },
        series: [
          {
            type: "pie",
            radius: ["35%", "60%"],
            center: ["50%", "30%"],
            avoidLabelOverlap: false,
            data: chartData.series.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.myChart = echarts.init(document.getElementById("sxPie"), null, {
        renderer: "svg",
      });
      this.myChart.setOption(option);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    onSelect(action) {
      this.actQs = action.text;
      this.zxcountSxpiechart1();
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
.bg {
  height: 10px;
  width: 100%;
  background-color: #ddd;
}
.wrapper {
  margin: 0 10px;
  .tjqs {
    margin: 20px 0;
    font-size: 28px;
    color: #07c160;
  }
}
</style>