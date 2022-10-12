<template>
  <div class="home">
    <div class="home-container">
      <div class="home-container-line">
        <div
          class="home-container-line-box"
          v-for="item in list.slice(0, 5)"
          :key="item.index"
          :style="{'backgroundImage': 'url('+ getBackgoundImg(item) +')' , 'backgroundSize':'100% 100%'}"
        >
        </div>
      </div>
      <div class="home-container-line">
        <div
          class="home-container-line-box"
          v-for="item in list.slice(11, 12)"
          :key="item.index"
          :style="{'backgroundImage': 'url('+ getBackgoundImg(item) +')' , 'backgroundSize':'100% 100%'}"
        >
        </div>
        <div
          v-if="!type"
          class="home-container-line-btn"
          @click="handleClick"
          :disable="isAnimate"
        >
          点击抽奖
        </div>
        <div v-else style="display:flex;  flex-direction: column; color:yellow;
        background:green;
    align-items: center;
      justify-content: space-around;" class="home-container-line-btn">
          <div class="top">
            {{
              `${
                this.list[this.jumpArr[0]].label +
                " " +
                this.list[this.jumpArr[1]].label +
                " " +
                this.list[this.jumpArr[2]].label
              }`
            }}
          </div>
          <div class="color">红</div>
        </div>
        <div
          class="home-container-line-box"
          v-for="item in list.slice(5, 6)"
          :key="item.index"
          :style="{'backgroundImage': 'url('+ getBackgoundImg(item) +')' , 'backgroundSize':'100% 100%'}"
        >
        </div>
      </div>
      <div class="home-container-line">
        <div
          class="home-container-line-box"
          v-for="item in Array.prototype.reverse.call(list.slice(6, 11))"
          :key="item.index"
          :style="{'backgroundImage': 'url('+ getBackgoundImg(item) +')' , 'backgroundSize':'100% 100%'}"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Luck",
  data() {
    return {
      list: [
        { label: "虎", val: 1, img: require('../assets/yjImgs/hu.png'),actImg: require('../assets/yjImgs/huAct.png'), index: 0, active: false },
        { label: "兔", val: 2, img: require('../assets/yjImgs/tu.png'),actImg: require('../assets/yjImgs/tuAct.png'), index: 1, active: false },
        { label: "龙", val: 3, img: require('../assets/yjImgs/long.png'),actImg: require('../assets/yjImgs/longAct.png'), index: 2, active: false },
        { label: "蛇", val: 4, img: require('../assets/yjImgs/she.png'),actImg: require('../assets/yjImgs/sheAct.png'), index: 3, active: false },
        { label: "马", val: 5, img: require('../assets/yjImgs/ma.png'),actImg: require('../assets/yjImgs/maAct.png'), index: 4, active: false },
        { label: "羊", val: 6, img: require('../assets/yjImgs/yang.png'),actImg: require('../assets/yjImgs/yangAct.png'), index: 5, active: false },
        { label: "猴", val: 7, img: require('../assets/yjImgs/hou.png'),actImg: require('../assets/yjImgs/houAct.png'), index: 6, active: false },
        { label: "鸡", val: 8, img: require('../assets/yjImgs/ji.png'),actImg: require('../assets/yjImgs/jiAct.png'), index: 7, active: false },
        { label: "狗", val: 9, img: require('../assets/yjImgs/gou.png'),actImg: require('../assets/yjImgs/gouAct.png'), index: 8, active: false },
        { label: "猪", val: 10, img: require('../assets/yjImgs/zhu.png'),actImg: require('../assets/yjImgs/zhuAct.png'), index: 9, active: false },
        { label: "鼠", val: 11, img: require('../assets/yjImgs/shu.png'),actImg: require('../assets/yjImgs/shuAct.png'), index: 10, active: false },
        { label: "牛", val: 12, img: require('../assets/yjImgs/niu.png'),actImg: require('../assets/yjImgs/niuAct.png'), index: 11, active: false },
      ],
      isAnimate: false, // 为 true时代表正在抽奖，当前抽奖未结束时点击抽奖按钮无效
      jumpIndex: Math.floor(Math.random() * 12), // 抽奖轮跳时的索引
      jumpArr: [], // 抽奖轮跳时的索引
      jumpingTime: 0, // 正在轮跳的时间
      jumpingTotalTime: 0, // 轮跳的时间总量，基于 duration 变量加上一个 0~1000 之间的随机数组成
      jumpingChange: 0, // 轮跳速率峰值，基于 velocity 变量加上一个 0~3 之间的随机数组成
      duration: 4500, // 持续时间
      velocity: 500, // 速率
      type: false,
    };
  },
    computed: {
    getBackgoundImg() {
      return (item) => {
        if (item.active) {
          return item.actImg;
        } else {
          return item.img;
        }
      };
    },
  },
  methods: {
    handleClick() {
      if (this.isAnimate) return;
      this.jumpingTime = 0;
      this.jumpingTotalTime = Math.random() * 1000 + this.duration;
      this.jumpingChange = Math.random() * 3 + this.velocity;
      this.jumpArr = [];
      while (this.jumpArr.length < 3) {
        let num = parseInt(Math.random() * 9);
        // parseInt取正，小数点后面的数字全部抹掉
        // Math.random() 0-1的随机数
        if (this.jumpArr.indexOf(num) == -1) {
          // this.arr.indexOf(num)若等于-1则证明arr这个数组里没有num这个随机数，因此可以放进这个数组里
          this.jumpArr.push(num);
        }
      }
      console.log(this.jumpArr);
      this.animateRound(this.jumpIndex);
    },

     animateRound(index) {
      this.isAnimate = true;
      if (this.jumpIndex < this.list.length - 1) this.jumpIndex++;
      if (this.jumpIndex >= this.list.length - 1) this.jumpIndex = 0; 
      this.jumpingTime += 100; // 每一帧执行 setTimeout 方法所消耗的时间

      // 如果当前时间大于时间总量后, 退出动画,  清算奖品
      if (this.jumpingTime >= this.jumpingTotalTime) {
        this.isAnimate = false;
        // if (index == 0) {
        //   alert(`很遗憾没有抽到奖品，再接再厉哦~`);
        // } else {
        this.list.forEach((item) => {
          item.active = false;
        });
        this.list[this.jumpArr[0]].active = true;
        this.list[this.jumpArr[1]].active = true;
        this.list[this.jumpArr[2]].active = true;
        this.type = true;
        //   alert(`恭喜您抽到了：${this.list[this.jumpArr[0]].label +' ' + this.list[this.jumpArr[1]].label +' ' +this.list[this.jumpArr[2]].label}`);
        // }
        return;
      }

      // 轮训动画  
       if (index >= this.list.length - 1) {
        index = 0;
        this.list[11].active = false;
        this.list[index].active = true;
        index -= 1;
      } else {
        this.list[index].active = false;
        this.list[index + 1].active = true;
      }
      // switch(this.list[index].active){
	    // case console.log(index): 
      // }

      setTimeout(() => {
        this.animateRound(index + 1);
      }, this.easeOut(this.jumpingTime, 0, this.jumpingChange, this.jumpingTotalTime));
    },

    /**
     * 缓动函数，由快到慢
     * @param {Num} t 当前时间
     * @param {Num} b 初始值
     * @param {Num} c 变化值
     * @param {Num} d 持续时间
     */
    easeOut(t, b, c, d) {
      if ((t /= d < 1)) return c * t * t + b;
      //   return (-c / 2) * (t * (t - 2) - 1) + b;
    },
  },
};
</script>
<style lang="scss" scoped> 
.home {
  font-size: 32px;
  padding: 0;
  margin: 0;
  width: 100%;
  height: calc(100vh - 16px);
  // background-image: linear-gradient(25deg, #30007c, #464995, #4d83ad, #41bfc4);
  background: green ;
  
  display: flex;
  justify-content: center;
  align-items: center;
  &-container {
    width: 750px;
    height: 600px;
    &-line {
      width: 100%;
      height: 158px;
      display: flex;
      &-box {
        flex: 1;
        overflow: hidden;
        margin: 5px 3px 5px 3px;
        border-radius: 5px;
        
  display: flex;
  justify-content: center;
  align-items: center;
        background: #fff;
        transition: all 0.3s;
      }
      &-btn {
        position: relative;
        flex: 3;
        overflow: hidden;
        margin: 5px 3px 3px 3px;
        
  display: flex;
  justify-content: center;
  align-items: center;
        box-shadow: 0 1px 10px 0px #cf5531;
        background-image: linear-gradient(
          25deg,
          #cf5531,
          #d0853a,
          #cdaf43,
          #c4d84d
        );
        cursor: pointer;
        &:active {
          background-image: linear-gradient(
            25deg,
            #3f3e41,
            #6d6340,
            #9a8b39,
            #c9b629
          );
        }
        &::before {
          position: absolute;
          font-size: 36px;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
// .selected {
//   background: rgba($color: #f6e58d, $alpha: 0.5);
//   animation-name: twinkle;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
// }
// @keyframes twinkle {
//   0% {
//     background: #ffbe76;
//   }
//   100% {
//     background: #f6e58d;
//   }
// }
</style>

