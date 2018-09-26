<template>
  <div class="hello">
    helloworld
    <!--<textarea id='editor' rows='10' cols='80' class="ckeditor"></textarea>-->
  </div>
</template>

<script>
import CK from 'CKEDITOR'
import {makeEditor} from '../../assets/js/mydialog.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      editor:''
    }
  },
  mounted(){
      //this.init_ckeditor() // 初始化富文本编辑器
//  makeEditor('editor');  
  },
  methods:{
    init_ckeditor () {
      CK.replace('editor', {height: '300px',
        width: '100%',
        customConfig: '../../../static/ckeditor/config.js',
        filebrowserImageUploadUrl: '', // 上传图片路径
        toolbar: [
          ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
          ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
         '/',
          ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
          ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
          ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
          ['Link','Unlink','Anchor'],
          ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
         '/',
          ['Styles','Format','Font','FontSize'],
          ['TextColor','BGColor'],
          ['Source']
        ]
      })
      var editor = CK.instances.editor
      this.editor = editor
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
