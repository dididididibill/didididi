<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="举报"
      left-arrow
      @click-left="onClickLeft"
    /> 
    <van-form @submit="onSubmit">
      <div class="liyou">
        <div class="title">理由:</div> 
        <van-field
          v-model="text"
          rows="4"
          autosize 
          type="textarea"
          maxlength="200"
          placeholder="请输入理由"
          show-word-limit
        />
      </div>
      <van-field name="uploader">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" color='linear-gradient(#1aae3d, #177900)' native-type="submit">提交</van-button>
      </div>
    </van-form> 
  </div>
</template>

<script>
export default {
  data() {
    return { text: "", uploader: [] };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  background-color: #f1efef;
  .navBar {
    background: linear-gradient(#1aae3d, #177900);

    /deep/ .van-icon {
      color: white;
    }
    /deep/ .van-ellipsis {
      color: #fff;
    }
  }
  .liyou {
    background-color: #fff;
    font-size: 30px;
    text-align: left;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1efef; 
    .van-field{
        margin-top: 30px;
        padding: 0;
    }
  }
  .formWrapper {
    padding: 0 25px;
    font-size: 30px;
    color: black;
    // height: 200px;
    background-color: #fff;
  }
}
</style>