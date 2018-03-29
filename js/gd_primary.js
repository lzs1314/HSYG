$(document).ready(function(){
	//表格奇偶行变色
	$(".sg_list_tb tr:odd").css({"background":"#fff"});
    $(".sg_list_tb tr:even").css({"background":"#f6f6f6"});
    //end 表格奇偶行变色
//弹窗
    var $provBtn_category=$('.provBtn_category')
	    $provBtn_category.click(function(){
	        layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['466px', '390px'],
		            shift: 2,
	                content: $(".add_address_tb"),
					cancel: function (index, layero) {
		                $("#newFloorName").val("");
		                layer.close(index)
		                return false;
		            }
	        });
	    });

	});