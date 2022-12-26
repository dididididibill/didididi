<template>
  <div class="wrapper">
    <van-nav-bar
      class="navBar"
      title="2022年生肖属性"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
    <div class="boxTitle" style="margin: 50px 0 0 13.5px">生肖号码</div>
    <div class="sxListWrap">
      <div class="sxList" v-for="(item, index) in sxListData" :key="index">
        <div class="top">
          <div class="name">{{ item.title }}</div>
          <img :src="getStatusImg(item.abbr)" />
          <div class="text">{{ item.describe }}</div>
        </div>
        <div class="btm">
          <div
            class="num"
            :style="{ background: getStatusColor(item1) }"
            v-for="(item1, index1) in item.zodiac_number"
            :key="index1"
          >
            {{ item1 }}
          </div>
        </div>
      </div>
    </div>
    <div class="boxTitle">五行</div>
    <div class="wxWrap">
      <div
        class="wxContent"
        v-for="(item, index) in wxList"
        :key="index + 'item'"
      >
        <div class="wxTitle">{{ item.title }}</div>
        <div class="wxNub">
          <div
            class="nub"
            :style="{ background: getStatusColor(item1) }"
            v-for="(item1, index1) in item.zodiac_number"
            :key="index1"
          >
            {{ item1 }}
          </div>
        </div>
      </div>
    </div>
    <div class="boxTitle">波色</div>
    <div class="wxWrap">
      <div
        class="wxContent"
        v-for="(item, index) in colorList"
        :key="index + 'item'"
      >
        <div
          class="wxTitle"
          :style="{ color: getStatusColor(item.zodiac_number[1]) }"
        >
          {{ item.title }}
        </div>
        <div class="wxNub">
          <div
            class="nub"
            :style="{ background: getStatusColor(item1) }"
            v-for="(item1, index1) in item.zodiac_number"
            :key="index1"
          >
            {{ item1 }}
          </div>
        </div>
      </div>
    </div>
    <div class="boxTitle">合数单双</div>
    <div class="wxWrap">
      <div
        class="wxContent"
        v-for="(item, index) in hsList"
        :key="index + 'item'"
      >
        <div class="wxTitle" style="color: red">{{ item.title }}</div>
        <div class="wxNub">
          <div
            class="nub"
            :style="{ background: getStatusColor(item1) }"
            v-for="(item1, index1) in item.zodiac_number"
            :key="index1"
          >
            {{ item1 }}
          </div>
        </div>
      </div>
    </div>
    <div class="boxTitle">生肖属性</div>
    <div class="sxTypeList">
      <div
        class="sxTypeContent"
        v-for="(item, index) in sxTypeData"
        :key="index"
      >
        <div class="list" v-for="(item1, index1) in item" :key="index1">
          <div class="title">{{ item1.title }} :</div>
          <div class="text">{{ item1.zodiac_number.join(" ") }}</div>
        </div>
      </div>
      <div
        class="sxTypeContent"
        v-for="(item, index) in sxTypeData1"
        :key="index"
      >
        <div class="listText" v-for="(item1, index1) in item" :key="index1">
          <div class="text">{{ item1.text }}</div>
        </div>
      </div>
    </div>
    <div class="btnWrap">
      <div class="btn">
        <img src="../assets/img/liuyanIcon.png" />
      </div>
      <div class="btn" @click="returnTop">
        <img src="../assets/img/zhidingIcon.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { zodiacAttr } from "@/api/index";
