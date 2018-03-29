$(document).ready(function(){
    var fontpreg = /^[\u0391-\uFFE5]{2,15}$/,  //汉字正则
    $cname = $(".cname"),
    $J_food = $(".J_food"),
    $J_food_a = $J_food.children("a"),
    $run_food = $(".run_food"),
    $file_sp = $("#file_sp"),
    $img_sp = $("#img_sp");

    upImg($file_sp,$img_sp);
    function run_food(){
        var yes = $(".J_food a").first().find("i");
        if (yes.hasClass("run_on")) {
            file_sp = yesImg($file_sp,"请上传食品流通许可证");
        } 
    };
    
//上传图片预览
//objs对象，img_yy上传的图片，imgbox图片显示位置，site图片地址显示位置
    function upImg(objs, imgs) {
        objs.change(function () {
            var $file = $(this);
            //获取上传图片的大小
            var filesize = $file[0].files[0].size,
			sizeM = filesize/1024/1024;
            $fileVal = $file.val(),
            $site = $file.parent().prev().find(".aIupsite"),
            $wr_tr = objs.parent().parent().find(".aIup_p");
            $right = objs.parent().parent().find(".aIup_span");
            $wrong = objs.parent().parent().find(".aIup_span1");
            var fileObj = $file[0],
                windowURL = window.URL || window.webkitURL,
                dataURL;
            if (fileObj && fileObj.files && fileObj.files[0]) {
                var extStart = $fileVal.lastIndexOf(".");
                var ext = $fileVal.substring(extStart, $fileVal.length).toUpperCase();
                if (ext != ".BMP" && ext != ".PNG" && ext != ".JPG" && ext != ".JPEG") {
                    $wrong.show().html("图片格式错误");
                    $wrong.addClass("aIup_wrong");
                    $right.hide();
                    return false;
                }
                else if (sizeM > 2) {
                    $wrong.show().html("图片大小错误");
                    $wrong.addClass("aIup_wrong");
                    $right.hide();
                    return false;
                }
                else {
                    dataURL = windowURL.createObjectURL(fileObj.files[0]);
                    imgs.attr('src', dataURL);
                    imgs.parent().parent(".aIupimgBox").show();
                    $site.html($fileVal);
                    $wr_tr.hide();
                    objs.parent().css("margin-top", "72px");
                    $wrong.hide();
                    $wrong.removeClass("aIup_wrong");
                    $right.show();
                    $right.addClass("aI_right");
                    return true;
                }
            } else {
                dataURL = $file.val();
                var imgObj = document.getElementById(imgs);
                imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
                imgs.parent().parent(".aIupimgBox").hide();
                $site.html();
            }
        });
    }
//上传图片预览    

    //选择是否经营
    $J_food_a.click(function(){
        $(this).find("i").toggleClass("run_on");
        var yes = $(".J_food a").first().find("i");
        if (yes.hasClass("run_on")) {
            $run_food.removeClass("disn");
            runTip($J_food);
        } else{
            $run_food.addClass("disn");
        }
    });

    //判断是否选中经营食品、电子、其他
    function runTip(obj){
        var $yes = obj.find("i"),
            $runtip = obj.next();
        if ($yes.hasClass("run_on")) {
            $runtip.removeClass("run_wrong");
        } else{
            $runtip.addClass("run_wrong");
        }
    }
    
    $cname.focus(function(){   //联系人姓名
        OnFocus($(this));
    });

    $cname.blur(function(){    //联系人姓名
        CheckCname();
    });

    //照片弹窗
    layer.ready(function(){ //为了layer.ext.js加载完毕再执行
        layer.photos({
            closeBtn: 1,
            shadeClose:false,
            shift:5,
            photos: '#bs_license'//营业执照
        });
        layer.photos({
            closeBtn: 1,
            shadeClose:false,
            shift:5,
            photos: '#lp_license'//法人执照
        });
        layer.photos({
            closeBtn: 1,
            shadeClose:false,
            shift:5,
            photos: '#hl_license'//卫生许可证
        });
        layer.photos({
            closeBtn: 1,
            shadeClose:false,
            shift:5,
            photos: '#tax_license'//互联网药品交易服务许可证
        });
        layer.photos({
            closeBtn: 1,
            shadeClose:false,
            shift:5,
            photos: '#itl_license'//互联网药品信息服务许可证
        });
        layer.photos({
            closeBtn: 1,
            shadeClose:false,
            shift:5,
            photos: '#iml_license'//营业执照
        });
    });

    //end 照片弹窗
    function CheckCname(){
        var $cnameVal = $cname.val();
        var $nextp = $cname.next();
        $cnameVal = Trim($cnameVal,"g");
        if(!fontpreg.test($cnameVal)){
            WrongColor($nextp,$cname);
            $nextp.html("请填写正确的联系人姓名");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$cname);
            return true;
        }
    }
    //综合样式判定
    function RightColor(obj,objn){
        obj.addClass("iright").removeClass("iwrong");
        objn.removeClass("b_blue").removeClass("b_red");
    }
    function WrongColor(obj,objn){
        obj.addClass("iwrong").removeClass("iright");
        objn.addClass("b_red").removeClass("b_blue");
    }
    function OnFocus(obj){
        obj.addClass("b_blue").removeClass("b_red");
    }
    //去除空格
    function Trim(str,is_global) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        if(is_global.toLowerCase()=="g"){
            result = result.replace(/\s/g,"");
         }
        return result;
    }
      
});
