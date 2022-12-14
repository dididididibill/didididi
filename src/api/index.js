import { fetchFD, fetchGet, fetchPost } from "@/utils/axios.js";

const baseUrl = "https://api.tukuapi.com/api/";
export function uploadImg(params, url) {
  //图片上传
  return fetchPost(url || baseUrl, "public/upload_img", params);
}
export function login(params, url) {
  //登录
  return fetchPost(url || baseUrl, "member/login", params);
}
export function userInfo(params, url) {
  //获取用户信息
  return fetchPost(url || baseUrl, "member/user_info", params);
}
export function editInfo(params, url) {
  //修改用户信息
  return fetchPost(url || baseUrl, "member/edit_info", params);
}
export function register(params, url) {
  //注册
  return fetchPost(url || baseUrl, "member/register", params);
}
export function zlDataList(params, url) {
  //资料列表
  return fetchPost(url || baseUrl, "text_data/list", params);
}
export function kjYears(params, url) {
  //年份获取
  return fetchGet(url || baseUrl, "kj/kjyears", params);
}
export function tukuSearch(params, url) {
  //图库
  return fetchGet(url || baseUrl, "tuku/search", params);
}
export function zlDataDetails(params, url) {
  //资料列表详情
  return fetchPost(url || baseUrl, "text_data/details", params);
}
export function verify(params, url) {
  //验证码
  return fetchGet(url || baseUrl, "member/verify", params);
}
export function indexBanner(params, url) {
  // 首页轮播图和开奖地址
  return fetchGet(url || baseUrl, "index/banner", params);
}
export function indexDataList(params, url) {
  // 首页资料
  return fetchGet(url || baseUrl, "index/index_data_list", params);
}
export function zodiacAttr(params, url) {
  // 生肖属性
  return fetchGet(url || baseUrl, "zodiac/attr", params);
}
export function toolboxSikbag(params, url) {
  // 玄机锦囊
  return fetchGet(url || baseUrl, "toolbox/sinkBag", params);
}
export function toolboxListSinkBag(params, url) {
  // 玄机锦囊列表
  return fetchGet(url || baseUrl, "toolbox/listSinkBag", params);
}
export function toolboxLoversNumber(params, url) {
  // 恋人特码
  return fetchGet(url || baseUrl, "toolbox/loversNumber", params);
}
export function toolboxAnimalCard(params, url) {
  // 生肖卡牌
  return fetchGet(url || baseUrl, "toolbox/animalCard", params);
}
export function zxcountLiuhe(params, url) {
  // 资讯统计-六合统计
  return fetchGet(url || baseUrl, "zxcount/liuhe", params);
}
export function zxcountAttribute(params, url) {
  // 资讯统计-属性参照
  return fetchGet(url || baseUrl, "zxcount/attribute", params);
}
export function zxcountSpecialcode(params, url) {
  // 资讯统计-特码历史
  return fetchGet(url || baseUrl, "zxcount/specialcode", params);
}
export function zxcountPositivecode(params, url) {
  // 资讯统计-正码历史
  return fetchGet(url || baseUrl, "zxcount/positivecode", params);
}
export function zxcountWstable(params, url) {
  // 资讯统计-特码历史
  return fetchGet(url || baseUrl, "zxcount/wstable", params);
}
export function zxcountSxpiechart1(params, url) {
  // 资讯统计-生肖正码
  return fetchGet(url || baseUrl, "zxcount/sxpiechart1", params);
}
export function zxcountBarchart2(params, url) {
  // 资讯统计-特码两面
  return fetchGet(url || baseUrl, "zxcount/barchart2", params);
}
export function zxcountBarchart1(params, url) {
  // 资讯统计-正码总分
  return fetchGet(url || baseUrl, "zxcount/barchart1", params);
}
export function voteDetails(params, url) {
  // 投票详情
  return fetchGet(url || baseUrl, "vote/details", params);
}
export function ListAspx(params, url) {
  // 全年资料
  return fetchGet(url || "https://246.49j.cc/", "List.Aspx", params);
}
export function shake(params, url) {
  // 摇一摇
  return fetchGet(url || baseUrl, "toolbox/shake", params);
}
