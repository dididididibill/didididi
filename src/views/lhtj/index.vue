<template>
  <div class="wrap">
    <!-- 资讯统计 -->
    <ZxtjPage v-if="activePage == 0"/>
    <!-- 属性参照 -->
    <SxczPage v-if="activePage == 1" />
    <!-- 特码历史 -->
    <TmlsPage v-if="activePage == 2" />
    <!-- 饼图 -->
    <!-- <SxbtPage v-if="activePage == 3" /> -->
    <!-- 尾数大小 -->
    <WsdxPage v-if="activePage == 3" />
    <van-tabbar
      v-model="active"
      active-color="#07c160"
      inactive-color="#7c7c7c"
      z-index="9999"
    >
      <van-tabbar-item @click="changeTab(item,index)" v-for="(item, index) in tabList" :key="index">
        <span>{{ item.name }}</span>
        <template #icon="props">
          <img :src="props.active ? item.icon.active : item.icon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <van-popup    v-model="show" position="bottom" :style="{ height: '30%' ,marginBottom:'50px' }" />
  </div>
</template>
 
<script>
import SxczPage from "./page/sxcz";
import ZxtjPage from "./page/zxtj";
import TmlsPage from "./page/tmls";
import SxbtPage from "./page/sxbt";
import WsdxPage from "./page/wsdx";
export default {
  components: {
    SxczPage,
    ZxtjPage,
    TmlsPage,
    SxbtPage,
    WsdxPage,
  },
  data() {
    return {
      title: "资讯统计",
      show: false,
      active: 0,
      activePage:0,
      tabList: [
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
          name: "更多",
          icon: {
            inactive: require("../../assets/tabIcon/gd.png"),
            active: require("../../assets/tabIcon/gdAct.png"),
          },
        },
      ],
    };
  },
  methods: {
    changeTab(item ,index) { 
      if(index !== 4){ 
      this.activePage = index
      }else{
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
  padding-bottom:100px ;
  width: 100%; 

}
</style>