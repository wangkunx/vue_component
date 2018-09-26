<template>
  <div>
  <h3>父组件的内容</h3> 
  <h3 tabindex="-1" id="h3Title">============</h3> 
    <button-counter>
      <!--插槽-->
       <!--slot content-->
      <!--具名插槽 1.<template> 2.普通元素-->
       <!--<template  slot="header"><span>this is a header</span></template>-->
       <p  slot="header" class="red">
         <!--{{post.content}}
         <span class="blue" v-if="flag">4124</span>-->
       </p>
       <a  slot="main" :href="url">{{post.content}}</a>
    </button-counter>
    <router-link to="/one/fatherProps">回首页</router-link>
    <form action="">
      <input type="text" onkeypress="if(/\D/.test(parseInt(event.key))){event.preventDefault()}"/>
      <!--h5新增的简单表单验证-->
      <input type="text" required=""/>
      <input type="text" pattern="\d+"/>
      <input type="number"  min="1" max="99" step="5"/>
      <select name="" id="locateCity" @change="cityChange">
        <option value="a">武陟</option>
        <option value="b">郑州</option>
        <option value="c">北京</option>
      </select>
      <input type="submit" value="提交"/>
      <input type="reset" value="重置"/>
      <textarea name="text" rows="" cols="" placeholder="请输入...">{{textVal}}</textarea>
    </form>
  </div>
</template>
<script>
//在模块系统中局部注册
import buttonCounter from './childSlot.vue';
import $ from 'jquery'
export default{
  beforeRouteLeave(to, from, next) {
         // 设置下一个路由的 meta
        to.meta.keepAlive = false;  // C 跳转到 A 时让 A 不缓存，即刷新
        next();
  },
  data(){
    return{
      cs01:true,
      cs02:false,
      flag:true,
      p2:'p2',
      fontSize:0,
      post: {
        id: 1,
        content: 'My Journey with Vue'
      },
      lovingpost:'',
      url:'https://www.baidu.com/',
      textVal:'111'
    }
  },
  components:{
    buttonCounter
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      $('#h3Title').focus();
      this.textVal='000'
      var tex=$('[name=text]')
      console.log(tex);
      tex.select(function(){
        console.log(tex.val())
//      alert(tex.val().substring(tex[0].selectionStart,tex[0].selectionEnd))
        });
//      tex.paste(function(){//tex.paste is not a function
//        var texP=tex.getClipboardText()
//        console.log(texP);
//      })
//    tex.setSelectionRange(0,2);//报错
    },
    cityChange(){
      var locateCity=$('#locateCity')
//    locateCity.val('a')
      var text=locateCity.find("option:selected").text();
      console.log(text);
    },
    clickFun(){
      alert('触发原生事件')
    }
  }
}
</script>
<style scoped>
  .p1{
    font-size: 20px;
    font-weight: 700;
  }
  .p2{
    color: red;
  }
  .red{font-size:1.38rem;}
</style>