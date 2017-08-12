/*
 * 项目名称：悠乐1.0.1版本
 * 文件介绍：线路详情页面hs
 * 开发人员：344822559@qq.com
 * 开发时间：2017-07-25
 * */


$(function(){
	
	$('.member_content_box .member_nav a').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.member_content_box .member_left_box').eq($(this).index()).fadeIn().siblings('.member_left_box').hide();
	})
	
	$('.member_left_box ul li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.member_left_box .left_li_box').eq($(this).index()).fadeIn().siblings('.left_li_box').hide();
	})
	
	
	/*弹出消息对话框*/
	$('.talk-box dl dd .talk_layer').on('click',function(){
		layer.open({
			type: 2,
			title: false,
			closeBtn: 1,
			fixed:true,
			area:['600px','70%'],
			shadeClose: true,
			scrollbar:false,
			resize:false,
			content: 'talk_show.html'
		})
	})
	
	
	
	
})