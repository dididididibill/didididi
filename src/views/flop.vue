<template>
  <div class="overall">
    <div>
      <p class="title">
        每期开奖前通过该工具可以快捷查看三个隐藏在卡牌的生肖来试试你的财运！
      </p>
      <div class="box">
        <div
          v-for="(i, index) in list"
          :key="index"
          class="card-box"
          @click="open(i, index)"
        >
          <div class="crad" :class="{ active : i.type }">
            <img class='zm' src="../assets/img/flop.png" />
            <img class="back" :src="i.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openNumber: 3, // 剩余翻牌次数
      listNum: 12, // 卡片个数
      winner: null, // 当前抽中的奖品
      list: [], // 奖品列表
      activeList:[]
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 翻牌抽奖
    // 初始化奖品列表，根据listNum生成奖品列表
    init() {
      // for (let i = 0; i < this.listNum; i++) {
      //   const item = {
      //     activeIndex: null, // 翻开的下标
      //     winner: null, // 获得的奖品
      //   };
      //   this.list.push(item);
      // }
      this.list = [
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
    },
    // 后端获取数据
    getWinner() {
      return new Promise((resolve) => {
        this.winner = "谢谢参与";
        resolve();
      });
    },
    // 翻开卡片的方法
    open(item, index) {
      if (this.openNumber > 0) {
        // 判断用户没有翻开卡片
        if (!item.type) {
          this.list.forEach((item1, index1) => {
            if (index === index1) {
              item1.type = true;
              this.activeList.push(item1)
            }
          });
          this.openNumber--;
          console.log(this.activeList);
        } else {
          alert("你已经翻开过了哦");
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
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
    margin-top: 80px;
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
  //   .card {
  //     width: 100%;
  //     height: 100%;
  //     perspective: 500px;
  //     transform-style: preserve-3d;
  //     transition: 0.5s;
  //     position: absolute;
  //     left: 0;
  //     top: 0;
  //     &.active {
  //       transform: rotateY(180deg);
  //     }
  //     /* 正面的样式 */
  //     .z {
  //       position: absolute;
  //       width: 100%;
  //       height: 100%;
  //       z-index: 5;
  //       background: white;
  //       overflow: hidden;
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //       box-shadow: 0 0 0 2px yellow;
  //       background-size: 100% 100%;
  //       background-image: url(../assets/img/flop.png);
  //       transform: perspective(180px) rotateY(0deg);
  //             transition: all 2s ease;
  //             backface-visibility: hidden;
  //       &:hover {
  //         transform: translateX(-90%);
  //         // z-index: 0;
  //         backface-visibility: hidden;
  // }
  //       img {
  //         width: 100%;
  //         height: 100%;
  //         transition: 0.3s;
  //         height: 100%;
  //         position: absolute;
  //         top: 0;
  //         left: 0;
  //       }
  //       // h3 {
  //       //   position: relative;
  //       //   z-index: 3;
  //       //   color: white;
  //       //   font-weight: 200;
  //       //   font-size: 1rem;
  //       //   display: inline-block;
  //       //   padding: 5px;
  //       // }
  //       //   opacity: .5;
  //     }
  //     /* 反面的样式 内容部分 */
  //     .f {
  //        top: 0;
  //         left: 0;
  //       box-sizing: border-box;
  //       background: #fcfcfc;
  //       position: absolute;
  //       width: 100%;
  //       height: 100%;
  //       z-index: 2;
  //       transform-style: preserve-3d;
  //       transform: rotateY(180deg) translateZ(1px);
  //       // display: flex;
  //       // justify-content: center;
  //       // align-items: center;
  //       background-size: 100% 100%;
  //       font-weight: bold;
  //       // img {
  //       //   width: 100%;
  //       //   height: 100%;
  //       // }
  //     }
  //   }
}
</style>