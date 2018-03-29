$(document).ready(function(){
	//出现动画效果
	var $regce_left = $(".regce_left"),
		$regce_right = $(".regce_right");
	$regce_left.animate({left:'0px',opacity:'1'},800);
	$regce_right.animate({right:'0px',opacity:'1'},800);
	//end 出现动画效果
	
	//跳动动画效果
	$regce_left.each(function(k,img){
		new JumpObj(img,8);//第一个参数代表元素对象,第二个参数代表抖动幅度
	});
	$regce_right.each(function(k,img){
		new JumpObj(img,8);//第一个参数代表元素对象,第二个参数代表抖动幅度
	});	
	//end 跳动动画效果
	
	//鼠标移动给a加上样式
	$regce_left.hover(function(){
		$(".re_sh_btn").addClass("reabg1");
	},function(){
		$(".re_sh_btn").removeClass("reabg1");
	})
	$regce_right.hover(function(){
		$(".re_gyl_btn").addClass("reabg2");
	},function(){
		$(".re_gyl_btn").removeClass("reabg2");
	})	
	//end 鼠标移动给a加上样式
	
	//无法点击成为商户提醒
	var $re_sh_btn = $(".re_sh_btn"),
		$re_gyl_btn = $(".re_gyl_btn"),
		$regchoo_tip = $(".regchoo_tip");
	$re_sh_btn.click(function(){
		$regchoo_tip.addClass("rotip_bg");
		$(this).addClass("reabg_jin");
		$re_gyl_btn.addClass("reabg_jin");
	})
	$re_gyl_btn.click(function(){
		$regchoo_tip.addClass("rotip_bg");
		$(this).addClass("reabg_jin");
		$re_sh_btn.addClass("reabg_jin");
	})
	//end 无法点击成为商户提醒

})