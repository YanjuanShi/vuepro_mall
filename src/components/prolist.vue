<template>
  <div class="pro_container_styleb">
    <div class="ejnanv" :class = "{show:blocksee == 0}">{{title}}</div>
    <div class="contain_styleb" v-for = "item of prolists">
      <router-link to="/prodec">
        <div class="relative_pos">
          <div>
            <img v-lazy="item.src" alt="" />
          </div>
          <div class="oneline">{{item.name}}</div>
          <div class="oneline">{{item.dec}}</div>
          <div class="size_small">浏览{{item.shareTime}}次</div>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    import axios from 'axios';
    import share from './share'
    export default {
      name: "prolist",
      props:['jsonsrc','title','blocksee'],
      components: {
        share
      },
      data: function () {
        return {
          shareTime: 1,
          prolists: []
        }
      },
      mounted() {
        this.getAdminList()
      },
      methods: {
        fooshare() {
          this.shareTime++;
        },
        getAdminList() {
          var vm = this;
          axios.get(vm.jsonsrc)
            .then(function (response) {
              vm.prolists = response.data;
            })
        }
      }
    }
</script>

<style scoped>
  /*产品样式*/
  .show{display: block}
  .ejnanv{display: none}
  .size_small{font-size: 12px;color: #999}
  .oneline{width: 98%;padding: 0px 1%; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
  .relative_pos img{height: 285px;margin-bottom: 10px}
  .relative_pos:hover img{opacity: 0.6}
  .pro_container_styleb{width: 1200px;margin: 20px auto; display: flex; flex-wrap: wrap; justify-content: flex-start}
  .pro_container_styleb .contain_styleb{width: 24%; margin: .5rem 0.5%;flex-shrink:0; text-align: center; font-size: .7rem; line-height: 1.8rem; padding: 0rem 0px 0rem; background: #f6f6f6; color: #222; position: relative; border: 1px solid #efefef; box-sizing: border-box;overflow: hidden}
  .pro_container_styleb .contain_styleb img{width: 100%;padding: 5%}
  .prolist_linea{width: 100%; display: flex; justify-content: space-between; margin-top: .7rem; background: #f6f6f6;}
  .linea_left{width: 66%;}
  .linea_right{width: 34%;font-size: 0px; line-height: 0px; position: relative; border: 1px solid #efefef; box-sizing: content-box;}
  .linea_left img,.linea_right img{width: 100%; }
  .row_three{display: flex; width: 100%; justify-content: space-between; align-items: center; flex-direction: column; height: 100%;}
  .topIcon{width: 3rem; height: 3rem; background: #f7f6f9; border-radius: 50%; text-align: center; display: flex; justify-content: center; align-items: center;}
  .topIcon img{width: 50%;}
  .fclistStyle{position: absolute; width: 100%; height: 100%; left: 0px; top:0px; background: #fff; font-size: .9rem; display: none;}
  .fclistStyle .proDec img{width: 80%;}
  .proDec{width: 100%; height: 100%; position: relative; display: flex; justify-content: space-between; flex-direction: column; align-items: center;}
  .border_line{border-top: 1px solid #efefef; width: 80%; height: 1px; margin: .2rem 0px;}
  .relative_pos{position: relative;background: #fff}
  .contain_styleb a,.linea_right a{color: #222;}
  .contain_styleb a:hover .relative_pos + .fclistStyle{display: block; cursor: pointer; position: absolute; width: 100%; height: 100%; left: 0px; top:0px;}
  .linea_right a:hover .fclistStyle { display: block;}
</style>
