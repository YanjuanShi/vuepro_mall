<template>
  <div id="footer">
    <div class="jt">
      <div class="topIcon">
        <img src="../assets/topIcon.png" alt=""/>
      </div>
    </div>
    <div class="footer">
      <img src="../assets/logoBottom.png" alt="" />
      <div class="wechatPic">
        <div class="wechatimg">
          <img src="../assets/wechat.jpg" alt="" />
          <div class="font_12">扫一扫，关注微信</div>
        </div>
        <div class="wechatimg">
          <img src="../assets/weibo.jpg" alt="" />
          <div class="font_12">扫一扫，关注微博</div>
        </div>
      </div>
    </div>
    <div class="border"></div>
    <div class="smallicon">
      <div class="cicleIcon">
        <img src="../assets/rg.jpg" alt="" />
      </div>
      <div class="cicleIcon">
        <img src="../assets/wx.jpg" alt="" />
      </div>
      <div class="cicleIcon">
        <img src="../assets/wb.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footernav"
    }
</script>

<style scoped>
  .font_12{font-size: 12px}
  .topIcon{width: 3rem; height: 3rem; background: #f7f6f9; border-radius: 50%; text-align: center; display: flex; justify-content: center; align-items: center;}
  .topIcon img{width: 50%;}
  #footer{width: 100%; height: auto; background: #f7f6f9; margin: 0 auto; padding: 1rem 0px; position: relative; margin-top: 2rem;}
  .footer{width: 960px; margin: 0 auto; display: flex; justify-content: space-between;align-items: center; font-size: .6rem; line-height: 1.2rem;}
  .jt{position: relative; width: 20%; display: flex; justify-content: center; left:40%; top:-2.3rem;}
  .wechatPic{display: flex; width: 24%;font-size: 12px}
  .wechatimg{width:100% ; text-align: center; margin-left: 5%;}
  .wechatimg img{width: 100%;}
  .border{border:1px solid #e5e5e5; margin: .7rem auto .7rem;}
  .smallicon{display: flex; justify-content: center;}
  .cicleIcon{width: 1.5rem; height: 1.5rem; border-radius: 50%; display: flex; justify-content: center; align-items: center; border:1px solid #e2e2e2; overflow: hidden; margin: 0px .3rem;}
  .cicleIcon img{width: 60%;}
</style>
