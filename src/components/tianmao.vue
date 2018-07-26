<template>
  <div>
    <HeaderLogo></HeaderLogo>
    <navbar :navactive = "itemNum"></navbar>
    <div class="ejnanv">{{title}}</div>
    <Prolist :jsonsrc = "getjsonsrc"></Prolist>
    <Footernav></Footernav>
  </div>
</template>

<script>
    import Navbar from './navbar'
    import HeaderLogo from './header'
    import Prolist from './prolist'
    import Footernav from './footernav'

    export default {
        name: "tianmao",
        components:{
          Navbar,
          HeaderLogo,
          Prolist,
          Footernav
        },
        data:function () {
          return{
            title:'天猫超市',
            itemNum:1,
            getjsonsrc:'http://192.168.3.165:8080/json/tmlist.json'
          }
        }
    }
</script>

<style scoped>
.ejnanv{width: 1190px;margin: 10px auto 0px;font-size: 16px;line-height: 20px;text-align: left;border-bottom: 1px solid #eaeaea;padding: 0px 0px 10px 15px}
</style>
