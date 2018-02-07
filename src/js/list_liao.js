require(['config'],function(){
	require(['jquery','carousel','zoom','com'],function($,carou,zoom,com){
		// console.log('list');
		// 引入header头部的html结构
		$('.pageHeader').load('../html/header.html',function(){
			// console.log('complete');
			// 引入头部的js文件
			require(['header'],function(){
				// console.log('index');
				var $main_con = $('.main .main_goods');
				// console.log($main_goods);

				// ajax请求数据
				let pageNo = 1;
				let qty = 16;
				var $mainPag = $('.main .page');
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
				$mainPag.on('click','span',function(){
					console.log(this);
					pageNo = this.innerText*1;
					$.ajax({
						type: 'post',
						data: `pageNo=${pageNo}&qty=${qty}`,
						url: '../api/list.php',
						success:function(res){
							res = JSON.parse(res);
							showGoods(res);
						}
					})
				})


				// 价格从高到低排序(需要从数据库获取商品数据，但数据库的商品数据是无序的)
				var $priceDown = $('.main .goodsPri');
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
						// console.log(item,i);
						return `<li data-guid="${item.id}">
							<a href="detail.html" class="imgA" target="_blank">
								<img src="../${item.imgurl}">
							</a>
							<p class="desp">${item.name}</p>
							<p class="price">￥ ${item.price}</p>
							<div class="bot">
								<a href="detail.html" target="_blank">可定制</a>
								<span class="comment fr"><i>30<i>人评价</span>
							</div>
						</li>`
					}).join('');
					$ul.html(ul_int);
					// 写入页面
					$main_con.html('');
					$main_con.append($ul);
					addClassLast($ul);

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
					// var $mainPag = $('.main .page');
					let pageQty = Math.ceil(res.total/res.qty);

					// 生成页码
					// 添加内容到页面时先清空原来的东西，以免叠加
					$mainPag.html('');
					for(let i=1;i<=pageQty;i++){
						let $span = $('<span/>').html(i);
						if(i === res.pageNo){
							$span.addClass('active');
						}
						$mainPag.append($span);
					}
				}



				// 点击商品跳转时传输id
				$main_con.on('click','a',function(e){
					// console.log(e.target,this);
					let idx = $(this).closest('li').attr('data-guid');
					this.href = `detail.html?id=${idx}`;
					console.log(this.href);
				})



				// 载入尾部内容
				$('.pageFooter').load('../html/footer.html');

			})
		})
	})
})