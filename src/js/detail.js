require(['config'],function(){
	require(['jquery','carousel','zoom','com'],function($,carou,zom,com){
		// 引入header的头部html结构
		$('.detalHeader').load('../html/header.html',function(){
			// 引入头部的js文件
			require(['header'],function(){
				// console.log(666);

				// 接收页面传参过来的商品的id
				var arr_id = window.location.search.slice(1).split('=');
				// console.log(arr_id);
				// 存放当前商品
				var currentGood;
				

				// 显示大图片
				var $bigImg = $('.goodsMsg .goodsMsg_m');
				var $gMsg_r = $('.goodsMsg .goodsMsg_r');
				$.ajax({
					url: '../api/goods.php',
					data:`id=${arr_id[arr_id.length-1]}`,
					success: function(res){
						res = JSON.parse(res);
						console.log(res);
						currentGood = res;
						// console.log($bigImg.find('img').first())
						$bigImg.find('img').first().attr({
							src: `../${res.imgurl}`
						})

						// $bigImg.append(`<img src="../${res.imgurl}" alt="">`);

						// 描述，价格等数据更新
						$gMsg_r.find('h1').html(res.name);
						$gMsg_r.find('p.desp').html(res.description);
						$gMsg_r.find('.price span.fl').html('￥'+res.price);
					}
				})


				// 点击任意图片切换
				var $smallImg = $('.goodsMsg .goodsMsg_l');
				$smallImg.on('click','img',function(){
					$(this).parent().next().find('img').first().attr({
						src: this.src
					});
				})


				// 放大镜
				// $bigImg.zom();
				$('.goodsMsg .goodsMsg_m').gdsZoom({
					position: 'right',
					gap:-20
				});


				// 样式选择(添加高亮)
				// console.log($gMsg_r.find('.sort'));
				var $goodsSort = $gMsg_r.find('.sort');
				$goodsSort.on('click','a',function(e){
					// 阻止跳转的默认样式
					e.preventDefault();
					$(this).addClass('active').siblings().removeClass('active');
				})

				// 页面刷新获取cookie值
				//装载cookie数据
				var stringGood = com.Cookie.get('gwc');
				var arr_goods;
				if(stringGood === ''){
					var arr_goods = [];
				}else{
					arr_goods = JSON.parse(stringGood);
					// 页面刷新更新car数量图标
					$('.header .car').find('.num').css('display','block');

					// $('.header .car').find('.num').text(arr_goods.length);
					// console.log($('.carList>ul'));

					for(var i=0;i<arr_goods.length;i++){
						showCar(arr_goods[i]);
					}
					renew();

					
				}
				// console.log(arr_goods);
				// console.log(document.cookie);

				// 定义一个变量存放商品数量(不管是否重复)
				// var span_num = 0;

				// 添加到购物车
				var $buy = $gMsg_r.find('.buy');
				var $carList = $('.header .carList');
				var $carList_ul = $('.header .carList>ul');
				// console.log($('.header .car').find('.num').text());

				// 购物车清空时改变样式
				if($('.header .car').find('.num').text() ==0){
					$('.header .car').find('.num').css('display','none');
				}
				

				var $goodsP = $goodsSort.find('p');
				$buy.on('click',function(e){
					// var cl = $(e.target).attr('class');
					// var $goodsP = $goodsSort.find('p');
					// console.log($goodsP);
					var sels = 0;
					for(var i=0;i<3;i++){
						if($goodsP.eq(i).find('a').hasClass('active')){
							sels++;
						}
					}
					

					if($(e.target).hasClass('toCar')){
						e.preventDefault();
						if(!$goodsP.eq(0).find('a').hasClass('active')){
							alert('请选择礼物颜色');
						}else if(!$goodsP.eq(1).find('a').hasClass('active')){
							alert('请选择礼物款式')
						}
						else if(!$goodsP.eq(2).find('a').hasClass('active')){
							alert('请选择个性定制')
						}
						if(sels === 3){
							putCook();
							
							// let good = {
							// 	id: arr_id[arr_id.length-1],
							// 	color: $goodsP.eq(0).find('.active').text(),
							// 	style:$goodsP.eq(1).find('.active').text(),
							// 	made: $goodsP.eq(2).find('.active').text(),
							// 	qty:1,
							// 	name:currentGood.name,
							// 	imgurl:currentGood.imgurl,
							// 	price: currentGood.price
							// }
							// // console.log(good);
							

							// // 判断当前商品是否已存在cookie中
							// for(var i=0;i<arr_goods.length;i++){
							// 	if(arr_goods[i].id === arr_id[arr_id.length-1]){
							// 		// 改变数量
							// 		arr_goods[i].qty += 1;
							// 		// 改变价格
							// 		arr_goods[i].price *= arr_goods[i].qty;
							// 		//购物车的数量同步
							// 		$('.header .carList>ul').find('li').eq(i).find('.rig .qty').text(` X ${arr_goods[i].qty}`);
							// 		// 价格同步
							// 		$('.header .carList>ul').find('li').eq(i).find('.rig .price').text(`￥${arr_goods[i].price}`);
							// 		break;
							// 	}
							// }
							// // console.log($car.find('.num'));


							// if(i === arr_goods.length){
							// 	arr_goods.push(good);
								
								
							// 	$('.header .car').find('.num').text(arr_goods.length);

							// 	// 购物车显示商品
							// 	showCar(good);

							// }

							// renew();

							// // 添加商品到cookie
							// // document.cookie = 'gwc=' + JSON.stringify(arr_goods);
							// com.Cookie.set('gwc',JSON.stringify(arr_goods),{path:'/'});
							// // console.log(document.cookie,typeof(document.cookie));

						}
			
					}
					// 跳转到购物车
					else if($(e.target).hasClass('tz')){
						// console.log(666);
						// 没选择样式不能跳转
						if(sels !==3){
							e.preventDefault();
							alert('请选择样式!');
						}else{
							putCook();

						}
					}



				})

				// 删除商品
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
					if(arr_goods.length === 0){
						var $carList = $('.header .carList');
						var $carList_ul = $('.header .carList>ul');
						$carList_ul.css('display','none');
						$carList.find('.js_box').css('display','none');
						$carList.find('.kong').css('display','block');
						$('.header .car').find('.num').css('display','none');
					}else{
						// 同时更新价格与数量
						renew();
					}
					
				})

				// 商品存进cookie的函数
				function putCook(){
					let good = {
						id: arr_id[arr_id.length-1],
						color: $goodsP.eq(0).find('.active').text(),
						style:$goodsP.eq(1).find('.active').text(),
						made: $goodsP.eq(2).find('.active').text(),
						qty:1,
						name:currentGood.name,
						imgurl:currentGood.imgurl,
						price: currentGood.price,
						total:currentGood.price
					}
					// console.log(good);
					

					// 判断当前商品是否已存在cookie中
					for(var i=0;i<arr_goods.length;i++){
						if(arr_goods[i].id === arr_id[arr_id.length-1]){
							// 改变数量
							arr_goods[i].qty += 1;
							// 改变价格
							arr_goods[i].total *= arr_goods[i].qty;
							//购物车的数量同步
							$('.header .carList>ul').find('li').eq(i).find('.rig .qty').text(` X ${arr_goods[i].qty}`);
							// 价格同步
							$('.header .carList>ul').find('li').eq(i).find('.rig .price').text(`￥${arr_goods[i].total}`);
							break;
						}
					}
					// console.log($car.find('.num'));


					if(i === arr_goods.length){
						arr_goods.push(good);
						
						
						$('.header .car').find('.num').text(arr_goods.length);

						// 购物车显示商品
						showCar(good);

					}

					renew();

					// 添加商品到cookie
					// document.cookie = 'gwc=' + JSON.stringify(arr_goods);
					com.Cookie.set('gwc',JSON.stringify(arr_goods),{path:'/'});
					// console.log(document.cookie,typeof(document.cookie));
					
				}

				
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
							<p class="price">￥${(good.total*1).toFixed(2)}</p>
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
						totalPrice += item.total*1;
						// console.log(item.qty,span_num);
					})
					totalPrice *=1;
					$('.header .car').find('.num').text(span_num);
					$('.js_box').find('.qty').text(span_num);
					$('.js_box').find('.tol').text(`￥${totalPrice.toFixed(2)}`);

				}
				
				// 导入尾部文件
				$('.listFooter').load('../html/footer.html');
				


			})
		})

	})
})