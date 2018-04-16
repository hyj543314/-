require(['config'],function(){
	require(['jquery','carousel','zoom','com'],function($,carou,zoom,com){
		// console.log('list');
		// 引入header头部的html结构
		// $('.pageHeader').load('../html/header.html',function(){
			// console.log('complete');
			// 引入头部的js文件
			// require(['head'],function(){
				// console.log('index');
				var $main_con = $('.lists');
				 

				// ajax请求数据
				let pageNo = 1;
				let qty = 20;
				var $mainPage = $('.page');
				$.ajax({
					type: 'post',
					data: `pageNo=${pageNo}&qty=${qty}`,
					url: '../api/list.php',
					success: function(res){
						// 将json字符串转成对象（或数组）
						res = JSON.parse(res);
						console.log(res);
						showGoods(res);
					}
				})

				


				// 点击页码切换分页
				$mainPage.on('click','a',function(){
					console.log(this);
					pageNo = this.innerText*1;
					$.ajax({
						type: 'post',
						data: `pageNo=${pageNo}&qty=${qty}`,
						url: '../api/list.php',
						success:function(res){
							res = JSON.parse(res);
							console.log(res);
							showGoods(res);
						}
					})
				})


				// 价格从高到低排序(需要从数据库获取商品数据，但数据库的商品数据是无序的)
				var $priceDown = $('.main .sort');

				$priceDown.on('click','a',function(event){
					// 获取当前元素的索引值
					let idx = $(this).index();
					if(idx == 2){
						
						event.preventDefault();
					}
					
				})

				// 根据请求到的数据生成html结构
				function showGoods(res){
					
					let $ul = $('<ul/>').addClass('clearfix goods');
						
					let ul_int = $.map(res.data,function(item,i){
						
						return `<li data-guid="${item.id}">
							<div class="imgBox">
								<a  class="imgA" target="_blank">
									<img src="../${item.img}">
								</a>
							</div>
							
							<div class="text">
								<a  class="title" target="_blank">
									${item.title}
								</a>
							</div>
							<p class="price"><span>￥ ${item.price}</span><del>￥${item.del_price}</del></p>
							
						</li>`

					}).join('');
					$ul.html(ul_int);
					// 写入页面
					$main_con.html('');
					$main_con.append($ul);
					addClassLast($ul);
					$ul.appendTo($main_con);

					// 给边界的li添加last的类名(传入一个li父级的对象)
					function addClassLast($item,num=4){
						// console.log($item);
						$item.find('li').each(function(i,item){
							if((i+1)%num === 0){
								$(this).addClass('last');
							}
						})
					}


					// 处理分页
					// var $mainPage = $('.main .page');
					let pageQty = Math.ceil(res.total/res.qty);

					// 生成页码
					// 添加内容到页面时先清空原来的东西，以免叠加
					$mainPage.html('');
					for(let i=1;i<=pageQty;i++){
						let $a = $('<a/>').html(i);
						if(i === res.pageNo){
							$a.addClass('active');
						}
						$mainPage.append($a);
					}
				}


				console.log($('.lists'));
				// 点击商品跳转时传输id
				$('.lists').on('click','li',function(e){
					console.log(666);
					let idx = $(this).closest('li').attr('data-guid');
					/*this.href = `goods.html?id=${idx}`;
					console.log(this.href);*/
					location.href = `goods.html?id=${idx}`;
				})

				// 导入尾部文件
				$('footer').load('../html/foot.html');

			// })
		// })
	})
})