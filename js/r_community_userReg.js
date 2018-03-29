$(document).ready(function(){
	//订单状态（仿select）
	var $tit = $(".com_select").children("p");
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });
    $(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".com_select").length == 0){ 
		$tit.removeClass("p_on");
		$(".empsel").hide(); 
		} 
	});
    $seek_in = $(".seek_in");
	$seek_in.focus(function(){
		focusInput($(this),$(this).next());
	});
	$seek_in.next().click(function(){
		clickText($seek_in,$(this));
	});
	$seek_in.blur(function(){
		blurInput($(this),$(this).next());
	});
	function focusInput($input,$text){
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

	$(".derive").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            btn: ['确 定','取消'],
             content: "<div class='layer_war'><img src='images/common/lay3.png'>你确定导出用户注册信息吗？</div>"
        })

    });


});