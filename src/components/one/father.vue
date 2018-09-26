<template>
  <div>
    <div>
      <p :class="[{p1:cs01},p2]" :style="{fontSize:fontSize+'px'}" @click="clickFun">{{fontSize}}</p>
    </div>
    <!--当使用 PascalCase (驼峰式命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。
    也就是说 <my-component> 和 <MyComponent> 都是可接受的。
      注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。-->
    <!--接受参数$event-->
    <!--<button-counter post-title='so fun' @tochild='fontSize=$event' @input="fontSize=$event"></button-counter>-->
    <!--<button-counter :post-title='p2'></button-counter>
    <button-counter v-bind='post' data='true'></button-counter>
    <button-counter v-model='lovingpost'></button-counter>{{lovingpost}}
    <button-counter v-on:focus.native="onFocus"</button-counter>-->
    <button-counter @click.native="clickFun">{{post.content}}</button-counter>
    <button-counter @click.native="clickFun">
      <!--具名插槽 1.<template> 2.普通元素-->
       <!--<template  slot="header"><span>this is a header</span></template>-->
       <span  slot="header">this is a header</span>
    </button-counter>
    
  </div>
</template>
<script>
//在模块系统中局部注册
import buttonCounter from './childEmit.vue';
export default{
  data(){
    return{
      cs01:true,
      cs02:false,
      p2:'p2',
      fontSize:0,
      post: {
        id: 1,
        content: 'My Journey with Vue'
      },
      lovingpost:''
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
</style>