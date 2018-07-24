<template>
  <div class="container">
    <div class="header_logo">
      <div class="logo"><img src="../assets/logo.gif" alt="oster"></div>
      <div class="cream flex-statrt">
        <input type="text" class="ssinput">
        <button class="ssbtn center">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HeaderLogo"
    }
</script>

<style>
  .center{text-align: center}
  .container{width: 1200px; height: auto; margin: 0 auto;}
  .header_logo{display: flex; justify-content: space-between; height: auto; align-items: center; padding: .5rem 0px;}
  .header_logo .logo{width: 20%;}
  .header_logo .cream{width:450px;}
  .header_logo .logo img,.header_logo .cream img{width: 100%;}
  .ssinput{width: 385px;height: 32px;line-height: 32px;border: 1px solid #00B262;padding:0px 5px;}
  button.ssbtn{width: 50px;height: 32px;line-height: 32px;background: #fff;border: 1px solid #00B262;border-left: 0px;color: #00B262}
</style>
