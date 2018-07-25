<template>
    <div class="share">
      <button class="btn btn-lg" @click = "share">添加到我的收藏</button>
    </div>
</template>

<script>
    export default {
        name: "share",
        methods:{
          share(){
            this.$emit('shared')
          }
        }
    }
</script>

<style scoped>

</style>
