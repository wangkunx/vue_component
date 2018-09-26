<template>
  <div>
    <h1 id="h1">测试视频比例拉伸：</h1>
    <!--<video src="../../assets/desert.mp4"  poster="../../assets/logo.png" controls autoplay loop width="300px" height="50px"></video>-->
    <!--指定不同的媒体来源-->
    <!--<audio  controls>
      <source src="/static/source/nineLife.mp3"/>
      <source src="/static/source/nineLife.ma4"/>
      Audio player not available
    </audio>-->
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',
  data () {
    return {
      childWords: "",
    }
  },
  components: {
  },
  mounted(){
    this.init();
  },
  methods: {
    init(){
//    元素js构造函数Audio，实测有效，只是会交叉播放！！！
      var audio=new Audio('/static/source/nineLife.mp3');
      console.log(audio)
      audio.oncanplaythrough=function(){
//      audio.play();
      var h1=document.getElementById('h1')
      h1.onpopstate=function(){
        alert('后退')
      }
      }
    },
  }
}
</script>

<style>
/*兼容性不太好*/
/*video {
    object-fit:fill;
    width:800px;
    height:500px;
}*/

/*前端如何将视频平铺整个页面作为背景*/
 /*video {

        position: fixed;
        right: 0;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -999;
    }*/
</style>
