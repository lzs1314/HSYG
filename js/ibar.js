$(document).ready(function(){
/***********************右侧边栏js***********************/
	//鼠标经过工具栏标签滑出效果
	$('.toolbar-tab').hover(function(){
	    $(this).find('.tab-text').addClass("tbar-tab-hover");
	    $(this).addClass("tbar-tab-selected");
	},function() {
	    $(this).find('.tab-text').removeClass("tbar-tab-hover");
	    $(this).removeClass("tbar-tab-selected");
	});
	//end 鼠标经过工具栏标签滑出效果
	
	//我的社区主标签内容显示隐藏
	var $mysq = $(".mysq");
	var $mysqCont = $(".mysqCont");
	$mysq.hover(function(){
	    $(this).find('i').addClass("mysqi_hover");
	    $mysqCont.css('display','block');
	},function() {
	    $(this).find('i').removeClass("mysqi_hover");
	    $mysqCont.css('display','none');
	});
	//end 我的社区主标签内容显示隐藏
			
	//成为社区主标签内容显示隐藏
	var $community = $(".community");
	var $comCont = $(".comCont");
	$community.hover(function(){
	    $(this).find('i').addClass("mysqi_hover");
	    $comCont.css('display','block');
	},function() {
	    $(this).find('i').removeClass("mysqi_hover");
	    $comCont.css('display','none');
	});
	//end 成为社区主标签内容显示隐藏
    //回到顶部
    var speed = 800;//滚动速度
	var h=document.body.clientHeight;
	var $ibar_footer = $(".ibar_footer");
		
    $ibar_footer.click(function () {
	  	$('html,body').animate({
			scrollTop: '0px'
		},
		speed);			
    });
    //end 回到顶部
	
/***********************右侧边栏js***********************/	

})