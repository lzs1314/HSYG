$(document).ready(function(){
	//选择查看起售量或起售价
	var $select_num = $(".select_num"),
		$J_qsl = $(".J_qsl"),
		$J_qsj = $(".J_qsj");
	$select_num.change(function(){
		if($(this).val() == "起售量"){
			$J_qsl.show();
			$J_qsj.hide();
		}else if($(this).val() == "起售价"){
			$J_qsj.show();
			$J_qsl.hide();
		}		
	})
	//end 选择查看起售量或起售价


})