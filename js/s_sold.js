$(document).ready(function(){

	//搜索栏获得焦点
	var $J_name = $(".J_name"),
		$J_start = $(".J_start"),
		$J_end = $(".J_end");
	
	$J_name.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_name.next().click(function(){
		clickText($J_name,$(this));
	});
	$J_start.focus(function(){
		OnFocus($(this));
	});
	$J_end.focus(function(){
		OnFocus($(this));
	});
	
	//搜索栏失去焦点
	$J_name.blur(function(){
		blurInput($(this),$(this).next());
	});
	$J_start.blur(function(){
		OnBlur($(this));
	});
	$J_end.blur(function(){
		OnBlur($(this));
	});
	
	//综合样式判定
	function focusInput($input,$text){
	    OnFocus($input);
	    $text.hide();
	}
	function clickText($input,$text){
	    OnFocus($input);
	    $input.focus();
	    $text.hide();
	}
	function blurInput($input,$text){
		$input.removeClass("sf_blue");
	    if($input.val() == ""){
	        $text.show();
	    }
	}
	function OnFocus(obj){
	    obj.addClass("sf_blue");
	}
	function OnBlur(obj){
	   obj.removeClass("sf_blue"); 
	}
	
	//订单状态切换
	var $vessel_zt_a = $(".sf_state").find("a");
	$vessel_zt_a.click(function(){
		$(this).addClass("sf_state_on").siblings("a").removeClass("sf_state_on");
	});
	//end 订单状态切换
	
    //时间设置
    laydate.skin('danlan');
    var start = {
        elem: '#start',
        format: 'YYYY/MM/DD',
        min: '1900-01-01', //设定最小日期为当前日期
        max: '2099-06-16', //最大日期
        istime: false,
        istoday: false,
        choose: function(datas){
             end.min = datas; //开始日选好后，重置结束日的最小日期
             end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: '#end',
        format: 'YYYY/MM/DD',
        min: '1900-01-01',
        max: '2099-06-16',
        istime: false,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);
    //end 时间设置



	//修改运费
	$(".up_fi").click(function(){
		$(".chi_span").hide();
		$(".up_freight").show();
		$(".up_fi").hide();
		$(".cancel").show();
		$(".save").show();
	});
	//end 修改运费

	//退货详情	
	var $ts_txq = $(".ts_txq");
	$ts_txq.on('click', function(){
		var that = this;
		layer.tips('<div style="font-size:12px;color:#757575; max-width: 180px;">快递：天天快递<br>快递单号：88888888888</div>', that,{
			time: 5000,
			tips: [3, '#f2f2f2']
		}); //在元素的事件回调体中，follow直接赋予this即可
	});
	//end 退货详情
	
	//确认收货弹出层
	var $receiptBtn = $(".receiptBtn");
	$receiptBtn.click(function(){
		layer.open({
	        type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定', '取 消'],
            content: "<div class='layer_hint'>确定确认收货？</div>"
		})
	});	
	//end 确认收货弹出层
	
	
	//填写物流信息弹窗
	var $shipmentsBtn = $(".shipmentsBtn"),
	$write_name = $(".write_name").children("input"),
	$write_num = $(".write_num").children("input"),
	$write_znote = $(".write_znote");
	$write_name.blur(function(){
		if($write_name.val() == ""){
    		$write_name.css("border","1px solid #ff4545");
    		$write_znote.html("请填写快递名称");
    	}else{
    		$write_name.css("border","1px solid #dadada");
    	}
	});
	$write_num.blur(function(){
		if($write_num.val() == ""){
    		$write_num.css("border","1px solid #ff4545");
    		$write_znote.html("请填写单号名称");
    		return false;
    	}else{
    		$write_num.css("border","1px solid #dadada");
    	}
	});
	
	$shipmentsBtn.click(function(){
		layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1, 
	        area: ['380px', '200px'],
	        shift: 2,
	        skin: 'layerBtn1',
	        btn:['确定'],
	        content: $('.layer_write'),
	        yes:function(){
	        	if($write_name.val() == ""){
	        		$write_name.css("border","1px solid #ff4545");
	        		$write_znote.html("请填写快递名称");
	        		return false;
	        	}else{
	        		$write_name.css("border","1px solid #dadada");
	        	}
	        	if($write_num.val() == ""){
	        		$write_num.css("border","1px solid #ff4545");
	        		$write_znote.html("请填写单号名称");
	        		return false;
	        	}else{
	        		$write_num.css("border","1px solid #dadada");
	        		layer.closeAll();
	        	}
	        }
		})
	});		
	//end 填写物流信息弹窗

	//填写拒绝原因弹窗
	var $refuseBtn = $(".refuseBtn");
	$refuseBtn.click(function(){
		layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1, 
	        area: ['380px', '200px'],
	        shift: 2,
	        skin: 'layerBtn1',
	        btn:['确定'],
	        content: $('.layer_refuse')
		})
	});		
	//end 填写拒绝原因弹窗


	//点击同意弹出层
	var $consentBtn = $(".consentBtn");
	$consentBtn.click(function(){
		layer.open({
	        type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定', '取 消'],
            content: "<div class='layer_hint'>等待买家退货</div>"
		})
	});		
	//end 点击同意弹出层

	//填写拒收原因弹窗
	var $rejectionBtn = $(".rejectionBtn");
	$rejectionBtn.click(function(){
		layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1, 
	        area: ['380px', '200px'],
	        shift: 2,
	        skin: 'layerBtn1',
	        btn:['确定'],
	        content: $('.layer_rejection')
		})
	});		
	//end 填写拒收原因弹窗


})