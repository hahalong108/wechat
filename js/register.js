/*注册js*/
$(function(){
	/*-- 密码可见 --*/
	$(".cell_view").click(function(){
		if(!$(this).hasClass("cell_view_g")){
			$(this).closest(".cell").find(".cell_input").attr("type","text");
			$(this).addClass("cell_view_g");
		}else{
			$(this).closest(".cell").find(".cell_input").attr("type","password");
			$(this).removeClass("cell_view_g");
		}
	});


	/*-- 叉号出现 --*/
		$("input[name='mobile']").bind('paste',function(e){
			var regmobile = /^1[3|4|5|7|8][0-9]{9}$/;
			/**/
			var pastedText = undefined;
			 if (window.clipboardData && window.clipboardData.getData) { // IE
	            pastedText = window.clipboardData.getData('Text');
	         } else {
	            pastedText = e.originalEvent.clipboardData.getData('Text');//e.clipboardData.getData('text/plain');
	         }
	        if(regmobile.test(pastedText)){
	        	$(this).siblings("a.clear_btn").show();
				if ($(this).parents('.cell').find('.cell_getsmd').val() == '获取短信验证码') {
		                $(this).parents('.cell').find('.cell_getsmd').removeClass('disabled').prop('disabled', false);
		        }
			}else{
				$(this).siblings("a.clear_btn").show();
				$(this).parents('.cell').find('.cell_getsmd').addClass('disabled').prop('disabled', true);
			}
		});
		$(".cell_input").focus(showDelete);
		$(".cell_input").keyup(showDelete);
		function showDelete(){
			var regmobile = /^1[3|4|5|7|8][0-9]{9}$/;
			if($.trim($(this).val())!=''){
				$(this).siblings("a.clear_btn").show();
				if($("input[name='mobile']").val() && $("input[name='password']").val() &&$("input[name='smd']").val()){
					$("#relogin").addClass("ton");
				}
				if($(this).attr("name")=='mobile'){
					if(regmobile.test($(this).val())){
						 if ($(this).parents('.cell').find('.cell_getsmd').val() == '重新获取验证码' || $(this).parents('.cell').find('.cell_getsmd').val() == '获取短信验证码') {
		                    $(this).parents('.cell').find('.cell_getsmd').removeClass('disabled').prop('disabled', false);
		                }
					}else{
						 $(this).parents('.cell').find('.cell_getsmd').addClass('disabled').prop('disabled', true);
					}
				}
			}else{
				$(this).siblings("a.clear_btn").hide();
				if($("input[name='mobile']").val()=='' || $("input[name='password']").val()=='' || $("input[name='smd']").val() ==''){
					$("#relogin").removeClass("ton");
				}
				
			}
			if($(this).attr("name")=='password' || $(this).attr("name")=='smd' || $(this).attr("name")=='mobile'){
				$(this).val($(this).val().replace(/[\u4e00-\u9fa5]+|\s+/g,''));
			}
		}
		/*-- 点击查号内容消失  --*/
		$(".clear_btn").click(function(){
			$(this).prev("input").val("");
			$(this).hide();
			if($("input[name='mobile']").val()=='' || $("input[name='password']").val()=='' || $("input[name='smd']").val() ==''){
				$("#relogin").removeClass("ton");
			}
			$(this).prev("input").focus();
			if($(this).prev("input").attr("name")=='mobile' && $(this).prev("input").val()==''){
				$(this).next(".cell_getsmd").addClass('disabled').prop('disabled', false);
			}
		});

		$.validator.addMethod("validmobile",function (value,element){
		    var regmobile = /^1[3|4|5|7|8][0-9]{9}$/;
		    if (regmobile.test(value)) {
                if ($(element).parents('.cell').find('.cell_getsmd').val() == '重新获取验证码' || $(element).parents('.cell').find('.cell_getsmd').val() == '获取短信验证码') {
                       $(element).parents('.cell').find('.cell_getsmd').removeClass('disabled').prop('disabled', false);
                }
            } else {
                $(element).parents('.main').find('[name="imgbtn"]').addClass('disabled').prop('disabled', true);
            }
		    return regmobile.test(value);
		},"请输入正确的手机号");
		$("#registerForm").validate({
				//onfocusout:false,
			onsubmit:true,
			onkeyup:false,
			submitHandler:function(form){
		        alert("提交事件!");   
		    },  
			errorPlacement:function(error,el){
				if($(el).val() || $(el).val()==''){
					showTip(error.text());
				}
			},
			highlight:function(element,errorClass){
				$(element).closest(".cell").css('border-color','red');
			},
			unhighlight:function(element,errorClass){
				$(element).closest(".cell").css('border-color','#d8d8d8');
			},
				/*showErrors:function(errorMap,errorList){
					var error = this.numberOfInvalids();
					if(error>2){
						//$('.myerror').html('您有'+error+'条错误信息');
						showTip('请完善列表信息');
					}
					this.defaultShowErrors();
				},*/
			rules:{
				mobile:{
					validmobile:true,
					required:true
				},
				smd:{
					required:true,
				},
				password :{
					required:true
				}
			},
			messages:{
				mobile:{
					required:"请填写手机号"
				},
				smd:{
					required:"请填写验证码",
					minlength:"请输入6位短信验证码",
				},
				password :{
					required:"请填写密码",
				}
			}
		});
		/*-- 按钮置灰 不可以点击--*/
			$("body").on("click","#relogin",function(){
				if($(this).hasClass("ton")){
					$("#registerForm").submit();
				}else{
					return false;
				}
			});
			function showTip(str){
		        $('.toast').remove();
		        	$('body').append('<div class="toast"><span>'+str+'</span></div>');
		           setTimeout(function(){
		               $('.toast').remove();
		        },3000)
		    }
})