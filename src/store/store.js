import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    result:"",//运算结果
    enter:""  //输入的值
  },
  //定义名为calculate的mutation（变化）
    mutations:{
        calculate(state,value){    
          if(value === '='){

            //按键的值为=，进行结果计算
            state.result = eval(state.enter);//eval()可对字符串进行计算，如：eval('1+2')//3
            state.enter += value;

          }else if(value === 'clear'){

            //按键的值为clear，清空数据
            state.result = state.enter = "";

          }else{

            //输入结果enter进行拼接
            state.enter += value;

          }
        }
    }
})