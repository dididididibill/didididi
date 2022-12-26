<template>
  <div class="wrap">
    <!-- 资讯统计 -->
    <ZxtjPage v-if="tabindex == 0" />
    <!-- 属性参照 -->
    <SxczPage v-if="tabindex == 1" />
    <!-- 特码历史 -->
    <TmlsPage v-if="tabindex == 2 || tabindex == 3" />
    <!-- 饼图 -->
    <!-- <SxbtPage v-if="tabindex == 3" /> -->
    <!-- 尾数大小 -->
    <WsdxPage v-if="tabindex == 4" />
    <!-- 柱状图 -->
    <TjzztPage v-if="tabindex == 9 || tabindex == 12" /> 
    <div class="tabbar">
        <div class="tab" v-for="(item, index) in tabList" :key="index" @click="clickunit(item,index)">
          <img :src="index == activePage ? item.icon.active : item.icon.inactive" />
          <div :style="{ color: index == activePage ? '#07c160' : '#7c7c7c'}" class="text">{{ item.name }}</div>
        </div>
        <div class="tab" @click="show = !show">
          <img :src="activePage >= 4 ? require('../../assets/tabIcon/gdAct.png'): require('../../assets/tabIcon/gd.png')" />
          <div :style="{ color: activePage >= 4 ? '#07c160' : '#7c7c7c'}" class="text">更多</div>
        </div>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '40%', paddingBottom: '60px' ,paddingTop:'10px'}"
    >
      <div class="popWrapper" >
        <div class="routeBox" v-for="(item, index) in tabLists" :key="index" @click="clickunit(item,index)">
          <img :src="index == activePage ? item.icon.inactive : item.icon.active" />
          <div :style="{ color: index == activePage ? '#07c160' : ''}" class="text">{{ item.name }}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
 
