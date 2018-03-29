$(document).ready(function(){
	//当前选择类目根据文字长度决定div宽度
	var $rs_curtype = $(".rs_curtype"),
		$rs_curtype_p = $rs_curtype.children("p");
	$rs_curtype.width(120 + $rs_curtype_p.width()+20);
	//end 当前选择类目根据文字长度决定div宽度
	
	//上传等待提示
//	layer.open({
//      type: 1,
//      title: false,
//      closeBtn: 0,
//      skin: 'batch_class',
//      area: ['350px', '160px'],
//      content: "<img src='images/sellerCenter/loading.gif'>"
//  })
	//end 上传等待提示
	
})