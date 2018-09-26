<template>
  <div>
    <h3>=========父组件内容============</h3>
    <div>
      <p :class="[{p1:cs01},p2]" :style="{color:color}" @click="changeFun">色彩：{{color}}</p>
      <p>价格：{{price}}</p>
      <p>数量：{{count}}</p>
      <p>数量：{{searchText|capitalize}}</p>
      <p>{{post}}</p>
    </div>
    <h3>=========子组件内容============</h3>
    <!--当使用 PascalCase (驼峰式命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。
    也就是说 <my-component> 和 <MyComponent> 都是可接受的。
      注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。-->
    <!--1.静态-->
    <button-counter v-model="searchText"></button-counter>
    <!--<button-counter post-title='so fun' @to-child='count=$event' @input="price=$event"></button-counter>-->
    <!--<button-count></button-count>
    <button-count></button-count>
    <button-count></button-count>-->
    <!--2.动态赋予一个变量的值;
    2.1 复杂表达式的值
    2.2 需要 `v-bind` 来告诉 Vue,这是一个 JavaScript 表达式而不是一个字符串-->
    <!--<button-counter :post-title="p2+' by wk'"></button-counter>-->
    <!--<button-counter :post-title="post"></button-counter>-->
    <!--3.传入一个对象的所有属性-->
    <!--<button-counter v-bind='post' ref="child"></button-counter> 
    <button-counter v-for="post1 in posts" :post1="post1"></button-counter>-->
    <!--<button-counter1></button-counter1>--> 
    
  </div>
</template>
<script>
//在模块系统中局部注册
import buttonCounter from './childProps.vue';
//import buttonCounter1 from './childTest.vue';
import Vue from 'vue'
// 定义一个名为 button-counter 的新组件
Vue.component('button-count', {
  data: function () {
      return {
        count: 0
      }
  },
//data: {
//    count: 0
//},
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
export default{
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data(){
    return{
      cs01:true,
      p2:'p2',
      color:'black',
      count:10,
      price:8,
      searchText:'',
      post: {
        id: 1,
        content: 'My Journey with Vue',
        postTitle:'1432'
      },
      posts: [
      {
        id: 1,
        content: 'My Journey with Vue',
        postTitle:'vue'
      },
      {
        id: 2,
        content: 'My Journey with Janny',
        postTitle:'Janny'
      },
      {
        id: 3,
        content: 'My Journey with Lucy',
        postTitle:'Lucy'
      },
      ],
    }
  },
  components:{
    buttonCounter,//父组件中的命名和引用名称相同  等同于buttonCounter:buttonCounter
//  buttonCounter1
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
//    this.$refs.child.childFun()//父组件调用子组件的方法'
    },
    changeFun(){
      this.color=this.color=='red'?'black':'red'
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
  ol, ul { list-style: none;}
  .gap{padding: 0.55rem;}
</style>