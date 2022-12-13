<template>
  <div class="wrap">
    <van-sticky>
      <van-nav-bar
        class="navBar"
        title="详情"
        left-arrow
        @click-left="onClickLeft"
        @click-right="show = true"
      >
        <template #right>
          <img src="../assets/img/gd.png" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <div class="top">
      <img width="100%" src="../assets/img/u12.png" />
    </div>
    <div class="kjjlWrap">
      <div class="listWrap">
        <div class="recordList">
          <div class="ListTop">
            <div class="left">
              {{ listData.kjData.year }}年 第{{ listData.kjData.qs }}期 开奖结果
            </div>
            <div class="right">历史记录</div>
          </div>
          <div class="boxContent">
            <div
              class="box"
              v-for="(item1, index1) in listData.kjData.num"
              :key="index1"
            >
              <div class="top" :class="getCss(item1)">{{ item1 }}</div>
              <div class="btm">
                {{ listData.kjData.wx[index1] }}/{{
                  listData.kjData.sx[index1]
                }}
              </div>
            </div>
            <div class="box">
              <div class="top">+</div>
              <div class="btm"></div>
            </div>
            <div class="box">
              <div class="top" :class="getCss(listData.kjData.num[6])">
                {{ listData.kjData.num[6] }}
              </div>
              <div class="btm">
                {{ listData.kjData.wx[6] }}/{{ listData.kjData.sx[6] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="plList">
      <div class="list">
        <div class="top">
          <div class="left">
            <img :src="listData.tzData.img" />
          </div>
          <div class="right">
            <div class="name">{{ listData.tzData.name }}</div>
            <div class="time">{{ listData.tzData.time }}</div>
          </div>
          <div class="lsBtn">
            <div class="btn">历史帖子</div>
          </div>
        </div>
        <div class="center">
          <div class="title">
            <div class="right">{{ listData.tzData.title }}</div>
          </div>
          <div class="text">
            {{ listData.tzData.content }}
          </div>
        </div>
        <div class="btm">
          <div class="box">
            <img src="../assets/img/pl.png" />
            <div class="num">{{ listData.tzData.pl }}</div>
          </div>
          <div class="box" @click="changeDzType">
            <img v-if="!this.listData.tzData.type.dz" src="../assets/img/dz.png" />
            <img v-else src="../assets/img/dzAct.png" />
            <div class="num">{{ listData.tzData.dz }}</div>
          </div>
          <div class="box" @click="changeGzType">
            <img v-if="!this.listData.tzData.type.gz" src="../assets/img/gz.png" />
            <img v-else src="../assets/img/gzAct.png" />
            <div class="num">{{ listData.tzData.gz }}</div>
          </div>
          <div class="box">
            <img src="../assets/img/fx.png" /> 
            <div class="num">{{ listData.tzData.fx }}</div>
          </div>
          <div class="box">
            <img src="../assets/img/liul.png" />
            <div class="num">{{ listData.tzData.liul }}</div>
          </div>
        </div>
        <div class="plTitle">
          <div class="text">热门评论</div>
        </div>
      </div>
      <div class="rmplList">
        <div
          class="list"
          v-for="(item, index) in listData.tzData.plList"
          :key="index"
        >
          <div class="left">
            <img :src="item.img" />
          </div>
          <div class="right">
            <div class="name">{{ item.name }}</div>
            <div class="text">
              {{ item.content }}
            </div>
            <div class="btmT">
              <div class="timeL">{{ item.time }}</div>
              <div class="hfR" @click="hfClick(item)">回复</div>
            </div>
            <div class="gdpl" v-if="item.plhf.length > 0">更多评论</div>
          </div>
          <div class="dzBtn">
            <div class="btn1" @click="changeZpldzType(item.id,index)">
              <img v-if="!item.dzType" src="../assets/img/dz.png" />
              <img v-else src="../assets/img/dzAct.png" />
              <div class="num">{{ item.dzNum }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-cell-group class="publish-wrap">
      <van-field
        v-model="value"
        ref="ipt"
        autosize
        clearable
        @clear="clearInput"
        :placeholder="hfpl ? hfpl : '想说点什么'"
      >
        <template #button>
          <van-button
            slot="button"
            @click="submit"
            round
            size="mini"
            type="info"
            class="vBtn"
            >发送</van-button
          >
        </template>
      </van-field>
    </van-cell-group>
    <van-action-sheet
      v-model="show"
      :round="false"
      :actions="actions"
      @select="listAct"
      cancel-text="取消"
      close-on-click-action
      @cancel="cancel = false"
    />
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      value: "",
      hfId: "",
      hfpl: "",
      show: false,
      actions: [
        { name: "历史帖子", index: "1" },
        { name: "举报", index: "2" },
      ],
      listData: {
        kjData: {
          year: "2022",
          qs: 240,
          time: "2021年08月28日",
          num: [1, 2, 3, 4, 5, 6, 7],
          wx: ["木", "木", "木", "木", "木", "木", "木"],
          sx: ["鸡", "牛", "虎", "龙", "蛇", "猪", "狗"],
        },
        tzData: {
          name: "徐国栋",
          time: "2022-10-18 23:02:31",
          qishu: "241",
          title: "241期澳彩特肖(玉林站)参赛帖",
          img: require("../assets/img/pltx.png"),
          content: "241期澳彩特肖(玉林站)参赛帖",
          pl: "255",
          gz: "666",
          fx: "666",
          dz: "266",
          liul: "700",
          type: "2",
          id: "001",
          type:{
            dz:false,
            gz:false,
          },
          plList: [
            {
              name: "徐国",
              time: "2022-10-18 23:22:31",
              img: require("../assets/img/pltx.png"),
              content: "241期澳彩特肖(玉林站)参赛帖",
              dzNum: "555",
              dzType:false,
              id: "0001",
              plhf: [],
            },
            {
              name: "徐国",
              time: "2022-10-18 23:22:31",
              img: require("../assets/img/pltx.png"),
              content: "241期澳彩特肖(玉林站)参赛帖",
              dzNum: "555",
              dzType:false,
              id: "0002",
              plhf: [],
            },
            {
              name: "徐国",
              time: "2022-10-18 23:22:31",
              img: require("../assets/img/pltx.png"),
              content: "241期澳彩特肖(玉林站)参赛帖",
              dzNum: "555",
              dzType:false,
              id: "0003",
              plhf: [],
            },
            {
              name: "徐国",
              time: "2022-10-18 23:22:31",
              img: require("../assets/img/pltx.png"),
              content: "241期澳彩特肖(玉林站)参赛帖",
              dzNum: "555",
              dzType:false,
              id: "0004",
              plhf: [],
            },
            {
              name: "徐国",
              time: "2022-10-18 23:22:31",
              img: require("../assets/img/pltx.png"),
              content: "241期澳彩特肖(玉林站)参赛帖",
              dzNum: "555",
              dzType:false,
              id: "0005",
              plhf: [],
            },
            {
              name: "徐国",
              time: "2022-10-18 23:22:31",
              img: require("../assets/img/pltx.png"),
              content: "241期澳彩特肖(玉林站)参赛帖",
              dzNum: "555",
              dzType:false,
              id: "0006",
              plhf: [],
            },
          ],
        },
      },
    };
  },
  computed: {
    getCss() {
      return (index) => {
        return "css" + Number(index);
      };
    },
  },
  created() {},
  methods: {
    changeZpldzType(id,index){
      if(this.listData.tzData.plList[index].dzType){ 
        this.listData.tzData.plList[index].dzNum--
        this.$toast('取消点赞') 
      }else{ 
        this.listData.tzData.plList[index].dzNum++
        this.$toast('子评论点赞') 
      } 
        this.listData.tzData.plList[index].dzType = !this.listData.tzData.plList[index].dzType
    },
    changeDzType(){
      if(this.listData.tzData.type.dz){
        this.listData.tzData.dz--
        this.$toast('取消点赞')
      }else{
        this.listData.tzData.dz++
        this.$toast('点赞')
      }
        this.listData.tzData.type.dz = !this.listData.tzData.type.dz
    },
    changeGzType(){
      if(this.listData.tzData.type.gz){
        this.listData.tzData.gz--
        this.$toast('取消关注')
      }else{
        this.listData.tzData.gz++
        this.$toast('关注')
      }
        this.listData.tzData.type.gz = !this.listData.tzData.type.gz
    },
    submit() {
      this.$toast(this.value);
    },
    hfClick(item) {
      this.hfId = item.id;
      this.hfpl = "回复" + item.name + "的评论";
      this.value = ""
      this.$refs.ipt.focus();
    },
    clearInput() {
      this.hfId = "";
      this.hfpl = "";
      this.value = ""
    },
    listAct(item) {
      if (item.index == 1) { 
        this.$toast("历史记录");
      } else {
        this.$router.push("/message");
      }
    },
    details(id) {
      this.$toast(id);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      // this.$router.push("/message");
    },
  },
};
</script>
 
