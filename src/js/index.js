require(['config'],function(){
	// console.log(666);
	require(['jquery','carousel','com'],function($,carou,com){
		//引入头部的html结构
		$('.header').load('../html/head.html',function(){
			//引入head的js文件
			require(['head'],function(){


				// banner轮播图
				$('.banner').carousel({
					img: ['img/banner1.png','img/banner2.png','img/banner3.png','img/banner4.png','img/banner5.png'],
					// width:innerWidth,
					width:738,
					height:400
				})



				
				//tab标签切换

				// var main_part3 = document.getElementsByClassName('main_part3')[0];
				var tab = document.getElementsByClassName('tab')[0];
				var tabItem = tab.children;
				// console.log(tabchild);

				var content = document.getElementsByClassName('content')[0];
				var tabContent = content.children;
				// console.log(contentchild);






				 // 1）初始化
				tabItem[0].className = 'active';
				for(var i=0;i<tabItem.length;i++){
					if(i>0){
						tabContent[i].style.display = 'none';
					}

					// 绑定点击事件
					tabItem[i].onmouseover = function(){
						// * 高亮显示当前tab
						// 遍历去除其他高亮
						// （关键：获取点击的index值）
						var idx;
						for(var i=0;i<tabItem.length;i++){
							if(tabItem[i] === this){
								idx = i;
							}

							// 去除其他高亮
							tabItem[i].className = '';

							// 隐藏其他图片
							tabContent[i].style.display = 'none';
						}

						// 高亮当前
						this.className = 'active';


						// * 切换相应的图片，隐藏其他图片
						tabContent[idx].style.display = 'block';

					}
				}
			})
			
		})
		// 导入尾部文件
		$('.foot').load('../html/foot.html');
	})
})