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
    <div class="bg"></div>
    <div class="wrapper">
      <div class="tjqs">当前统计期数: {{ actQs }}</div>
      <div id="sxPie" style="height: 350px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { zxcountBarchart2, zxcountBarchart1 } from "@/api/index";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "正码总分",
      showPopover: false,
      actions: [
        { text: "100", id: "100" },
        { text: "50", id: "50" },
        { text: "20", id: "20" },
        { text: "10", id: "10" },
      ],
      actQs: "",
      eachartData: {
        series: {
          data: [],
        },
        xAxis: {
          data: [],
        },
      },
      myChart: null,
      url: "",
    };
  },
  computed: {
    ...mapGetters({
      lotterytype: "getLotterytype",
      tabindex: "getTabindex",
    }),
  },
  watch: {
    tabindex(newVal, oldVal) {
      if (newVal == 12) {
        this.title = "正码总分";
        this.url = zxcountBarchart1;
      }
      if (newVal == 9) {
        this.title = "特码两面";
        this.url = zxcountBarchart2;
      }
      this.actQs = this.actions[0].text;
      this.getEachartData();
    },
  },
  created() {
    if (this.tabindex == 12) {
      this.title = "正码总分";
      this.url = zxcountBarchart1;
    }
    if (this.tabindex == 9) {
      this.title = "特码两面";
      this.url = zxcountBarchart2;
    }
    this.actQs = this.actions[0].text;
    this.getEachartData();
  },
  methods: {
    async getEachartData() {
      const res = await this.url({
        lottery_type: this.lotterytype,
        limit: this.actQs,
      });
      if (res.code === 1) {
        this.eachartData = res.data;
        this.createdEchart(this.eachartData);
      }
    },
    createdEchart(eachartData) {
      if (
        this.myChart != null &&
        this.myChart != "" &&
        this.myChart != undefined
      ) {
        this.myChart.dispose(); //销毁
      }
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: eachartData.xAxis.data,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: eachartData.series.data,
            type: "bar",
            itemStyle: {
              color: "#07c160",
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