<style lang="less" scoped>
.wrap {
  width: 100%;
  min-height: calc(100vh - 120px);
  margin-bottom: 120px;
  .publish-wrap {
    position: fixed;
    border-top: 1px solid #dddddd;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /deep/.van-field__control {
      background-color: #dddddd;
      padding-left: 10px;
      border-radius: 30px;
      height: 60px;
    }
    /deep/.vBtn {
      margin-left: 30px;
      width: 100px;
      height: 60px;
      border: none;
      background: linear-gradient(#1aae3d, #177900);
    }
  }
  .navBar {
    background: linear-gradient(#1aae3d, #177900);
    /deep/ .van-icon {
      color: white;
    }
    /deep/ .van-ellipsis {
      color: #fff;
    }
    img {
      width: 50px;
      height: 10px;
    }
  }
  .kjjlWrap {
    margin-top: 20px;
    .listWrap {
      padding: 0 15px;
      font-size: 24px;
      .recordList {
        background-color: #ddd;
        display: flex;
        border-radius: 20px;
        flex-direction: column;
        border: 5px solid #07c160;
        padding: 15px;
        .ListTop {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px 0;
          .left {
            color: #07c160;
            margin-left: 100px;
            flex: 1;
            font-size: 24px;
          }
          .right {
            width: 100px;
            margin-left: 50px;
            color: red;
          }
        }
        .boxContent {
          display: flex;
          justify-content: space-between;
          .box {
            padding: 10px 10px;
            font-size: 26px;
            .top {
              width: 60px;
              height: 60px;
              background-size: 100% 100%;
              line-height: 60px;
              font-size: 30px;
              font-weight: 700;
              margin-bottom: 20px;
            }
            .btm {
              color: #7c7c7c;
              font-size: 24px;
            }
          }
          .box:nth-child(7) {
            display: none;
          }
          .box:nth-child(8) {
            padding: 10px 0;
            .top {
              width: 20px;
            }
          }
        }
      }
    }
  }
  .plList {
    width: 100%;
    margin-top: 15px;
    .list {
      .top {
        padding: 20px 45px 15px 45px;
        display: flex;
        height: 70px;
        justify-content: space-between;
        align-items: center;
        .left {
          width: 70px;
          margin-right: 15px;
          img {
            width: 100%;
          }
        }
        .right {
          flex: 1;
          text-align: left;
          font-size: 26px;
          .name {
            margin-bottom: 10px;
          }
        }
        .lsBtn {
          font-size: 22px;
          color: #fff;
          border-radius: 20px;
          padding: 10px 10px;
          background: linear-gradient(#1aae3d, #177900);
        }
      }
      .center {
        display: flex;
        flex-direction: column;
        align-items: left;
        text-align: left;
        padding: 0 45px;
        font-size: 28px;
        letter-spacing: 2px;
        .title {
          height: 35px;
          display: flex;
          .left {
            font-size: 24px;
            height: 35px;
            line-height: 35px;
            padding: 0 5px;
            background: #07c160;
            color: #fff;
            margin-right: 15px;
          }
          .right {
            height: 35px;
            line-height: 35px;
            font-weight: 700;
          }
        }
        .text {
          width: 100%;
          line-height: 35px;
          padding: 20px 0;
        }
      }
      .btm {
        border-bottom: 10px solid #dddddd;
        border-top: 1px solid #dddddd;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px 0;
        .box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          height: 60px;
          width: 60px;
          img {
            width: 40px;
          }
          .num {
            margin-top: 10px;
            color: #b1aaaa;
            font-size: 26px;
          }
        }
      }
      .plTitle {
        height: 60px;
        font-size: 30px;
        border-bottom: 1px solid #dddddd;
        .text {
          margin: 20px 0 20px 30px;
          width: 130px;
          padding-bottom: 5px;
          border-bottom: 6px solid #07c160;
        }
      }
    }
  }
  .rmplList {
    margin-top: 30px;
    .list {
      padding: 20px 45px 15px 45px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .left {
        width: 70px;
        margin-right: 15px;
        img {
          width: 100%;
        }
      }
      .right {
        flex: 1;
        text-align: left;
        font-size: 26px;
        color: #7c7c7c;
        .name {
          margin-top: 10px;
        }
        .text {
          color: black;
          margin: 10px 0 20px 0;
        }
        .btmT {
          font-size: 24px;
          display: flex;
          align-items: center;
          text-align: center;
          .hfR {
            text-align: center;
            margin-left: 20px;
            padding: 6px 10px;
            border-radius: 20px;
            background-color: #ddd;
          }
        }
      }
      .dzBtn {
        img {
          width: 35px;
        }
        font-size: 24px;
        color: black;
      }
    }
  }
}
</style>