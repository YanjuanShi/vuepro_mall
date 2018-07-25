<template>
  <div class="pro_container_styleb">
    <div class="contain_styleb" v-for = "item of prolist">
      <router-link to="/prodec">
        <div class="relative_pos">
          <div>
            <img :src="item.src" alt="" />
          </div>
          <div>{{item.name}}</div>
          <div>{{item.dec}}</div>
          <div>浏览{{item.shareTime}}次</div>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    import share from './share'
    export default {
        name: "prolist",
        components:{
          share
        },
        methods:{
          fooshare(){
            this.shareTime++;
          }
        },
        data:function () {
          return{
            shareTime:1,
            prolist:[
              {
                id:1,
                src:'../../static/images/pro_tm_a.jpg',
                name:'OSTER®奥士达Versa调理器',
                dec:'深度搅拌',
                shareTime:'4'
              },
              {
                id:2,
                src:'../../static/images/pro_tm_b.jpg',
                name:'OSTER®奥士达MyBlend®随身搅拌器',
                dec:'深度搅拌',
                shareTime:'3'
              },
              {
                id:3,
                src:'../../static/images/pro_tm_c.jpg',
                name:'OSTER®奥士达全金属经典搅拌器',
                dec:'完美碎冰',
                shareTime:'21'
              },
              {
                id:4,
                src:'../../static/images/pro_tm_d.jpg',
                name:'OSTER®奥士达铁人搅拌器',
                dec:'炫酷运动',
                shareTime:'43'
              },
              {
                id:5,
                src:'../../static/images/pro_tm_e.jpg',
                name:'OSTER®奥士达Ball®梅森杯搅拌器',
                dec:'迷你时尚',
                shareTime:'24'
              },
              {
                id:6,
                src:'../../static/images/pro_tm_f.jpg',
                name:'OSTER®奥士达随身搅拌器',
                dec:'颜值担当',
                shareTime:'42'
              }
            ]
          }
        }
    }
</script>

<style scoped>
  /*产品样式*/
  .relative_pos img{height: 285px;margin-bottom: 10px}
  .pro_container_styleb{width: 1200px;margin: 20px auto; display: flex; flex-wrap: wrap; justify-content: flex-start}
  .pro_container_styleb .contain_styleb{width: 24%; margin: .5rem 0.5%;flex-shrink:0; text-align: center; font-size: .7rem; line-height: 1.8rem; padding: 0rem 0px .4rem; background: #f6f6f6; color: #222; position: relative; border: 1px solid #efefef; box-sizing: border-box;}
  .pro_container_styleb .contain_styleb img{width: 100%;}
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
  .relative_pos{position: relative;}
  .contain_styleb a,.linea_right a{color: #222;}
  .contain_styleb a:hover .relative_pos + .fclistStyle{display: block; cursor: pointer; position: absolute; width: 100%; height: 100%; left: 0px; top:0px;}
  .linea_right a:hover .fclistStyle { display: block;}
</style>
