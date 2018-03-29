$(document).ready(function(){
$(".confirm_operation").click(function(){
                layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['380px', '150px'],
		            btn: ['确 定','取消'],
		            content: "<div class='layer_suc'><img src='images/common/lay3.png'>确认收到货品</div>"
		        })
            })
			});