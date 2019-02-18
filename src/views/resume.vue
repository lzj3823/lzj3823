<template>
  <div class="resume-container">
    <h1 class="titleh1">前端经验</h1>
    <aside class="resume-aside width900">
      <section class="resume-section" v-for="(item ,index) in resumeList" :key="index">
        <p class="title-p">{{item.title}}</p>
        <article class="tip-article">
          <!-- <p class="tip-p">更多信息</p> -->
          <ul class="tip-ul">
            <li class="tip-li" v-for="(item3,index3) in item.tips" :key="index3">{{item3}}</li>
          </ul>
        </article>
        <aside class="circle-aside">
          <div class="detail-div" v-for="(item2, index2) in item.detailText" :key="index2">
            <p class="detail-p">{{item2.menuText}}</p>
            <p class="detail-textp">{{item2.taskText}}</p>
          </div>
          <!--detail-div-->
        </aside>
      </section>
    </aside>
  </div>
</template>
<script>
import {resumeList} from '@/comjs/resume.js';
export default {
  data() {
    return {
      resumeList: resumeList
    };
  }
};
</script>
<style lang="less" scoped>
.resume-container {
  .resume-aside {
    margin-top: 20px;
  }
  .resume-section {
    margin-bottom: 50px;
    .title-p {
      color: #555;
      font-size: 16px;
      font-weight: bold;
    }
    .tip-article{
      font-size: 12px;
      color: #999;
      margin-bottom: 15px;
      .tip-li{
        margin-top: 6px;
      }
      // padding-left: 20px;
    }
    .detail-p {
      color: #555;
      font-size: 14px;
      margin: 10px 0px;
    }
    .detail-textp {
      color: #777;
      font-size: 12px;
      word-break: break-all;
      line-height: 22px;
    }
    .circle-aside {
      position: relative;
      .detail-div {
        position: relative;
        padding-left: 40px;
      }
      .detail-div::before {
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #555;
        position: absolute;
        top: 4px;
        left: 0px;
        opacity: 0.5;
        transition: all 0.2s ease-in-out;
      }
      .detail-div:hover::before {
        background: black;
        transform: scale(1.2);
        opacity: 1;
      }
      .detail-div:hover{
        .detail-p{
          color: #555;
        }
      }
    }
    .circle-aside::before {
      position: absolute;
      top: 0px;
      content: "";
      top: 16px;
      left: 6px;
      margin-left: -2px;
      height: 100%;
      width: 4px;
      background: #f5f5f5;
    }
  }
}
</style>


