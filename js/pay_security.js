/*缴纳保障金js*/
if ($(window).width() < 350) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/32+'px';
}else if ($(window).width() > 500) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/75+'px';
}else{
    document.documentElement.style.fontSize=document.documentElement.clientWidth/37.5+'px';
}

$("#pay_check").click(function(){
    if($(this).hasClass('on')){
        $(this).removeClass('on')
    }else{
        $(this).addClass('on')
    }

});

$('#pay_pay').on('click', function(){

    if(!$("#pay_check").hasClass("on"))
    {
        layer.open({
            content: '请先阅读并同意协议，再缴保证金',
            time:1
        });
    }else{

    }

});
var windowHeight = $(window).height();
var bHeight = $('#pay_bottom_line').height();
$('#pay_all').css('min-height',windowHeight-bHeight +'px')





/*支付成功*/
var bHeight1=$('#succ_bottom').height();
 
$('#succ_top').css('min-height',windowHeight-bHeight1 +'px')

$('#succ_upStore').on('click', function(){

    alert('asdfa');

});