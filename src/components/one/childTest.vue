<template>
  <div>
    <p @click="sendToChild2">Prop 验证</p>
    <!--一个对象的所有属性-->
    <ul>
      <li v-bind="$attrs">{{propA}}</li>
      <li>验证类型:Number 传入类型:{{typeof propA}}</li>
      <li class="gap"></li>
      <li>{{propC}}</li>
      <li class="gap"></li>
      <li>不传入的默认值：{{propD}}</li>
      <li class="gap"></li>
      <li>工厂函数传入的对象：{{propE}}</li>
      <li class="gap"></li>
      <li>这个值必须匹配下列字符串中的一个，['success', 'warning', 'danger']</li>
      <li>{{propF}}</li>
    </ul>
  </div>
</template>
<script>
import bus from '../../assets/js/eventBus.js'
export default{
  data(){
    return{
      child1:'child1'
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    sendToChild2(){
       bus.$emit('sendMsg',this.child1)
    },
    init(){
//    一个非 prop 特性是指传向一个组件，但是该组件并没有相应 prop 定义的特性。
//    这些特性会被添加到这个组件的根元素上。
      console.log(this.$attrs)
      console.log(this.$el.getAttribute('data'))
    },
  },
  inheritAttrs:false,
  //遇到错误的类型时从浏览器的控制台提示用户(warn提示)
  props: {
    // 基础的类型检查 (`null` 匹配任何类型)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
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