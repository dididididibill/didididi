<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="恋人特码"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <div class="tips">
        <div class="title">简介</div>
        <div class="text">请输入您和他/她的生日,计算本期特码,赶紧快来试试</div>
      </div>
      <div v-if="this.data.length === 0" class="ts">
        <div class="sex man">男</div>
        <div class="sex">+</div>
        <div class="sex girl">女</div>
        <div class="sex">=</div>
        <div class="sex why">?</div>
      </div>
      <div v-if="this.data.length === 0" class="select">
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="manValue"
          label="选择男生日"
          placeholder="点击选择男生日"
          @click="openPicker('man')"
        />
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="girlValue"
          label="选择女生日"
          placeholder="点击选择女生日"
          @click="openPicker('girl')"
        />
        <van-button class="btn1" size="large" type="info" @click="onSubmit"
          >匹配一下</van-button
        >
      </div>
      <div v-if="this.data.length !== 0" class="numList">
        <div
          class="box"
          v-for="(item, index) in data"
          :key="index"
          :class="getCss(item.number)"
        >
          {{ item.number }}
        </div>
      </div>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择日期"
        :min-date="minDate"
        :max-date="maxDate"
        @change="changeFn"
        @confirm="confirmFn"
        @cancel="cancelFn"
      />
    </van-popup>
  </div>
</template>

<script>
import { toolboxLoversNumber } from "@/api/index";
import { mapGetters } from "vuex";
import { setSessStore, getSessStore } from "@/utils/mUtils";
export default {
  data() {
    return {
      manValue: "",
      girlValue: "",
      showPicker: false,
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      changeDate: new Date(),
      data: [],
      sex: "",
    };
  },
  computed: {
    ...mapGetters({
      lotterytype: "getLotterytype",
    }),
    getCss() {
      return (index) => {
        return "css" + Number(index);
      };
    },
  },
  created() {
    if (getSessStore("loveNum")) {
      this.data = getSessStore("loveNum");
    }
  },
  methods: {
    async onSubmit() {
      if (!this.manValue || !this.girlValue) {
        this.$toast("请选择完整");
        return;
      }
      let s = "" + new Date().getTime();
      const res = await toolboxLoversNumber({
        lottery_type: this.lotterytype,
        push_id: s.substring(s.length - 5, s.length),
        maleBirthDate: this.manValue,
        femaleBirthDate: this.girlValue,
      });
      if (res.code === 1) {
        this.data = res.data
        setSessStore("loveNum", JSON.stringify(res.data));
      }
    },
    openPicker(sex) {
      this.sex = sex;
      this.showPicker = true;
    },
    routerLink(link) {
      this.$router.push(link);
    },
    onClickLeft() {
      this.$router.go(-1);
    },

    changeFn() {
      // 值变化是触发
      this.changeDate = this.currentDate;
    },
    confirmFn() {
      if (this.sex == "man") {
        this.manValue = this.timeFormat(this.currentDate);
      } else {
        this.girlValue = this.timeFormat(this.currentDate);
      }
      this.showPicker = false;
    },
    cancelFn() {
      this.showPicker = true;
    },
    timeFormat(time) {
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return (
        year +
        "-" +
        `${month < 10 ? "0" + month + "-" : month + "-"}` +
        `${day < 10 ? "0" + day + "-" : day}`
      );
    },
  },

  mounted() {
    this.timeFormat(new Date());
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
  .content {
    margin: 0 15px;
    font-size: 24px;
    .tips {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      height: 130px;
      margin-top: 30px;
      border: 1px solid #7c7c7c;
      border-radius: 10px;
      box-shadow: 4px 4px 4px #7c7c7c;
      .title {
        margin-bottom: 15px;
        font-size: 36px;
      }
    }
    .ts {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      .sex {
        font-size: 30px;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .man {
        background-image: url("../assets/img/man.png");
        background-size: 100% 100%;
      }
      .girl {
        background-image: url("../assets/img/girl.png");
        background-size: 100% 100%;
      }
      .why {
        background-color: #f36422;
        font-size: 40px;
        border-radius: 40px;
        color: #fff;
      }
    }
    .btn1 {
      margin-top: 30px;
      width: 400px;
      height: 70px;
      border: 1px solid #e1e1e1;
      background: linear-gradient(#1aae3d, #177900);
      color: #fff;
    }
    .numList {
      margin-top: 100px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      .box {
        text-align: center;
        line-height: 60px;
        width: 10%;
        height: 60px;
        font-size: 30px;
      }
    }
  }
}
</style>