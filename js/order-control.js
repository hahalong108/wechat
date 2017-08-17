/*----订单查询js-------*/
$(function(){
	//滚动区的最小高度，避免一个订单时情况
	var ht = $(window).height() - $("#thelist").offset().top
	$("#thelist").css("min-height",ht+36 + "px");
	//阻止按钮冒泡
	$(".passed a").click(function(e){
		e.stopPropagation();
	})
	
	//判断每个订单里的li个数是否1
	$('.full-ul-search').each(function(){
		var linum =$(this).find('li');
		if(linum.length == 1){
			$(this).css("height","auto");
			$(this).next().css("display","none");
		}
		if(linum.length > 1){
			$(this).css("height","19.3rem");
			$(this).next().css("display","block");
		}
	})
	
	//--展开收起
	$(".open").click(function(e){
		var sptxt = $(this).children();
		if(sptxt.text() == "展开"){
			sptxt.text("收起");
			$(this).addClass("shou");
			$(this).prev().css("height","auto");
		}else{
			sptxt.text("展开");
			$(this).removeClass("shou");
			$(this).prev().css("height","19.3rem");
		}
		e.stopPropagation();
	})
	//菜单导航点击
	$("#sts li").click(function(){
		$(this).addClass('current').siblings('li').removeClass('current');
	})
	
	//--更多
	$(".ord_st_rg").on("click", function(e){
		if($(".more-navs").is(":hidden")){
	    	$(".more-navs").show();
	    }else{
	    	$(".more-navs").hide();
	    }
	
	    $(document).one("click", function(){
	        $(".more-navs").hide();
	    });
	
	    e.stopPropagation();
	});
	$(".more-navs").on("click", function(e){
	    e.stopPropagation();
	});
	//	--点击li的值切换
	$(".more-navs-ul li").click(function(){
		var litxt = $(this).text();
		$(this).text($(".changetxt").find("a").text());
		$(".changetxt").addClass("current").find("a").text(litxt);
		$("#sts li").not(".changetxt").removeClass("current");
		$(this).parents(".more-navs").hide();
	});
})

