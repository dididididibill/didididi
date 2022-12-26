<template>
  <div class="wrapper">
    <div class="centent">
      <div class="top">
        <van-cell-group>
          <van-field
            :colon="true"
            label-width="8em"
            v-model="value"
            label="输入号码数量"
            placeholder="2-49之间"
          />
          <van-field
            :colon="true"
            label-width="8em"
            readonly
            clickable
            label="每组号码个数"
            :value="value1"
            placeholder="选择每组号码个数"
            @click="showPicker = true"
            right-icon="arrow-down"
          />
        </van-cell-group>
        <van-button class="top-Btn" type="primary" size="small" @click="jisuan"
          >计算</van-button
        >
        <div class="text">
          生成全复式：<span>{{ Math.floor(num) }} </span> 注
        </div>
      </div>
      <div class="bg"></div>
      <div class="btm">
        <div
          class="box"
          :class="{ box2: chooseAfterValue.indexOf(item) != -1 }"
          v-for="(item, index) in numbb"
          :key="index + item"
          @click="choosely(index, item)"
        >
          {{ item }}
          <i class="imgB"></i>
        </div>
      </div>
      <van-cell-group>
        <van-field
          :colon="true"
          label-width="18em"
          readonly
          clickable
          :label="`已选择了${chooseAfterValue.length}个号码，每组号码个数`"
          :value="value2"
          placeholder="选择每组号码个数"
          @click="showPicker1 = true"
          right-icon="arrow-down"
        />
      </van-cell-group>
      <div class="btn">
        <van-button class="btn1" @click="clear" square>清空</van-button>
        <van-button class="btn2" @click="jisuan2" square>生成复式</van-button>
      </div>
    </div>
    <van-dialog
      v-model="showDialog"
      :showCancelButton="false"
      confirm-button-text="知道了"
      width="90%"
      title="组合结果"
      show-cancel-button
    >
      <div class="warapper">
        <div class="title">
          选择号码<span>{{ chooseAfterValue.length }}</span
          >个,每组<span>{{ valueT1 }}</span
          >个号码,共生成<span>{{ numD.length }}</span
          >组复试
        </div>
        <ul class="ulW" v-for="(item, index) in numD" :key="item + index">
          <li class="liW">{{ item }}</li>
        </ul>
      </div>
    </van-dialog>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        :default-index="0"
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-popup v-model="showPicker1" round position="bottom">
      <van-picker
        :default-index="0"
        show-toolbar
        :columns="columns"
        @cancel="showPicker1 = false"
        @confirm="onConfirm1"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numbb: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
      ],
      a: [],
      chooseAfterValue: [],
      value: "",
      value1: "每组2个",
      valueT: 2,
      value2: "每组2个",
      valueT1: 2,
      num: 0,
      numD: [],
      showDialog: false,
      showPicker: false,
      showPicker1: false,
      columns: [
        { text: "每组2个", value: 2 },
        { text: "每组3个", value: 3 },
        { text: "每组4个", value: 4 },
        { text: "每组5个", value: 5 },
        { text: "每组6个", value: 6 },
      ],
    };
  },

  methods: {
    clear() {
      this.chooseAfterValue = [];
    },
    factorial(num) {
      let num1 = +num;
      return (num1 = num1 <= 0 ? 1 : num1 * this.factorial(num1 - 1));
    },
    jisuan() {
      if (this.value < 2 || this.value > 49) {
        this.$toast("选择号码的数量应大于1,并小于或者等于49");
        return;
      }
      if (this.value < this.valueT) {
        this.$toast("选择的号码数量 ≥ 每注号码个数");
        return;
      }
      this.num =
        this.factorial(this.value) /
        this.factorial(this.value - this.valueT) /
        this.factorial(this.valueT);
    },
    jisuan2() {
      if (this.chooseAfterValue.length < this.valueT1) {
        this.$toast("选择的号码数量 ≥ 每注号码个数");
        return;
      }
      if (this.chooseAfterValue.length > 15) {
        this.$toast("最多选择15个号码进行计算");
        return;
      }
      let arr = [];
      for (let i = 1; i <= this.value; i++) {
        arr.push(i);
      }
      this.numD = this.Pac(this.chooseAfterValue, this.valueT1);
      this.showDialog = true;
    },
    Pac(s, n) {
      var arr = [];
      for (var i = 0; i < Math.pow(2, s.length); i++) {
        var a = 0;
        var b = [];
        for (var j = 0; j < s.length; j++) {
          if ((i >> j) & 1) {
            a++;
            b.push(s[j]);
          }
        }
        if (a == n) {
          arr.push(b.join("-"));
        }
      }
      return arr;
    },
    func(arr, length) {
      let len = length;
      let res = [];
      let arrange = (tempArr, leftArr) => {
        if (tempArr.length === len) {
          res.push(tempArr.join("-"));
        } else {
          leftArr.forEach((item, index) => {
            let temp = [].concat(leftArr);
            temp.splice(index, 1);
            arrange(tempArr.concat(item), temp);
          });
        }
      };
      arrange([], arr);
      return res;
    },
    onConfirm(value) {
      this.value1 = value.text;
      this.valueT = value.value;
      this.showPicker = false;
    },
    onConfirm1(value) {
      this.value2 = value.text;
      this.valueT1 = value.value;
      this.showPicker1 = false;
    },
    choosely(n, value) {
      if (this.chooseAfterValue.indexOf(value) != -1) {
        this.chooseAfterValue.splice(this.chooseAfterValue.indexOf(value), 1);
      } else {
        this.chooseAfterValue.push(value);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;

  .centent {
    .bg {
      width: 100%;
      height: 10px;
      background: rgba(99, 99, 99, 0.1);
    }

    .top {
      width: 95%;
      margin: 0 auto;

      .top-Btn {
        width: 95%;
        height: 80px;
        font-size: 30px;
        line-height: 80px;
        margin-top: 20px;
        background: #f5561a;
        border: none;
      }

      .text {
        margin: 5px auto;
        font-size: 28px;
        span {
          color: #f5561a;
          margin: 0 auto;
        }
      }
    }

    .btm {
      width: 95%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: space-between;
      margin-top: 20px;

      .box {
        position: relative;
        background-image: url("../assets/img/blue.png");
        background-size: 100% 100%;
        margin: 2% 1.5%;
        width: 11%;
        height: 70px;
        font-size: 35px;
        line-height: 70px;
        font-weight: 700;
        .imgB {
          position: absolute;
          // width: 100%;
          // height: 100%;
        }
      }
      .box:nth-child(2),
      .box:nth-child(5),
      .box:nth-child(9),
      .box:nth-child(13),
      .box:nth-child(16),
      .box:nth-child(18),
      .box:nth-child(20),
      .box:nth-child(25),
      .box:nth-child(29),
      .box:nth-child(32),
      .box:nth-child(35),
      .box:nth-child(39),
      .box:nth-child(42),
      .box:nth-child(45),
      .box:nth-child(49) {
        background-image: url("../assets/img/red.png");
      }
      .box:nth-child(3),
      .box:nth-child(6),
      .box:nth-child(7),
      .box:nth-child(11),
      .box:nth-child(12),
      .box:nth-child(15),
      .box:nth-child(19),
      .box:nth-child(22),
      .box:nth-child(23),
      .box:nth-child(26),
      .box:nth-child(28),
      .box:nth-child(30),
      .box:nth-child(33),
      .box:nth-child(36),
      .box:nth-child(37),
      .box:nth-child(43),
      .box:nth-child(46),
      .box:nth-child(47),
      .box:nth-child(40) {
        background-image: url("../assets/img/green.png");
      }
      .box2 {
        // background-image: url("../assets/img/slecet.png") !important;
        // background-size: 100% 100%;
        // margin: 2% 1.5%;
        // width: 10%;
        // height: 35px;
        // line-height: 32px;
        // font-weight: 700;
        // width: 13%;
        // height: 40px;
        // opacity: 0.5;
        // background-color: #f5561a;
        // border-radius: 20px;
        .imgB {
          background-image: url("../assets/img/slecet.png") !important;
          background-size: 100% 100%;
          position: absolute;
          width: 110%;
          height: 100%;
          top: 0%;
          left: 0;
        }
      }
    }

    .btn {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .btn1 {
        background: #fff;
        border: 2px solid #f5561a;
        color: #f5561a;
        border-radius: 10px;
        height: 60px;
        width: 340px;
      }

      .btn2 {
        background: #f5561a;
        border: 2px solid #fff;
        color: #fff;
        border-radius: 10px;
        height: 60px;
        width: 340px;
      }
    }
  }
}
.warapper {
  width: 95%;
  max-height: 500px;
  overflow-y: auto;
  margin: 10px auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: left;
  .title {
    margin: 0 auto;
  }
  .ulW {
    list-style: none;
    margin: 0px;
    .liW {
      text-align: center;
      padding: 2px 10px;
      border: 1px solid #e5e5e5;
    }
  }
}
</style>
  