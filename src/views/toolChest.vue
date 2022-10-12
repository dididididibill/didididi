<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="工具宝箱"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="navWrapper">
    <van-grid :column-num="3" 
      icon-size='50'>
      <van-grid-item
      :border = true
        v-for="(value, index) in navList"
        :key="index"
        :icon="value.icon"
        :text="value.name"
        @click="routerLink(value.link)"
      />
    </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          icon: require("../assets/img/nrtmicon@2x.png"),
          name: "恋人特码",
          link: "/loverNum",
        },
        {
          icon: require("../assets/img/sxkpicon@2x.png"),
          name: "生肖卡牌",
          link: "/flop",
        },
        {
          icon: require("../assets/img/yyiyicon@2x.png"),
          name: "摇一摇",
          link: "/shake",
        },
        {
          icon: require("../assets/img/xyyjicon@2x.png"),
          name: "幸运摇奖",
          link: "#",
        },
        {
          icon: require("../assets/img/zxbpicon@2x.png"),
          name: "转肖波盘",
          link: "/zxbp",
        },
        {
          icon: require("../assets/img/tjcsicon@2x.png"),
          name: "天机测算",
          link: "#",
        },
        {
          icon: require("../assets/img/jzrqicon@2x.png"),
          name: "搅珠日期",
          link: "#",
        },
        {
          icon: require("../assets/img/xjjnicon@2x.png"),
          name: "玄机镜囊",
          link: "/mysterious",
        },
        {
          icon: require("../assets/img/tmzsicon@2x.png"),
          name: "挑码助手",
          link: "#",
        },
      ],
    };
  },
  methods: {
    routerLink(link) {
      this.$router.push(link);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  .navBar {
    background: linear-gradient(#1aae3d, #177900);

    /deep/ .van-icon {
      color: white;
    }
    /deep/ .van-ellipsis {
      color: #fff;
    }
  }
  .navWrapper {
    margin-top: 20px;
    padding: 0 25px;
    font-size: 30px;
    color: black; 
  }
}
</style>