<template>
  <div class="wrapper">
    <div class="centent">
      <div class="top">
        <div
          class="box"
          v-for="(item, index) in inputValue"
          :key="index + item"
          :class="getCss(item)"
        >
          {{ item }}
        </div>
      </div>
      <div class="btn btn1">
        <div class="btnWrap">
          <div
            class="zxlybtn"
            :class="{ zxlybtn2: chooseAfterValue.indexOf(item.text) != -1 }"
            v-for="(item, index) in dsList"
            :key="item + '' + index"
            @click="choosely(index, item)"
          >
            {{ item.text }}
          </div>
        </div>
        <div class="btnWrap">
          <div
            class="zxlybtn"
            :class="{ zxlybtn2: chooseAfterValue.indexOf(item.text) != -1 }"
            v-for="(item, index) in dxList"
            :key="item + '' + index"
            @click="choosely(index, item)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
      <div class="btn btn1">
        <div class="btnWrap">
          <div
            class="zxlybtn"
            :class="{ zxlybtn2: chooseAfterValue.indexOf(item.text) != -1 }"
            v-for="(item, index) in dxdsList"
            :key="item + '' + index"
            @click="choosely(index, item)"
          >
            {{ item.text }}
          </div>
        </div>
        <div class="btnWrap">
          <div
            class="zxlybtn"
            :class="{ zxlybtn2: chooseAfterValue.indexOf(item.text) != -1 }"
            v-for="(item, index) in wxList"
            :key="item + '' + index"
            @click="choosely(index, item)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
      <div class="btn btn1">
        <div class="btnWrap">
          <div
            class="zxlybtn"
            :class="{ zxlybtn2: chooseAfterValue.indexOf(item.text) != -1 }"
            v-for="(item, index) in colorList"
            :key="item + '' + index"
            @click="choosely(index, item)"
          >
            {{ item.text }}
          </div>
        </div>
        <div class="btnWrap">
          <div
            class="zxlybtn"
            :class="{ zxlybtn2: chooseAfterValue.indexOf(item.text) != -1 }"
            v-for="(item, index) in csList"
            :key="item + '' + index"
            @click="choosely(index, item)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
      <div class="btn" v-for="(item,index) in dataList" :key="index">
        <div
          class="zxlybtn"
          :class="{ zxlybtn2: chooseAfterValue.indexOf(item1.text) != -1 }"
          v-for="(item1, index1) in item"
          :key="item + '1' + index1"
          @click="choosely(index1, item1)"
        >
          {{ item1.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: [],
      value: [],
      dataList: {
        list: [
          { text: "???", number: ["03", "15", "27", "39"] },
          { text: "???", number: ["02", "14", "26", "38"] },
          { text: "???", number: ["01", "13", "25", "37", "49"] },
          { text: "???", number: ["12", "24", "36", "48"] },
          { text: "???", number: ["11", "23", "35", "47"] },
          { text: "???", number: ["10", "22", "34", "46"] },
          { text: "???", number: ["09", "21", "33", "45"] },
          { text: "???", number: ["08", "20", "32", "44"] },
          { text: "???", number: ["07", "19", "31", "43"] },
          { text: "???", number: ["06", "18", "30", "42"] },
          { text: "???", number: ["05", "17", "29", "41"] },
          { text: "???", number: ["04", "16", "28", "40"] },
        ],
        list1: [
          { text: "???", number: ["03", "15", "27", "39"] },
          { text: "???", number: ["02", "14", "26", "38"] },
          { text: "???", number: ["01", "13", "25", "37", "49"] },
          { text: "???", number: ["12", "24", "36", "48"] },
          { text: "???", number: ["11", "23", "35", "47"] },
          { text: "???", number: ["10", "22", "34", "46"] },
          { text: "???", number: ["09", "21", "33", "45"] },
          { text: "???", number: ["08", "20", "32", "44"] },
          { text: "???", number: ["07", "19", "31", "43"] },
          { text: "???", number: ["06", "18", "30", "42"] },
          { text: "???", number: ["05", "17", "29", "41"] },
          { text: "???", number: ["04", "16", "28", "40"] },
        ],
      },
      colorList: [
        {
          text: "??????",
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
          text: "??????",
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
          text: "??????",
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
      csList: [
        {
          text: "??????",
          number: [
            "02",
            "14",
            "26",
            "38",
            "09",
            "21",
            "33",
            "45",
            "08",
            "20",
            "32",
            "44",
            "06",
            "18",
            "30",
            "42",
            "05",
            "17",
            "29",
            "41",
            "04",
            "16",
            "28",
            "40",
          ],
        },
        {
          text: "??????",
          number: [
            "03",
            "15",
            "27",
            "39",
            "01",
            "13",
            "25",
            "37",
            "49",
            "12",
            "24",
            "36",
            "48",
            "11",
            "23",
            "35",
            "47",
            "10",
            "22",
            "34",
            "46",
            "07",
            "19",
            "31",
            "43",
          ],
        },
      ],
      dsList: [
        {
          text: "???",
          number: [
            "01",
            "03",
            "05",
            "07",
            "09",
            "11",
            "13",
            "15",
            "17",
            "19",
            "21",
            "23",
            "25",
            "27",
            "29",
            "31",
            "33",
            "35",
            "37",
            "39",
            "41",
            "43",
            "45",
            "47",
            "49",
          ],
        },
        {
          text: "???",
          number: [
            "02",
            "04",
            "06",
            "08",
            "10",
            "12",
            "14",
            "16",
            "18",
            "20",
            "22",
            "24",
            "26",
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40",
            "42",
            "44",
            "46",
            "48",
          ],
        },
      ],
      dxList: [
        {
          text: "???",
          number: [
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
        },
        {
          text: "???",
          number: [
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
          ],
        },
      ],
      dxdsList: [
        {
          text: "??????",
          number: [
            "25",
            "27",
            "29",
            "31",
            "33",
            "35",
            "37",
            "39",
            "41",
            "43",
            "45",
            "47",
            "49",
          ],
        },
        {
          text: "??????",
          number: [
            "01",
            "03",
            "05",
            "07",
            "09",
            "11",
            "13",
            "15",
            "17",
            "19",
            "21",
            "23",
          ],
        },
        {
          text: "??????",
          number: [
            "26",
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40",
            "42",
            "44",
            "46",
            "48",
          ],
        },
        {
          text: "??????",
          number: [
            "02",
            "04",
            "06",
            "08",
            "10",
            "12",
            "14",
            "16",
            "18",
            "20",
            "22",
            "24",
          ],
        },
      ],
      wxList: [
        {
          text: "???",
          number: ["07", "08", "21", "22", "29", "30", "37", "38"],
        },
        {
          text: "???",
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
          text: "???",
          number: ["09", "10", "17", "18", "25", "26", "39", "40", "47", "48"],
        },
        {
          text: "???",
          number: ["05", "06", "13", "14", "27", "28", "35", "36", "43", "44"],
        },
        {
          text: "???",
          number: ["01", "02", "15", "16", "23", "24", "31", "32", "45", "46"],
        },
      ],
      chooseAfterValue: [],
    };
  },
  computed: {
    getCss() {
      return (index) => {
        return "css" + Number(index);
      };
    },
  },
  methods: {
    choosely(n, value) {
      if (this.chooseAfterValue.indexOf(value.text) != -1) {
        this.chooseAfterValue.splice(
          this.chooseAfterValue.indexOf(value.text),
          1
        );
        let arr = this.splic(this.value, value.number);
        let type = this.isRepeat(this.value);
        if (type) {
          let arr = this.value;
          let arrs = this.czss(arr)
          this.inputValue = arrs;
        } else {
          this.inputValue = this.value.filter(
            (item, index) => this.value.indexOf(item) === index
          );
        }
      } else {
        this.chooseAfterValue.push(value.text);
        this.value.push(...value.number);
        this.value.sort(function (a, b) {
          return a - b;
        });
        let type = this.isRepeat(this.value);
        if (type) {
          let arr = this.value;
          let arrs = this.czss(arr)
          this.inputValue = arrs;
        } else {
          this.inputValue = this.value.filter(
            (item, index) => this.value.indexOf(item) === index
          );
        }
      }
    },
    //???????????????
    splic(arr1, arr2) {
      for (var i = 0; i < arr2.length; i++) {
        for (var x = 0; x < arr1.length; x++) {
          if (arr1[x] == arr2[i]) {
            arr1.splice(x, 1);
            x++;
            break;
          }
        }
      }
      return arr1;
    },
    //???????????????
    czss(array) {
      let arr = []; //????????????????????????
      let temp = {}; //????????????????????????
      let res = 0; //?????????????????????????????????
      array.forEach((item) => {
        if (temp[item] === undefined) {
          //?????????????????????????????????
          temp[item] = 1; //?????????????????????1
        } else {
          temp[item]++; //??????++
        }
      });
      for (let i in temp) {
        //????????????
        if (temp[i] > res) {
          //???????????????????????????????????????????????????????????????
          arr.length = 0; //????????????
          arr.push(Number(i)); //????????????????????????????????????????????????????????????????????????????????????
          res = temp[i]; //??????????????????
        } else if (temp[i] === res) {
          //???????????????????????????
          arr.push(Number(i)); //?????????????????????
          res = temp[i]; //??????????????????
        }
      }
      return arr.sort(function (a, b) {return a - b;});;
    },
    // czss(arr) {
    //   let b = [],
    //     c = [];
    //   for (var i = 0; i < arr.length; i++) {
    //     if (c.indexOf(arr[i]) === -1) {
    //       c.push(arr[i]);
    //     } else {
    //       b.push(arr[i]);
    //     }
    //   }
    //   return Array.from(new Set(b));
    // },
    isRepeat(arr) {
      if (new Set(arr).size !== arr.length) return true;
      else return false;
    },
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
}

.centent {
  width: 95%;
  margin: 0 auto;
}

.top {
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: left;
  margin-top: 20px;
}

.box {
  font-size: 32px;
  width: 65px;
  height: 65px;
  line-height: 65px;
  text-align: center;
  font-weight: 700;
  margin: 2px 3px;
  background-size: 100% 100%;
}

.btn {
  padding: 10px 0;
  border-top: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  .btnWrap {
    width: 50%;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    .zxlybtn {
      text-align: center;
      line-height: 50px;
      width: 30%;
      font-size: 32px;
      height: 50px;
      border-radius: 10px;
      margin: 4px;
      background-color: #fff;
      border: 1px solid #7c7c7c;
    }
    .zxlyBtn1 {
      border-right: 1px solid #7c7c7c;
    }
    .zxlybtn2 {
      background-color: #1aae3d;
    }
  }
}

:nth-child(1).btn1 {
  margin-top: 30px;
}
.zxlybtn {
  text-align: center;
  line-height: 50px;
  width: 15%;
  font-size: 32px;
  height: 50px;
  border-radius: 10px;
  margin: 4px;
  background-color: #fff;
  border: 1px solid #7c7c7c;
}
.zxlyBtn1 {
  border-right: 1px solid #7c7c7c;
}
.zxlybtn2 {
  background-color: #1aae3d;
}
</style>
