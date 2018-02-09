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
			console.log(333);
			// 此时的购物车为空
			// $carList.html('购物车中还没有商品，赶紧抢购吧！')
			$carList.find('ul').css('display','none');
			$carList.find('.js_box').css('display','none');
			$carList.find('.kong').css('display','block');
		}else{
			$carList.find('ul').css('display','block');
			$carList.find('.js_box').css('display','block');
			$carList.find('.kong').css('display','none');


		}

		

		// 页面刷新获取cookie值
		var stringGood = com.Cookie.get('gwc');
		// 判断cookie中是否有商品信息
		if(!stringGood){
			arr_goods=[];
		}else{
			arr_goods = JSON.parse(stringGood);

			// 页面刷新更新car数量图标
			$('.header .car').find('.num').css('display','block');

			for(var i=0;i<arr_goods.length;i++){
				showCar(arr_goods[i]);
			}
			renew();
		}
		
		console.log(arr_goods);

		

		// 删除商品
		var $carList_ul = $('.header .carList>ul');
		$carList_ul.on('click','a.del',function(e){
			e.preventDefault();
			var $currentLi = $(this).closest('li');
			$currentLi.remove();
			// 把当前商品信息从数组中移除
			var li_id = $currentLi.attr('data-guid');
			// console.log(li_id);
			for(var i=0;i<arr_goods.length;i++){
				if(arr_goods[i].id === li_id){
					let res1 = arr_goods.splice(i,1);
					// console.log(res1);
					break;
				}
			}
			console.log(arr_goods);
			// 把数组写进cookie
			com.Cookie.set('gwc',JSON.stringify(arr_goods),{path:'/'});
			// 同时更新价格与数量
			renew();
		})



		// 生成购物车商品的函数
		function showCar(good){
			// 创建节点
			var $li = $('<li/>').attr('data-guid',good.id);
			// console.log(good.id);
			var $carList = $('.header .carList');
			var $carList_ul = $('.header .carList>ul');
			$carList_ul.css('display','block');
			$carList.find('.js_box').css('display','block');
			$carList.find('.kong').css('display','none');

			// console.log($carList_ul);
			// console.log($carList);
			// 生成数据结构
			$li.html(`
				<img src="../${good.imgurl}">
				<div class="mdl fl">
					<p class="name">${good.name}</p>
					<p class="color">礼物颜色：${good.color}</p>
					<p class="style">礼物款式：${good.style}</p>
				</div>
				<div class="rig fr">
					<p class="qty">&times;${good.qty}</p>
					<p class="price">￥${good.price}</p>
					<p>
						<a href="#" class="del">删除</a>
					</p>
				</div>
				`).appendTo($carList_ul);

		}

		// 购物车价格，数量等更新
		function renew(){
			// 购物车总价格同步
			var totalPrice = 0;
			// 定义一个变量存放商品数量(不管是否重复)
			var span_num = 0;
			// 购物车显示数量
			$('.header .car').find('.num').css('display','block');
			arr_goods.forEach(function(item){
				// 商品数量显示
				span_num += item.qty*1;
				// 商品总价
				totalPrice += item.price*1;
				// console.log(item.qty,span_num);
			})
			totalPrice *=1;
			$('.header .car').find('.num').text(span_num);
			$('.js_box').find('.qty').text(span_num);
			$('.js_box').find('.tol').text(`￥${totalPrice.toFixed(2)}`);

		}

		// 获取用户名
		var phone = com.Cookie.get('user');
		console.log(phone);
		if(phone){
			$('.header_r .dl>p').first().html(`<a href="#" class="user">${phone}</a>`)
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