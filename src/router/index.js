import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import FsjsView from "@/views/FsjsView.vue";
import toolChest from "@/views/toolChest.vue";
import voteStatistics from "@/views/voteStatistics.vue";
import login from "@/views/login.vue";
import register from "@/views/register.vue";
import gallery from "@/views/gallery.vue";
import master from "@/views/master.vue";
import masterDetails from "@/views/masterDetails.vue";
import openingDate from "@/views/openingDate.vue";
import loverNum from "@/views/loverNum.vue";
import mysterious from "@/views/mysterious.vue";
import mysteriousList from "@/views/mysteriousList.vue";
import shake from "@/views/shake.vue";
import sxAttribute from "@/views/sxAttribute.vue";
import yearData from "@/views/yearData.vue";
import imgs from "@/views/imgs.vue";
import tkDetails from "@/views/tkDetails.vue";
import kjRecord from "@/views/kjRecord.vue";
import zxbp from "@/views/zxbp.vue";
import flop from "@/views/flop.vue";
import gsForm from "@/views/gsForm.vue";
import gsFormDetails from "@/views/gsFormDetails.vue";
import message from "@/views/message.vue";
import lhtjMenu from "@/views/lhtj/index.vue";
import grzx from "@/views/grzx.vue";
import grzxEidt from "@/views/grzxEidt.vue";
import zhibo from "@/views/zhibo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/fsjs",
    name: "fsjs",
    component: FsjsView,
  },
  {
    path: "/toolChest",
    name: "toolChest",
    component: toolChest,
  },
  {
    path: "/voteStatistics",
    name: "voteStatistics",
    component: voteStatistics,
  },
  {
    path: "/master",
    name: "master",
    component: master,
  },
  {
    path: "/masterDetails",
    name: "masterDetails",
    component: masterDetails,
  },
  {
    path: "/openingDate",
    name: "openingDate",
    component: openingDate,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: gallery,
  },
  {
    path: "/loverNum",
    name: "loverNum",
    component: loverNum,
  },
  {
    path: "/mysterious",
    name: "mysterious",
    component: mysterious,
  }, 
  {
    path: "/mysteriousList",
    name: "mysteriousList",
    component: mysteriousList,
  },
  {
    path: "/shake",
    name: "shake",
    component: shake,
  },
  {
    path: "/sxAttribute",
    name: "sxAttribute",
    component: sxAttribute,
  },
  {
    path: "/yearData",
    name: "yearData",
    component: yearData,
  },
  {
    path: "/imgs",
    name: "imgs",
    component: imgs,
  },
  {
    path: "/tkDetails",
    name: "tkDetails",
    component: tkDetails,
  },
  {
    path: "/kjRecord",
    name: "kjRecord",
    component: kjRecord,
  },
  {
    path: "/zxbp",
    name: "zxbp",
    component: zxbp,
  },
  {
    path: "/flop",
    name: "flop",
    component: flop,
  },
  {
    path: "/gsForm",
    name: "gsForm",
    component: gsForm,
  },
  {
    path: "/gsFormDetails",
    name: "gsFormDetails",
    component: gsFormDetails,
  },
  {
    path: "/message",
    name: "message",
    component: message,
  },
  {
    path: "/lhtjMenu",
    name: "lhtjMenu",
    component: lhtjMenu,
  },
  {
    path: "/grzx",
    name: "grzx",
    component: grzx,
  },
  {
    path: "/grzxEidt",
    name: "grzxEidt",
    component: grzxEidt,
  },
  {
    path: "/zhibo",
    name: "zhibo",
    component: zhibo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
