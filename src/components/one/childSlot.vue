<template>
  <div>
    <p>子组件的内容</p>
    <!--插槽，插槽内可以包含任何模板代码，包括 HTML，其他组件；没有包含一个 <slot> 元素，则任何传入它的内容都会被抛弃-->
    <!--<slot>default</slot>-->
    <!--具名插槽-->
    <slot name="header">no header</slot>
    <slot name="main"></slot>
  </div>
</template>
<script>
export default{
  data(){
    return{
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
    },
  },
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
  /*.red{color: red;}*/
  .blue{color: blue;}
</style>