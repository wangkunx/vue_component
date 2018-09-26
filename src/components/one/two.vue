<template>
  <div>
    <p id="p1">afdsaufas</p>
    <div class="container">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}{{textInner}}</span>
    </div>
    <div class="container">
      <select v-model="selected" multiple>
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <div class="container">
      <!--<select id="mulSelect" @change="selChange">-->
      <select multiple id="mulSelect">
        <option disabled>请选择</option>
        <option >A</option>
        <option >B</option>
        <option >C</option>
        <!--<option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>-->
      </select>
      <button @click="clearFun">清空</button>
      <button @click="selList">已选择</button>
    </div>
    <div class="container">
      <select v-model="selectedRender">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selectedRender }}</span>
    </div>
    <!--在文本区域插值 (<textarea></textarea>) 并不会生效，应用 v-model 来代替。-->
    <textarea name="" rows="" cols="" v-model="textInner"></textarea>
    <div>
      <p  @click="clickFun()">点击</p>
      <p v-if="isshow" >{{msg}}{{testObj.age}}</p>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import Vue from 'vue'
export default{
  data(){
    return{
      msg:'原始值',
      isshow:false,
      testObj:{
        name:'mm'
      },
      checkedNames:[],
      textInner:'乱七八糟',
      selected:[],//''
      selectedRender:'A',
      options:[
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      multiples:[]
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
//    Vue.set(this.testObj,'age',27)//向嵌套对象添加响应式属性
      this.$set(this.testObj,'age',27)//向嵌套对象添加响应式属性
    },
    selList(){
       $("#mulSelect option:selected").each(function () {
          console.log($(this).val())
      })
    },
    selChange(){
      var a=$('#mulSelect').val();
//    $('#mulSelect').val('');
      console.log(a)
    },
    clearFun(){
      $('#p1').html('');
//    $('#mulSelect').empty();
    },
    clickFun(){
      this.isshow=true;
      var that=this;
       setTimeout(function(){
         that.isshow=false;
       },1500)
    }
  }
}
</script>
<style scoped>
.container{margin: 20px;}
</style>