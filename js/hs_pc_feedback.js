$(document).ready(function(){

    var $fd_p_cont = $(".fd_p_cont"),
    $fd_ul_w = $(".fd_ul_w"),
    $li = $fd_ul_w.children("li");
    $fd_txt = $(".fd_txt"),
    $fd_btn = $(".fd_btn");


    $fd_p_cont.click(function(){
        $fd_ul_w.toggle();
    });

    $li.click(function(){
        $(this).parent().hide();
        $fd_p_cont.html($(this).html());
    });
    $fd_btn.click(function(){
        if($fd_p_cont.html() == "选择要反馈的类型"){
            $fd_p_cont.addClass("borderred");
            return false;
        }else{
            $fd_p_cont.removeClass("borderred");
        }
        if($fd_txt.val() == ""){
            $fd_txt.addClass("borderred");
            return false;
        }else{
            $fd_txt.removeClass("borderred");
        }
    });
    
	//搜索栏获得焦点
	$fd_txt.focus(function(){
		focusInput($(this).next());
	});
	$fd_txt.next().click(function(){
		clickText($fd_txt,$(this));
	});
	
	//搜索栏失去焦点
	$fd_txt.blur(function(){
		blurInput($(this),$(this).next());
	});
	
	//综合样式判定
	function focusInput($text){
	    $text.hide();
	}
	function clickText($input,$text){
	    $input.focus();
	    $text.hide();
	}
	function blurInput($input,$text){
	    if($input.val() == ""){
	        $text.show();
	    }
	} 

})