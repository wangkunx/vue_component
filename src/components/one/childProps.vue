<template>
  <div>
    <!--$emit-->
    <h3 @click="count++;$emit('to-child',count)">数量：{{count}}</h3>
    <!--$emit(事件名,所传参数)-->
    价格：<input v-focus :class="{p2:flag}" @input="inputFun($event.target.value);$emit('input',$event.target.value)" :value="value"/>
    图像按钮：<input type="image" src="/static/img/logo.png"/>
    <!--图像按钮：<input type="image" :src="imgSrc1" @click="imgChage" class="imgBtn"/>-->
    <!--图像按钮：<input type="image" src="../../assets/logo.png"/>-->
    
    <h3>父组件传入子组件的值</h3>
    <ul>
      <!--<li>typeof：{{typeof postTitle}} title：{{postTitle}}</li>--> 
      <li class="gap"></li>
      <li>传入一个对象的所有属性</li><!---->
      <!--<li>post.id:{{post1.id}}</li>
      <li>post.content:{{post1.content}}</li>-->
    </ul>
  </div>
</template>
<script>
import bus from '../../assets/js/eventBus.js'
import $ from 'jquery'
export default{
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  data(){
    return{
      cs01:true,
      cs02:false,
      p2:'p2',
      count:10,
      type:this.id,
      flag:false,
      imgSrc:'static/img/logo.png'
    }
  },
  mounted(){
    this.init();
    bus.$on('sendMsg',function(m){
      alert(m)
    })
  },
  computed:{
    imgSrc1(){
      return require('../../assets/logo.png')
    }
  },
  methods:{
    imgChage(){
      
    },
    inputFun(v){
      if(v.length>2){
        this.flag=true;
      }
    },
    init(){
//    console.log(this.$el.getAttribute('data'))
//    this.id+='-00000'
//    this.postTitle.www='baidu'
    },
//  childFun(){
//    alert('父组件调用了子组件的方法')
//    }
  },
  props:['postTitle','id','content','post1','value']//以字符串数组形式列出
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
  ol, ul { list-style: none;}
  .gap{padding: 0.55rem;}
</style>