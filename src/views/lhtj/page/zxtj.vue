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
      <div class="bg"></div>
      <div class="listWrapper">
        <div
          v-for="(item, index) in dataList"
          :key="index"
          @click="openDlg(item)"
          class="colorList"
        >
          <div class="top">{{ item.title }}</div>
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
      <div class="bg"></div>
      <div class="listWrapper">
        <div
          v-for="(item, index) in sxlist"
          :key="index"
          @click="openDlg(item)"
          class="colorList sxList"
        >
          <div class="top">{{ item.text }}</div>
          <div class="btm">
            <div
              class="numBox"
              v-for="(item1, index1) in item.number"
              :key="index1"
            >
              {{ item1 }}
            </div>
          </div>
        </div>
      </div>
      <div class="bg"></div>
      <div class="listWrapper">
        <div
          v-for="(item, index) in bslist"
          :key="index"
          @click="openDlg(item)"
          class="colorList sxList"
        >
          <div class="top">{{ item.text }}</div>
          <div class="btm">
            <div
              class="numBox"
              :class="
                item1 == '红波' ? 'red' : item1 == '绿波' ? 'green' : 'blue'
              "
              v-for="(item1, index1) in item.number"
              :key="index1"
            >
              {{ item1 }}
            </div>
          </div>
        </div>
      </div>
      <div class="bg"></div>
    </div>
    <van-dialog v-model="show" confirmButtonColor="#07c160">
      <div style="padding-top: 20px; color: red">{{ showData.title }}</div>
      <div style="padding: 20px">
        【{{ showData.number[0] }}】统计的次数：{{ showData.count[0] }}次
      </div>
    </van-dialog>
  </div>
</template>

<script>
import { zxcountLiuhe } from "@/api/index";
export default {
  data() {
    return {
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [],
      actQs: "",
      show: false,
      showData: {
        text: "",
        number: [],
        count: [],
      },
      dataList: {
        specialHotNumberList: {
          title: "特码出现期数最多的号码",
          number: [],
          count: [],
        }, //	特码出现期数最多的号码
        normalColdNumberList: {
          title: "正码当前遗漏期数最多的号码",
          number: [],
          count: [],
        }, //	正码当前遗漏期数最多的号码
        normalColdAnimalList: {}, //	正码当前遗漏期数最多的生肖
        normalColdColorList: {}, //	正码当前遗漏期数最多的波色
        normalColdTailList: {}, //	无
        normalHotAnimalList: {}, //	正码出现期数最多的生肖
        normalHotColorList: {}, //	正码出现期数最多的波色
        normalHotNumberList: {}, //	正码出现期数最多的号码
        normalHotTailList: {}, //	无
        specialColdAnimalList: {}, //	特码当前遗漏期数最多的生肖
        specialColdColorList: {}, //	特码当前遗漏期数最多的波色
        specialColdNumberList: {}, //	特码当前遗漏期数最多的号码
        specialColdTailList: {}, //	特码当前遗漏期数最多的尾数
        specialHotAnimalList: {}, //	特码出现期数最多的生肖
        specialHotColorList: {}, //	特码出现期数最多的波色
        specialHotTailList: {}, //	特码出现期数最多的尾数
      },
      numlist: [
        { text: "特码出现期数最多的号码", number: ["03", "15", "27", "39"] },
        {
          text: "特码当前遗漏期数最多的号码",
          number: ["02", "14", "26", "38"],
        },
        {
          text: "特码出现期数最多的号码",
          number: ["01", "13", "25", "37", "49", "01", "13", "25", "37", "49"],
        },
        {
          text: "特码出现期数最多的号码",
          number: ["01", "13", "25", "37", "49", "01", "13", "25", "37", "49"],
        },
      ],
      sxlist: [
        {
          text: "特码出现期数最多的生肖",
          number: ["马", "猴", "鸡", "龙", "兔", "羊"],
        },
        {
          text: "特码当前遗漏期数最多的生肖",
          number: ["马", "猴", "鸡", "龙", "兔", "羊"],
        },
        {
          text: "正码出现期数最多的生肖",
          number: ["马", "猴", "鸡", "龙", "兔", "羊"],
        },
        {
          text: "正码当前遗漏期数最多的生肖",
          number: ["马", "猴", "鸡", "龙", "兔", "羊"],
        },
      ],
      bslist: [
        {
          text: "特码出现期数最多的波色",
          number: ["红波", "绿波", "蓝波"],
        },
        {
          text: "特码当前遗漏期数最多的波色",
          number: ["红波", "绿波", "蓝波"],
        },
        {
          text: "正码出现期数最多的波色",
          number: ["红波", "绿波", "蓝波"],
        },
        {
          text: "正码当前遗漏期数最多的波色",
          number: ["红波", "绿波", "蓝波"],
        },
      ],
    };
  },
  created() {
    this.actions = [
      { text: "99", id: "99" },
      { text: "100", id: "100" },
      { text: "101", id: "101" },
    ];
    this.actQs = this.actions[0].text;
    this.zxcountLiuhe();
  },
  methods: {
    async zxcountLiuhe() {
      const res = await zxcountLiuhe({ lottery_type: "1", limit: "100" });
     this.dataList.specialHotNumberList.number =
        res.data.specialHotNumberList.map((el) => {
          return el.number;
        });
      this.dataList.specialHotNumberList.count =
        res.data.specialHotNumberList.map((el) => {
          return el.count;
        });
    },
    onSelect(action) {
      this.actQs = action.text;
      console.log(action.id);
    },
    openDlg(item) {
      this.showData = item;
      this.show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log(123);
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
  .bg {
    height: 10px;
    width: 100%;
    background-color: #ddd;
  }
  .listWrapper {
    font-size: 28px;
    .colorList {
      margin: 0 30px;
      background-color: #fff;
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
      &:last-child {
        border: none;
      }
    }
    .sxList {
      font-size: 26px;
      display: flex;
      flex-direction: inherit;
      justify-content: left;
      padding: 0;
      border: none;
      .top {
        width: 50%;
        margin-bottom: 0px;
        line-height: 50px;
        color: #7c7c7c;
      }
      .btm {
        flex: 1;
        color: black;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .numBox {
          text-align: center;
          line-height: 50px;
          width: 30px;
          height: 50px;
        }
        .green {
          color: #07c160;
          width: 60px;
        }
        .red {
          color: red;
          width: 60px;
        }
        .blue {
          color: blue;
          width: 60px;
        }
      }
      &:first-child {
        padding-top: 15px;
      }
      &:last-child {
        padding-bottom: 15px;
      }
    }
  }
}
</style>