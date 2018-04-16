require(['config'],function(){
	require(['jquery','carousel','zoom','com'],function($,carou,zom,com){
		// 引入header头部的html结构
		$('header').load('../html/head.html',function(){
			// 引入头部的js文件
			require(['head'],function(){

				// 接收页面传参过来的商品的id
				var id = location.search.slice(1).split('=')[1];
				
				// 存放当前商品
				var currentGood;

				// 显示大图片
				var $bigImg = $('.zoom_big');
				var $main_bc = $('.main_bc');
				var $divmarket = $('.divmarket');
				var $sellingPrice = $('.sellingPrice');


				$.ajax({
					url:'../api/goods.php',
					data:{id:id},
					success: function(res){
						res = JSON.parse(res);
						console.log(res);
						console.log(666);
						currentGood = res;
						console.log(currentGood);
						console.log($bigImg.find('img').first())
						$bigImg.find('img').first().attr({
							src: `../${res.imgurl}`
						})

						$bigImg.append(`<img class="img" alt="">`);
						$main_bc.find('p').html(res.title);
						$divmarket.find('del').html(res.del_price);
						$sellingPrice.find('.price').html('￥'+res.price);
					}
				})	

				//放大镜
				$bigImg.zom();
				$('.main_b .zoom_big').gdsZoom({
					position: 'right',
					gap:-20
				});



			})

		})	
		// 导入尾部文件
		$('footer').load('../html/foot.html');	

	})
})