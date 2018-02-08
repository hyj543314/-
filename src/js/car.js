require(['config'],function(){
	require(['jquery','com'],function($,com){
		
		var $goods_ul = $('.carList .carMain_m');

		// 获取cookie值
		var cook = com.Cookie.get('gwc');
		var arr_goods;
		if(cook === ''){
			arr_goods=[];
		}else{
			arr_goods = JSON.parse(cook);
			console.log(arr_goods);

			for(var i=0;i<arr_goods.length;i++){
				creatLi(arr_goods[i]);
			}

		}

		
		
		

		// 根据数据生成html结构
		function creatLi(good){
			var $li = $('<li/>').attr('data-guid',good.id).addClass('clearfix');

			$li.html(`
				<div class="fl">
					<img src="../${good.imgurl}" alt="">
					<p class="name">${good.name}</p>
					<p class="style ty">${good.color}</p>
					<p class="made ty">个性定制：${good.style}</p>
				</div>
				<div class="fr">
					<span class="price">￥${good.price}</span>
					<span class="qty">
						<input type="number" name="qty" value="${good.qty}">
						<a href="#" class="add"></a>
						<a href="#" class="reduce"></a>
					</span>
					<span>有库存</span>
					<span class="sum">￥${(good.total*1).toFixed(2)}</span>
					<span class="del">
						<a href="#" class="del"></a>
					</span>
				</div>

				`).appendTo($goods_ul);
		}

		// 所有商品总价,数量
		var $car_bt = $('.carList .carMain_b');
		var $all = $car_bt.find('.sum');
		var $allNum = $car_bt.find('.qty');
		reAll();

		// 所有商品数量与总价格的函数
		function reAll(){
			// 总价格
			var sum =0;
			// 总数量
			var num = 0;
			arr_goods.forEach(function(item){
				sum += item.total*1;
				num += item.qty*1
			})
			$all.text(`￥${sum.toFixed(2)}`);
			$allNum.text(`${num}`);

		}


		// 单个商品数量价格的改变
		$goods_ul.on('click',function(e){
			e.preventDefault();
			// console.log(e.target);
			// console.log(this);

			var clName = $(e.target).attr('class');
			// console.log(clName);
			if(clName === 'reduce'){
				console.log('reduce');
				// 当前li所在兄弟中的位置
				var lix = $(e.target).closest('li').index();
				var idx = $(e.target).closest('li').attr('data-guid');

				// console.log('idx:',idx);
				var inp_qty = $(e.target).parent().find('[name=qty]').attr('value');
				// console.log(inp_qty);
				inp_qty--;
				if(inp_qty<=1){
					// console.log(444);
					$(e.target).parent().find('[name=qty]').attr('value','1');
					single(lix,idx,1);
					reAll();
				}else{
					$(e.target).parent().find('[name=qty]').attr('value',inp_qty);
					single(lix,idx,inp_qty);
					reAll();
				}
				

			}else if(clName === 'add'){
				console.log('add');

				var lix = $(e.target).closest('li').index();

				var idx = $(e.target).closest('li').attr('data-guid');

				var inp_qty = $(e.target).parent().find('[name=qty]').attr('value');
				inp_qty++;
				$(e.target).parent().find('[name=qty]').attr('value',inp_qty);
				single(lix,idx,inp_qty);
				reAll();

			}else if(clName === 'del'){
				console.log('del');
				$(e.target).closest('li').remove();

				var idx = $(e.target).closest('li').attr('data-guid');
				for(var i=0;i<arr_goods.length;i++){
					if(arr_goods[i].id === idx){
						var re = arr_goods.splice(i,1);
						console.log('re',re);
						console.log(arr_goods);
						break;
					}
				}
				$goods_ul.html('');
				for(var j=0;j<arr_goods.length;j++){
					creatLi(arr_goods[j]);
				}
				reAll();
			}
		})


		// 单个商品价格变化
		// lix为li所在兄弟的位置，idx为图片的id，val为数量
		function single(lix,idx,val){
			var $currentLi = $goods_ul.find('li').eq(lix);
			for(var i=0;i<arr_goods.length;i++){
				if(arr_goods[i].id === idx){
					var tol = arr_goods[i].price * val;
					tol = tol.toFixed(2);
					// 更新当前商品数据（存入数组中）
					arr_goods[i].total = tol;
					arr_goods[i].qty = val;

					console.log(arr_goods[i].price,val);

					// 页面显示价格
					$currentLi.find('.sum').text(`￥${tol}`);

					// cookie更新
					// com.Cookie.set('gwc',JSON.stringify(arr_goods),{path:'/'});
					break;
				}
			}
		}








		$('.carFooter').load('../html/footer.html');
	})
})