<script>
import SxczPage from "./page/sxcz";
import ZxtjPage from "./page/zxtj";
import TmlsPage from "./page/tmls";
import SxbtPage from "./page/sxbt";
import WsdxPage from "./page/wsdx";
import TjzztPage from "./page/tjzzt";
import { mapGetters } from "vuex";
export default {
  components: {
    SxczPage,
    ZxtjPage,
    TmlsPage,
    SxbtPage,
    WsdxPage,
    TjzztPage
  },
  data() {
    return {
      title: "资讯统计",
      show: false,
      active: 0,
      activePage: 0,
      tabList: [
        {
          name: "资讯统计",
          icon: {
            inactive: require("../../assets/tabIcon/1.png"),
            active: require("../../assets/tabIcon/1Act.png"),
          },
        },
        {
          name: "属性参照",
          icon: {
            inactive: require("../../assets/tabIcon/2.png"),
            active: require("../../assets/tabIcon/2Act.png"),
          },
        },
        {
          name: "特码历史",
          icon: {
            inactive: require("../../assets/tabIcon/3.png"),
            active: require("../../assets/tabIcon/3Act.png"),
          },
        },
        {
          name: "正码历史",
          icon: {
            inactive: require("../../assets/tabIcon/4.png"),
            active: require("../../assets/tabIcon/4Act.png"),
          },
        },
      ],
      tabLists: [
        {
          name: "资讯统计",
          icon: {
            inactive: require("../../assets/tabIcon/tj.png"),
            active: require("../../assets/tabIcon/tjAct.png"),
          },
        },
        {
          name: "属性参照",
          icon: {
            inactive: require("../../assets/tabIcon/sx.png"),
            active: require("../../assets/tabIcon/sxAct.png"),
          },
        },
        {
          name: "特码历史",
          icon: {
            inactive: require("../../assets/tabIcon/tm.png"),
            active: require("../../assets/tabIcon/tmAct.png"),
          },
        },
        {
          name: "正码历史",
          icon: {
            inactive: require("../../assets/tabIcon/zm.png"),
            active: require("../../assets/tabIcon/zmAct.png"),
          },
        },
        {
          name: "尾数大小",
          icon: {
            inactive: require("../../assets/tabIcon/ws.png"),
            active: require("../../assets/tabIcon/wsAct.png"),
          },
        },
        {
          name: "生肖特码",
          icon: {
            inactive: require("../../assets/tabIcon/sxtm.png"),
            active: require("../../assets/tabIcon/sxtmAct.png"),
          },
        },
        {
          name: "生肖正码",
          icon: {
            inactive: require("../../assets/tabIcon/sxzm.png"),
            active: require("../../assets/tabIcon/sxzmAct.png"),
          },
        },
        {
          name: "波色特码",
          icon: {
            inactive: require("../../assets/tabIcon/bstm.png"),
            active: require("../../assets/tabIcon/bstmAct.png"),
          },
        },
        {
          name: "波色正码",
          icon: {
            inactive: require("../../assets/tabIcon/bszm.png"),
            active: require("../../assets/tabIcon/bszmAct.png"),
          },
        },
        {
          name: "特码两面",
          icon: {
            inactive: require("../../assets/tabIcon/tmlm.png"),
            active: require("../../assets/tabIcon/tmlmAct.png"),
          },
        },
        {
          name: "特码尾数",
          icon: {
            inactive: require("../../assets/tabIcon/ws.png"),
            active: require("../../assets/tabIcon/wsAct.png"),
          },
        },
        {
          name: "正码尾数",
          icon: {
            inactive: require("../../assets/tabIcon/zmws.png"),
            active: require("../../assets/tabIcon/zmwsAct.png"),
          },
        },
        {
          name: "正码总分",
          icon: {
            inactive: require("../../assets/tabIcon/zm.png"),
            active: require("../../assets/tabIcon/zmAct.png"),
          },
        },
        {
          name: "号码号段",
          icon: {
            inactive: require("../../assets/tabIcon/hm.png"),
            active: require("../../assets/tabIcon/hmAct.png"),
          },
        },
        {
          name: "家禽风暴",
          icon: {
            inactive: require("../../assets/tabIcon/jq.png"),
            active: require("../../assets/tabIcon/jqAct.png"),
          },
        },
        {
          name: "连码走势",
          icon: {
            inactive: require("../../assets/tabIcon/lm.png"),
            active: require("../../assets/tabIcon/lmAct.png"),
          },
        },
        {
          name: "连肖站",
          icon: {
            inactive: require("../../assets/tabIcon/lxz.png"),
            active: require("../../assets/tabIcon/lxzAct.png"),
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      tabindex: ["getTabindex"],
    }),
    tabindex: {
      get() {
        return this.$store.state.tabindex;
      },
      set(val) {
        return (this.$store.state.tabindex = val);
      },
    },
  },
  created() {
    this.$store.dispatch("setTabindex", 0);
  },
  methods: {
    clickunit(id, index) { 
      if (index == this.activePage) {
      } else {
        this.show = false
        this.activePage = index;
        this.$store.dispatch("setTabindex", index);
      }
    },
    changeTab(item, index) {
      if (index !== 4) {
        this.activePage = index;
        this.$store.dispatch("setTabindex", index);
      } else {
        this.show = true;
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
  },
};
</script>
 
<style lang="less" scoped>
.wrap {
  margin-bottom: 100px;
  width: 100%;
  position: relative;
  .tabbar {z-index: 99999;
    position: fixed;
    bottom: 0;
    left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-content: flex-start;
  justify-content: left;
  flex-wrap: wrap;
  background: #fff;
  .tab {
    height: 80px;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
      margin: 10px 0;
    img {
      width: 50px;
    }
  }
}
}
.popWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: flex-start;
  justify-content: left;
  flex-wrap: wrap;
  .routeBox {
    height: 20%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    img {
      width: 70px;
      margin-bottom: 15px;
    }
  }
}

</style>