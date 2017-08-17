
// 订单详情
if ($(window).width() < 350) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/32+'px'; 
}else if ($(window).width() > 500) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/75+'px';
}else{
    document.documentElement.style.fontSize=document.documentElement.clientWidth/37.5+'px'; 
}

//修改价格按钮
$('.alter-btn').click(function(){
    var priceNum = $(this).parents('li').find('.price-num').html();
    $(this).parents('li').find('input').val(priceNum);
    $(this).parents('li').find('.goods-title').hide();
    $(this).parents('li').find('.goods-price').hide();
    $(this).parents('li').find('.alter-price').show();
});
//完成按钮
$('.done-btn').click(function(){
    var alterNum = parseFloat($(this).parents('li').find('input').val()).toFixed(2);
    $(this).parents('li').find('.price-num').html(alterNum);
    $(this).parents('li').find('.goods-title').show();
    $(this).parents('li').find('.goods-price').show();
    $(this).parents('li').find('.alter-price').hide();
});


// 订单审核-驳回原因
//选择
$('.option-list').click(function(){
    $('.option-list').removeClass('on');
    $(this).addClass('on');
    $('.sub-btn').addClass('on');
});
$('.sub-btn').click(function(){
    if ($(this).hasClass('on')) {
        alert($('.option-list.on').val())
    }
});
$('textarea').keyup(function(){
    $(this).val().length
    $('.text-num').html($(this).val().length + '/100')
})


// 发货确认
$('#change-btn').click(function(){
    $('.select-btn').eq(0).addClass('on');
    $('#showTip').show();
    $('.lack-ul-show li').on('click',function(){
        $('.select-btn').removeClass('on');
        $(this).find('.select-btn').addClass('on');
    });
    $('.sub-btn').click(function(){
        $('#showBox').html($('.select-btn.on').parents('li').attr('data-title'));
        $('#showTip').hide();
    });

});