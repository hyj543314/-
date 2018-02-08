require(['config'],function(){
	require(['jquery','com'],function($,com){
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
		$('.header').on('mouseenter','.signCar .circle',function(){
			
			$(this).find('ul.tubiao').first().stop().animate({
				top:-20
			});
			
		}).on('mouseleave','.signCar .circle',function(){
			$(this).find('ul.tubiao').first().stop().animate({
				top:6
			});
			
		})


		// 隐藏/显示登录框与购物车框
		$('.header').on('mouseenter','.sec',function(){
			$(this).find('.bt').css('display','block');
		}).on('mouseleave','.sec',function(){
			$(this).find('.bt').css('display','none');
		})

		// 购物车框默认样式
		var $car = $('.header .car');
		var $carList = $('.header .carList');
		if($car.find('.num').css('display') === 'none'){
			// console.log(333);
			// 此时的购物车为空
			// $carList.html('购物车中还没有商品，赶紧抢购吧！')
			$carList.find('ul').css('display','none');
			$carList.find('.js_box').css('display','none');
		}else{
			$carList.find('ul').css('display','block');
			$carList.find('.js_box').css('display','block');
			$carList.find('.kong').css('display','none');

			


		}




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