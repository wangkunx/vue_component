<template>
  <div>
    <p>Do you like me? {{childWords}}</p>
    <ul v-for="(item,i) in ulList">
      <li @click="changeName(i)">姓名：{{item.name}}年龄：{{item.age}}</li>
    </ul>
    <div class="contain">
      <!--文字竖排居中-->
      <p class="inner">文字竖排居中</p>
    </div>
    <!--<component-a ref="ftoc" msgfromfa="(Just Say U Love Me)" @child-say="listenToMyBoy"></component-a>-->
    <!--<router-view/>-->
  </div>
</template>

<script>
import $ from 'jquery'
//import API from './api/API'
//const api = new API();
//import componentA from '../one/componentA'
export default {
  name: 'App',
  data () {
    return {
      childWords: "",
      ulList:[
        {name:'lily',age:15},
        {name:'lucy',age:17},
        {name:'jim',age:15}
      ]
    }
  },
  components: {
//  componentA
  },
  mounted(){
    this.init();
  },
  methods: {
    init(){
//    this.$refs.ftoc.alertFun();
    },
    changeName(i){
      this.ulList[i]={name:'wj','age':23}
//    this.ulList[i].name='wk'
//vue是通过检测get,set才得知数据是否更新的，而对于数组来说，是没有get，set方法的，所以需要我们自己手动触发，需要发送消息通知vue
       this.$set(this.ulList, i, this.ulList[i]);
      console.dir(this.$el)
      console.dir(this.$set)
      console.dir(this.$data)
    },
    listenToMyBoy (msg) {//子传父
      this.childWords = msg
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.contain{display: flex;background: red;justify-content:center;}
.inner{width:10px;}
/*.container{position: relative;background: red;height: 500px;}
.inner{width:10px;position: absolute;left: 50%;top:50%;margin-left: -5px;}*/
</style>
