/*鼠标移过，左右按钮显示*/
$(".bslides").hover(function(){
	$(this).find(".prev,.next").fadeTo("show",0.15);
},function(){
	$(this).find(".prev,.next").hide();
})
/*鼠标移过某个按钮 高亮显示*/
$(".prev,.next").hover(function(){
	$(this).fadeTo("show",0.3);
},function(){
	$(this).fadeTo("show",0.15);
})
$(".bslides").slide({ titCell:".num ul" , mainCell:".ssul" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });