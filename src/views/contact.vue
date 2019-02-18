<template>
    <div class="home-container">
      <h1 class="titleh1">关于我</h1>
      <aside class="question-aside width900">
          <div class="left-div">
              <section v-for="(item ,index) in menuList" :key="index" class="tab-section" :class="'tabSection'+index">
                  <p class='title-p' :class="[index == activeIndex && showQuestion[index].showIndex? 'isActive':'']" @click="titlepFn(index)">{{item.title}}</p>
                  <ul class="menu-ul"  :class="[index == activeIndex && showQuestion[index].showIndex ? 'isulActive':'defaultul']">
                      <li class="menu-li" v-for="(item2 ,index2) in item.tabMenuList" :key= "index2" :class="{'onmenuli':index2 == activeMenuLI2 && index == activeMenuLI }" @click="menuliFn(index,index2)">
                          {{item2}}
                      </li>
                  </ul>
              </section>
          </div>
          <div class="right-div">
            <section v-show="0 == showRIndex" class="detail-section">
             <ul class="contact-ul">
               <li class="contact-li">电话：13073675622</li>
               <li class="contact-li">邮箱：1093788279@qq.com</li>
               <li class="contact-li">微信：lzj3823</li>
               <li class="contact-li">QQ：1093788279</li>
             </ul>
            </section>
            <section v-show="1 == showRIndex">
              <ul class="contact-ul">
               <li class="contact-li">毕业院校：浙江科技学院</li>
               <li class="contact-li">专业：软件工程</li>
               <li class="contact-li">学历：本科</li>
             </ul>
            </section>
            <section v-show="2 == showRIndex">
             <p class="myselef-p">
              1.工作认真负责，有负责前端框架搭建的经验，重要一些通用代码的封装。目前主要用的是nodejs 里面的express 框架和 vue2 ，mpvue 写小程序。
             </p>
             <p class="myselef-p">
              2.很不幸运的是线上作品大部分都撤销掉了，所以花上约一天半时间做一下布局写一个线上简历，希望可以快招我到碗里来~。
             </p>
             <p class="myselef-p">
              3.善于沟通，热爱技术，爱好很多，譬如打乒乓球，爬山，摄影，吉他，跑步，滑板等。
             </p>
            </section>
            <section v-show="3 == showRIndex">
              <p class="myselef-p">
                http://www.jq22.com/jquery-info13194 有2个很久以前分布的2个jQuery插件。后来公司也有很多需要写成小插件的就没有发布了。常用的前端效果实现均熟练，比如分页，轮播图，上拉下拉刷新，css3动画，预加载懒加载，和后台配合接口一起加密等等
              </p>
            </section>
            <section v-show="4 == showRIndex">
              <p class="myselef-p">
                闲来无事记录的一些博客，附上地址：
                https://blog.csdn.net/u013018357
              </p>
            </section>
          </div>
      </aside>
    </div>
</template>
<script>
let menuList = [
    {
        title:'基本信息',
        tabMenuList:[
            '联系方式',
            '教育经历',
            '自我评价',
        ]
    },
    {
        title:'博客技术',
        tabMenuList:[
            '发布的线上插件',
            '博客',
        ]
    },

]
export default {
    data(){
        return {
            menuList:menuList,
            activeIndex:0,
            showQuestion:[
                 {showIndex:true},
                 {showIndex:false},
                 {showIndex:false},
            ],
            activeMenuLI:0,
            activeMenuLI2:0,
            showRIndex:0,
        }
    },
    methods:{
        titlepFn(index){
            if(this.activeIndex != index){
                 this.showQuestion[this.activeIndex].showIndex = false
            }
            this.activeIndex = index;
            this.showQuestion[index].showIndex = ! this.showQuestion[index].showIndex
        },
        menuliFn(index,index2){
            this.activeMenuLI = index
            this.activeMenuLI2 = index2
            if(index == 0){
                this.showRIndex = index2
            }else{
                let len = 0
                for(let i = 0 ;i<index ; i++){
                    len += this.menuList[i].tabMenuList.length

                }
                len +=index2
                this.showRIndex = len
            }
        }
    },
}
</script>
<style scoped lang="less">
@baseColor: #777;
.height40 {
  height: 40px;
  line-height: 40px;
}
.border{
   border: 1px solid #e8e8e8;
}
.bgSize{
  background-size: 18px;
}
.home-container{
    padding:20px 0px 40px 0px;
    .question-aside{
          display: flex;
          height: 350px;
          .border;
          margin-top: 20px;
          background: white;
          .left-div{
              padding:15px 0px 0px 0px;
              width: 240px;
              border-right: 1px solid #e8e8e8;
             .title-p{
                 .height40;
                 color: #555;
                 font-weight: bold;
                 font-size: 16px;
                 padding-left: 15px;
                 position: relative;
             }
             .title-p:hover{
                 color: @baseColor;
             }
             .title-p::after{
                content: "v";
                position: absolute;
                right: 15px;
                color: #999;
                font-weight: normal;
             }
             .isActive::after{
                 transform: rotate(180deg);
                 transition: .3s;
             }
             .menu-ul{
                    height: 0px;
                    transform: scaleY(0);
                    transform-origin: top center;
                    transition: .3s linear;
                 .menu-li{
                     padding-left: 15px;
                     .height40;
                     color: #777;
                     font-size: 14px;
                 }
                 .menu-li:hover{
                     background:#f5f5f5;
                 }
                 .onmenuli{
                     color: #222;
                     border-right: 2px solid @baseColor;
                 }
             }
             .isulActive{
                    height: 120px;
                    transform: scaleY(1) !important;
             }
          }
          .right-div{
              width: calc(100% - 240px);
              padding: 30px;
              .contact-ul{
                .contact-li{
                  .height40;
                  font-size: 14px;
                  padding-left: 30px;
                   &:nth-child(1){
                    background: url('~@/assets/tel.png') no-repeat left center;
                    .bgSize
                  }
                   &:nth-child(2){
                    background: url('~@/assets/email.png') no-repeat left center;
                    .bgSize
                  }
                   &:nth-child(3){
                    background: url('~@/assets/wx.png') no-repeat left center;
                    .bgSize
                  }
                   &:nth-child(4){
                    background: url('~@/assets/qq.png') no-repeat left center;
                    .bgSize
                  }
                }
              }
              .myselef-p{
                color: #666;
                line-height: 22px;
                word-break: break-all;
                font-size:14px;
                margin-bottom: 10px
              }
          }
    }
}

</style>

