if ($(window).width() < 350) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/32+'px'; 
}else if ($(window).width() > 500) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/75+'px';
}else{
    document.documentElement.style.fontSize=document.documentElement.clientWidth/37.5+'px'; 
}
$('.choose span').click(function(){
    $('.choose span').removeClass('on');
    $(this).addClass('on');
});

var pageHeight = $(window).height() +1;
$('.record-box').css('min-height',pageHeight + 'px');
setNoRecord();
function setNoRecord(){
    if ($('.re-list').length == 0) {
        $('.record-box').append('<p id="noRecord">您暂无购买记录</p>')
    }else{
        $('#noRecord').remove();
    }
}
function loaded () {
    // var upIcon = $("#up-icon"),
    //     downIcon = $("#down-icon");
    var myScroll = new IScroll('.wrapper', { click:true,probeType: 3,mouseWheel: true });
    myScroll.on("scroll",function(){
        var y = this.y,maxY = this.maxScrollY - y;
        if(y >= 50){
            $('#pullDown-msg').html('松开开始刷新');
        }
        else if(y < 50 && y > 1){
            $('#pullDown-msg').html('下拉刷新');
        }
        if(maxY >= 50){
            $('#pullUp-msg').html('松开开始加载');
        }else if(maxY < 50 && maxY >=1){
            $('#pullUp-msg').html('上拉加载');
        }
    });
    myScroll.on("slideDown",function(){
        if(this.y > 50){
            $('#scroller-pullDown').addClass('on');
            $('#pullDown-msg').html('正在更新');
            for(var i=0;i<2;i++){
                $('.record-box').prepend('<div class="re-list"><div class="re-li-title">2016-06-20</div><div class="re-li-intro"><p class="shop-type"><span class="shop-name corwn-gold">高级店铺（1个月）</span><span class="red flr">￥50.00</span></p><p class="pay-time"><span class="small">起止时间：2016/06/20-2016/07/20</span><a href="" class="gray flr">未使用</a></p></div></div>');
            } 
            $('#scroller-pullDown').removeClass('on'); 
        }
        myScroll.refresh();
        setNoRecord();
    });
    myScroll.on("slideUp",function(){
        if(this.maxScrollY - this.y >50){
            $('#pullUp-msg').html('正在加载');
            for(var i=0;i<2;i++){
                $('.record-box').append('<div class="re-list"><div class="re-li-title">2016-06-20</div><div class="re-li-intro"><p class="shop-type"><span class="shop-name corwn-silver">普通店铺（1个月）</span><span class="red flr">￥50.00</span></p><p class="pay-time"><span class="small">起止时间：2016/06/20-2016/07/20</span><a href="" class="red flr">待支付</a></p></div></div>');
            }
        }
        myScroll.refresh();
        setNoRecord();
    });

}