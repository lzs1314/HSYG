$(document).ready(function(){
	
	//下拉选项效果（仿select）
	var $J_apyst1 = $(".J_apyst1").children("p"),
		$J_apyst2 = $(".J_apyst2").children("p");
    $J_apyst1.click(function(){
    	$(".J_apyst1").css({"z-index":"999"});
    	$(".J_apyst2").css({"z-index":"0"});
    	$(".J_apyst2").children("p").removeClass("apys_on");
    	$(".J_apyst2").children("ul").hide();
        var $ss = $J_apyst1.index(this);
        $(this).toggleClass("apys_on");
        $J_apyst1.eq($ss).next().toggle();
        $J_apyst1.eq($ss).next().children("li").click(function(){
            $J_apyst1.eq($ss).html($(this).html()).removeClass("apys_on");
            $(this).parent().hide();
        });
    }); 
    $J_apyst2.click(function(){
    	$(".J_apyst2").css({"z-index":"999"});
    	$(".J_apyst1").css({"z-index":"0"});
    	$(".J_apyst1").children("p").removeClass("apys_on");
    	$(".J_apyst1").children("ul").hide();
        var $ss = $J_apyst2.index(this);
        $(this).toggleClass("apys_on");
        $J_apyst2.eq($ss).next().toggle();
        $J_apyst2.eq($ss).next().children("li").click(function(){
            $J_apyst2.eq($ss).html($(this).html()).removeClass("apys_on");
            $(this).parent().hide();
        });
    });    
    //end 下拉选项效果（仿select）
	
/***************************************表单验证***************************************/
	var cnReg = /^[\u0391-\uFFE5]{1,30}$/,  //只能输入汉字正则
		ceReg = /^[A-Za-z\u4e00-\u9fa5]{1,50}$/,  //可输入汉字或字母或汉字字母组合的正则
		ceReg2 = /^(.*)$/,  //可输入汉字或字母或汉字字母组合的正则
		phoneReg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;   //手机号正则	
	var $apy_name = $(".apy_name"),
		$apy_phone = $(".apy_phone"),
		$apy_comp = $(".apy_comp"),
		$apy_brand = $(".apy_brand"),
		$resup_btn = $(".resup_btn"),
		apy_name,
		apy_phone,
		apy_comp,
		apy_brand;
	var $apy_em = $(".apply_table").find(".apy_em");
		
	$resup_btn.click(function(){
		apy_name = checkReg($apy_name,"请输入联系人姓名","请输入正确的联系人姓名",cnReg);	
		apy_phone = checkReg($apy_phone,"请输入联系电话","请输入正确的联系电话",phoneReg);	
		apy_comp = checkReg($apy_comp,"请输入公司名称","请输入正确的公司名称",ceReg);
		apy_brand = checkReg($apy_brand,"请输入经营品牌","请输入正确的经营品牌",ceReg2);
		if(apy_name&&apy_phone&&apy_comp&&apy_brand){
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
	$(".apy_name,.apy_phone,.apy_comp,.apy_brand").focus(function(){
		focusInput($(this),$(this).next());
	})
	$apy_em.click(function(){
		clickText($(this).prev(),$(this));
	})	
	/*******失去焦点时*******/
	$(".apy_name,.apy_phone,.apy_comp,.apy_brand").blur(function(){
		blurInput($(this),$(this).next());
	})
	$apy_name.blur(function(){
		apy_name = checkReg($apy_name,"请输入联系人姓名","请输入正确的联系人姓名",cnReg);		
	})
	$apy_phone.blur(function(){
		apy_phone = checkReg($apy_phone,"请输入联系电话","请输入正确的联系电话",phoneReg);	
	})
	$apy_comp.blur(function(){
		apy_comp = checkReg($apy_comp,"请输入公司名称","请输入正确的公司名称",ceReg);	
	})
	$apy_brand.blur(function(){
		apy_brand = checkReg($apy_brand,"请输入经营品牌","请输入正确的经营品牌",ceReg2);		
	})	
	
/***************************************end 表单验证***************************************/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

})