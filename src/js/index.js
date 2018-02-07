require(['config'],function(){
	// console.log(666);
	require(['jquery','carousel','com'],function($,carou,com){
		// 引入头部的html结构
		// $('.inHeader').load('html/header.html',function(){
			// 引入header的js文件
			require(['header'],function(){


				// banner轮播图
				$('.banner').carousel({
					img: ['css/img/001.jpg','css/img/002.jpg','css/img/003.jpg','css/img/004.jpg'],
					width:innerWidth,
					height:480
				})


				// 主要内容商品的ajax数据生成
				$.ajax({
					url: '../api/data/data-goods.json',
					success: function(res){
						console.log(res);
						// 根据数据库的商品信息生成html结构
						var $main02 = $('.main .main02');

						// 新品推荐下的第一个ul
						var $ul_01 = $main02.find('.ul_01');
						var mn02_li = '';
						for(let i=4;i<7;i++){
							mn02_li += `<li data-guid="${res[i].id}">
								<a href="#">
									<img src="${res[i].imgurl}">
									<p class="decp">${res[i].description}</p>
									<p class="price">￥ ${res[i].price}</p>
								</a>
							</li>`
						}
						$ul_01.append(mn02_li);
						$ul_01.find('li').last().addClass('last');
						
						// 新品推荐下的第二个ul
						var $ul_02 = $main02.find('.ul_01');


						// 生日礼物与创意礼物的数据生成
						$('.main div.cont').each(function(i,item){
							// console.log(i,this);
							let $ul = $('<ul/>').addClass('clearfix fl');
							$ul.append(show(8,16)).appendTo($(this));
							addClassLast($ul);
						});


						// 热评商品数据生成

						var $main05_ul = $('<ul/>').addClass('clearfix');
						$main05_ul.appendTo($('.main05'));
						var main05_html = '';
						for(let i=0;i<4;i++){
							main05_html += `<li data-guid="${res[i].id}">
								<a href="">
									<img src="${res[i].imgurl}">
								</a>
								<p class="cont">很喜欢，一分钱一分货，送给对象的礼物，她很高兴，试用了感觉还不错哦，以后就可以。</p>
								<p class="user_cont">来自于monsle的评价</p>
								<p>
									<span>${res[i].description}</span>
									<span>￥ ${res[i].price}</span>
								</p>
							</li>`;
						}
						$main05_ul.append(main05_html);
						addClassLast($main05_ul);



						// 给边界的li添加last的类名(传入一个li父级的对象)
						function addClassLast($item,num=4){
							// console.log($item);
							$item.find('li').each(function(i,item){
								if((i+1)%num === 0){
									$(this).addClass('last');
								}
							})
						}
						

						// 生成商品的函数(并输入上下限值)
						function show(a,b){
							let html = '';
							for(let i=a;i<b;i++){
								html += `<li data-guid="${res[i].id}">
									<a href="#">
										<img src="${res[i].imgurl}">
										<p class="decp">${res[i].description}</p>
										<p class="price">￥ ${res[i].price}</p>
									</a>
								</li>`;
							}
							return html
						}

					}
				})


			})
		// })
	})
})