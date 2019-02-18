<template>
  <div class="home">
    <p class="blackline"></p>
    <header>
      <section class="tx-section">
        <div class="tx-div">
          <img src="../assets/tx.jpg" alt class="tx-img">
        </div>
        <div class="name-div">
         <p class="name-p">梁见见~</p>
         <p class="type-p">web前端工程师</p>
        </div>
      </section>
      <p class="sign-p">前端路上~填坑补坑创建路……</p>
      <ul class='nav-ul'>
        <li class="nav-li" v-for="(item , index) in navList" :key="index">
         <router-link class="a-nav" :to="item.path">
            <img :src="item.imgUrl" alt="" class="skill-img">
            <p class="nav-p">{{item.text}}</p>
         </router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      navList: [
        {
          path: "/resume",
          text: "前端经验",
          imgUrl:require("../assets/resume.png"),
        },
        {
          path: "/skill",
          text: "前端技术",
          imgUrl:require("../assets/resume3.png"),
        },
        {
          path: "/contact",
          text: "关于我",
          imgUrl:require("../assets/resume2.png"),
        },
        {
          path: "/status",
          text: "最近动态",
          imgUrl:require("../assets/resume1.png"),
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@baseColor: #555;
.wh120 {
  width: 120px;
  height: 120px;
}
@rotateDeg: rotate3d(0, 1, 0, -180deg);
@rotateOrigin: 0% 50%;
.home {
  .blackline {
    width: 100%;
    height: 3px;
    background: black;
  }
  .tx-section {
    margin-top: 95px;
    text-align: center;
    position: relative;
    &:hover{
      transition: .5s;
    }
    .tx-div {
      -webkit-transform-origin: @rotateOrigin;
      -moz-transform-origin: @rotateOrigin;
      -ms-transform-origin: @rotateOrigin;
      -o-transform-origin: @rotateOrigin;
      transform-origin: @rotateOrigin;
      position: relative;
      margin: 0 auto;
      transition: all 0.5s ease-in-out;
      border-radius: 50%;
      .wh120;
      border: 1px solid rgba(0, 0, 0, 0.3);
      .tx-img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
    tx-div::before {
      position: absolute;
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      -webkit-transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      transition: all 0.35s ease-in-out;
    }
    .tx-div:hover {
      -webkit-transform: @rotateDeg;
      -moz-transform: @rotateDeg;
      -ms-transform: @rotateDeg;
      -o-transform: @rotateDeg;
      transform: @rotateDeg;
    }
    .name-div {
      position: absolute;
      .wh120;
      left: 50%;
      top: 0px;
      margin-left: -60px;
      background: black;
      opacity: .6;
      transform: scale(.99);
      z-index: -1;
      border-radius: 50%;
      padding-top: 35px;
      color: white;
      text-align: center;
      .name-p{
        font-size: 16px;
        margin-bottom: 5px;
      }
      .type-p{
        font-size: 12px;
      }
    }
  }
  .sign-p{
    text-align: center;
    color: #999;
    margin-top: 10px;
  }
  .nav-ul{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    .nav-li{
      margin-right:60px;
      font-size: 14px;
      text-align: center;
      position: relative;
      .a-nav{
        color: #555;
        .skill-img{
          width: 12px;
          height: 12px;
        }
      }
    }
    .nav-li::after{
      position: absolute;
      bottom: 0px;
      left: 0px;
      width:100%;
      height: 1px;
      background: #222;
      content: '';
      transform:scaleX(0);
      visibility: hidden;
      transition: .2s ease-in-out;
    }
    .nav-li:hover::after{
      visibility: visible;
      transform: scaleX(1);
    }
  }
}
</style>

