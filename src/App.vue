<template>
  <div id="app">
    <router-view name = "header"></router-view>
    <router-view :navactive = "itemNum"></router-view>
    <router-view name = "banner"></router-view>
    <router-view name = "prolist" :jsonsrc = "getjsonsrc[0]" :title = 'titlea' :blocksee = "blockseevalue"></router-view>
    <router-view name = "prolistb" :jsonsrc = "getjsonsrc[1]" :title = 'titleb' :blocksee = "blockseevalue"></router-view>
    <router-view name = "prolistc" :jsonsrc = "getjsonsrc[2]" :title = 'titlec' :blocksee = "blockseevalue"></router-view>
    <router-view name = "footernav"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function () {
    return{
      itemNum:0,
      getjsonsrc:[
        'http://192.168.3.165:8080/json/tmlist.json',
        'http://192.168.3.165:8080/json/jdlist.json',
        'http://192.168.3.165:8080/json/ymxlist.json'
      ],
      titlea:'天猫超市',
      titleb:'京东物流',
      titlec:'亚马逊',
      blockseevalue:0
    }
  }
}
</script>

<style>
  img[lazy=loading]{}
  img[lazy=loaded]{animation:fade 1s;}
  @keyframes fade {
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
  @-webkit-keyframes fade {
    0%{opacity: 0;}
    100%{opacity: 1;}
  }
.ejnanv{width: 1190px;margin: 0px auto 10px;font-size: 20px;line-height: 24px;text-align: left;border-bottom: 1px solid #00B262;padding: 0px 0px 10px 15px;font-weight: bolder}
div,li,ol,body,html{margin: 0px;padding: 0px;font-size: 16px}
.flex-statrt{display: flex;justify-content: flex-start;align-items: flex-start;display: -webkit-flex;-webkit-justify-content: flex-start;-webkit-align-items: flex-start}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
