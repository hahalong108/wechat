if ($(window).width() < 350) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/32+'px'; 
}else if ($(window).width() > 500) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/75+'px';
}else{
    document.documentElement.style.fontSize=document.documentElement.clientWidth/37.5+'px'; 
}
$('#removeBtn').click(function(){
    layer.open({
        content:"您确定解绑银行卡吗？",
        btn:['确定','取消'],
        style:"width:80%",
        yes: function(){
            layer.open({content: '你点了确认', time: 1});
        }, 
        no: function(){
            layer.open({content: '你选择了取消', time: 1});
        }
    })
});