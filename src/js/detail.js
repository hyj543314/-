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
					$('.header .car').find('.num').text(arr_goods.length);
					console.log($('.carList>ul'));
					// for(var i=0;i<arr_goods.length;i++){
					// 	$('<li/>').html(`
					// 				<img src="../${arr_goods[i].imgurl}">
					// 				<div class="mdl fl">
					// 					<p class="name">${arr_goods[i].name}</p>
					// 					<p class="color">礼物颜色：${arr_goods[i].color}</p>
					// 					<p class="style">礼物款式：${arr_goods[i].style}</p>
					// 				</div>
					// 				<div class="rig fr">
					// 					<p class="qty">&times;${arr_goods[i].qty}</p>
					// 					<p class="price">￥${arr_goods[i].price}</p>
					// 					<p>
					// 						<a href="#" class="del">删除</a>
					// 					</p>
					// 				</div>
					// 				`).appendTo($('.carList>ul'));

					// }
				}
				console.log(arr_goods);
				// console.log(document.cookie);


				// 添加到购物车
				var $buy = $gMsg_r.find('.buy');
				
				$buy.on('click',function(e){
					var cl = $(e.target).attr('class');
					var $goodsP = $goodsSort.find('p');
					console.log(cl);
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
						if($goodsP.eq(0).find('a').hasClass('active') && $goodsP.eq(1).find('a').hasClass('active') && $goodsP.eq(2).find('a').hasClass('active')){
							// console.log('last');
							
							let good = {
								id: arr_id[arr_id.length-1],
								color: $goodsP.eq(0).find('.active').text(),
								style:$goodsP.eq(1).find('.active').text(),
								made: $goodsP.eq(2).find('.active').text(),
								qty:1
							}
							console.log(good);
							// 判断当前商品是否已存在cookie中
							for(var i=0;i<arr_goods.length;i++){
								if(arr_goods[i].id === arr_id[arr_id.length-1]){
									// 改变数量
									arr_goods[i].qty += 1;
									break;
								}
							}
							// console.log($car.find('.num'));

							if(i === arr_goods.length){
								arr_goods.push(good);
								// 购物车显示数量
								$('.header .car').find('.num').css('display','block');
								$('.header .car').find('.num').text(arr_goods.length);

								// 购物车显示商品

								// 创建节点
								var $li = $('<li/>');
								var $carList_ul = $('.header .carList>ul');
								console.log($carList_ul);
								$li.html(`
									<img src="../${currentGood.imgurl}">
									<div class="mdl fl">
										<p class="name">${currentGood.name}</p>
										<p class="color">礼物颜色：${good.color}</p>
										<p class="style">礼物款式：${good.style}</p>
									</div>
									<div class="rig fr">
										<p class="qty">&times;${good.qty}</p>
										<p class="price">￥${currentGood.price}</p>
										<p>
											<a href="#" class="del">删除</a>
										</p>
									</div>
									`).appendTo($carList_ul);

							}
							// 添加商品到cookie
							// document.cookie = 'gwc=' + JSON.stringify(arr_goods);
							com.Cookie.set('gwc',JSON.stringify(arr_goods),{path:'/'});
							console.log(document.cookie,typeof(document.cookie));
						}
			
					}
				})


				
				
				// 导入尾部文件
				$('.listFooter').load('../html/footer.html');
				


			})
		})

	})
})