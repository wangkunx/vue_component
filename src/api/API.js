//import axios from 'axios'
import config from './config'
import axios from './http'
import qs from 'qs'
import Vue from 'vue'

Vue.prototype.$axios = axios;
class API {
  gkOrderList(param) {//高客渠道查询订单列表  wk
    config.data = param;
    console.log(config.url+'/gkOrderList');
//  return axios.post('http://app-t.mhc.mobile.taikang.com/publish/user/login',{},config);
    return axios.post('https://app-t.healthservice.mobile.taikang.com/webApp/call/gkOrderList',{},config);
//  return axios.post(config.url+'/gkOrderList',{},config);
  }
}
export default API;
