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
        <div v-for="(item, index) in numberList" :key="index" class="colorList">
          <div class="top">{{ item.text }}</div>
          <div class="btm">
            <div
              class="numBox"
              v-for="(item1, index1) in item.content"
              :key="index1"
              :class="getCss(item1.number)"
              @click="openDlg(item1.number,item1.count,item.text)"
            >
              {{ item1.number }}
            </div>
          </div>
        </div>
      </div>
      <div class="bg"></div>
      <div class="listWrapper">
        <div
          v-for="(item, index) in sxList"
          :key="index" 
          class="colorList sxList"
        >
          <div class="top">{{ item.text }}</div>
          <div class="btm">
            <div
            @click="openDlg(item1.name,item1.count,item.text)"
              class="numBox"
              v-for="(item1, index1) in item.content"
              :key="index1"
            >
              {{ item1.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="bg"></div>
      <div class="listWrapper">
        <div
          v-for="(item, index) in bsList"
          :key="index"
          class="colorList sxList"
        >
          <div class="top">{{ item.text }}</div>
          <div class="btm">
            <div
              class="numBox"
              :class="
                item1.value == '红波' ? 'red' : item1.value == '绿波' ? 'green' : 'blue'
              "
              v-for="(item1, index1) in item.content"
              :key="index1"
              
          @click="openDlg(item1.value,item1.count,item.text)"
            >
              {{ item1.value }}
            </div>
          </div>
        </div>
      </div>
      <div class="bg"></div>
            <div class="listWrapper">
        <div
          v-for="(item, index) in wsList"
          :key="index"
          class="colorList sxList"
        >
          <div class="top">{{ item.text }}</div>
          <div class="btm">
            <div
              class="wsBox"
              v-for="(item1, index1) in item.content"
              :key="index1"
              
          @click="openDlg(item1.name,item1.count,item.text)"
            >
              {{ item1.name + '尾' }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-dialog v-model="show" confirmButtonColor="#07c160">
      <div style="padding-top: 20px; color: red">{{ showData.text }}</div>
      <div style="padding: 20px">
        【{{ showData.number }}】统计的次数：{{ showData.count }}次
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
        number: '',
        count: '',
      },
      numberList: {
        specialHotNumberList: {
          text:'特码出现期数最多的号码',
          content:[]
        },
        specialColdNumberList: {
          text:'特码当前遗漏期数最多的号码',
          content:[]
        },
        normalColdNumberList: {
          text:'正码出现期数最多的号码',
          content:[]
        },
        normalHotNumberList: {
          text:'正码当前遗漏期数最多的号码',
          content:[]
        },
      },
      sxList: {
        specialHotAnimalList: {
          text:'特码出现期数最多的生肖',
          content:[]
        },
        specialColdAnimalList: {
          text:'特码当前遗漏期数最多的生肖',
          content:[]
        },
        normalHotAnimalList: {
          text:'正码出现期数最多的生肖',
          content:[]
        },
        normalColdAnimalList: {
          text:'正码当前遗漏期数最多的生肖',
          content:[]
        },
      },
      bsList: {
        specialHotColorList: {
          text:'特码出现期数最多的波色',
          content:[]
        },
        specialColdColorList: {
          text:'特码当前遗漏期数最多的波色',
          content:[]
        },
        normalHotColorList: {
          text:'正码出现期数最多的波色',
          content:[]
        },
        normalColdColorList: {
          text:'正码当前遗漏期数最多的波色',
          content:[]
        },
      },
      wsList: {
        specialHotTailList: {
          text:'特码出现期数最多的尾数',
          content:[]
        },
        specialColdTailList: {
          text:'特码当前遗漏期数最多的尾数',
          content:[]
        }
      },
    };
  },
  created() {
    this.actions = [
      { text: "100", id: "100" },
      { text: "50", id: "50" },
      { text: "20", id: "20" },
      { text: "10", id: "10" },
    ];
    this.actQs = this.actions[0].text;
    this.zxcountLiuhe();
  },
  methods: {
    async zxcountLiuhe() {
      const res = await zxcountLiuhe({ lottery_type: "1", limit: this.actQs });
      if (res.code === 1) {
        // 号码
        this.numberList.specialHotNumberList.content = res.data.specialHotNumberList
        this.numberList.specialColdNumberList.content = res.data.specialColdNumberList
        this.numberList.normalColdNumberList.content = res.data.normalColdNumberList
        this.numberList.normalHotNumberList.content = res.data.normalHotNumberList
        //生肖
        this.sxList.specialHotAnimalList.content = res.data.specialHotAnimalList
        this.sxList.specialColdAnimalList.content = res.data.specialColdAnimalList
        this.sxList.normalHotAnimalList.content = res.data.normalHotAnimalList
        this.sxList.normalColdAnimalList.content = res.data.normalColdAnimalList
        //波色
        this.bsList.specialHotColorList.content = res.data.specialHotColorList
        this.bsList.specialColdColorList.content = res.data.specialColdColorList
        this.bsList.normalHotColorList.content = res.data.normalHotColorList
        this.bsList.normalColdColorList.content = res.data.normalColdColorList
        //尾数
        this.wsList.specialHotTailList.content = res.data.specialHotTailList
        this.wsList.specialColdTailList.content = res.data.specialColdTailList
      }
    },
    onSelect(action) {
      this.actQs = action.text; 
    this.zxcountLiuhe();
    },
    openDlg(number,count,text) {
      this.showData.text = text;
      this.showData.number = number;
      this.showData.count = count;
      this.show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
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
          font-weight: 700;
        }
        .wsBox {
          text-align: center;
          line-height: 50px;
          width: 50px;
          height: 50px;
          font-weight: 700;
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