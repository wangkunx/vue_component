<template>
  <div>
    <!--$emit-->
    <h3 @click="count++;$emit('tochild',count)">{{count}}{{postTitle}}</h3>
    <!--$emit(事件名,所传参数)-->
    <input type="text" @input="$emit('input',$event.target.value)"/>
    
    <!--一个对象的所有属性-->
    <!--<ul>
      <li>{{id}}-{{content}}--{{likes}}</li>
    </ul>-->
    
    <!--自定义组件v-model-->
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    >
    
    <!--原生事件绑定至组件-->
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
    <!--插槽，插槽内可以包含任何模板代码，包括 HTML，其他组件；没有包含一个 <slot> 元素，则任何传入它的内容都会被抛弃-->
    <slot>default</slot>
    <!--具名插槽-->
    <!--<slot name="header"></slot>-->
  </div>
</template>
<script>
export default{
  data(){
    return{
      cs01:true,
      cs02:false,
      p2:'p2',
      count:10,
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      console.log(this.$el.getAttribute('data'))
    },
  },
  inheritAttrs: false,
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  //以对象形式列出名称和类型,遇到错误的类型时从浏览器的控制台提示用户(warn提示)
  props:{
    checked: Boolean,
    postTitle:String,
    id:Number,
    content:String,
    likes:{
      type:Number,
      default:222
    } ,
    label:String,
    value:String
  }
//props:['title','likes']//以字符串数组形式列出
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