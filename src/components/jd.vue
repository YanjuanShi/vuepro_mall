<template>
  <div>
    <HeaderLogo></HeaderLogo>
    <HelloWorld></HelloWorld>
    <div class="ejnanv">{{title}}</div>
    <Prolist></Prolist>
    <Footernav></Footernav>
  </div>
</template>

<script>
  import HelloWorld from './navbar'
  import HeaderLogo from './header'
  import Prolist from './prolist'
  import Footernav from './footernav'

  export default {
    name: "jd",
    components:{
      HelloWorld,
      HeaderLogo,
      Prolist,
      Footernav
    },
    data:function () {
      return{
        title:'京东物流'
      }
    }
  }
</script>

<style scoped>
  .ejnanv{width: 1190px;margin: 10px auto 0px;font-size: 16px;line-height: 20px;text-align: left;border-bottom: 1px solid #eaeaea;padding: 0px 0px 10px 15px}
</style>
