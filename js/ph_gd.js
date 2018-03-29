$(document).ready(function() {  
				
			    var $new_built=$('.borred2')
					$new_built.click(function(){
						layer.open({
								type: 1,
								title: false,
								closeBtn: 1,
								skin: 'layerBtn2',
								area: ['582px', ''],
								btn: ['确 定','取消'],
								shift: 2,
								content: $(".add_invoice_tb")
			        });
					
			    });
				
				
			  
				var MaxInputs  = 5; //最多允许添加5个文本框  
				var J_ttp   = $(".J_ttp"); //输入框外层div的ID
				var AddButton       = $("#AddMoreFileBox"); //添加文本框按钮ID  
				 
				var x = J_ttp.length;  
				var FieldCount=0; //
				 
				$(AddButton).click(function (e)  // 添加文本框按钮的点击事件
				{  
						$(this).hide();
				        if(x <= MaxInputs) //最多允许多少个文本框
				        {  
				            FieldCount++; //文本框递增 
				            //增加文本框 
				            $(".J_ttp").append('<div class="invdiv"><input type="text" class="invoice_input" name="mytext[]" id="field_'+ FieldCount +'"/><a class="keep_invoice" href="#">保存</a><p class="invhover" style="display: none;"><a href="#" class="J_editor">编辑</a><a href="#" class="J_save" style="display: none;">保存</a><a href="#" class="removeclass">删除</a></p></div>');  
				            x++; 
				        } 
						$('.borred4').removeClass("topay_add2");
						$('.invoice_input').removeClass("topay_add2");
						$('.invoice_input:last').addClass("topay_add2");
						
				return false;  
				});  
				  
				$("body").on("click",".removeclass", function(e){ //点击删除事件  
				        if( x > 1 ) {  
				                $(this).parent('div').remove(); //移除文本框 
				                x--; //文本框减少 
				        }  
				return false; 
				}) 
				var $borred4  = $(".borred4 ");
				$("body").on("click",".invdiv", function(e){ //点击删除事件  
					$(".invoice_input").removeClass("topay_add2");
					$(this).children("input").addClass("topay_add2");
					$borred4.removeClass("topay_add2");
				})  
				$borred4.click(function(){
					$(this).addClass("topay_add2");
					$(".invoice_input").removeClass("topay_add2");
				})
				 
			  
			  
			
			//点击保存文本框不可编辑
			$("body").on("click",".keep_invoice", function(e){   
		        var inval = $(this).parent().find("input");
				inval.attr({ readonly: 'true' });
				 $(this).hide();
				var $input = $(this).prev();
				if ($input.val() == "") {
					$(this).show();
					
					$input.removeAttr("readonly");
					return false;
				}else{
					$(".new_invoice").show();
					$(this).hide();
					
					$input.attr({ readonly: 'true' });
				}				 
				//鼠标移动到文本框显示编辑删除
				var $invdiv = $(this).parent('.invdiv');
				invfun($invdiv);
				function invfun(obj){
					var $invhover = obj.find('.invhover');
					obj.hover(function(){
						$titindex = $invdiv.index(this);
						$invhover.eq($titindex-1).show();
					},function(){
						$titindex = $invdiv.index(this);
						$invhover.eq($titindex-1).hide();
					});		
					var $J_editor = obj.find(".J_editor"),
						$J_save = obj.find(".J_save"),
						$invoice_input = obj.find(".invoice_input");
					$J_editor.click(function(){
						$(this).hide();
						$(this).next().show();
						$invoice_input.removeAttr("readonly");
					})
					$J_save.click(function(){
						var $input = $(this).parent().parent().find(".invoice_input");
						if ($input.val() == "") {
							$(this).show();
							$input.removeAttr("readonly");
							return false;
						}else{
							$(".new_invoice").show();
							$(this).hide();
							$(this).prev().show();
							$input.attr({ readonly: 'true' });
						}   
						
					})
				}
				//end 鼠标移动到文本框显示编辑删除
				$(".removeclass").click(function(){
					$(this).parent().parent().remove();
				});
				
			
			})  
			
		//不在配送范围提示
		var $topay_subbtn=$('.topay_subbtn')
			$topay_subbtn.click(function(){
				layer.open({
						type: 1,
						title: false,
						closeBtn: 1,
						skin: 'layerBtn2',
						area: ['540px', ''],
						btn: ['确 定','取消'],
						shift: 2,
						content: $(".community_prompt")
			});
			
		});
		
			
		});	