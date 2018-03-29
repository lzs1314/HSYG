$(document).ready(function(){
	
	
	//点击编辑出现提交按钮
	var $editBtn = $(".editBtn"),
		$bankeBtn = $(".bankbtn"),
		$J_bank = $(".J_bank"),
		$J_account = $(".J_account");
		
	$editBtn.click(function(){
		$bankeBtn.show();
		editFocus($J_bank);
		editFocus($J_account);
		checkInnput();
		$(".bank_table tr td").addClass("bb0");
	})
	//end 点击编辑出现提交按钮
	
	
	function checkInnput(){
		var	cnReg = /^[0-9\u4e00-\u9fa5]{1,20}$/,  //1-20位汉字或数字或汉字数字组合
			nReg = /^[0-9]{1,20}$/,  //1-20位数字
			bank,
			account;
		
		$bankeBtn.click(function(){
			bank = checkReg($J_bank,"请输入开户行","请输入正确的开户行",cnReg);
			account = checkReg($J_account,"请输入账户","请输入正确的账户",nReg);
			if(bank&&bank){
				return true;
			}else{
				return false;
			}
		})
		
		/********焦点获得时**********/
		$J_bank.focus(function(){
			OnFocus($(this));
		});
		$J_account.focus(function(){
			OnFocus($(this));
		});
		
		/********焦点失去时**********/
		$J_bank.blur(function(){
			bank = checkReg($J_bank,"请输入开户行","请输入正确的开户行",cnReg);
		})
		$J_account.blur(function(){
			account = checkReg($J_account,"请输入账户","请输入正确的账户",nReg);
		})
		
		//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
	    function checkReg(obj,con1,con2,preg){
	        var $val = obj.val();
	        var $wr = obj.next();
	        $val = Trim($val,"g");
	        if ($val == "") {
	        	WrongColor($wr,obj);
	            $wr.html(con1);
	            return false;
	        } else{
	        	if(!preg.test($val)){
		            WrongColor($wr,obj);
		            $wr.html(con2);
		            return false;
		        }else{
		        	RightColor($wr,obj);
		            $wr.html("&nbsp;");
		            return true;
		        }    
	        }
	    }	
	}
	
	//综合样式判定
	function RightColor(obj,objn){
		obj.addClass("prov_right").removeClass("prov_wrong");
		objn.addClass("prov_gray").removeClass("prov_blue").removeClass("prov_red");
	}
	function WrongColor(obj,objn){
		obj.addClass("prov_wrong").removeClass("prov_right");
		objn.addClass("prov_red").removeClass("prov_blue").removeClass("prov_gray");
	}
	function OnFocus(obj){
	    obj.addClass("prov_blue").removeClass("prov_red").removeClass("prov_gray");
	}
	function editFocus(obj){
	    obj.addClass("prov_gray");
	    obj.parent().parent().find(".bank_tit").addClass("bankIcon");
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
	
	
	//银行账户变更成功弹窗
	$bankeBtn.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn1',
            area: ['380px', '150px'],
            btn: ['确 定'],
            content: "<div class='layer_suc'><img src='images/common/lay1.png'>银行账户变更成功!</div>"
        })
    })
	
	
	
	

	
    

})