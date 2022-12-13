<template>
  <div class="wrapperD">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        title="玄机锦囊"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <img src="../assets/img/rlIcon.png" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <div class="wrapper">
      <div class="bg"></div>
      <van-collapse style="align-items: left" v-model="activeName" accordion>
        <van-collapse-item
          v-for="(item, index) in dataList"
          :key="index"
          :title="item.title"
          :name="index"
          >{{ item.content.join("  ") }}</van-collapse-item
        >
      </van-collapse>
    </div>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="yearList"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { toolboxListSinkBag, kjYears } from "@/api/index";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      activeName: [],
      showPicker: false,
      year: "",
      yearList: [],
      dataList: [],
    };
  },
  computed: {
    ...mapGetters({
      lotterytype: "getLotterytype",
    }),
  },
  created() {
    this.kjYears();
    this.toolboxListSinkBag();
  },
  methods: {
    onConfirm(year) {
      this.year = year;
      this.showPicker = false;
      this.toolboxListSinkBag();
    },
    onClickRight() {
      this.showPicker = true;
    },
    async kjYears() {
      const res = await kjYears();
      if (res.code === 1) {
        this.yearList = res.data.map((el) => {
          return el.year;
        });
      }
    },
    async toolboxListSinkBag() {
      let s = "" + new Date().getTime();
      const res = await toolboxListSinkBag({
        lottery_type: this.lotterytype,
        year: this.year,
        push_id: s.substring(s.length - 5, s.length),
      });
      if (res.code === 1) {
        this.dataList = res.data.list;
      }
    },
    onSelect(action) {
      this.year = action;
      console.log(action);
    },
    onClickLeft() {
      this.$router.go(-1);
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
  img {
    width: 40px;
    height: 40px;
  }
}
.wrapper {
  .bg {
    height: 10px;
    width: 100%;
    background-color: #ddd;
  }
  /deep/.van-cell__title {
    display: flex;
    align-items: left;
  }
  /deep/.van-collapse-item__wrapper {
    background: #f7f7f7;
  }
  /deep/.van-collapse-item__content {
    
    background: #f7f7f7;
    text-indent: 1em;
    color: red;
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 17em;
  }
}
</style>