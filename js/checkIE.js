//IE7及以下提示浏览器版本过低
$(document).ready(function(){
    var browser=navigator.appName 
    var b_version=navigator.appVersion 
    var version=b_version.split(";"); 
    if(version[1]){
        var trim_Version= version[1].replace(/[ ]/g,"");  
    }else{
        return ;
    }
     
    var ieshow = document.getElementById("mall_iec");//获取提示内容id
    var iespan = ieshow.getElementsByTagName("span")[0];//获取到第一个span，定义为关闭按钮
    //检测浏览器是否为IE与版本是否为6.0
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){ 
        ieshow.style.display = "block";//浏览器版本过低提示显示
    }
    //检测浏览器是否为IE与版本是否为7.0
    else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){
        ieshow.style.display = "block";//浏览器版本过低提示显示
    }
	//点击关闭按钮关闭提示
    iespan.onclick = function(){
        if(ieshow.style.display == "block"){
            ieshow.style.display = "none";
        }
    }
})