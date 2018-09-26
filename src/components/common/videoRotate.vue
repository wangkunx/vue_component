<template>
  <div>
    <h1>测试视频比例拉伸：</h1>
    <video src="../../assets/desert.mp4" controls autoplay loop></video>
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
  beforeCreate(){document.title='旋转比例模拟'},
  components: {
  },
  mounted(){
    this.init();
  },
  methods: {
    init(){//960 544  =>4:3 554*4/3 :544 宽高比变小 比宽度
      var x=(Math.acos((554*4/3)/960)*180/Math.PI).toFixed(2);
      //960 544  =>2:1 960:960/2 宽高比变大 比高度
      $('video').css({transform:"rotateX("+x+"deg)"})
      var y=(Math.acos((960/2)/544)*180/Math.PI).toFixed(2);
//    $('video').css({transform:"rotateY("+y+"deg)"})
    },
  }
}
</script>

<style>
video {
    /*trans*/
}
</style>
