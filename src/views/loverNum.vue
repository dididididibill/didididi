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
      <div class="ts">
        <div class="sex man">男</div>
        <div class="sex">+</div>
        <div class="sex girl">女</div>
        <div class="sex">=</div>
        <div class="sex why">?</div>
      </div>
      <div class="select">
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="value"
          label="选择男生日"
          placeholder="点击选择男生日"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择日期"
            :min-date="minDate"
            :max-date="maxDate"
            @change="changeFn()"
            @confirm="confirmFn()"
            @cancel="cancelFn()"
          />
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      showPicker: false,
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      changeDate: new Date(),
    };
  },
  methods: {
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


      
      // 确定按钮
      this.value = this.timeFormat(this.currentDate);
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
        "年" +
        `${month < 10 ? "0" + month + "月" : month + "月"}` +
        `${day < 10 ? "0" + day + "日" : day + "日"}`
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
  }
}
</style>