//-------------------上拉加载,下拉刷新------------
var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;
function pullDownAction () {
	//setTimeout(function () {	
		var el, li, i;
		el = document.getElementById('thelist');

		for (i=0; i<2; i++) {
			li = document.createElement('div');
			li.innerHTML = '<div class="all_order clearfix">'+
									'<div class="all_ord_rg">状态:<span>待审核</span></div>'+
									'<span class="garage_name">大兴修理厂</span>'+
								'</div>'+
								'<div class="per_good">'+
								    '<ul class="full-ul full-ul-search">'+
								        '<li class="goods-list clearfix">'+
								            '<div class="goods-img"><img src="../images/temp/img1.jpg" alt=""></div>'+
								            '<div class="goods-title">宝马发动机宝马发动机宝马发动机宝马发动机宝马发动机</div>'+
								            '<div class="goods-price"><p>￥200.00</p><p class="clr6">X1</p></div>'+
								        '</li>'+
								        '<li class="goods-list clearfix">'+
								            '<div class="goods-img"><img src="../images/temp/img1.jpg" alt=""></div>'+
								            '<div class="goods-title">宝马发动机宝马发动机宝马发动机宝马发动机宝马发动机</div>'+
								            '<div class="goods-price"><p>￥200.00</p><p class="clr6">X1</p></div>'+
								        '</li>'+
								        '<li class="goods-list clearfix">'+
								            '<div class="goods-img"><img src="../images/temp/img1.jpg" alt=""></div>'+
								            '<div class="goods-title">宝马发动机宝马发动机宝马发动机宝马发动机宝马发动机</div>'+
								            '<div class="goods-price"><p>￥200.00</p><p class="clr6">X1</p></div>'+
								        '</li>'+
								    '</ul>'+
								    '<p class="open"><span>展开</span></p>'+
								    '<div class="passed">'+
								    		'<p>共3件商品 合计：<span class="red"><em>￥</em>400.00</span></p>'+
								    		'<p><a href="javascript:;" class="comBtn no-pass">不通过</a><a href="javascript:;" class="comBtn pass">通过</a></p>'+
								    '</div>'+
								'</div>';
			el.appendChild(li, el.childNodes[0]);
			li.setAttribute("class", "per-ord");
		}
		$(".open").unbind().click(function(e){
			var sptxt = $(this).children();
			if(sptxt.text() == "展开"){
				sptxt.text("收起");
				$(this).addClass("shou");
				$(this).prev().css("height","auto");
			}else{
				sptxt.text("展开");
				$(this).removeClass("shou");
				$(this).prev().css("height","19.3rem");
			}
			e.stopPropagation();
		})
		
		myScroll.refresh();	
	//}, 30);
}
function pullUpAction () {
		var el, li, i;
		el = document.getElementById('thelist');
	//setTimeout(function () {	
		for (i=0; i<2; i++) {
			li = document.createElement('div');
			li.innerHTML = '<div class="all_order clearfix">'+
									'<div class="all_ord_rg">状态:<span>待审核</span></div>'+
									'<span class="garage_name">大兴修理厂</span>'+
								'</div>'+
								'<div class="per_good">'+
								    '<ul class="full-ul full-ul-search">'+
								        '<li class="goods-list clearfix">'+
								            '<div class="goods-img"><img src="../images/temp/img1.jpg" alt=""></div>'+
								            '<div class="goods-title">宝马发动机宝马发动机宝马发动机宝马发动机宝马发动机</div>'+
								            '<div class="goods-price"><p>￥200.00</p><p class="clr6">X1</p></div>'+
								        '</li>'+
								        '<li class="goods-list clearfix">'+
								            '<div class="goods-img"><img src="../images/temp/img1.jpg" alt=""></div>'+
								            '<div class="goods-title">宝马发动机宝马发动机宝马发动机宝马发动机宝马发动机</div>'+
								            '<div class="goods-price"><p>￥200.00</p><p class="clr6">X1</p></div>'+
								        '</li>'+
								        '<li class="goods-list clearfix">'+
								            '<div class="goods-img"><img src="../images/temp/img1.jpg" alt=""></div>'+
								            '<div class="goods-title">宝马发动机宝马发动机宝马发动机宝马发动机宝马发动机</div>'+
								            '<div class="goods-price"><p>￥200.00</p><p class="clr6">X1</p></div>'+
								        '</li>'+
								    '</ul>'+
								    '<p class="open"><span>展开</span></p>'+
								    '<div class="passed">'+
								    		'<p>共3件商品 合计：<span class="red"><em>￥</em>400.00</span></p>'+
								    		'<p><a href="javascript:;" class="comBtn no-pass">不通过</a><a href="javascript:;" class="comBtn pass">通过</a></p>'+
								    '</div>'+
								'</div>';
			el.appendChild(li, el.childNodes[0]);
			li.setAttribute("class", "per-ord");
		}
		$(".open").unbind().click(function(e){
			var sptxt = $(this).children();
			if(sptxt.text() == "展开"){
				sptxt.text("收起");
				$(this).addClass("shou");
				$(this).prev().css("height","auto");
			}else{
				sptxt.text("展开");
				$(this).removeClass("shou");
				$(this).prev().css("height","19.3rem");
			}
			e.stopPropagation();
		})
		
		myScroll.refresh();
	//}, 30);
}
function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll = new iScroll('wrapper', {
		//useTransition: true,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
			}
		},
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载...';				
				pullDownAction();	
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载...';				
				pullUpAction();	
			}
		}
	});
	document.getElementById('wrapper').style.left = '0'; 
//	document.getElementById('wrapper').style.top = '75px';
	//setTimeout(function () { document.getElementById('wrapper').style.left = '0'; });
}
 //初始化绑定iScroll控件 
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);