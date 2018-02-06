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

				// 显示大图片
				var $bigImg = $('.goodsMsg .goodsMsg_m');
				$.ajax({
					url: '../api/detail.php',
					data:`id=${arr_id[arr_id.length-1]}`,
					success: function(res){
						res = JSON.parse(res);
						// console.log(res);
						// console.log($bigImg.find('img').first())
						$bigImg.find('img').first().attr({
							src: `../${res.imgurl}`
						})

						// 描述，价格等数据更新

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
				


			})
		})

	})
})