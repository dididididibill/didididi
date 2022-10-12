<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="工具宝箱"
      left-arrow
      :fixed= true
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
        @click="clickunit(item.id, index)"
      >
        <div
          class="text"
          :style="{ color: chooseIndex != index ? item.color : '#FFF' }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="tix">
      2022期，点击条形图投票:(每期21:50清空投票数)
    </div>
    <div ref="wrap" class="eee">
      <div id="echartRight" style="width: 100%"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chooseIndex: 0,
      echarts: [],
      btns: [
        {
          name: "生肖",
          id: 0,
        },
        {
          name: "特码",
          id: 1,
        },
        {
          name: "波色",
          id: 2,
        },
        {
          name: "五行",
          id: 3,
        },
        {
          name: "头数",
          id: 4,
        },
        {
          name: "尾数",
          id: 5,
        },
        {
          name: "大小",
          id: 6,
        },
        {
          name: "单双",
          id: 7,
        },
        {
          name: "合数",
          id: 8,
        },
        {
          name: "五门",
          id: 9,
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.barGraph();
    });
  },
  methods: {
    clickunit(id, index) {
      if (index == this.chooseIndex) {
        console.log("点击相同频道", id);
      } else {
        this.chooseIndex = index;
        console.log("切换频道", id);
      }
    },
    onClickRight() {
      this.$router.push("/");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    barGraph() {
      var cate = [
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
        "猪",
      ];
      //数据值，顺序和Y轴的名字一一对应
      var barData = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
      ];
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
          //不显示X轴刻度线和数字
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          type: "category",
          data: cate,
          //升序
          inverse: true,
          splitLine: { show: false },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          //key和图间距
          offset: -11,
          //动画部分
          animationDuration: 300,
          animationDurationUpdate: 300,
          //key文字大小
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

      let myChart = this.$echarts.init(document.getElementById("echartRight"));
      myChart.setOption(option);
      var autoHeight = option.yAxis.data.length * 30 + 150;
      myChart.getDom().style.height = autoHeight + "px";
      myChart.getDom().childNodes[0].style.height = autoHeight + "px";
      myChart.getDom().childNodes[0].childNodes[0].setAttribute("height", autoHeight);
      myChart.getDom().childNodes[0].childNodes[0].style.height = autoHeight + "px";
      myChart.on("click", function (params) {
        console.log(params,'click');
      });
      myChart.resize();
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
      border: 1px solid #E2E2E2; 
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
  .tix{
    margin-top: 30px;
    margin-left: 25px;
    font-size: 28px;
    text-align: left;
  }
}
</style>