export default {
  data() {
    return {
      wxList: {},
      hsList: [
        {
          title: "",
          zodiacAttr: [],
        },
      ],
      colorList: {
        red: {
          name: "红波",
          nub: [
            "01",
            "02",
            "07",
            "08",
            "12",
            "13",
            "18",
            "19",
            "23",
            "24",
            "29",
            "30",
            "34",
            "35",
            "40",
            "45",
            "46",
          ],
        },
        blueList: {
          name: "蓝波",
          nub: [
            "03",
            "04",
            "09",
            "10",
            "14",
            "15",
            "20",
            "25",
            "26",
            "31",
            "36",
            "37",
            "41",
            "42",
            "47",
            "48",
          ],
        },
        greenList: {
          name: "绿波",
          nub: [
            "05",
            "06",
            "11",
            "16",
            "17",
            "21",
            "22",
            "27",
            "28",
            "32",
            "33",
            "38",
            "39",
            "43",
            "44",
            "49",
          ],
        },
        redShuangList: {
          name: "红双",
          nub: ["02", "08", "12", "18", "24", "30", "34", "40", "46"],
        },
        redDanList: {
          name: "红单",
          nub: ["01", "07", "13", "19", "23", "29", "35", "45"],
        },
        blueShuangList: {
          name: "蓝双",
          nub: ["04", "10", "14", "20", "26", "36", "42", "48"],
        },
        blueDanList: {
          name: "蓝单",
          nub: ["03", "09", "15", "25", "31", "37", "41", "47"],
        },
        greenShuangList: {
          name: "绿双",
          nub: ["06", "16", "22", "28", "32", "38", "44"],
        },
        greenDanList: {
          name: "绿单",
          nub: ["05", "11", "17", "21", "27", "33", "39", "43", "49"],
        },
      },
      sxListData: [],
      sxTypeData: [
        {
          title: "",
          zodiacAttr: [],
        },
      ],
      sxTypeData1: {
        type1: {
          typeList1: {
            text: "虎，兔，[龙]。。。。春。。。东方。。。木。。青色",
          },
          typeList2: {
            text: "蛇，马，[羊]。。。。夏。。。南方。。。火。。赤色",
          },
          typeList3: {
            text: "猴，鸡，[狗]。。。。秋。。。西方。。。金。。白色",
          },
          typeList4: {
            text: "猪，鼠，[牛]。。。。冬。。。北方。。。水。。黑色",
          },
          typeList5: {
            text: "龙 [立春]，羊 [立夏]，狗 [立秋]，牛 [立东]",
          },
          typeList6: {
            text: "。。。。。。。。。。。。。。中央。。。土。。黄色",
          },
        },
        type2: {
          typeList1: {
            text: "两脚的生肖：为禽。 四脚的生肖：为畜。",
          },
        },
        type3: {
          typeList1: {
            text: "   ",
          },
          typeList2: {
            text: "   ",
          },
          typeList3: {
            text: "六合彩特码大小知识：",
          },
        },
        type4: {
          typeList1: {
            text: "大数: 25-49; (共25码)",
          },
          typeList2: {
            text: "小数: 01-24; (共24个)",
          },
          typeList3: {
            text: "中数: 13-37; (共25个)",
          },
          typeList4: {
            text: "边数: 01-12; 38-49; (共24个)",
          },
        },
        type5: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "  ",
          },
          typeList3: {
            text: "*********生肖鉴别*********",
          },
        },
        type6: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "一年四季生肖所在的位置",
          },
          typeList3: {
            text: "春天生肖(东方31---------42) : 兔、虎、龙。",
          },
          typeList4: {
            text: "夏天生肖(南方19---------30) : 马、蛇、羊。",
          },
          typeList5: {
            text: "秋天生肖(西方07---------18) : 鸡、猴、狗。",
          },
          typeList6: {
            text: "冬天生肖(北方01-06. 43-49) : 鼠、猪、牛。",
          },
        },
        type7: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "【生肖的五行属性】",
          },
          typeList3: {
            text: "【金肖】猴鸡 ",
          },
          typeList4: {
            text: "【木肖】虎兔 ",
          },
          typeList5: {
            text: "【水肖】鼠猪",
          },
          typeList6: {
            text: "【火肖】蛇马 ",
          },
          typeList7: {
            text: "【土肖】牛羊龙狗 ",
          },
        },
        type8: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "两大君王：龙 虎",
          },
          typeList3: {
            text: "两大恶人：鼠 猴",
          },
          typeList4: {
            text: "四大美女：兔 蛇 羊 鸡",
          },
          typeList5: {
            text: "四大家臣：牛 马 猪 狗",
          },
        },
        type9: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "01月；鼠，羊，虎， 蛇。 02月；牛，马，兔，鼠 。",
          },
          typeList3: {
            text: "03月；虎，蛇，龙， 牛。 04月；兔，龙，蛇，猴 。",
          },
          typeList4: {
            text: "05月；龙，兔，马， 兔。 06月；蛇，虎，羊，狗。",
          },
          typeList5: {
            text: "07月；马，牛，猴， 猪。 08月；羊，鼠，鸡，马。",
          },
          typeList6: {
            text: "09月；猴，猪，狗， 羊。 10月；鸡，狗，猪，虎。",
          },
          typeList7: {
            text: "11月；狗，鸡，鼠， 鸡。 12月；猪，猴，牛，龙。",
          },
        },
        type10: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "  ",
          },
          typeList3: {
            text: "  ",
          },
          typeList4: {
            text: "1、大小（固定不变）",
          },
        },
        type11: {
          typeList1: {
            text: "小：01-02-03-04-05-06-07-08-09-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24",
          },
          typeList2: {
            text: "大：25-26-27-28-29-30-31-32-33-34-35-36-37-38-39-40-41-42-43-44-45-46-47-48-49",
          },
        },
        type12: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "  ",
          },
        },
        type13: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "2、半波（固定不变）",
          },
        },
        type14: {
          typeList1: {
            text: "红双：02-08-12-18-24-30-34-40-46",
          },
          typeList2: {
            text: "红单：01-07-13-19-23-29-35-45",
          },
          typeList3: {
            text: "蓝双：04-10-14-20-26-36-42-48",
          },
          typeList4: {
            text: "蓝单：03-09-15-25-31-37-41-47",
          },
          typeList5: {
            text: "绿双：06-16-22-28-32-38-44",
          },
          typeList6: {
            text: "绿单：05-11-17-21-27-33-39-43-49",
          },
        },
        type15: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "3、合数（固定不变）",
          },
        },
        type16: {
          typeList1: {
            text: "01合：01-10",
          },
          typeList2: {
            text: "02合：02-11-20",
          },
          typeList3: {
            text: "03合：03-12-21-30",
          },
          typeList4: {
            text: "04合：04-13-22-31-40",
          },
          typeList5: {
            text: "05合：05-14-23-32-41",
          },
          typeList6: {
            text: "06合：06-15-24-33-42",
          },
          typeList7: {
            text: "07合：07-16-25-34-43",
          },
          typeList8: {
            text: "08合：08-17-26-35-44",
          },
          typeList9: {
            text: "09合：09-18-27-36-45",
          },
          typeList10: {
            text: "10合：19-28-37-46",
          },
          typeList11: {
            text: "11合：29-38-47",
          },
          typeList12: {
            text: "12合：39-48",
          },
          typeList13: {
            text: "13合：49",
          },
        },
        type17: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "4、头数（固定不变）",
          },
        },
        type18: {
          typeList1: {
            text: "0头：01 02 03 04 05 06 07 08 09",
          },
          typeList2: {
            text: "1头：10 11 12 13 14 15 16 17 18 19",
          },
          typeList3: {
            text: "2头：20 21 22 23 24 25 26 27 28 29",
          },
          typeList4: {
            text: "3头：30 31 32 33 34 35 36 37 38 39",
          },
          typeList5: {
            text: "4头：40 41 42 43 44 45 46 47 48 49",
          },
        },
        type19: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "5、门数（固定不变）",
          },
        },
        type20: {
          typeList1: {
            text: "1门：01-02-03-04-05-06-07-08-09",
          },
          typeList2: {
            text: "2门：10-11-12-13-14-15-16-17-18",
          },
          typeList3: {
            text: "3门：19-20-21-22-23-24-25-26-27",
          },
          typeList4: {
            text: "4门：28-29-30-31-32-33-34-35-36-37",
          },
          typeList5: {
            text: "5门：38-39-40-41-42-43-44-45-46-47-48-49",
          },
        },
        type21: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "6、段位（固定不变）",
          },
        },
        type22: {
          typeList1: {
            text: "1段：01-02-03-04-05-06-07",
          },
          typeList2: {
            text: "2段：08-09-10-11-12-13-14",
          },
          typeList3: {
            text: "3段：15-16-17-18-19-20-21",
          },
          typeList4: {
            text: "4段：22-23-24-25-26-27-28",
          },
          typeList5: {
            text: "5段：29-30-31-32-33-34-35",
          },
          typeList6: {
            text: "6段：36-37-38-39-40-41-42",
          },
          typeList7: {
            text: "7段：43-44-45-46-47-48-49",
          },
        },
        type23: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "7、尾数（固定不变）",
          },
        },
        type24: {
          typeList1: {
            text: "00尾：10-20-30-40",
          },
          typeList2: {
            text: "01尾：01-11-21-31-41",
          },
          typeList3: {
            text: "02尾：02-12-22-32-42",
          },
          typeList4: {
            text: "03尾：03-13-23-33-43",
          },
          typeList5: {
            text: "04尾：04-14-24-34-44",
          },
          typeList6: {
            text: "05尾：05-15-25-35-45",
          },
          typeList7: {
            text: "06尾：06-16-26-36-46",
          },
          typeList8: {
            text: "07尾：07-17-27-37-47",
          },
          typeList9: {
            text: "08尾：08-18-28-38-48",
          },
          typeList10: {
            text: "09尾：09-19-29-39-49",
          },
        },
        type25: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "8、合大&合小（固定不变）",
          },
        },
        type26: {
          typeList1: {
            text: "合小：01-02-03-04-05-06-10-11-12-13-14-15-20-21-22-23-24-30-31-32-33-40-41-42",
          },
          typeList2: {
            text: "合大：07-08-09-16-17-18-19-25-26-27-28-29-34-35-36-37-38-39-43-44-45-46-47-48-49",
          },
        },
        type27: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "9、尾大&尾小（固定不变）",
          },
        },
        type28: {
          typeList1: {
            text: "尾小：01-02-03-04-10-11-12-13-14-20-21-22-23-24-30-31-32-33-34-40-41-42-43-44",
          },
          typeList2: {
            text: "尾大：05-06-07-08-09-15-16-17-18-19-25-26-27-28-29-35-36-37-38-39-45-46-47-48-49",
          },
        },
        type29: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "10、半单双（固定不变）",
          },
        },
        type30: {
          typeList1: {
            text: "小单：01-03-05-07-09-11-13-15-17-19-21-23",
          },
          typeList2: {
            text: "小双：02-04-06-08-10-12-14-16-18-20-22-24",
          },
          typeList3: {
            text: "大单：25-27-29-31-33-35-37-39-41-43-45-47-49",
          },
          typeList4: {
            text: "大双：26-28-30-32-34-36-38-40-42-44-46-48",
          },
        },
        type29: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "11、合尾（固定不变）",
          },
        },
        type30: {
          typeList1: {
            text: "0合尾：19-28-37-46",
          },
          typeList2: {
            text: "1合尾：01-10-29-38-47",
          },
          typeList3: {
            text: "2合尾：02-11-20-39-48",
          },
          typeList4: {
            text: "3合尾：03-12-21-30-49",
          },
          typeList5: {
            text: "4合尾：04-13-22-31-40",
          },
          typeList6: {
            text: "5合尾：05-14-23-32-41",
          },
          typeList7: {
            text: "6合尾：06-15-24-33-42",
          },
          typeList8: {
            text: "7合尾：07-16-25-34-43",
          },
          typeList9: {
            text: "8合尾：08-17-26-35-44",
          },
          typeList10: {
            text: "9合尾：09-18-27-36-45",
          },
        },
        type31: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "12、头数单与双（固定不变）",
          },
        },
        type32: {
          typeList1: {
            text: "0头单：01-03-05-07-09",
          },
          typeList2: {
            text: "1头单：11-13-15-17-19",
          },
          typeList3: {
            text: "2头单：21-23-25-27-29",
          },
          typeList4: {
            text: "3头单：31-33-35-37-39",
          },
          typeList5: {
            text: "4头单：41-43-45-47-49",
          },
          typeList6: {
            text: "0头双：02-04-06-08",
          },
          typeList7: {
            text: "1头双：10-12-14-16-18",
          },
          typeList8: {
            text: "2头双：20-22-24-26-28",
          },
          typeList9: {
            text: "3头双：30-32-34-36-38",
          },
          typeList10: {
            text: "4头双：40-42-44-46-48",
          },
        },
        type33: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "13、模三数（固定不变）",
          },
          typeList3: {
            text: "3余0---03-06-09-12-15-18-21-24-27-30-33-36-39-42-45-48",
          },
          typeList4: {
            text: "3余1---01-04-07-10-13-16-19-22-25-28-31-34-37-40-43-46-49",
          },
          typeList5: {
            text: "3余2---02-05-08-11-14-17-20-23-26-29-32-35-38-41-44-47",
          },
        },
        type34: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "14、模四数（固定不变）",
          },
          typeList3: {
            text: "4余0-- 04-08-12-16-20-24-28-32-36-40-44-48",
          },
          typeList4: {
            text: "4余1-- 01-05-09-13-17-21-25-29-33-37-41-45-49",
          },
          typeList5: {
            text: "4余2-- 02-06-10-14-18-22-26-30-34-38-42-46",
          },
          typeList6: {
            text: "4余3-- 03-07-11-15-19-23-27-31-35-39-43-47",
          },
        },
        type35: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "15、模五数（固定不变）",
          },
          typeList3: {
            text: "5余0---05-10-15-20-25-30-35-40-45",
          },
          typeList4: {
            text: "5余1---01-06-11-16-21-26-31-36-41-46",
          },
          typeList5: {
            text: "5余2---02-07-12-17-22-27-32-37-42-47",
          },
          typeList6: {
            text: "5余3---03-08-13-18-23-28-33-38-43-48",
          },
          typeList7: {
            text: "5余4---04-09-14-19-24-29-34-39-44-49",
          },
        },
        type36: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "16、模六数（固定不变）",
          },
          typeList3: {
            text: "6余0-- 06-12-18-24-30-36-42-48",
          },
          typeList4: {
            text: "6余1-- 01-07-13-19-25-31-37-43-49",
          },
          typeList5: {
            text: "6余2-- 02-08-14-20-26-32-38-44",
          },
          typeList6: {
            text: "6余3-- 03-09-15-21-27-33-39-45",
          },
          typeList7: {
            text: "6余4-- 04-10-16-22-28-34-40-46",
          },
          typeList8: {
            text: "6余5-- 05-11-17-23-29-35-41-47",
          },
        },
        type37: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "17、模七数（固定不变）",
          },
          typeList3: {
            text: "7余0-- 07-14-21-28-35-42-49",
          },
          typeList4: {
            text: "7余1-- 01-08-15-22-29-36-43",
          },
          typeList5: {
            text: "7余2-- 02-09-16-23-30-37-44",
          },
          typeList6: {
            text: "7余3-- 03-10-17-24-31-38-45",
          },
          typeList7: {
            text: "7余4-- 04-11-18-25-32-39-46",
          },
          typeList8: {
            text: "7余5-- 05-12-19-26-33-40-47",
          },
          typeList9: {
            text: "7余6-- 06-13-20-27-34-41-48",
          },
        },
        type38: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "18、五行生肖属性",
          },
        },
        type39: {
          typeList1: {
            text: "金：猴-鸡",
          },
          typeList2: {
            text: "木：虎-兔",
          },
          typeList3: {
            text: "水：鼠-猪",
          },
          typeList4: {
            text: "火：蛇-马",
          },
          typeList5: {
            text: "土：牛-龙-羊-狗",
          },
          typeList6: {
            text: "  ",
          },
          typeList7: {
            text: "五行相克：金克木；土克水；火克金；木克土；水克火",
          },
        },
        type40: {
          typeList1: {
            text: "  ",
          },
          typeList2: {
            text: "六合彩生肖外号",
          },
        },
        type41: {
          typeList1: {
            text: "01：鼠（梅花；宰相；神偷；逆贼；军师 ）",
          },
          typeList2: {
            text: "02：牛（荷花；员外；元帅；大将 ）",
          },
          typeList3: {
            text: "03：虎（桃花；武士；将军；都督；大王 ）",
          },
          typeList4: {
            text: "04：兔（兰花；小姐；皇后；东宫；玉女; 玉帝 ）",
          },
          typeList5: {
            text: "05：龙（李花；状元；皇帝；皇上; 梨花 ）",
          },
          typeList6: {
            text: "06：蛇（竹花；美女；宫女；太子；宫妃; 才人 ）",
          },
          typeList7: {
            text: "07：马（杏花；秀才；太子；元帅 ）",
          },
          typeList8: {
            text: "08：羊（樱花；夫人；宰相；士兵; 西宫 ）",
          },
          typeList9: {
            text: "09：猴（松树；游侠；宰相；太监；蔻王 ）",
          },
          typeList10: {
            text: "10：鸡（葵花；歌女；武士；西宫；奴婢; 贵妃; 苓花 ）",
          },
          typeList11: {
            text: "11：狗（菊花；管家；奴才；先锋；管家; 文官 ）",
          },
          typeList12: {
            text: "12：猪（桂花；商贾；太监；东宫 ）",
          },
        },
        type42: {
          typeList1: {
            text: "吴国：虎 兔 龙 蛇",
          },
          typeList2: {
            text: "蜀国：马 羊 猴 鸡",
          },
          typeList3: {
            text: "魏国：狗 猪 鼠 牛",
          },
          typeList4: {
            text: "红生肖：马 兔 鼠 鸡。",
          },
          typeList5: {
            text: "蓝生肖：蛇 虎 猪 猴。",
          },
          typeList6: {
            text: "绿生肖：羊 龙 牛 狗。",
          },
          typeList7: {
            text: "无边肖：龙 虎 羊 兔 牛 鼠 马",
          },
          typeList8: {
            text: "有边肖：猪 猴 狗 蛇 鸡",
          },
          typeList9: {
            text: "朝肖：兔龙 蛇 马 羊 猴",
          },
          typeList10: {
            text: "阳肖：牛 虎 兔 羊 猴 鸡",
          },
          typeList11: {
            text: "佛肖：牛，蛇，马，龙，虎，猴",
          },
          typeList12: {
            text: "风肖：虎龙兔。",
          },
          typeList13: {
            text: "雷肖：蛇马羊。",
          },
          typeList14: {
            text: "云肖：猴鸡狗。",
          },
          typeList15: {
            text: "雨肖：猪鼠牛。",
          },
          typeList16: {
            text: "朝肖（白天肖）:兔龙蛇马羊猴",
          },
          typeList17: {
            text: "夕肖（夜晚肖）:虎牛鼠猪鸡狗",
          },
          typeList18: {
            text: "黑肖：兔 龙 蛇 马 羊 猴",
          },
          typeList19: {
            text: "文肖有：鼠、免、龙、马、羊、鸡、猪",
          },
          typeList20: {
            text: "武肖有：牛、虎、蛇、猴、狗",
          },
        },
        type43: {
          typeList1: {
            text: "十二生肖代号",
          },
          typeList2: {
            text: "鼠：国师 叛贼 神偷 叛贼 梅花",
          },
          typeList3: {
            text: "牛：无帅 大将 员外 大将 荷花",
          },
          typeList4: {
            text: "虎：大将 大王 武士 都督 桃花",
          },
          typeList5: {
            text: "兔：玉帝 东宫 小姐 东宫 兰花",
          },
          typeList6: {
            text: "龙：皇帝 状元 皇帝 皇帝 梨花",
          },
          typeList7: {
            text: "蛇：宫女 才人 美女 太子 竹花",
          },
          typeList8: {
            text: "马：太子 元帅 秀才 太子 杏花",
          },
          typeList9: {
            text: "羊：将相 西宫 夫人 西宫 樱花",
          },
          typeList10: {
            text: "猴：老大 太监 寇王 游侠 松树",
          },
          typeList11: {
            text: "鸡：东宫 贵妃 歌女 贵妃 葵花",
          },
          typeList12: {
            text: "狗：如意 管家 先锋 管家 菊花",
          },
          typeList13: {
            text: "猪：西宫 太监 商贾 太监 桂花",
          },
        },
        type44: {
          typeList1: {
            text: "【民间十二生肖所属时间】",
          },
          typeList2: {
            text: "01.鼠 04岁（23---01时，三更）",
          },
          typeList3: {
            text: "02.牛 03岁 （01---03时，四更）",
          },
          typeList4: {
            text: "03.虎 02岁（03---05时，五更）",
          },
          typeList5: {
            text: "04.兔 01岁 （05---07时，六更）",
          },
          typeList6: {
            text: "05.龙 12岁（07---09时，七更）",
          },
          typeList7: {
            text: "06.蛇 11岁（09---11时，八更）",
          },
          typeList8: {
            text: "07.马 10岁（11---13时，九更）",
          },
          typeList9: {
            text: "08.羊 09岁（13---15时，10更）",
          },
          typeList10: {
            text: "09.猴 08岁（15---17时，11更）",
          },
          typeList11: {
            text: "10.鸡 07岁（17---19时，12更）",
          },
          typeList12: {
            text: "11.狗 06岁（19---21时，一更）",
          },
          typeList13: {
            text: "12.猪 05岁（21---23时，二更）",
          },
        },
        type45: {
          typeList1: {
            text: "★十二建星与十二生肖.波色★",
          },
          typeList2: {
            text: "建日：太岁。主狗.鸡.龙.兔（红，绿）中数吉凶参半。",
          },
          typeList3: {
            text: "除日：为四利之太阳。主羊.兔.牛.马（蓝.绿）大吉。",
          },
          typeList4: {
            text: "满日：为天富，为土瘟，为四利之丧门，为飞廉。",
          },
          typeList5: {
            text: "主马.猴（蓝绿）小吉",
          },
          typeList6: {
            text: "平日：为三合，为土曲，主龙.狗.牛.羊.鸡（红.绿）",
          },
          typeList7: {
            text: "定日：为岁三合，为魁罡显星，为地官，为符畜官.",
          },
          typeList8: {
            text: "主猪.羊（蓝.绿）",
          },
          typeList9: {
            text: "执日：为四利之死符.主鼠.虎.兔.猪.马（蓝绿）",
          },
          typeList10: {
            text: "破日：为岁破，为大耗。主龙.鼠.兔.鸡（红绿）",
          },
        },
        type46: {
          typeList1: {
            text: "『★塞马汇正版挂牌后的尾数七尾中特★』",
          },
          typeList2: {
            text: "正版挂牌后的尾数:0尾--------0 1 3 4 7 8 9 尾",
          },
          typeList3: {
            text: "正版挂牌后的尾数:1尾--------0 2 3 4 7 8 9 尾",
          },
          typeList4: {
            text: "正版挂牌后的尾数:2尾--------1 2 3 4 5 7 8 尾",
          },
          typeList5: {
            text: "正版挂牌后的尾数:3尾--------0 1 2 3 4 5 6 尾",
          },
          typeList6: {
            text: "正版挂牌后的尾数:4尾--------0 3 4 5 6 8 9 尾",
          },
          typeList7: {
            text: "正版挂牌后的尾数:5尾--------1 2 3 4 5 6 7 尾",
          },
          typeList8: {
            text: "正版挂牌后的尾数:6尾--------0 2 3 5 6 7 8 尾",
          },
          typeList9: {
            text: "正版挂牌后的尾数:7尾--------1 3 4 5 6 7 9 尾",
          },
          typeList10: {
            text: "正版挂牌后的尾数:8尾--------1 2 4 5 7 8 9 尾",
          },
          typeList11: {
            text: "正版挂牌后的尾数:9尾--------0 2 3 4 5 6 7 尾",
          },
        },
        type47: {
          typeList1: {
            text: "奇门命理出尾篇",
          },
          typeList2: {
            text: "子鼠日:1234589尾",
          },
          typeList3: {
            text: "丑牛日:0134789尾",
          },
          typeList4: {
            text: "寅虎日:0456789尾",
          },
          typeList5: {
            text: "卯兔日:2356789尾",
          },
          typeList6: {
            text: "辰龙日:1245689尾",
          },
          typeList7: {
            text: "巳蛇日:1456789尾",
          },
          typeList8: {
            text: "午马日:0124567尾",
          },
          typeList9: {
            text: "未羊日:0134679尾",
          },
          typeList10: {
            text: "申猴日:0123468尾",
          },
          typeList11: {
            text: "酉鸡日:0235789尾",
          },
          typeList12: {
            text: "戌狗日:0235689尾",
          },
          typeList13: {
            text: "亥猪日:0123679尾",
          },
        },
        type48: {
          typeList1: {
            text: "【《曲奇先生》六十甲子精准出肖】",
          },
          typeList2: {
            text: "鼠日开奖,应开生肖：虎狗羊猪兔，防鼠马。",
          },
          typeList3: {
            text: "牛日开奖,应开生肖：兔猪马虎狗，防牛羊。",
          },
          typeList4: {
            text: "虎日开奖,应开生肖：鼠龙蛇牛马，防虎猴。",
          },
          typeList5: {
            text: "兔日开奖,应开生肖：蛇牛龙鼠猴，防兔鸡。",
          },
          typeList6: {
            text: "龙日开奖,应开生肖：虎马兔羊猪，防龙狗。",
          },
          typeList7: {
            text: "蛇日开奖,应开生肖：兔羊虎马狗，防蛇猪。",
          },
          typeList8: {
            text: "马日开奖,应开生肖：龙猴牛鸡蛇，防马鼠。",
          },
          typeList9: {
            text: "羊日开奖,应开生肖：蛇鸡鼠龙猴，防羊牛。",
          },
          typeList10: {
            text: "猴日开奖,应开生肖：马狗猪兔羊，防猴虎。",
          },
          typeList11: {
            text: "鸡日开奖,应开生肖：羊猪狗虎马，防鸡兔。",
          },
          typeList12: {
            text: "狗日开奖,应开生肖：猴鸡鼠龙蛇，防狗龙。",
          },
          typeList13: {
            text: "猪日开奖,应开生肖：牛鸡猴鼠龙，防猪蛇。",
          },
          typeList14: {
            text: "上期开鼠,本期必开：鼠虎蛇羊猴鸡狗。",
          },
          typeList15: {
            text: "上期开牛,本期必开：牛兔龙马猴狗猪。",
          },
          typeList16: {
            text: "上期开虎,本期必开：鼠牛兔龙蛇猴鸡。",
          },
          typeList17: {
            text: "上期开兔,本期必开：虎龙蛇马猴鸡猪。",
          },
          typeList18: {
            text: "上期开龙,本期必开：鼠牛虎兔蛇马鸡。",
          },
          typeList19: {
            text: "上期开蛇,本期必开：虎龙蛇猴鸡狗猪。",
          },
          typeList20: {
            text: "上期开马,本期必开：牛兔龙猴蛇鸡狗。",
          },
          typeList21: {
            text: "上期开羊,本期必开：鼠兔龙猴鸡狗猪。",
          },
          typeList22: {
            text: "上期开猴,本期必开：虎兔龙蛇羊鸡狗。",
          },
          typeList23: {
            text: "上期开鸡,本期必开：鼠牛龙猴鸡狗猪。",
          },
          typeList24: {
            text: "上期开狗,本期必开：鼠牛虎兔蛇羊猪。",
          },
          typeList25: {
            text: "上期开猪,本期必开：牛兔龙马猴狗猪。",
          },
        },
        type49: {
          typeList1: {
            text: "六合彩属性知识：",
          },
          typeList2: {
            text: "生肖属木的肖：猴；",
          },
          typeList3: {
            text: "五行属木的肖：虎兔；",
          },
          typeList4: {
            text: "生肖属土的肖：猪；",
          },
          typeList5: {
            text: "五行属土的肖：牛龙羊狗；",
          },
          typeList6: {
            text: "生肖属金的肖：龙马；",
          },
          typeList7: {
            text: "五行属金的肖：猴鸡；",
          },
          typeList8: {
            text: "五行属水的肖：鼠猪；",
          },
          typeList9: {
            text: "五行属火的肖：蛇马；",
          },
          typeList10: {
            text: "***************************",
          },
          typeList11: {
            text: "*************************方位段落**************************",
          },
          typeList12: {
            text: "东段； 31。。。。。。42 西段；07。。。。。。18",
          },
          typeList13: {
            text: "南段； 19。。。。。。30 北段；01。。。06，43。。。49",
          },
          typeList14: {
            text: "**************************************************************",
          },
          typeList15: {
            text: "  ",
          },
          typeList16: {
            text: "  ",
          },
          typeList17: {
            text: "**************************************************************",
          },
          typeList18: {
            text: "前落码：01 02 03 04 05 06 07 08 17 18 19 20 21 22 23 24 33 34 35 36 37 38 39 40",
          },
          typeList19: {
            text: "后落码：09 10 11 12 13 14 15 16 25 26 27 28 29 30 31 32 41 42 43 44 45 46 47 48 49",
          },
          typeList20: {
            text: "**************************************************************",
          },
          typeList21: {
            text: "内围码：09 10 11 12 13 16 17 18 19 20 23 24 25 26 27 30 31 32 33 34 37 38 39 40 41",
          },
          typeList22: {
            text: "外围码：01 02 03 04 05 06 07 08 14 15 21 22 28 29 35 36 42 43 44 45 46 47 48 49",
          },
          typeList23: {
            text: "**************************************************************",
          },
          typeList24: {
            text: "楼上码：01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 25 26 27 28",
          },
          typeList25: {
            text: "楼下码：22 23 24 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49",
          },
          typeList26: {
            text: "**************************************************************",
          },
          typeList27: {
            text: "左边码：01 02 03 04 08 09 10 11 15 16 17 18 22 23 24 29 30 31 36 37 38 43 44 45",
          },
          typeList28: {
            text: "右边码：05 06 07 12 13 14 19 20 21 25 26 27 28 32 33 34 35 39 40 41 42 46 47 48 49",
          },
          typeList29: {
            text: "**************************************************************",
          },
          typeList30: {
            text: "高 码：01 04 07 09 10 12 17 18 19 25 26 27 28 29 30 34 35 36 37 39 44 45 47 48",
          },
          typeList31: {
            text: "底 码：02 03 05 06 08 11 13 14 15 16 20 21 22 23 24 31 32 33 38 40 41 42 43 46 49",
          },
          typeList32: {
            text: "**************************************************************",
          },
          typeList33: {
            text: "天玄码：01 04 07 09 10 11 14 17 19 20 21 24 27 29 30 31 34 37 39 40 41 44 47 49",
          },
          typeList34: {
            text: "地机码：02 03 05 06 08 12 13 15 16 18 22 23 25 26 28 32 33 35 36 38 42 43 45 46 48",
          },
          typeList35: {
            text: "**************************************************************",
          },
          typeList36: {
            text: "一白：47 10 22 45 08 20 44 19 06 18 30 05 17 28 03 15 14 13 24 48",
          },
          typeList37: {
            text: "二黑：11 10 09 33 45 20 32 44 19 18 05 17 29 04 40 27 02 26 13 25 48",
          },
          typeList38: {
            text: "三碧：35 10 46 21 20 44 19 06 18 05 29 41 04 15 02 14 38 13 25 12 24 48",
          },
          typeList39: {
            text: "四绿：23 35 10 22 34 33 45 08 20 44 19 43 06 18 05 41 04 03 39 02 26 38 13 25 12",
          },
          typeList40: {
            text: "五黄：11 35 10 33 20 44 07 31 43 06 18 42 41 40 03 39 02 49 24",
          },
          typeList41: {
            text: "六白：23 35 10 33 08 20 07 06 05 17 04 28 40 03 15 27 02 26 38 01 37 12 24",
          },
          typeList42: {
            text: "七赤：23 35 10 34 46 09 32 43 42 05 17 29 40 03 27 38 13 25 37 24 36",
          },
          typeList43: {
            text: "八白：23 47 10 09 08 44 07 31 18 30 17 41 04 40 03 15 27 26 01 37 48",
          },
          typeList44: {
            text: "九紫：11 23 35 47 22 33 44 19 18 42 17 04 40 03 27 14 26 01 13 12 24",
          },
        },
        type50: {
          typeList1: {
            text: "方位的生肖排位:",
          },
          typeList2: {
            text: "东：虎，兔，龙。 南：马，蛇，羊。",
          },
          typeList3: {
            text: "西：鸡，猴，狗。 北：鼠，猪，牛。",
          },
          typeList4: {
            text: "***************************************",
          },
          typeList5: {
            text: "十二生肖的代名:",
          },
          typeList6: {
            text: "精（鼠）， 憨（牛）， 威（虎）， 慧（兔）",
          },
          typeList7: {
            text: "神（龙）， 智（蛇）， 奔（马）， 温（羊）",
          },
          typeList8: {
            text: "灵（猴）， 信（鸡）， 忠（狗）， 福（猪）",
          },
          typeList9: {
            text: "***************************************",
          },
          typeList10: {
            text: "十二生肖所属月份：",
          },
          typeList11: {
            text: "01月；鼠，羊， 虎， 蛇 。 02月；牛，马 ，兔， 鼠 。",
          },
          typeList12: {
            text: "03月；虎，蛇 ，龙， 牛。 04月；兔，龙， 蛇 ，猴 。",
          },
          typeList13: {
            text: "05月；龙，兔，马 ， 兔。 06月；蛇 ，虎，羊， 狗。",
          },
          typeList14: {
            text: "07月；马，牛，猴， 猪。 08月；羊，鼠， 鸡 ，马。",
          },
          typeList15: {
            text: "09月；猴， 猪，狗 ，羊。 10月；鸡，狗 ，猪， 虎。",
          },
          typeList16: {
            text: "11月；狗， 鸡，鼠， 鸡 。 12月；猪，猴 ，牛， 龙。",
          },
          typeList17: {
            text: "***************************************",
          },
          typeList18: {
            text: "八卦的生肖排位:",
          },
          typeList19: {
            text: "乾（离）马兔; 巽（坤）羊猴; 坎（兑）鸡; 艮（乾）狗猪;",
          },
          typeList20: {
            text: "坤（坎）鼠; 震（艮）牛虎， 离（震）兔， 兑（巽）龙蛇。",
          },
          typeList21: {
            text: "***************************************",
          },
          typeList22: {
            text: "28星宿排位:",
          },
          typeList23: {
            text: "01角， 02亢， 03氏， 04房， 05心， 06尾， 07箕，",
          },
          typeList24: {
            text: "08斗， 09牛， 10女; 11虚， 12危， 13室， 14壁，",
          },
          typeList25: {
            text: "15奎， 16娄， 17胃， 18昂; 19毕， 20觜， 21参，",
          },
          typeList26: {
            text: "22井， 23鬼， 24柳， 25星; 26张; 27冀， 28轸。 　 ",
          },
          typeList27: {
            text: "*****************《廿八星宿》*******************",
          },
          typeList28: {
            text: "东方青龙七宿：",
          },
          typeList29: {
            text: "角木蛟; 亢金龙; 氐土貉; 箕水豹; 尾火虎; 房日兔; 心月狐",
          },
          typeList30: {
            text: "龙. 猴. 鼠 . 狗. 鸡. 兔. 蛇",
          },
          typeList31: {
            text: "南方朱雀七宿:",
          },
          typeList32: {
            text: "井木犴; 鬼金羊; 柳土獐; 轸水蚓; 翼火蛇; 星日马; 张月鹿",
          },
          typeList33: {
            text: "鸡. 牛. 蛇. 兔. 龙 . 狗. 猴",
          },
          typeList34: {
            text: "西方白虎七宿:",
          },
          typeList35: {
            text: "**************************************************************",
          },
          typeList36: {
            text: "奎木狼; 娄金狗; 胃土雉; 壁水蝓; 觜火猴; 昂日鸡; 危月燕",
          },
          typeList37: {
            text: "虎. 狗. 马. 猪. 猴. 兔. 龙",
          },
          typeList38: {
            text: "北方玄武七宿:",
          },
          typeList39: {
            text: "斗木豸; 牛金牛; 女土蝠; 参水猿; 室火猪; 虚日鼠; 毕月乌",
          },
          typeList40: {
            text: "虎. 马. 狗. 牛. 羊. 猴. 兔",
          },
          typeList41: {
            text: "***************************************",
          },
          typeList42: {
            text: "五行相生相克的精准排肖",
          },
          typeList43: {
            text: "鼠日：冲马，生牛;克羊，破羊，无猴",
          },
          typeList44: {
            text: "牛日：冲羊，生鼠;克马，破猴，无鸡",
          },
          typeList45: {
            text: "虎日：冲猴，生猪;克蛇，破鸡，无狗",
          },
          typeList46: {
            text: "兔日：冲鸡，生狗;克龙，破狗，无猪",
          },
          typeList47: {
            text: "龙日：冲狗，生鸡;克兔，破猪，无鼠",
          },
          typeList48: {
            text: "蛇日：冲猪，生猴;克虎，破鼠，无牛",
          },
          typeList49: {
            text: "马日：冲鼠，生羊;克牛，破牛，无虎",
          },
          typeList50: {
            text: "羊日：冲牛，生马;克鼠，破虎，无兔",
          },
          typeList51: {
            text: "猴日：冲虎，生蛇;克猪，破兔，无龙",
          },
          typeList52: {
            text: "鸡日：冲兔，生龙;克狗，破龙，无蛇",
          },
          typeList53: {
            text: "狗日：冲龙，生兔;克鸡，破蛇，无马",
          },
          typeList54: {
            text: "猪日：冲蛇，生虎;克猴，破马，无羊",
          },
          typeList55: {
            text: "***************************************",
          },
          typeList56: {
            text: "五行之间的关系：",
          },
          typeList57: {
            text: "相生：木生火、火生土、土生金、金生水、水生木",
          },
          typeList58: {
            text: "相克：木克土、土克水、水克火、火克金、金克木",
          },
          typeList59: {
            text: "五行规律：",
          },
          typeList60: {
            text: "金生水--克木 水生木--克火",
          },
          typeList61: {
            text: "木生火--克土 火生土--克金 土生金--克水",
          },
          typeList62: {
            text: "***************************************",
          },
          typeList63: {
            text: "《紫薇斗数》★生肖排位★",
          },
          typeList64: {
            text: "01鸡 (太岁) . 02蛇（太阳）. 03马（丧门）.",
          },
          typeList65: {
            text: "04羊（太阴）. 05虎（官符）. 06兔（死符）.",
          },
          typeList66: {
            text: "07龙（岁破）. 08猪（龙德）. 09狗（白虎）.",
          },
          typeList67: {
            text: "10牛（福星）. 11猴（吊客）. 12鼠（病符）",
          },
          typeList68: {
            text: "***************************************",
          },
          typeList69: {
            text: "鼠：北方=四绿 牛：东北=二黑",
          },
          typeList70: {
            text: "虎：东北=二黑 兔：东方=六白",
          },
          typeList71: {
            text: "龙：东南=七赤 蛇：东南=七赤",
          },
          typeList72: {
            text: "马：南方=三碧 羊：西南=五黄",
          },
          typeList73: {
            text: "猴：西南=五黄 鸡：西方=一白",
          },
          typeList74: {
            text: "狗：西北=九紫 猪：西北=九紫",
          },
          typeList75: {
            text: "   ",
          },
          typeList76: {
            text: "八仙排位：",
          },
          typeList77: {
            text: "1.汉钟离 2.铁拐李 3.张果老 4.何仙姑",
          },
          typeList78: {
            text: "5.蓝彩和 6. 吕洞宾 7.韩湘子 8.曹国舅",
          },
          typeList79: {
            text: "***************************************",
          },
          typeList80: {
            text: "四柱出肖表：",
          },
          typeList81: {
            text: "===甲子：虎龙猴牛鸡猪，丙子：鼠龙牛蛇鸡猪，戊子；马猴狗兔蛇羊，",
          },
          typeList82: {
            text: "===庚子：虎龙猴蛇鸡猪，壬子：虎牛兔蛇羊猪，乙丑：鼠马狗牛兔蛇，",
          },
          typeList83: {
            text: "===丁丑：龙马蛇羊鸡猪，已丑：鼠虎马猴蛇猪，辛丑：鼠虎龙马羊鸡，",
          },
          typeList84: {
            text: "===癸丑：鼠龙马狗蛇鸡，甲寅：鼠虎龙兔羊猪，丙寅：虎猴兔蛇鸡猪，",
          },
          typeList85: {
            text: "===戊寅：鼠虎猴牛蛇猪，庚寅：虎马猴牛鸡猪，壬寅：虎马兔蛇羊猪，",
          },
          typeList86: {
            text: "===乙卯：鼠猴狗牛兔蛇，丁卯：虎龙马狗蛇猪，已卯：鼠马猴狗牛羊，",
          },
          typeList87: {
            text: "===辛卯：虎龙马狗牛兔，癸卯：鼠猴狗兔蛇羊，甲辰：虎马狗牛羊鸡，",
          },
          typeList88: {
            text: "===丙辰：马猴蛇羊鸡猪，戊辰：虎狗牛兔蛇鸡，庚辰：虎龙猴狗兔鸡，",
          },
          typeList89: {
            text: "===壬辰：鼠猴兔蛇羊鸡，乙巳：龙马猴牛兔鸡，丁巳：虎马猴兔羊鸡，",
          },
          typeList90: {
            text: "===已巳：鼠龙马猴蛇鸡，辛巳：虎马猴羊鸡猪，癸巳：虎龙马狗兔蛇，",
          },
          typeList91: {
            text: "===甲子：虎龙猴牛鸡猪，丙子：鼠龙牛蛇鸡猪，戊子；马猴狗兔蛇羊，",
          },
          typeList92: {
            text: "===庚子：虎龙猴蛇鸡猪，壬子：虎牛兔蛇羊猪，乙丑：鼠马狗牛兔蛇，",
          },
          typeList93: {
            text: "===丁丑：龙马蛇羊鸡猪，已丑：鼠虎马猴蛇猪，辛丑：鼠虎龙马羊鸡，",
          },
          typeList94: {
            text: "===癸丑：鼠龙马狗蛇鸡，甲寅：鼠虎龙兔羊猪，丙寅：虎猴兔蛇鸡猪，",
          },
          typeList95: {
            text: "===戊寅：鼠虎猴牛蛇猪，庚寅：虎马猴牛鸡猪，壬寅：虎马兔蛇羊猪，",
          },
          typeList96: {
            text: "===乙卯：鼠猴狗牛兔蛇，丁卯：虎龙马狗蛇猪，已卯：鼠马猴狗牛羊，",
          },
          typeList97: {
            text: "===辛卯：虎龙马狗牛兔，癸卯：鼠猴狗兔蛇羊，甲辰：虎马狗牛羊鸡，",
          },
          typeList98: {
            text: "===丙辰：马猴蛇羊鸡猪，戊辰：虎狗牛兔蛇鸡，庚辰：虎龙猴狗兔鸡，",
          },
          typeList99: {
            text: "===壬辰：鼠猴兔蛇羊鸡，乙巳：龙马猴牛兔鸡，丁巳：虎马猴兔羊鸡，",
          },
          typeList100: {
            text: "===已巳：鼠龙马猴蛇鸡，辛巳：虎马猴羊鸡猪，癸巳：虎龙马狗兔蛇，",
          },
          typeList101: {
            text: "===甲午：虎龙牛蛇羊猪，丙午：牛兔蛇羊鸡猪，戊午：马狗蛇羊鸡猪，",
          },
          typeList102: {
            text: "===庚午：鼠龙猴兔羊鸡，壬午：马兔蛇羊鸡猪，乙未：鼠马猴牛羊鸡，",
          },
          typeList103: {
            text: "===丁未：龙马猴狗鸡猪，已未：鼠龙马猴狗猪，辛未：龙马猴狗鸡猪，",
          },
          typeList104: {
            text: "===癸未；鼠虎马狗兔蛇，甲申：虎马牛兔蛇鸡，丙申：马狗牛蛇鸡猪，",
          },
          typeList105: {
            text: "===戊申：鼠马狗牛蛇鸡，庚申：马猴牛蛇羊鸡，壬申：马猴狗兔蛇猪，",
          },
          typeList106: {
            text: "===乙酉：鼠猴牛兔蛇羊，丁酉：鼠虎龙马兔猪，已酉：鼠马猴牛蛇羊，",
          },
          typeList107: {
            text: "===辛酉：虎马猴牛蛇羊，癸酉：鼠猴狗兔蛇羊，甲戌：鼠虎狗兔羊猪，",
          },
          typeList108: {
            text: "===丙戌：鼠虎猴蛇羊鸡，戊戌：虎狗牛蛇羊猪，庚戌：虎龙马猴兔羊，",
          },
          typeList109: {
            text: "===壬戌：龙猴兔蛇羊猪，乙亥：虎马猴狗兔鸡，丁亥：虎马猴兔鸡猪，",
          },
          typeList110: {
            text: "===已亥：龙马猴兔羊鸡，辛亥：虎马兔羊鸡猪，癸亥：鼠虎猴狗兔蛇，",
          },
          typeList111: {
            text: "***************************************",
          },
          typeList112: {
            text: "六合地基:正月虎;二月兔;三月龙;四月蛇;五月马;六月羊;",
          },
          typeList113: {
            text: "六合天干:正月狗;二月猪;三月鼠;四月牛;五月虎;六月兔;",
          },
          typeList114: {
            text: "六合地基:七月猴;八月鸡;九月狗;十月猪;十一月鼠;十二月牛.",
          },
          typeList115: {
            text: "六合天干:七月龙;八月马;九月蛇;十月羊;十一月猴;十二月鸡.",
          },
          typeList116: {
            text: "***************************************",
          },
          typeList117: {
            text: "名人 出生生肖表",
          },
          typeList118: {
            text: "鼠：关羽，苏东坡，杜甫，白居易，郑成功，华盛顿，莎士比亚，莫扎特。",
          },
          typeList119: {
            text: "牛：柳宗元，秋墐，张学良，王咯宾，白先勇，西特勒，桌别林拿破伦，安徒生，梵谷",
          },
          typeList120: {
            text: "虎：屈原，秦始皇，张衡，唐伯虎，李时珍，史可罚，孙中山，琼瑶，马克思，马可波罗",
          },
          typeList121: {
            text: "兔：周俞，曹呸，乾隆皇帝，胡适，梅艳芳，爱因斯坦",
          },
          typeList122: {
            text: "龙：朱元璋，霍元甲，王阳名，蔡元培，弘一大师，巴金，李小龙，邓小平，萧伯纳",
          },
          typeList123: {
            text: "蛇：项羽，孔融，陆游，吴敬锌，林则徐，鲁迅，毛泽东，林肯，甘地，毕加索",
          },
          typeList124: {
            text: "马：李世民，成吉思汗，康熙皇帝，溥仪，梅兰芳，邓丽君，周旋，林青霞，列宁",
          },
          typeList125: {
            text: "羊：曹操，杨贵妃，岳飞，慈禧，袁世凯，徐悲鸿，三毛，马克吐温，爱迪生",
          },
          typeList126: {
            text: "猴：武则天，韩愈，耿青，辛弃疾，文天祥，矛盾",
          },
          typeList127: {
            text: "鸡：孔子，汉武帝，诸葛亮，王安石，郑板桥，梁启超，周作人，泰戈尔",
          },
          typeList128: {
            text: "狗：孙权，玄奘，王勃，徐霞客，陈嘉庆，周恩来，刘少奇，朱自清，阮玲玉，曹葛，杨振宁",
          },
          typeList129: {
            text: "猪：宋人祖，刘伯温，齐白石，张大千，将介石，闻一多，老舍，史怀哲，亨利福特",
          },
          typeList130: {
            text: "***************************************",
          },
          typeList131: {
            text: '长年可用的资料：135hk.us（版权所有，要转贴需注明"特区总站"原著）',
          },
          typeList132: {
            text: "新加坡（■o■o）特码与香港六合彩关系：",
          },
          typeList133: {
            text: "{新加坡（■o■o）星期一-----香港星期二，",
          },
          typeList134: {
            text: "新加坡（■o■o）星期四---香港星期四}",
          },
          typeList135: {
            text: "1.新加坡特码+7=香港当期不出特肖",
          },
          typeList136: {
            text: "如：26期：（新）45+7=52-12=40羊，26期（香）杀羊肖.",
          },
          typeList137: {
            text: "（2005年全年错三）",
          },
          typeList138: {
            text: "2.新加坡特码开出■岁肖，香港当期绝杀■岁肖",
          },
          typeList139: {
            text: "（新）开 01 02 03 04 05 06 07 08 09 10 11 12岁肖",
          },
          typeList140: {
            text: "（香）杀 02 01 12 11 10 09 08 07 06 05 04 03 岁肖",
          },
          typeList141: {
            text: "如：26期：（新）09岁肖，香港当期绝杀06岁肖",
          },
          typeList142: {
            text: "（2005年全年错一）",
          },
          typeList143: {
            text: "***************************************",
          },
          typeList144: {
            text: "甲子日冲合",
          },
          typeList145: {
            text: "农 历 值 六 六 三 空 六十甲",
          },
          typeList146: {
            text: "五 行 日 冲 合 合 亡 子空亡",
          },
          typeList147: {
            text: "甲子日 鼠 马 牛 龙猴 狗猪 马猪",
          },
          typeList148: {
            text: "甲辰日 龙 狗 鸡 鼠猴 虎兔 虎狗",
          },
          typeList149: {
            text: "甲寅日 虎 猴 猪 马狗 鼠牛 鼠猴",
          },
          typeList150: {
            text: "甲午日 马 鼠 羊 虎狗 龙蛇 鼠龙",
          },
          typeList151: {
            text: "甲戌日 狗 龙 兔 虎马 猴鸡 龙马",
          },
          typeList152: {
            text: "甲申日 猴 虎 蛇 鼠龙 马羊 虎羊",
          },
          typeList153: {
            text: "  ",
          },
          typeList154: {
            text: "乙未日 羊 牛 马 兔猪 龙蛇 牛龙",
          },
          typeList155: {
            text: "乙丑日 牛 羊 鼠 蛇鸡 狗猪 羊蛇",
          },
          typeList156: {
            text: "乙亥日 猪 蛇 虎 兔羊 猴鸡 蛇鸡",
          },
          typeList157: {
            text: "乙巳日 蛇 猪 猴 牛鸡 虎兔 虎猪",
          },
          typeList158: {
            text: "乙酉日 鸡 兔 龙 牛蛇 马羊 兔羊",
          },
          typeList159: {
            text: "乙卯日 兔 鸡 狗 羊猪 鼠牛 蛇鸡",
          },
          typeList160: {
            text: "  ",
          },
          typeList161: {
            text: "丙子日 鼠 马 牛 龙猴 猴鸡 马鸡",
          },
          typeList162: {
            text: "丙午日 马 鼠 羊 虎狗 虎兔 鼠虎",
          },
          typeList163: {
            text: "丙辰日 龙 狗 鸡 鼠猴 鼠牛 鼠狗",
          },
          typeList164: {
            text: "丙寅日 虎 猴 猪 马狗 狗猪 猴猪",
          },
          typeList165: {
            text: "丙戌日 狗 龙 兔 虎马 马羊 马羊",
          },
          typeList166: {
            text: "丙申日 猴 虎 蛇 鼠龙 龙蛇 虎龙",
          },
          typeList167: {
            text: "  ",
          },
          typeList168: {
            text: "丁酉日 鸡 兔 龙 牛蛇 龙蛇 兔龙",
          },
          typeList169: {
            text: "丁未日 羊 牛 马 兔猪 虎兔 牛虎",
          },
          typeList170: {
            text: "丁丑日 牛 羊 鼠 蛇鸡 猴鸡 羊鸡",
          },
          typeList171: {
            text: "丁巳日 蛇 猪 猴 牛鸡 鼠牛 鸡猪",
          },
          typeList172: {
            text: "丁亥日 猪 蛇 虎 兔羊 马羊 蛇羊",
          },
          typeList173: {
            text: "丁卯日 兔 鸡 狗 羊猪 狗猪 鸡猪",
          },
          typeList174: {
            text: "  ",
          },
          typeList175: {
            text: "农 历 值 六 六 三 空 六十甲",
          },
          typeList176: {
            text: "五 行 日 冲 合 合 亡 子空亡",
          },
          typeList177: {
            text: "戊子日 鼠 马 牛 龙猴 马羊 马羊",
          },
          typeList178: {
            text: "戊辰日 龙 狗 鸡 鼠猴 狗猪 狗猪",
          },
          typeList179: {
            text: "戊戌日 狗 龙 兔 虎马 龙蛇 龙蛇",
          },
          typeList180: {
            text: "戊寅日 虎 猴 猪 马狗 猴鸡 猴鸡",
          },
          typeList181: {
            text: "戊申日 猴 虎 蛇 鼠龙 虎兔 虎兔",
          },
          typeList182: {
            text: "己卯日 兔 鸡 狗 羊猪 猴鸡 猴鸡",
          },
          typeList183: {
            text: "己亥日 猪 蛇 虎 兔羊 龙蛇 蛇猪",
          },
          typeList184: {
            text: "己巳日 蛇 猪 猴 牛鸡 狗猪 狗猪",
          },
          typeList185: {
            text: "己丑日 牛 羊 鼠 蛇鸡 马羊 马羊",
          },
          typeList186: {
            text: "己未日 羊 牛 马 兔猪 鼠牛 鼠牛",
          },
          typeList187: {
            text: "己酉日 鸡 兔 龙 牛蛇 马羊 虎兔",
          },
          typeList188: {
            text: "  ",
          },
          typeList189: {
            text: "庚戌日 狗 龙 兔 虎马 虎兔 虎龙",
          },
          typeList190: {
            text: "庚子日 鼠 马 牛 龙猴 龙蛇 龙马",
          },
          typeList191: {
            text: "庚申日 猴 虎 蛇 鼠龙 鼠牛 鼠虎",
          },
          typeList192: {
            text: "庚寅日 虎 猴 猪 马狗 马羊 羊猴",
          },
          typeList193: {
            text: "庚辰日 龙 狗 鸡 鼠猴 猴鸡 鸡狗",
          },
          typeList194: {
            text: "庚午日 马 鼠 羊 虎狗 狗猪 鼠猪",
          },
          typeList195: {
            text: "  ",
          },
          typeList196: {
            text: "辛未日 羊 牛 马 兔猪 狗猪 牛猪",
          },
          typeList197: {
            text: "辛巳日 蛇 猪 猴 牛鸡 猴鸡 鸡猪",
          },
          typeList198: {
            text: "辛亥日 猪 蛇 虎 兔羊 虎兔 兔蛇",
          },
          typeList199: {
            text: "辛酉日 鸡 兔 龙 牛蛇 鼠牛 鼠兔",
          },
          typeList200: {
            text: "辛卯日 兔 鸡 狗 羊猪 马羊 羊鸡",
          },
          typeList201: {
            text: "辛丑日 牛 羊 鼠 蛇鸡 龙蛇 龙羊",
          },
          typeList202: {
            text: "  ",
          },
          typeList203: {
            text: "农 历 值 六 六 三 空 六十甲",
          },
          typeList204: {
            text: "五 行 日 冲 合 合 亡 子空亡",
          },
          typeList205: {
            text: "壬寅日 虎 猴 猪 马狗 龙蛇 龙猴",
          },
          typeList206: {
            text: "壬申日 猴 虎 蛇 鼠龙 狗猪 虎猪",
          },
          typeList207: {
            text: "壬午日 马 鼠 羊 虎狗 猴鸡 鼠鸡",
          },
          typeList208: {
            text: "壬辰日 龙 狗 鸡 鼠猴 马羊 羊狗",
          },
          typeList209: {
            text: "壬戌日 狗 龙 兔 虎马 鼠牛 鼠龙",
          },
          typeList210: {
            text: "壬子日 鼠 马 牛 龙猴 虎兔 虎马",
          },
          typeList211: {
            text: "  ",
          },
          typeList212: {
            text: "癸未日 羊 牛 马 兔猪 猴鸡 牛鸡",
          },
          typeList213: {
            text: "癸丑日 牛 羊 鼠 蛇鸡 虎兔 虎羊",
          },
          typeList214: {
            text: "癸酉日 鸡 兔 龙 牛蛇 狗猪 兔猪",
          },
          typeList215: {
            text: "癸卯日 兔 鸡 狗 羊猪 龙蛇 龙鸡",
          },
          typeList216: {
            text: "癸亥日 猪 蛇 虎 兔羊 鼠牛 鼠蛇",
          },
          typeList217: {
            text: "癸巳日 蛇 猪 猴 牛鸡 马羊 羊猪",
          },
          typeList218: {
            text: "***************************************",
          },
          typeList219: {
            text: "民间十二生肖别号",
          },
          typeList220: {
            text: "鼠 牛 虎 兔 龙 蛇",
          },
          typeList221: {
            text: "李 田 雷 柳 袁 记",
          },
          typeList222: {
            text: "小心七 铃星 大王五齿肖 风.八齿兔 虹 才人",
          },
          typeList223: {
            text: "玩兢 农夫 恶霸 嫦娥 国君 商人",
          },
          typeList224: {
            text: "杜君者 书生者 护使者 丈人者 雨师者 寡人者",
          },
          typeList225: {
            text: "燕蝠 蟹螯 猪骡 猥骡 鲛鱼 蟮吲",
          },
          typeList226: {
            text: "石榴石 紫水晶 血 石 金刚石 珍珠石 红宝石",
          },
          typeList227: {
            text: "宝瓶 麻蝎 人马 天 蝎 天社祸 双女",
          },
          typeList228: {
            text: "狮 象性 骆驼 猫 鸭 鹅",
          },
          typeList229: {
            text: "耳 脆肚 手 脂 肩胸 面咽",
          },
          typeList230: {
            text: "膀胱三焦 脾 胆 肝 胃 心",
          },
          typeList231: {
            text: "无 无齿 无脾 无唇 无耳 无足",
          },
          typeList232: {
            text: "呈祥 雪人 武士 江鲤 光词 美人",
          },
          typeList233: {
            text: "银宝 莲花 铁树 金幅",
          },
          typeList234: {
            text: "兵将 柳岸 山谷 月宝 龙门 驿站",
          },
          typeList235: {
            text: "鼠合猴 牛合鸡 虎合马 兔合羊 龙合猪 蛇合狗",
          },
          typeList236: {
            text: "齐青州 吴扬州 燕幽州 宋豫州 郑允州 楚荆州",
          },
          typeList237: {
            text: "大寒立春.小雪冬至.大血小雪. 霜降立冬. 秋分寒露. 处暑白露",
          },
          typeList238: {
            text: "神俊玄木号.大吉星纪.功曹折木.太邪大火. 天魁寿星. 大乙鹑头",
          },
          typeList239: {
            text: "马 羊 猴 鸡 狗 猪",
          },
          typeList240: {
            text: "许 朱 杜 曲 成 阮",
          },
          typeList241: {
            text: "将军 状师 笛子 小姐 更夫 县令",
          },
          typeList242: {
            text: "三公者 主人者 人君者 将军者 人姓者 神君者",
          },
          typeList243: {
            text: "鹿獐 膺雁 猫猿 雉鸟 狼豺 啄焦",
          },
          typeList244: {
            text: "红宝石 橄榄石 蓝宝石 黄宝石 黄 玉 蓝宝石",
          },
          typeList245: {
            text: "狮子 巨蟹 阳阳 金牛 白羊 双鱼",
          },
          typeList246: {
            text: "膺 燕 了哥 鱼 虾子 田螺",
          },
          typeList247: {
            text: "眼 脊梁 经络 精血 命门腿足 头",
          },
          typeList248: {
            text: "小肠 脾 大肠 肺 胃 肾心包",
          },
          typeList249: {
            text: "无胆 无神 无殿 无肾 无肠 无筋",
          },
          typeList250: {
            text: "牛童 彩碟 桃花 歌女 雪翠 青松",
          },
          typeList251: {
            text: "笛声 石榴 双燕 赤龙 如意 天门",
          },
          typeList252: {
            text: "老二 将相 老大 钟 管家 老三",
          },
          typeList253: {
            text: "马合虎 羊合兔 猴合鼠 鸡合牛 狗合蛇 猪合龙",
          },
          typeList254: {
            text: "周三河 秦雍州 梁晋益州 韩赵翼州 鲁徐州 卫魏",
          },
          typeList255: {
            text: "立秋大暑.小署夏至. 芒种小满. 立夏谷雨. 清明惊蛰. 春分雨水",
          },
          typeList256: {
            text: "胜光鹑头.小吉鹑首. 得送宝沈. 从魁大梁. 目魁降缕. 登明",
          },
          typeList257: {
            text: "@@@@@@@@@@@@@@@@@@@@@@@@@",
          },
          typeList258: {
            text: "玄机述语：",
          },
          typeList259: {
            text: "■.合 取=加，同=加。",
          },
          typeList260: {
            text: "例：二八合取=2+8=10，二一合同一码=2+1+1=4。",
          },
          typeList261: {
            text: "■.合 数=减。例：三三合数=3-3=0。",
          },
          typeList262: {
            text: "■.合佳偶=数.零配。",
          },
          typeList263: {
            text: "例：一八两数合配偶=1.8两数配其他数（01.10.08.20）",
          },
          typeList264: {
            text: "■.帮一把=加.减十。",
          },
          typeList265: {
            text: "例：三五从今帮一把=35+10=45或35-10=25。",
          },
          typeList266: {
            text: "■.前三后四根连根=28（3门.4路=28）。",
          },
          typeList267: {
            text: "■.可大用=变通。",
          },
          typeList268: {
            text: "例：二二寻相见，可大用=22=10=变合十（10.19.28.37.46）",
          },
          typeList269: {
            text: "■.可 取=合数。例：二六可取，才可发=2+6=8（与8有关）",
          },
          typeList270: {
            text: "@@@@@@@@@@@@@@@@@@@@@@@@@",
          },
          typeList271: {
            text: "＠土而奇＠ 经 典 出 肖 表",
          },
          typeList272: {
            text: "上期开01岁：02岁肖; 04岁肖; 05岁肖;",
          },
          typeList273: {
            text: "07岁肖; 09岁肖; 11岁肖; 12岁肖。",
          },
          typeList274: {
            text: "上期开02岁：01岁肖，03岁肖; 05岁肖;",
          },
          typeList275: {
            text: "06岁肖; 08岁肖; 10岁肖; 12岁肖。",
          },
          typeList276: {
            text: "上期开03岁：01岁肖; 02岁肖，04岁肖;",
          },
          typeList277: {
            text: "06岁肖; 07岁肖; 09岁肖; 11岁肖。",
          },
          typeList278: {
            text: "上期开04岁：02岁肖; 03岁肖，05岁肖;",
          },
          typeList279: {
            text: "07岁肖; 08岁肖; 10岁肖; 12岁肖。",
          },
          typeList280: {
            text: "上期开05岁：01岁肖; 03岁肖; 04岁肖，",
          },
          typeList281: {
            text: "06岁肖; 08岁肖; 09岁肖;11岁肖。",
          },
          typeList282: {
            text: "上期开06岁：02岁肖; 04岁肖; 05岁肖，",
          },
          typeList283: {
            text: "07岁肖; 09岁肖; 10岁肖; 12岁肖。",
          },
          typeList284: {
            text: "上期开07岁：01岁肖; 03岁肖; 05岁肖;",
          },
          typeList285: {
            text: "06岁肖，08岁肖; 10岁肖; 11岁肖。",
          },
          typeList286: {
            text: "上期开08岁：02岁肖; 04岁肖; 06岁肖;",
          },
          typeList287: {
            text: "07岁肖，09岁肖; 11岁肖; 12岁肖。",
          },
          typeList288: {
            text: "上期开09岁：01岁肖; 03岁肖; 05岁肖;",
          },
          typeList289: {
            text: "07岁肖; 08岁肖，10岁肖; 12岁肖。",
          },
          typeList290: {
            text: "上期开10岁：01岁肖; 02岁肖; 04岁肖;",
          },
          typeList291: {
            text: "06岁肖; 08岁肖; 09岁肖，11岁肖。",
          },
          typeList292: {
            text: "上期开11岁：02岁肖; 03岁肖; 05岁肖;",
          },
          typeList293: {
            text: "07岁肖; 09岁肖; 10岁肖，12岁肖。",
          },
          typeList294: {
            text: "上期开12岁：01岁肖; 03岁肖; 04岁肖;",
          },
          typeList295: {
            text: "06岁肖; 08岁肖; 10岁肖; 11岁肖。",
          },
          typeList296: {
            text: "***************************************",
          },
          typeList297: {
            text: "2021年【小小大中】开奖日杀码",
          },
          typeList298: {
            text: "鼠日杀：18 19 39 42 43； 牛日杀：07 18 33 37 49；",
          },
          typeList299: {
            text: "虎日杀：05 11 33 35 43； 兔日杀：06 13 20 44 49；",
          },
          typeList300: {
            text: "龙日杀：13 19 34 35 49； 蛇日杀：13 24 34 35 45；",
          },
          typeList301: {
            text: "马日杀：10 21 22 43 45； 羊日杀：04 10 20 34 42；",
          },
          typeList302: {
            text: "猴日杀：06 16 28 40 49； 鸡日杀：03 27 36 39 43；",
          },
          typeList303: {
            text: "狗日杀：05 11 33 34 35； 猪日杀：10 13 29 40 47.",
          },
          typeList304: {
            text: "***************************************",
          },
          typeList305: {
            text: "2021年【金钱女孩】六十甲子日杀码杀肖：",
          },
          typeList306: {
            text: "甲子杀码：21 19 18 16 13 12；杀肖：蛇",
          },
          typeList307: {
            text: "丙子杀码：49 48；杀肖：马",
          },
          typeList308: {
            text: "戊子杀码：33 31 30 28 25 24；杀肖：虎",
          },
          typeList309: {
            text: "庚子杀码：09 07 06 04；杀肖：龙",
          },
          typeList310: {
            text: "壬子杀码：45 43 42 40 37 36；杀肖：狗",
          },
          typeList311: {
            text: "甲寅杀码：21 20 17 15 14 12；杀肖：牛",
          },
          typeList312: {
            text: "丙寅杀码：02 01 48；杀肖：狗",
          },
          typeList313: {
            text: "狗日杀：05 11 33 34 35； 猪日杀：10 13 29 40 47.",
          },
          typeList314: {
            text: "戊寅杀码：33 32 29 27 26 24；杀肖：鼠",
          },
          typeList315: {
            text: "庚寅杀码：09 08 05 03；杀肖：虎鼠",
          },
          typeList316: {
            text: "壬寅杀码：45 44 41 39 38 36；杀肖：鸡",
          },
          typeList317: {
            text: "甲辰杀码：23 22 20 17 16 13；杀肖：鼠",
          },
          typeList318: {
            text: "丙辰杀码：01 48；杀肖：牛猪",
          },
          typeList319: {
            text: "戊辰杀码：35 34 32 29 28 25；杀肖：猴",
          },
          typeList320: {
            text: "庚辰杀码：11 10 08 05 04 03；杀肖：蛇",
          },
          typeList321: {
            text: "壬辰杀码：47 46 44 41 40 37；杀肖：马",
          },
          typeList322: {
            text: "甲午杀码：21 19 18 16 13 12；杀肖：蛇兔",
          },
          typeList323: {
            text: "丙午杀码：01 19 48；杀肖：鼠狗",
          },
          typeList324: {
            text: "戊午杀码：33 31 30 28 15 24；杀肖：猪兔",
          },
          typeList325: {
            text: "庚午杀码：09 07 06 04；杀肖：猪",
          },
          typeList326: {
            text: "壬午杀码：45 43 42 40 37 36；杀肖：猴",
          },
          typeList327: {
            text: "甲申杀码：21 20 17 15 14 12；杀肖：马",
          },
          typeList328: {
            text: "丙申杀码：02 01 48；杀肖：兔",
          },
          typeList329: {
            text: "戊申杀码：33 32 29 27 26 24；杀肖：兔",
          },
          typeList330: {
            text: "庚申杀码：09 08 03；杀肖：龙虎",
          },
          typeList331: {
            text: "壬申杀码：45 44 41 39 38 36；杀肖：猪",
          },
          typeList332: {
            text: "甲戌杀码：23 22 20 17 13；杀肖：虎",
          },
          typeList333: {
            text: "丙戌杀码：49；杀肖：鸡",
          },
          typeList334: {
            text: "戊戌杀码：35 34 32 29 28 24；杀肖：马",
          },
          typeList335: {
            text: "庚戌杀码：11 10 08 05 04；杀肖：兔",
          },
          typeList336: {
            text: "壬戌杀码：47 46 44 41 40 37；杀肖：虎",
          },
          typeList337: {
            text: "乙丑杀码：11 10 08 05 04；杀肖：龙",
          },
          typeList338: {
            text: "丁丑杀码：47 46 44 41 40 37；杀肖：牛",
          },
          typeList339: {
            text: "己丑杀码：23 22 19 17 16 14 12；杀肖：牛",
          },
          typeList340: {
            text: "辛丑杀码：01；杀肖：狗",
          },
          typeList341: {
            text: "癸丑杀码：35 34 31 29 28 26；杀肖：兔",
          },
          typeList342: {
            text: "乙卯杀码：10 07 06 04 03；杀肖：马",
          },
          typeList343: {
            text: "丁卯杀码：46 43 42 29 37 36；杀肖：鸡",
          },
          typeList344: {
            text: "己卯杀码：22 19 18 15 13 12；杀肖：龙",
          },
          typeList345: {
            text: "辛卯杀码：02 49 48；杀肖：牛猪",
          },
          typeList346: {
            text: "癸卯杀码：34 31 30 29 27 25 24；杀肖：猴",
          },
          typeList347: {
            text: "乙巳杀码：11 09 08 06 04 03；杀肖：猪",
          },
          typeList348: {
            text: "丁巳杀码：47 45 44 42 39 38；杀肖：鼠",
          },
          typeList349: {
            text: "己巳杀码：23 21 20 18 15 14；杀肖：羊",
          },
          typeList350: {
            text: "辛巳杀码：02 01 48；杀肖：鸡",
          },
          typeList351: {
            text: "癸巳杀码：35 33 32 30 27 26；杀肖：猪",
          },
          typeList352: {
            text: "乙未杀码：11 10 07 05 04；杀肖：龙",
          },
          typeList353: {
            text: "丁未杀码：47 46 43 41 40 38；杀肖：猪鸡",
          },
          typeList354: {
            text: "己未杀码：23 22 19 17 16 14；杀肖：蛇兔",
          },
          typeList355: {
            text: "辛未杀码：01；杀肖：狗",
          },
          typeList356: {
            text: "癸未杀码：35；杀肖：羊",
          },
          typeList357: {
            text: "乙酉杀码：10 07 06 03；杀肖：蛇",
          },
          typeList358: {
            text: "丁酉杀码：46 43 42 39 37 36；杀肖：羊",
          },
          typeList359: {
            text: "己酉杀码：22 19 18 15 13 12；杀肖：虎",
          },
          typeList360: {
            text: "辛酉杀码：02 49 48；杀肖：兔",
          },
          typeList361: {
            text: "癸酉杀码：34 31 30 27 25 24；杀肖：鸡",
          },
          typeList362: {
            text: "乙亥杀码：11 09 08 06 04；杀肖：兔牛",
          },
          typeList363: {
            text: "丁亥杀码：47 45 44 42 39 38；杀肖：狗",
          },
          typeList364: {
            text: "己亥杀码：23 21 20 18 15 14；杀肖：蛇",
          },
          typeList365: {
            text: "辛亥杀码：02 49；杀肖：猴",
          },
          typeList366: {
            text: "癸亥杀码：35 33 32 30 27 26；杀肖：马",
          },
          typeList367: {
            text: "***********************************",
          },
          typeList368: {
            text: "[●十二生肖的来历●]",
          },
          typeList369: {
            text: "十二生肖源于何时，今已难于细考。长期以来，不少人将《论衡》视为最早记载十二生肖的文献。《论衡》是东汉唯物主义思想家王充的名著。《论衡·物势》载：“寅，木也，其禽，虎也。戌，土也，其禽，犬也。……午，马也。子，鼠刀。酉，鸡也。卯，兔也。……亥，豕也。未，羊也。丑，牛也。……巳，蛇也。申，猴也。”以上引文，只有十一种生肖，所缺者为龙。该书《言毒篇》又说：“辰为龙，巳为蛇，辰、巳之位在东南。这样，十二生肖便齐全了，十二地支与十二生肖的配属如此完整，且与现今相同。 　　生肖为何取数十二: 　　《周礼·春官·冯相氏》载：“掌十有二岁，十有二月，十有二辰，十日，二十八星之位，辨其叙事，以会天位。”时间的分割以十二累进，一纪十二年，一年十二个月，一日十二时辰。《国语·晋语四》载：“黄帝之子二十五宗，其得姓者十四人，为十二姓。”甚至天子妻妾也有“十二女”之说，《后汉书·荀爽传》：“故天子娶十二妇，天之数也；诸侯以下各有等差，事之降也。” 　　近年,在神农架地区发现了汉族创世史诗《黑暗传》。其中有一个讲述干支来历的故事：“开天辟地之初，玄黄骑着混沌兽遨游，遇到女娲。女娲身边有两个肉包，大肉包里有十个男子，小肉包里有十二个女子。玄黄说：‘这是天干革命地支神，来治理乾坤的。’于是，为他们分别取名，配夫妻，成阴阳。男的统称天干，女的则为地支。”这一创世神话故事，讲干支，讲玄黄神、女娲神，讲乾坤阴阳，将干支的“身世”推溯得十分久远。 　　天乾地刊，古代历来以天为主、地为从。十天干又叫十母，对应的十二地支则别称十二子。汉代蔡邕《月令章句》：“大桡采五行之情，占斗纲所建，于是始作甲乙以名日，谓之干；作子丑以名月，谓之支。干支相配，以成六旬。”大桡是黄帝时代的大臣，这里的配成六旬，即六十甲子，取了天干十和地支十二的最小公倍数。干与支按顺序相配合，由甲子乙丑……一直排至癸亥为第六十对，正好干、支均用最末一位，再排便是重由甲子开始，这一循环称为一个甲子。其中，每个天干出现六次，每个地支出现五次。 　　十二生肖的产生，有着天文学的背景。在原始时代，先民们体验着寒暑交替的循环往复。宋代洪皓《松漠纪闻》载：“女真旧绝小，正朔所不及，其民皆不知纪年，问则曰‘我见青草几度矣’，盖以草一青为一岁也。”宋代孟珙《蒙鞑备录》也记：“其俗每草青为一岁，有人问其岁，则曰几草矣。”年又有观天者发现月亮盈亏周期可以用来丈量岁的长短，发现十二次月圆为一岁，这一发现，是初期历法最精度的成果之一，“十二”便视为传达天意的“天之大数”。天干需地支为伴，日月相对，天地相对，就非“十二”莫属了。 子鼠丑牛……戌狗亥猪。天下动物很多，古人为何选择了这十二种动物为属相？ 　　清代刘献《广阳杂记》引李长卿《松霞馆赘言》：“子何以属鼠也？曰：天开于子，不耗则其气不开。鼠，耗虫也。于是夜尚未央，正鼠得令之候，故子属鼠。地辟于丑，而牛则开地之物也，故丑属牛。人生于寅，有生则有杀。杀人者，虎也，又寅者，畏也。可畏莫若虎，故寅属虎。犯者，日出之候。日本离体，而中含太阴玉兔之精，故犯属兔。辰者，三月之卦，正群龙行雨之时，故辰属龙。巳者，四月之卦，于时草茂，而蛇得其所。又，巳时蛇不上道，故属蛇。午者，阳极而一阴甫生。马者，至健而不离地，阴类也，故午属马。羊啮未时之草而茁，故未属羊。申时，日落而猿啼，且伸臂也，譬之气数，将乱则狂作横行，故申属猴。本者，月出之时，月本坎体，而中含水量太阳金鸡之精，故本属鸡。于核中，猪则饮食之外无一所知，故亥属猪。” 　　另一种说法，十二生肖的选用与排列，是根据动物每天的活动时间确定的。我国至迟从汉代开始，便采用十二地支记录本一天的十二个时辰，每个时辰相当于两面三刀个小时，夜晚十一时到凌晨一时是子时，此时老鼠最为活跃。凌晨一时到三时，是丑时，牛正在反刍。三时到五时，是寅时，此时老虎到处游荡觅食，最为凶猛。五时到七时，为犯时，这时太阳尚未升起，月亮还挂在天上，此时玉兔捣药正忙。上午七时到九时，为辰时，这正是神龙行雨的好时光。九时到十一时，为巳时，蛇开始活跃起来。上午十一时到下午一时，阳气正盛，为午时，正是天马行空的时候。下午一时到三时，是未时，羊在这时吃草，会长得更壮。下午三时到五时，为申时，这时猴子活跃起来。五时到七时，为酉时，夜幕降临，鸡开始归窝。晚上七时到九时，为戌时，狗开始守夜。晚上九时到十一时，为亥时，此时万籁俱寂，猪正在鼾睡。 　　关于十二生肖的排列，还有各种传说，这类故事，或似开心解闷的笑谈，或似贬恶扬善的寓言，文学成分较浓。但是，生肖座次的排定，决非一朝一夕，也不是一代人所能完成的。最初未必就是一次提名十二种，也许只有四五个，也许曾有过超额的局面，后来优胜劣汰，定额定员并定位了，一直传至今日。",
          },
          typeList370: {
            text: "各大名著目录[红楼梦]",
          },
          typeList371: {
            text: "***********************************",
          },
        },
      },
    };
  },
  computed: {
    getStatusColor() {
      return (index) => {
        let list = [
          "red",
          "red",
          "#06f",
          "#06f",
          "#090",
          "#090",
          "red",
          "red",
          "#06f",
          "#06f",
          "#090",
          "red",
          "red",
          "#06f",
          "#06f",
          "#090",
          "#090",
          "red",
          "red",
          "#06f",
          "#090",
          "#090",
          "red",
          "red",
          "#06f",
          "#06f",
          "#090",
          "#090",
          "red",
          "red",
          "#06f",
          "#090",
          "#090",
          "red",
          "red",
          "#06f",
          "#06f",
          "#090",
          "#090",
          "red",
          "#06f",
          "#06f",
          "#090",
          "#090",
          "red",
          "red",
          "#06f",
          "#06f",
          "#090",
        ];
        return list[Number(index) - 1];
      };
    },
    getStatusImg() {
      return (item) => {
        if (item == "lo") {
          return require("@/assets/img/long.png");
        } else {
          return require("@/assets/img/" + item + ".png");
        }
      };
    },
  },
  created() {
    this.zodiacAttr();
  },
  methods: {
    async zodiacAttr() {
      const res = await zodiacAttr();
      if (res.code === 1) {
        this.sxListData = res.data.sxhm.list;
        this.wxList = res.data.wx.list;
        this.colorList = res.data.bs.list;
        this.hsList = res.data.hsds.list;
        this.sxTypeData = res.data.sxsx.list;
      } else {
        this.$toast(res.msg);
      }
    },
    returnTop() {
      this.$nextTick(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    },
    routerLink(link) {
      this.$router.push(link);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  .btnWrap {
    position: fixed;
    right: 20px;
    bottom: 40px;
    .btn {
      width: 80px;
      height: 80px;
      img {
        height: 100%;
      }
      margin-bottom: 10px;
    }
  }
  .sxTypeList {
    margin: 0 25px;
    font-size: 32px;
    .sxTypeContent:last-child {
      border: none;
    }
    .sxTypeContent {
      width: 100%;
      border-bottom: 1px dashed black;
      display: flex;
      flex-direction: column;
      justify-content: left;
      padding: 20px 0;

      .listText {
        font-size: 28px;
        text-align: left;
        margin: 10px 0;
      }
      .list {
        display: flex;
        margin: 10px 0;
        .title {
          color: #900;
          font-weight: 700;
          margin-right: 10px;
        }
        .text {
          color: rgb(0, 128, 0);
        }
      }
    }
  }
  .boxTitle {
    width: 140px;
    text-align: center;
    color: #f90;
    font-size: 30px;
    margin: 10px 0 0 25px;
    padding-bottom: 10px;
    border-bottom: 5px solid #f90;
    display: inline-block;
  }
  .navBar {
    background: linear-gradient(#1aae3d, #177900);
    /deep/ .van-icon {
      color: white;
    }
    /deep/ .van-ellipsis {
      color: #fff;
    }
  }
  .wxWrap {
    margin-left: 25px;
    font-size: 30px;
    text-align: left;
    .wxContent:nth-child(1) .wxTitle {
      color: rgb(255, 204, 0);
    }
    .wxContent:nth-child(2) .wxTitle {
      color: rgb(51, 204, 51);
    }
    .wxContent:nth-child(3) .wxTitle {
      color: rgb(51, 153, 255);
    }
    .wxContent:nth-child(4) .wxTitle {
      color: rgb(255, 102, 0);
    }
    .wxContent:nth-child(5) .wxTitle {
      color: rgb(204, 153, 0);
    }
    .wxContent {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: left;
      .wxTitle {
        margin: 15px 0;
      }
      .wxNub {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        .nub {
          margin-bottom: 10px;
          border-radius: 5px;
          color: #fff;
          text-align: center;
          line-height: 45px;
          width: 45px;
          height: 45px;
          margin-right: 18px;
        }
      }
    }
  }
  .sxListWrap {
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 0 25px;
    font-size: 30px;
    color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .sxList {
      margin-bottom: 20px;
      width: 42%;
      height: 200px;
      border: 1px solid #824e00;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      padding: 15px;
      align-items: left;
      box-shadow: 2px 2px 2px #824e00;
      .top {
        height: 130px;
        display: flex;
        margin-bottom: 15px;
        align-items: baseline;
        color: #824e00;
        .name {
          margin-right: 15px;
        }
        img {
          width: 90px;
          height: 130px;
        }
      }
      .btm {
        display: flex;
        justify-content: left;
        .num {
          border-radius: 5px;
          color: #fff;
          text-align: center;
          line-height: 45px;
          width: 45px;
          height: 45px;
          margin-right: 18px;
          background: red;
        }
      }
    }
  }
}
</style>