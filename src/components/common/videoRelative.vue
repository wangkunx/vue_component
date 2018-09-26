<template>
  <div class="border">
    <!--<h1>测试视频比例拉伸：</h1>-->
    <video src="../../assets/desert.mp4" controls autoplay loop></video>
    <!--<audio src="../../assets/ninelife.ma4"></audio>-->
    <!--<video src="http://7xnzpx.com1.z0.glb.clouddn.com/miaoxingren_360p.mp4" controls autoplay loop></video>-->
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
    },
  }
}
</script>

<style>
  /*//因为padding和margin等受width影响，父容器固定后，子标签可以进行填充。此处75%是3/4，其他比例可以依照此法。*/
  .border{
  position:relative;
  width:100%;
  height:0;
  padding-bottom:75%; 
    }
  video{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
    }
</style>

