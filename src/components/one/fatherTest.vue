<template>
  <div>
    <button-counter :propA='12' propC='666' propF='dange' data='666'></button-counter>
    <router-link to="/one/fatherProps">回首页</router-link>
  </div>
</template>
<script>
//在模块系统中局部注册
import buttonCounter from './childTest.vue';
export default{
  beforeRouteLeave(to, from, next) {
       // 设置下一个路由的 meta
      to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
      next();
  },
  data(){
    return{

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