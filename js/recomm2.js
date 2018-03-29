$(document).ready(function(){

/***************************************表单验证***************************************/
	var chinReg = /^[\u0391-\uFFE5]{1,30}$/,//必须为汉字
		phoneReg= /1[3|5|7|8]\d{9}/;        //手机号验证
	var $rec_name = $(".rec_name"),
		$rec_phone = $(".rec_phone"),
		$rec_city = $(".rec_city"),
		$rec_bbs = $(".rec_bbs"),
		$recomm_btn = $(".recomm_btn"),
		rec_name,rec_phone,rec_city,rec_bbs;
	var $recom_em = $(".recom_table").find(".recom_em"),
		$recomInput = $(".recom_table").find(".recomInput");
	$recomm_btn.click(function(){
		rec_name = checkReg($rec_name,"请输入联系人姓名","请输入正确的联系人姓名",chinReg);
		rec_phone = checkReg($rec_phone,"请输入联系电话","请输入正确的联系电话",phoneReg);
		rec_city = checkReg($rec_city,"请输入所在城市","请输入正确的所在城市",chinReg);
		rec_bbs = checkReg($rec_bbs,"请输入所在社区","请输入正确的所在社区",chinReg);
		if(rec_name&&rec_phone&&rec_city&&rec_bbs){
			layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn1',
	            area: ['380px', '150px'],
	            btn: ['确 定'],
	            content: "<div class='layer_suc'><img src='images/common/lay1.png'>提交成功!</div>"
	        })
			return true;
		}else{
			return false;
		}
	})
	/*******获得焦点时*******/
	$(".rec_name,.rec_phone,.rec_city,.rec_bbs").focus(function(){
		focusInput($(this),$(this).next());
	})
	$recom_em.click(function(){
		clickText($(this).prev(),$(this));
	})
	/*******失去焦点时*******/
	$recomInput.blur(function(){
		blurInput($(this),$(this).next());
	})
	$rec_name.blur(function(){
		rec_name = checkReg($rec_name,"请输入联系人姓名","请输入正确的联系人姓名",chinReg);
	})
	$rec_phone.blur(function(){
		rec_phone = checkReg($rec_phone,"请输入联系电话","请输入正确的联系电话",phoneReg);
	})
	$rec_city.blur(function(){
		rec_city = checkReg($rec_city,"请输入所在城市","请输入正确的所在城市",chinReg);
	})
	$rec_bbs.blur(function(){
		rec_bbs = checkReg($rec_bbs,"请输入所在社区","请输入正确的所在社区",chinReg);
	})

/***************************************end 表单验证***************************************/
	
})