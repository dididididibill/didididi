<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="工具宝箱"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img src="../assets/img/syIcon@3x.png" />
      </template>
    </van-nav-bar>
    <div class="btnWrap">
      <div
        class="btn"
        v-for="(item, index) in btns"
        :style="{ background: chooseIndex == index ? '#FF0000' : '#FFF' }"
        :key="index"
        @click="clickunit(item.type, index)"
      >
        <div
          class="text"
          :style="{ color: chooseIndex != index ? item.color : '#FFF' }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="tix">2022期，点击条形图投票:(每期21:50清空投票数)</div>
    <div ref="wrap" class="eee">
      <div id="echartRight" style="width: 100%"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import { voteDetails } from "@/api/index";
export default {
  data() {
    return {
      chooseIndex: 0,
      echartsData: {
        cate: [],
        barData: [],
      },
      btns: [
        {
          name: "生肖",
          type: "sx",
        },
        {
          name: "特码",
          type: "tm",
        },
        {
          name: "波色",
          type: "bs",
        },
        {
          name: "五行",
          type: "wx",
        },
        {
          name: "头数",
          type: "ts",
        },
        {
          name: "尾数",
          type: "ws",
        },
        {
          name: "大小",
          type: "dx",
        },
        {
          name: "单双",
          type: "dx",
        },
        {
          name: "合数",
          type: "hs",
        },
        {
          name: "五门",
          type: "wm",
        },
      ],
    };
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     this.barGraph();
  //   });
  // },
  created() {
    this.voteDetails("sx");
  },
  methods: {
    async voteDetails(type) {
      this.echartsData = {
        cate: [],
        barData: [],
      };
      const res = await voteDetails({
        lottery_type: 1,
        type,
      });
      if (res.code === 1) {
        this.echartsData.cate = res.data.map((el) => {
          return el.title;
        });
        this.echartsData.barData = res.data.map((el) => {
          return el.vote;
        });
      }

      this.$nextTick(() => {
        this.barGraph();
      });
    },
    clickunit(id, index) {
      if (index == this.chooseIndex) {
        console.log("点击相同频道", id);
      } else {
        this.chooseIndex = index;
        this.voteDetails(id);
      }
    },
    onClickRight() {
      this.$router.push("/");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    barGraph() {
      if (myChart) {
        // myChart.dispose(); // 清空
        // 或者
        myChart.removeAttribute("_echarts_instance_"); // 移除容器上的 _echarts_instance
      }
      var cate = this.echartsData.cate;
      var barData = this.echartsData.barData;
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        //图表位置
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        //X轴
        xAxis: {
          type: "value",
          dataMin: 10,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          type: "category",
          data: cate,
          inverse: true,
          splitLine: { show: false },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          offset: -11,
          animationDuration: 300,
          animationDurationUpdate: 300,
          nameTextStyle: {
            fontSize: 5,
          },
          axisLabel: {
            color: "rgba(255, 255, 255, 1)",
            // 此处配置背景色
            backgroundColor: "red",
            fontSize: 14,
            width: 20,
            fontFamily: "Microsoft YaHei",
            padding: 4,
            borderColor: "#449933",
            borderRadius: 8,
          },
        },
        series: [
          {
            //柱状图自动排序，排序自动让Y轴名字跟着数据动
            realtimeSort: true,
            name: "票量",
            type: "bar",
            data: barData,
            barWidth: 24,
            barGap: 10,
            smooth: true,
            valueAnimation: true,
            barMinHeight: 50,
            //Y轴数字显示部分
            label: {
              show: true,
              position: "insideRight",
              // valueAnimation: true,
              offset: [0, 2],
              color: "#333",
              fontSize: 13,
              formatter: function (data) {
                return data.data + "票";
              },
            },
            itemStyle: {
              //颜色样式部分
              barBorderRadius: 8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#ffcc00" },
                { offset: 1, color: "#ffcc00" },
              ]),
            },
          },
        ],
        //动画部分
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: "linear",
        animationEasingUpdate: "linear",
      };
      var myChart = this.$echarts.init(document.getElementById("echartRight"));
      // myChart.removeAttribute("_echarts_instance_");
      myChart.setOption(option);
      var autoHeight = option.yAxis.data.length * 30 + 100;
      myChart.getDom().style.height = autoHeight + "px";
      myChart.getDom().childNodes[0].style.height = autoHeight + "px";
      myChart
        .getDom()
        .childNodes[0].childNodes[0].setAttribute("height", autoHeight);
      myChart.getDom().childNodes[0].childNodes[0].style.height =
        autoHeight + "px";
      myChart.on("click", function (params) {
        console.log(params, "click");
      });
      this.$nextTick(() => {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
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
  .eee {
    // height: calc(100vh - 390px);
    width: 700px;
    margin: 0px auto;
  }
  .btnWrap {
    width: 700px;
    margin: 82px auto 0;
    // z-index: 99;
    width: 720px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .btn {
      border: 1px solid #e2e2e2;
      line-height: 60px;
      text-align: center;
      font-size: 28px;
      width: 17%;
      height: 60px;
      background: #fff;
      margin-right: 10px;
      border-radius: 10px;
      color: black;
      margin-top: 20px;
    }
  }
  .tix {
    margin-top: 30px;
    margin-left: 25px;
    font-size: 28px;
    text-align: left;
  }
}
</style>