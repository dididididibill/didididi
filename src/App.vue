<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .css1,.css2,.css7,.css8,.css12,.css13,.css18,.css19,.css23,.css24,.css29,.css30,.css34,.css35,.css40,.css45,.css46{
          background-image: url("./assets/img/red.png");
          background-size: 100% 100%;
        }
        .css3,.css4,.css9,.css10,.css14,.css15,.css20,.css25,.css26,.css31,.css36,.css37,.css41,.css42,.css47,.css48{
        	background-image: url("./assets/img/blue.png");
          background-size: 100% 100%;
        }
        .css5,.css6,.css11,.css16,.css17,.css21,.css22,.css27,.css28,.css32,.css33,.css38,.css39,.css43,.css44,.css49{
        	background-image: url("./assets/img/green.png");
          background-size: 100% 100%;
        }
}
</style>
