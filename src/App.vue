<template>
  <div id="app">
    <router-view name = "header"></router-view>
    <router-view :navactive = "itemNum"></router-view>
    <router-view name = "banner"></router-view>
    <router-view name = "prolist"></router-view>
    <router-view name = "footernav"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function () {
    return{
      itemNum:0
    }
  }
}
</script>

<style>
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
