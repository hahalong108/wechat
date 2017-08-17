
	
if ($(window).width() < 350) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/32+'px'; 
}else if ($(window).width() > 500) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/75+'px';
}else{
    document.documentElement.style.fontSize=document.documentElement.clientWidth/37.5+'px'; 
}

//---------------------------修改银行信息  shx 1012 begin----------

$(function(){
$.validator.addMethod("vdbankname",function (value,element){
    var bkname = /^[\u4e00-\u9fa5]*$/;
    return bkname.test(value);
},"请输入正确银行名称");	
$.validator.addMethod("vdbanknum",function (value,element){
    var bknum =  /^(\d{16}|\d{19})$/;
    return bknum.test(value);
},"请输入正确银行卡号");	
$.validator.addMethod("vdusername",function (value,element){
    var uname = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
    return uname.test(value);
},"请输入正确的姓名");

$("#info-fm").validate({
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
	rules:{
		bankname:{
			required:true,
			vdbankname:true
		},
		banknum:{
			required:true,
			vdbanknum:true
		},
		username:{
			required:true,
			vdusername:true
		}
	},
	messages:{
		bankname:{
			required:"只能输入中文"
		},
		banknum:{
			required:"请输入正确银行卡号"
		},
		username:{
			required:"请输入正确的姓名"
		}
	}
});	

function showTip(str){
    $('.toast').remove();
    $('body').append('<div class="toast"><span>'+str+'</span></div>');
       setTimeout(function(){
           $('.toast').remove();
       },3000)
}

});
$("body").on("click",".green-btn2",function(){
	var ipt = $(this).prev().find("input");
	if(ipt.hasClass("error")){
		return false;
	}else{
		$("#info-fm").submit();
		layer.open({
			content:"银行卡修改成功",
	        style:"width:80%",
	   });
	}
});