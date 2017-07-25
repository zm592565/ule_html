/*
 * 项目名称：悠乐1.0.1版本
 * 文件介绍：线路详情页面hs
 * 开发人员：344822559@qq.com
 * 开发时间：2017-07-25
 * */


$(function(){
	
	$('.line_show_content ul li').on('click',function(){
		$(this).addClass('active animated fadeIn').siblings().removeClass('active animated fadeIn');
		var $id=$(this).attr('data-type-name');
		windowTop=$('#'+$id).offset().top;
		$('body').animate({
			scrollTop: windowTop+'px'
		},1000);
	})
	
})