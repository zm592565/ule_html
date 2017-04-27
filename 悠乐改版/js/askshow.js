/*
 * 项目名称：悠乐1.0.1版本
 * 文件介绍：求助详情页JS效果文件
 * 开发人员：344822559@qq.com
 * 开发时间：2017-04-27
 * */


$(function(){
	
	$('.ask_cimmit .ask_add_answer').hide();
	
	/*点击回答问题按钮滚动到提交问题输入框*/
	$("#ask").on('click',function(){
		//点击按钮滚动到指定位置
		$("html,body").animate({scrollTop:($('#answer_box').offset().top)-150},1000);
//		$("#answer_box").animate({ 
//		    width: "90%",
//		    height: "100%", 
//		    fontSize: "10em", 
//		    borderWidth: 10
//		  }, 1000 );
	})
	
	/*点击追加评论弹出输入框*/
	$('.ask_cimmit .add_ask').on('click',function(){
		$(this).siblings('.ask_add_answer').animate({
			opacity: 'toggle'
		},'fast');
	})
	
	/*统计添加评论字数*/
	$('.ask_cimmit .ask_add_answer .add_send').bind('input propertychange',function(){
		var nowtext=$(this).val().length;
		checkTextLength(nowtext,500,$(this).siblings('.text_num').find('span'))
	})
	
})