<template>
  <div id="main">
    <div class="result">{{ result }}</div>
    <div class="enter">{{ enter === ""?0:enter}}</div>
    <div class="keys">
        <div class="list">
            <!--键盘区域-->
            <keyboard
                v-for="(item,key) in keys"
                :value="item" :key='key'>
            </keyboard>
        </div>
    </div>
    <!--<img src="../../assets/CI.svg" alt="" />-->
    <!--<svg xmlns="http://www.w3.org/2000/svg"" version="1.1" height="190">
        <polygon points="100,10 40,180 190,60 10,60 160,180"
          style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
        <g>
          <rect x="10" y="10" width="40" height="40" ry="10"/>
          <rect x="80" y="80" width="40" height="40" ry="10"/>
          <rect x="150" y="150" width="40" height="40" ry="10"/>
        </g>
        
        <g transform="translate(50,50)">
          <rect x="10" y="10" width="100" height="40" style="fill:rgb(255,255,255);stroke-width:1;stroke:rgb(0,0,0)"/>
          <text @click="textClick" x="35" y="35" font-size="16" style="fill:rgb(0,0,0);">{{text}}</text>;
        </g>

    </svg>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //16个按键的值
      keys:[
          'clear', '+', '-', '*',
          '7', '8', '9', '/',
          '4', '5', '6', '0',
          '1', '2', '3', '=',
      ],
      text:'akjfj'
    }
  },
  components: {
    keyboard:{
      //接受的参数value，代表键盘的值
     props:['value'],
      //模板
     template:`<div @click="getKeyboardValue"
                 :data-value="value">
                  {{value}}
               </div>`,
     methods:{
     //点击事件处理函数
    getKeyboardValue(event){
       //获取当前的按键的值
       let value=event.target.dataset.value;
       console.log(event.target)
       console.log(event.target.dataset)
       console.log(this.$store)
       //通过commit提交mutation
       this.$store.commit('calculate',value)
     }
    }
   }
  },
  methods: {
      listenToMyBoy (msg) {//子传父
        this.childWords = msg
      },
      textClick(){
        alert(this.text)
      }
  },
  //增加计算属性
   computed:{
      result(){
        //通过this.$store获取仓库的数据result
        return this.$store.state.result;
      },
      enter(){
       //通过this.$store获取仓库的数据enter
        return this.$store.state.enter;
      }
    }
}
</script>

<style>
</style>