<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
body , html{
  height: 100%;
}
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
.titleh1{
  color: #555;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  margin-top: 100px;
}
.width900{
  width: 900px;
  margin: 0 auto;
}
</style>
