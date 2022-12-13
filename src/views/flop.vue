<template>
  <div class="overall">
    <van-nav-bar
      class="navBar"
      title="生肖卡牌"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <p class="title">
        每期开奖前通过该工具可以快捷查看三个隐藏在卡牌的生肖来试试你的财运！
      </p>
      <div v-if="!type" class="box">
        <div
          v-for="(i, index) in list"
          :key="index"
          class="card-box"
          @click="open(i, index)"
        >
          <div class="crad" :class="{ active: i.type }">
            <img class="zm" src="../assets/img/flop.png" />
            <img class="back" :src="i.img" />
          </div>
        </div>
      </div>
      <div v-else class="actBox">
        <div v-for="(i, index) in activeList" :key="index" class="card-box">
          <img class="crad" :src="i.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toolboxAnimalCard } from "@/api/index";
import { mapGetters } from "vuex";
import { setSessStore, getSessStore, removeSessStore } from "@/utils/mUtils";
export default {
  data() {
    return {
      openNumber: 3, // 剩余翻牌次数
      listNum: 12, // 卡片个数
      winner: null, // 当前抽中的奖品
      list: [], // 奖品列表
      activeList: [],
      type: false,
    };
  },
  computed: {
    ...mapGetters({
      lotterytype: "getLotterytype",
    }),
  },
  created() {
    if (getSessStore("flopData")) {
      let flopData = getSessStore("flopData");
      console.log(new Date().toDateString(),new Date(flopData.timestamp).toDateString())
      if (
        new Date(flopData.timestamp).toDateString() ===
        new Date().toDateString()
      ) {
        this.activeList = JSON.parse(flopData.data);
        this.type = true;
      } else {
        removeSessStore("flopData");
        this.init();
      }
    } else {
      this.init();
    }
  },
  methods: {
    init() {
      let data = [
        {
          name: "虎",
          img: require("../assets/yjImgs/fpHu.png"),
          type: false,
        },
        {
          name: "兔",
          img: require("../assets/yjImgs/fpTu.png"),
          type: false,
        },
        {
          name: "龙",
          img: require("../assets/yjImgs/fpLong.png"),
          type: false,
        },
        {
          name: "蛇",
          img: require("../assets/yjImgs/fpShe.png"),
          type: false,
        },
        {
          name: "马",
          img: require("../assets/yjImgs/fpMa.png"),
          type: false,
        },
        {
          name: "羊",
          img: require("../assets/yjImgs/fpYang.png"),
          type: false,
        },
        {
          name: "猴",
          img: require("../assets/yjImgs/fpHou.png"),
          type: false,
        },
        {
          name: "鸡",
          img: require("../assets/yjImgs/fpJi.png"),
          type: false,
        },
        {
          name: "狗",
          img: require("../assets/yjImgs/fpGou.png"),
          type: false,
        },
        {
          name: "猪",
          img: require("../assets/yjImgs/fpZhu.png"),
          type: false,
        },
        {
          name: "鼠",
          img: require("../assets/yjImgs/fpShu.png"),
          type: false,
        },
        {
          name: "牛",
          img: require("../assets/yjImgs/fpNiu.png"),
          type: false,
        },
      ];
      var randomNumber = function () {
        return 0.5 - Math.random();
      };
      this.list = data.sort(randomNumber);
    },
    // 翻开卡片的方法
    open(item, index) {
      if (this.openNumber > 0) {
        // 判断用户没有翻开卡片
        if (!item.type) {
          this.list.forEach((item1, index1) => {
            if (index === index1) {
              item1.type = true;
              this.activeList.push(item1);
            }
          });
          this.openNumber--;
          if (this.openNumber == 0) {
            let animals = this.activeList.map((el) => {
              return el.name;
            });
            this.toolboxAnimalCard(animals.join(","));
          }
        } else {
          alert("你已经翻开过了哦");
        }
      }
    },
    async toolboxAnimalCard(animals) {
      let s = "" + new Date().getTime();
      const res = await toolboxAnimalCard({
        lottery_type: this.lotterytype,
        push_id: s.substring(s.length - 5, s.length),
        animals,
      });
      if (res.code === 1) {
        let item = {
          data: JSON.stringify(this.activeList),
          timestamp: new Date().getTime(),
        };
        setSessStore("flopData", item);
        setTimeout(() => {
          this.type = true;
        }, 1000);
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.navBar {
  background: linear-gradient(#1aae3d, #177900);

  /deep/ .van-icon {
    color: white;
  }
  /deep/ .van-ellipsis {
    color: #fff;
  }
}
.actBox {
  width: 700px;
  margin: 50px 25px;
  display: flex;
  justify-content: space-around;
  .card-box {
    width: 30%;
    align-items: center;
    .crad {
      width: 100%;
    }
  }
}
.box {
  position: relative;
  margin: 50px auto;
  width: 750px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 100%;
  height: 100%;
}

.box div {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  /* 模糊大小就是靠的blur这个函数中的数值大小 */
  backdrop-filter: blur(10px);
}

.overall {
  perspective: 1000px;
  .title {
    margin: 80px 30px 0 30px;
    font-size: 30px;
  }
}
.box {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 95vw;
  height: 640px;
  .card-box {
    display: flex;
    justify-content: space-between;
    width: 23%;
    height: 200px;
    position: relative;
    border-radius: 25px;
  }
  .crad {
    position: relative;
    /* 让容器里面的元素按照3d空间显示（规范写法）  */
    transform-style: preserve-3d;
    border-radius: 25px;
  }

  .crad .zm {
    transform: perspective(800px) rotateY(0deg);
    transition: all 1s ease;
    backface-visibility: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .active .zm {
    transform: perspective(800px) rotateY(180deg);
  }

  .crad .back {
    position: absolute;
    top: 0px;
    left: 0px;
    transform: perspective(800px) rotateY(180deg);
    transition: all 1s ease;
    backface-visibility: hidden;
  }
  .active .back {
    transform: perspective(800px) rotateY(360deg);
  }
}
</style>