<template>
  <div class="wrapperD">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        title="六合统计"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <img src="../../../assets/img/rlIcon.png" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <div class="wrapper">
      <div class="bg"></div>
      <table class="tbList" align="center" width="100%" border="0">
        <tbody>
          <tr>
            <th
              class="tabTh"
              v-for="(item, index) in dataList.rows"
              :key="index"
              :class="index == 0 ? 'th1' : ''"
            >
              {{ item.label }}
            </th>
          </tr>
          <tr v-for="(item, index) in dataList.rols" :key="index">
            <td class="tabTh">{{ item.yearAndTerm }}</td>
            <td class="tabTh">{{ item.normal1 }}</td>
            <td class="tabTh">{{ item.normal2 }}</td>
            <td class="tabTh">{{ item.normal3 }}</td>
            <td class="tabTh">{{ item.normal4 }}</td>
            <td class="tabTh">{{ item.normal5 }}</td>
            <td class="tabTh">{{ item.normal6 }}</td>
            <td class="tabTh">{{ item.special }}</td>
          </tr>
        </tbody>
      </table>
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
import { zxcountWstable, kjYears } from "@/api/index"; 
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showPicker: false,
      year: "",
      yearList: [],
      dataList: {},
    };
  },
  computed: {
    ...mapGetters({
      lotterytype: "getLotterytype",
    }),
  },
  created() {  
    this.kjYears();
    this.zxcountWstable();
  },
  methods: {
    onConfirm(year) {
      this.year = year;
      this.showPicker = false;
      this.zxcountWstable();
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
    async zxcountWstable() {
      const res = await zxcountWstable({ lottery_type: this.lotterytype, year: this.year });
      if (res.code === 1) {
        this.dataList = res.data;
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
  .tbList {
    width: 100%;
    font-size: 26px;
    .tabTh {
      height: 80px;
      line-height: 80px;
      border-right: 1px solid #ddd;
      border-top: 1px solid #ddd;
    }
    &:last-child {
      border-bottom: 1px solid #ddd;
    }
    .th1 {
      width: 190px;
    }
  }
}
</style>