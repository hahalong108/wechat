/*企业认证js*/
$(function(){
	 $.validator.addMethod("check", function() {
    	return $("input[name='mobile']").val()!="" || $("input[name='tel']").val()!="";
     }, "手机号和电话号码必须一个有值！");
	/*$.validator.addMethod("validmobile",function (value,element){
        var regmobile = /^1[3|4|5|7|8][0-9]{9}$/;
        if(value){
        	return regmobile.test(value);
        }else{
        	console.log(0);
        	return true
        }
        
    },"请输入正确的手机号");
   $.validator.addMethod("validtel",function (value,element){
        var regtel = /^1[3|4|5|7|8][0-9]{9}$/;
        var regtell = /^1[3|4|5|7|8][0-9]{9}$/;
        if(value){
        	return regtel.test(value);
        }else{
        	console.log(2);
        	return true
        }
        
    },"请输入正确的座机号");*/
   $.validator.addMethod("validmobile",function (value,element){
       var regmobile = /^1[3|4|5|7|8][0-9]{9}$/;
       var regtel1 = /^0\d{2,3}$/;
       var regtel2 = /\d{7,8}/;
         if(value){
         	return regmobile.test(value);
        }else{
        	return regtel2.test($("input[name='tel']").val()) && regtel1.test($("#tell").val());
         	// return true
         }
        
    },"请输入正确的号码");
    $.validator.addMethod("validtel",function (value,element){
         var regmobile = /^1[3|4|5|7|8][0-9]{9}$/;
         var regtel1 = /^0\d{2,3}$/;
         var regtel2 = /\d{7,8}/;
         if(value){
        	return regtel2.test(value) && regtel1.test($("#tell").val());
         }else{
         	return regmobile.test($("input[name='mobile']").val());
         	console.log(2);

        	// return true
   }
        
     },"请输入正确的号码");
	$("#certifia_form").validate({
		//onfocusout:false,
		onsubmit:true,
		onkeyup:false,
		submitHandler:function(form){
            alert("提交事件!");   
            //form.submit();
        },
		errorPlacement:function(error,el){
			if($(el).val()  || $(el).val()==''){
				showTip(error.text());
				console.log(error.text());
				$('#errmsg').append('<li>'+error.text()+'</li>');
			}
		},
		highlight:function(element,errorClass){
			$(element).closest(".cell").find(".line_btm").css('background','red');
		},
		unhighlight:function(element,errorClass){
			$(element).closest(".cell").find(".line_btm").css('background','#d8d8d8');
		},  
		rules:{
			enterName:{
				required:true,
				rangelength:[5,25]
			},
			enterUser:{
				required:true,
				rangelength:[2,10]
			},
			business:{
				required:true,
				rangelength:[15,30]
			},
			datestart:{
				required:true
			},
			town:{
				required:true
			},
			adress_detail:{
				required:true
			},
			station:{
				required:true
			},
			linkman:{
				required:true,
				rangelength:[2, 20]
			},
			mobile:{
				check:true,
				validmobile:true,
			},
			tel:{
				check:true,
				validtel:true,
			},
			password :{
				required:true,
			}
		},
		messages:{
			enterName:{
				required:"请填写企业名称",
				rangelength:"字数限制5-25个字"
			},
			enterUser:{
				required:"请填写企业法人",
				rangelength:"法人姓名字数限制2-10个字"
			},
			business:{
				required:"请填写营业执照号",
				rangelength:"请填写15-30之间的字"
			},
			datestart:{
				required:"请选择开始日期"
			},
			town:{
				required:"请选择地区"
			},
			adress_detail:{
				required:"请填写详细地址"
			},
			station:{
				required:"请选择服务站"
			},
			linkman:{
				required:"请填写联系人",
				rangelength:"联系人字数限制2-20个字",
			},
			password :{
				required:"请填写密码",
			}
		}
	});
	$("body").on("click","#submit",function(){
		$('#errmsg').empty();
		$("#certifia_form").submit();
		if($('#errmsg').html()==''){
			return true;
		}else{
			showTip($('#errmsg').find('li').eq(0).html());
		}
	})
	function showTip(str){
        $('.toast').remove();
        $('body').append('<div class="toast"><span>'+str+'</span></div>');
           setTimeout(function(){
               $('.toast').remove();
           },3000)
    }

    $(".cell").on("click",".agree",function(){
    	if($(this).find("span").hasClass("active")){
    		$(this).find("span").removeClass("active");
    	}else{
    		$(this).find("span").addClass("active");
    	}
    });
    $(".jxlogin_no").on("click",".agree2",function(){
    	if($(this).find("i").hasClass("active")){
    		$(this).find("i").removeClass("active");
    	}else{
    		$(this).find("i").addClass("active");
    	}
    })
})
