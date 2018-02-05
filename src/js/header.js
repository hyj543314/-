require(['config'],function(){
	require(['jquery'],function($){
		var $header = $('.header');
		var $logo = $('.header .logo');
		// logo动画切换
		$logo.on('mouseenter','.logo_a',function(){
			// console.log(this);
			$(this).stop().animate({
				left:-40
			})
		}).on('mouseleave','.logo_a',function(){
			$(this).stop().animate({
				left:5
			})
		});

		// 购物车与登录图标动画切换
		$('.header').on('mouseenter','ul.tubiao',function(){
			$(this).stop().animate({
				top:-23
			});
		}).on('mouseleave','ul.tubiao',function(){
			$(this).stop().animate({
				top:6
			});
		})




		// 二级导航条显示
		$header.on('mouseenter','li.dhli02',function(){
			$(this).closest('.header').css('border-bottom','1px solid #ddd')
			// 显示导航
			
			$(this).find('.sldh').css('display','block');
		}).on('mouseleave','li.dhli02',function(){
			$(this).closest('.header').css('border-bottom',0);
			// 隐藏导航
			$(this).find('.sldh').css('display','none');
		})
		// 二级导航条的一些样式
		// var $lef = $header.find('.container').offset().left;
		var $lef = $header.find('.container').offset().left;
		// console.log($header);
		$header.find('.sldh').css({
			width: innerWidth,
			left: -$lef,
			'padding-left': 92 + $lef*1
		})
	})
})