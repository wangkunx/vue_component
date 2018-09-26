<!--vue自定义移动端touch事件，点击、滑动、长按事件-->
<template>
  <div style="height: 3000px;">
    <p>{{ msgfromfa }}</p>
    <button @click="onClickMe">like!</button>
      <!--input type=file样式修改-->
      <div class="addfile" id="1">
        <input type="file" class="fileInput" @change="fileSize">
        <span class="file_uploader">批量导入excel</span>
      </div>
      <ul>
        <li v-for="p in list">{{p.name}}{{p.age}}</li>
      </ul>
      <p>
        <input type="text" @keyup="checkEmail" v-model="ajaxdata"/>
      </p>
      <router-link to="/one/one">跳转</router-link>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { Popup,Toast,MessageBox,Picker} from 'mint-ui';
  import {getUrl} from '../../assets/js/BaseJS.js'
  export default{
    data(){
      return{
        msg: 'I like you!',
        name:'静止',
        isSendMsg:true,
        list:[{name:'wk',age:'28'}],
        ajaxdata:'',
        timer:null,
        canRun:true
      }
    },
    mounted(){
      this.init();
       window.addEventListener('scroll',this.loadMore) 
//    $(window).scroll(this.loadMore);  
    },
    methods: { 
      init(){
        var currLocation=window.location.href;  
        var obj=getUrl(currLocation);//page
        var page=obj.page;
        console.log(obj);
        this.list.push({name:'wj',age:'26'})
        var a='1'
        document.getElementById(a)
      },
      alertFun(){
        console.log('父组件调用子组件成功');
      },
      loadMore(){//函数节流
//      函数节流：是确保函数特定的时间内至多执行一次。
//      函数防抖：是函数在特定的时间内不被再调用后执行
        console.log('222')
        return this.fn1()
      },
      fn1(){
        var that=this;
        if(!this.canRun){return;}  
        this.canRun=false;  
        setTimeout(function(){  
          console.log("执行滚动事件");  
          var docHeight=$(document).height();  
          var winHeight=$(window).innerHeight();  
          var scrollDistance=$(window).scrollTop();  
          if( docHeight - (winHeight+scrollDistance) <=100 ){  
              console.log('加载中...');  
          }  
          that.canRun=true;  
        },600); 
      },
      checkEmail(){//函数防抖
         return this.fn();
      },
      fn(){
        var that=this;
        clearTimeout(this.timer);  
        this.timer=setTimeout(function(){  
            console.log(that.ajaxdata);  
        },2000); 
      },
      onClickMe(){ 
        this.$emit('child-say',this.msg); 
      },
      vuetouch(s,e){
            this.name=s.name;
      },
      fileSize(v){
        console.log(v)
        console.log(v.path[0].files[0])//原生方法获得图片文件的大小、格式等信息
      }
    },
    
    props: ['msgfromfa']//父传子
  }
</script>

<style>
  .addfile{
  width: 80%;
  margin: 0 auto;
  position: relative;
  height: 50px;
}
  .fileInput{
  opacity: 0;
  width: 130px;
  height: 40px;
  position: absolute;
  left: 0px;
  z-index: 20;
}
.file_uploader{
  position: absolute;
  left: 0px;
  display: inline-block;
  padding: 6px 14px;
  background: #007bff;
  text-align: center;
  color:#fff;
  border-radius: 5px;
  cursor: pointer;
}
</style>