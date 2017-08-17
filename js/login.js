/* --登录js-- */
$(function(){
	/*-- 叉号出现 --*/
	$("input[name='mobile']").focus(showDelete);
	$("input[name='mobile']").keyup(showDelete);
	$("input[name='password']").focus(showDelete);
	$("input[name='password']").keyup(showDelete);

	function showDelete(){
		if($.trim($(this).val())!=''){
			$(this).siblings("a").show();
			if($(this).attr("name")=='mobile'){
				$("#login").addClass("ton");
			}
		}else{
			$(this).siblings("a").hide();
			if($(this).attr("name")=='mobile'){
				$("#login").removeClass("ton");
			}
		}
	}
	/*-- 点击查号内容消失  --*/
	$(".clear_btn").click(function(){
		$(this).prev("input").val("");
		$(this).hide();
	});
	$.validator.addMethod("validmobile",function (value,element){
        var regmobile = /^1[3|4|5|7|8][0-9]{9}$/;
        return regmobile.test(value);
    },"请输入正确的手机号");
	$("#loginForm").validate({
		//onfocusout:false,
		onsubmit:true,
		onkeyup:false,
		submitHandler:function(form){
            alert("提交事件!");   
            //form.submit();
        },
		errorPlacement:function(error,el){
			if($(el).val() || $(el).val()==''){
				showTip(error.text());
			}
		},
		/*highlight:function(element,errorClass){
			$(element).closest(".cell").css('border-color','red');
		},
		unhighlight:function(element,errorClass){
			$(element).closest(".cell").css('border-color','#d8d8d8');
		},  */
		rules:{
			mobile:{
				validmobile:true,
				required:true
			},
			password :{
				required:true,
			}
		},
		messages:{
			mobile:{
				required:"请填写手机号"
			},
			password :{
				required:"请填写密码",
			}
		}
	});
	$(".cell").click(function(){
		if($(".cell_input").val()){
			$("#login").addClass("ton");
		}else{
			$("#login").removeClass("ton");
		}
	})
	$("body").on("click","#login",function(){
		if($(this).hasClass("ton")){
			$("#loginForm").submit();
		}else{
			return false;
		}
	})
	function showTip(str){
        $('.toast').remove();
        $('body').append('<div class="toast"><span>'+str+'</span></div>');
           setTimeout(function(){
               $('.toast').remove();
           },3000)
    }
});