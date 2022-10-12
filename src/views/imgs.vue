<template>
  <div class="wrap">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        title="六合图库"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="top">
        <img width="100%" src="../assets/img/u12.png" />
      </div>
    </van-sticky>
    <div class="boxList">
      <div class="box" v-for="(item, index) in boxListData" :key="index">
        <img :src="item.icon" />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
    <div class="waterfall">
      <vue-waterfall-easy
        :imgsArr="imgsArr"
        srcKey="src"
        :maxCols="2"
        @click="clickFn"
      >
        <div class="img-info" slot-scope="props">
          <p class="some-info">{{ props.value.name }}</p>
        </div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>
 
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "imgs",
  data() {
    return {
      imgsArr: [],
      boxListData: [
        {
          icon: require("../assets/img/tkIcon.png"),
          title: "2022彩色",
        },
        {
          icon: require("../assets/img/tkIcon.png"),
          title: "2022彩色",
        },
        {
          icon: require("../assets/img/tkIcon.png"),
          title: "2022彩色",
        },
        {
          icon: require("../assets/img/tkIcon.png"),
          title: "2022彩色",
        },
        {
          icon: require("../assets/img/tkIcon.png"),
          title: "2022彩色",
        },
        {
          icon: require("../assets/img/tkIcon.png"),
          title: "2022彩色",
        },
        {
          icon: require("../assets/img/tkIcon.png"),
          title: "2022彩色",
        },
        {
          icon: require("../assets/img/tkIcon.png"),
          title: "2022彩色",
        },
      ],
    };
  },
  components: {
    vueWaterfallEasy,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var list = [
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152322-15.jpg",
          name: "滴滴",
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152321-13.jpg",
          name: "滴滴",
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152322-14.jpg",
          name: "滴滴",
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152321-12.jpg",
          name: "滴滴",
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152320-10.jpg",
          name: "滴滴",
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152320-11.jpg",
          name: "滴滴",
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152318-8.jpg",
          name: "哒哒",
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152319-9.jpg",
          name: "哒哒",
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152300-7.jpg",
          name: "哒哒",
        },
      ];
      this.imgsArr = this.imgsArr.concat(list);
    },
    clickFn(event, { index, value }) {
      //点击图片才触发
      if (event.target.tagName.toLowerCase() == "img") {
        console.log("img", index, value);
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
 
<style lang="less" scoped>
.wrap {
  width: 100%;
  min-height: 100vh;
  .navBar {
    background: linear-gradient(#1aae3d, #177900);
    /deep/ .van-icon {
      color: white;
    }
    /deep/ .van-ellipsis {
      color: #fff;
    }
  }
  .boxList {
    margin: 10px 0;
    margin-left: 15px;
    width: 735px;
    display: flex;
    flex-wrap: nowrap;
    height: 180px;
    overflow: hidden;
    overflow-x: auto;
    .box {
      width: 180px;
      height: 180px;
      display: flex;
      align-items: center;
      margin-right: 20px;
      flex-direction: column;
      justify-content: space-around;
      img {
        height: 110px;
        width: 110px;
      }
      .title {
        margin-top: 20px;
        font-size: 28px;
        width: 180px;
        height: 50px;
        margin-top: 10px;
      }
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .waterfall {
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    .img-info {
      display: flex;
      justify-content: space-around;
      height: 45px;
      line-height: 45px;
      .some-info {
        font-size: 28px;
      }
    }
  }
}
// .title {
//   color: #fff;
//   font-size: 30px;
//   text-align: center;
//   line-height: 80px;
//   background: #000;
// }

#container {
  width: 100%;
  position: absolute;
  top: 80px;
  bottom: 50px;
  background: #f1f1f1;
  font-size: 26px;
}

.btns {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
.request {
  padding: 0 10px;
  line-height: 40px;
  border-radius: 30px;
  background: #fff;
  color: #333;
}
</style>