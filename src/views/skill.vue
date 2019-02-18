<template>
  <div class="skill-container">
    <h1 class="titleh1">前端技术</h1>
    <p class="skill-p">skill-技能小清单~</p>
    <ul></ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      skillList:[
        'express',
        'jQuery',
        'javascript',
        'css3',
        'canvas',
        'vue3',
        '小程序',
        'webpack',
        'gulp',
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.skill-container{
  .skill-p{
    color: #555;
    font-size: 14px;
    text-align: center;
    margin: 20px;
  }
}
</style>


