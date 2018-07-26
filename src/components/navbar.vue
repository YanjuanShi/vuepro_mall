<template>
  <div class="hello">
    <ul class="navlist">
      <li :class = "{active:navactive == 0}"> <router-link to="/">我的商城</router-link> </li>
      <li :class = "{active:navactive == 1}"> <router-link to="/tianmao">天猫超市</router-link> </li>
      <li :class = "{active:navactive == 2}"> <router-link to="/jd">京东物流</router-link> </li>
      <li :class = "{active:navactive == 3}"> <router-link to="/yamaxun">亚马逊</router-link> </li>
      <div class="clear"></div>
    </ul>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props:['navactive'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
.clear{clear: both}
.hello{width: 100%;margin: 0 auto;background: #FF0036;height: 40px;line-height: 40px;}
.navlist{width: 1200px;margin: 0 auto;background: #FF0036;height: 40px;line-height: 40px;text-decoration: none;color: #fff}
.navlist li{float: left;color: #fff;padding: 0px 15px;margin: 0px 0px}
.navlist li a{color: #fff;display: block}
.navlist li:hover,.navlist li.active{background: #fff;border-bottom: 2px solid #FF0036}
.navlist li:hover a,.navlist li.active a{color: #FF0036}
</style>
