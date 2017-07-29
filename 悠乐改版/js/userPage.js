/*
 * 项目名称：悠乐1.0.1版本
 * 文件介绍：求助详情页JS效果文件
 * 开发人员：344822559@qq.com
 * 开发时间：2017-04-27
 * */


$(function(){
	
	$('.user_commit .ask_add_answer').hide();
	
	/*点击追加评论弹出输入框*/
	$('.user_commit .add_ask').on('click',function(){
		$(this).siblings('.ask_add_answer').animate({
			opacity: 'toggle'
		},'fast');
	})
	
	/*统计添加评论字数*/
	$('.user_commit .ask_add_answer .add_send').bind('input propertychange',function(){
		var nowtext=$(this).val().length;
		checkTextLength(nowtext,20,$(this).siblings('.text_num').find('span'))
	})
	
	
	/*点击回答下面的回答按钮显示艾特*/
	$('.ask_add_answer').find('.answer_list .callBack').on('click',function(){
		var backName='@'+ $(this).attr('name')+' ';
		var askid=$(this).attr('data');
		$(this).parent().parent().parent().parent().find('.add_send').val(backName);
		// $(this).parent().parent().parent().parent().find('.askpid').val(askid);
	})
})