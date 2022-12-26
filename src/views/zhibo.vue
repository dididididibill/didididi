<template>
  <div class="box">
     <video
    id="roomVideo"
     class="video-js vjs-default-skin vjs-big-play-centered"
     x-webkit-airplay="allow"
     webkit-playsinline
     playsinline
     preload="auto"
     x5-video-player-type="h5-page"
   >
   </video> 
  </div>
</template> 

<script>
export default {
    name:'videoList',
  components: {},
  data() {
    return {
      videoSrc: "https://sta.gwccqbdccqcj.com/live/sta.m3u8", //获取视频播放资源路径
    //   videoSrc: "https://vd1-qq.xayoudi.com/live/2032-2.flv ", //获取视频播放资源路径
    };
  }, 
  methods: { 
 init() { //方法名随意取
      if (this.videoSrc) {
        this.player = this.$video(
          'roomVideo',
          {
            controls: true,
            autoplay: true,
            fluid: true, // 自适应宽高}
            poster: this.posterSrc,
            language: 'zh-CN', // 初始化时设置语言，立即生效
            preload: 'auto',
            sources: [
              {
                src: this.videoSrc,
                type: 'application/x-mpegURL'
              }
            ]
          },
          function onPlayerReady() {
            this.on('fullscreenchange', () => {
              console.log(this.isFullscreen());
              if (document.fullscreenElement) {
                console.log('进入全屏');
                // this.requestFullscreen();
              } else {
                console.log('退出全屏');
              }
            });
          }
        );
      }
    }, 

  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100vh;
  video{
      width: 100%;
      height: 450px;
  }
}
</style>
