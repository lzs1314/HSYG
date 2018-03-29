$(document).ready(function(){
/**************************广大医药--首页**************************************/

	$(document).click(function(){
		$(".gdplace_a").removeClass("gdplace_a_on");
		$(".placeBox").hide();
	});

	// //选择社区弹窗
     // layer.open({
         // type: 1,
	     // title: false,
	     // closeBtn: 0,
	     // skin: 'comClass',
	     // area: ['547px', '505px'],
	     // content: $('.community_layer')
     // })
	// //end 选择社区弹窗
	
	// //判断选择社区
	 // var $combtn = $(".combtn"),
		 // $p3 = $("#p3"),
		 // $select_lg = $(".comselect_lg"),
		 // p3,
		 // select_lg;
		
	 // $combtn.click(function(){
		 // p3 = checkOther($p3,"请选择所属区域");
		 // select_lg = checkOther($select_lg,"请选择所在（或者周边）社区");
		 // if(p3&&select_lg){
			 // layer.closeAll();
			 // return true;
		 // }else{
			 // return false;
		 // }
	 // });
	
		// /********焦点获得时**********/
	 // $p3.focus(function(){
		 // OnFocus($(this));
	 // });
	 // $select_lg.focus(function(){
		 // OnFocus($(this));
	 // });
	
	// /********焦点失去时**********/
	 // $p3.change(function(){
		 // OnBlur($(this));
		 // p3 = checkOther($(this),"请选择所属区域");
	 // });	
	 // $select_lg.change(function(){
		 // OnBlur($(this));
		 // p3 = checkOther($(this),"请选择所属区域");
	 // });
	
	// //判断其他不用正则的1
     // function checkOther(obj,con){
         // var $val = obj.val();
         // var $wrong = obj.parent().parent().parent().next().find(".regp");
         // var $right = obj.parent().next();
         // if($val == "" || $val == "市、县级市、县" || $val == "请选择"){
             // WrongColor($wrong,$right,obj);
             // $wrong.show().html(con);
             // return false;
         // }else{
             // RightColor($wrong,$right,obj);
             // $wrong.html("&nbsp;");
             // return true;
         // } 
     // }
	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("reg_wrong");
		objs.addClass("reg_right");
		objn.removeClass("reg_blue").removeClass("reg_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("reg_wrong");
		objs.removeClass("reg_right");
		objn.addClass("reg_red").removeClass("reg_blue");
	}
	function OnFocus(obj){
	    obj.addClass("reg_blue").removeClass("reg_red");
	}
	function OnBlur(obj){
	   obj.removeClass("reg_blue").removeClass("reg_red"); 
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
	
	//导航下分类切换
	var $all_catalog = $(".all_catalog").children("li"),$detail_catalog = $(".detail_catalog").children("div"),$recom_ad = $(".recom_ad");
	
	$all_catalog.hover(function(){
		$fdindex = $all_catalog.index(this);
		$eqnum = $fdindex+1;
		$detail_catalog.eq($fdindex).show();
		$recom_ad.show();
		$detail_catalog.eq($fdindex).hover(function(){
			$(this).show();
			$recom_ad.show();
			$all_catalog.eq($fdindex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
			$cata_p = $all_catalog.eq($fdindex).find(".cata_p");
			$cata_p.addClass("cor");
		},function(){
			$(this).hide();
			$recom_ad.hide();
			$all_catalog.eq($fdindex).removeClass("mgd_"+$eqnum);
			$cata_p = $all_catalog.eq($fdindex).find(".cata_p");
			$cata_p.removeClass("cor");
		});
		$recom_ad.hover(function(){
			$(this).show();
			$detail_catalog.eq($fdindex).show();
			$all_catalog.eq($fdindex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
		},function(){
			$detail_catalog.eq($fdindex).hide();
			$recom_ad.hide();
			$all_catalog.eq($fdindex).removeClass("mgd_"+$eqnum);
		});
	},function(){
		$detail_catalog.eq($fdindex).hide();
		$recom_ad.hide();
	});	
	//end  导航下分类切换
	

/**************************end 广大医药--首页**************************************/
})

	//楼层导航
  
 	$(window).scroll(function(e) {
		var _st=$(document).scrollTop();
		
		if(_st<400){
			$(".floor_lift").fadeOut(150);
		}else if(_st>400 && _st < 4400){
            $(".floor_lift").fadeIn(150);
		}else{
            $(".floor_lift").fadeOut(150);
        }
		
		if(_st>400&&_st<900){
			$(".floor_lift li a").eq(0).addClass('floor_cur').parent().siblings('li').children().removeClass('floor_cur');
		}else if(_st>900&&_st<1400){
			$(".floor_lift li a").eq(1).addClass('floor_cur').parent().siblings('li').children().removeClass('floor_cur');
		}else if(_st>=1400&&_st<1900){
			$(".floor_lift li a").eq(2).addClass('floor_cur').parent().siblings('li').children().removeClass('floor_cur');
		}else if(_st>=1900&&_st<2400){
			$(".floor_lift li a").eq(3).addClass('floor_cur').parent().siblings('li').children().removeClass('floor_cur');
		}else if(_st>=2400&&_st<2900){
			$(".floor_lift li a").eq(4).addClass('floor_cur').parent().siblings('li').children().removeClass('floor_cur');
		}else if(_st>=2900&&_st<3400){
			$(".floor_lift li a").eq(5).addClass('floor_cur').parent().siblings('li').children().removeClass('floor_cur');
		}
	});
	
    //回到顶部
    var speed = 800;//滚动速度
	var h=document.body.clientHeight;
		
    $(".toTop").click(function () {
	  	$('html,body').animate({
			scrollTop: '0px'
		},
		speed);			
    });	
	//end 楼层导航