//外部调用函数  
function makeEditor(id) {  
    CKEDITOR.on( 'dialogDefinition', function( ev )  
    {  
            var dialogName = ev.data.name;  
            var dialogDefinition = ev.data.definition;  
            if ( dialogName == 'link' )  
            {  
                    var infoTab = dialogDefinition.getContents( 'info' );  
                    //删除不要的标签页中选项  
                    infoTab.remove( 'linkType' );  
                    infoTab.remove( 'browse' );  
                    var urlField = infoTab.get( 'url' );  
                    //更改链接的文字  
                    urlField['label'] = '链接地址';  
                    //删除不要的tab标签页  
                    dialogDefinition.removeContents( 'target' );  
                    dialogDefinition.removeContents( 'advanced' );  
                    //由于filebrowserUploadUrl的使用,删除链接dialog中出现的upload标签页  
                    dialogDefinition.removeContents( 'upload' );  
            }  
    });  
    var editor = CKEDITOR.replace( id,  
    {  
        toolbar : [[ 'Source','-','Bold','Italic','Underline','Strike','-','Link','-','Unlink','-','AddImage']],  
        //引入上传  
        filebrowserUploadUrl : 'http://127.0.0.1/editor/upload.php'  
    });  
    editor.on( 'pluginsLoaded', function( ev )  
    {  
        if ( !CKEDITOR.dialog.exists( 'myAddImage' ) )  
        {  
                //生成调用js的地址 窗体函数  
                var href = 'http://' + window.location.host + '/editor/myAddImage.js';  
                CKEDITOR.dialog.add( 'myAddImage', href );  
        }  
        editor.addCommand( 'myImageCmd', new CKEDITOR.dialogCommand( 'myAddImage' ) );  
        editor.ui.addButton( 'AddImage',  
        {  
                label : '图片',  
                icon:'images/images.jpg', //增加按钮图标  
                command : 'myImageCmd'  
        });  
    });  
}  
  
//获取CKEditorFuncNum的值  
function getUrlParam(url)  
{  
  var reParam = new RegExp('(?:[\?&]|&amp;)CKEditorFuncNum=([^&]+)', 'i') ;  
  var match = url.match(reParam) ;  
   
  return (match && match.length > 1) ? match[1] : '' ;  
}  
/* 
 * iframe的onload 
 * params: 
 *        t   obj iframe 
 *        num int anonymous function number used to pass the url of a file to CKEditor (random number) 
 */  
function iframeLoad(t, num){  
    t.style.display = 'none';  
    var ret = t.contentWindow.document.body.innerHTML;  
    var fchild = t.contentWindow.document.body.firstChild;  
    // fchild.nodeType { 1 => form, 3 => textNode}   
    if (fchild.nodeType == 3) {  
        //我返回的ret是json数据,进行处理  
        var data = eval("("+ret+")");   
        if(data.picurl) {   
            picurl = data.picurl;  
            //触发filebrowser  
            CKEDITOR.tools.callFunction(num, picurl);  
        } else if(data.error) {   
            CKEDITOR.tools.callFunction(num, '', '上传失败'+data.error);  
        }     
    }  
    t.style.display = '';  
}  
export {makeEditor,getUrlParam,iframeLoad}