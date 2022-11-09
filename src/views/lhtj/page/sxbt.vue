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
      @click="changeTab"
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
export default {
  data() {
    return {
      active: 0,
      showPopover: false,
      actions: [],
      actQs: "",
      eachartData: {
        name: ["猪", "猪", "猪", "猪", "猪"],
        value: [
          {
            value: 1548,
            name: "猪",
          },
          { value: 735, name: "猪" },
          { value: 510, name: "猪" },
          { value: 434, name: "猪" },
          { value: 335, name: "猪" },
        ],
      },
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
      this.createdEchart(this.eachartData);
    });
  },
  methods: {
    changeTab() {
      this.$nextTick(() => {
        this.createdEchart(this.eachartData);
      });
    },
    createdEchart(data) {
      if (myChart != null && myChart != "" && myChart != undefined) {
        myChart.dispose();//销毁
    }
      var chartDom = document.getElementById("sxPie");
      var myChart = echarts.init(chartDom);
      var option = {
        legend: {
          bottom: 10,
          left: "center",
          data: data.name,
        },
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}{d}%\n{time|{c}票}",
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 15,
          rich: {
            time: {
              fontSize: 10,
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
            data: data.value,
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
      myChart.setOption(option);
    },
    onSelect(action) {
      this.actQs = action.text;
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
  margin: 0 30px;
  .tjqs {
    margin: 20px 0;
    font-size: 28px;
    color: #07c160;
  }
}
</style>