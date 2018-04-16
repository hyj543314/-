

// require(['config'],function(){
	define(['jquery'],function($){
		$.prototype.carousel = function(option){
			// 默认属性
			var defaults = {
				// 轮播方式
				type: 'horizontal', //'vertical','fade'

				width:738,
				height:400,
				index:0,
				// 时间间隔
				duration:3000,

				// 是否无缝
				marquee:true,

				page:true,
				autoPlay: true,

				// 是否切换
				changeImg:true
			};

			var opt = $.extend({},defaults,option);
			console.log(opt);
			
			// 在最后面添加第一张照片
			opt.img.push(opt.img[0]);

			opt.len = opt.img.length;
			$this = $(this);

			// 添加类名
			$this.addClass('lzx-carousel');
			// 给轮播区域添加样式
			$this.css({
				width: opt.width,
				height:opt.height
			});

			var $ul;
			var timer;
			init();

			// 是否自动播放
			if(opt.autoPlay==true){
				if(opt.type =='horizontal'){
					$('.lzx-carousel li').css({
						float:'left'
					})
				}
				show();
			}
			

			function init(){
				// console.log('init');
				// 创建节点
				$ul  = $('<ul/>');

				// 给ul添加样式
				$ul.css({
					width: opt.len* opt.width,
					height: opt.height
				})
				var html = $.map(opt.img,function(item){
					return `<li><img src="${item}"></li>`
				}).join('');
				$ul.html(html);
				$this.append($ul);
				$('.lzx-carousel li').css({
					width:opt.width,
					height:opt.height
				})

				// 创建页码
				$page = $('<div/>').addClass('page');
				var spans = '';
				for(var i=0;i<opt.len-1;i++){
					// spans += '<span>'+ (i+1) + '</span>';
					spans += '<span>' + '</span>';
				}
				$page.html(spans);
				$this.append($page);
				$this.find('span').first().addClass('active');
				// console.log(this);
			}
			function show(){
				// console.log('show');
				$this.on('mouseenter',function(){
					clearInterval(timer);
				})
				if(opt.changeImg == true){
					$this.on('mouseenter','.page span',function(e){
						clearInterval(timer);

						// 页码切换
						$(this).addClass('active').siblings().removeClass('active');
						// 获取当前span的索引值
						var $id = $(this).index();
						opt.index = $id;
						var left = -opt.index*opt.width;
						// $ul.css('left',left);
						$ul.stop().animate({left:left});
						// console.log($id);
					})
				}
				$this.on('mouseleave',function(){
					timer = setInterval(function(){
						// console.log(opt.index);
						
						
						opt.index++;
						if(opt.index>=opt.len){

							$ul.css('left',0);
							opt.index = 1;
						}
						if(opt.index === opt.len-1){
							$('.page span').eq(0).addClass('active').siblings().removeClass('active');
						}
						// 页码高亮随图片切换
						$('.page span').eq(opt.index).addClass('active').siblings().removeClass('active');
						var target = -opt.index*opt.width;
						$ul.animate({left:target});
					},opt.duration);
				}).trigger('mouseleave');
			}

			// 页码onmouseover切换
			this.on('mouseenter','.page span',function(){
				// console.log(this);
				$(this).addClass('active').siblings().removeClass('active');


			})


			



			return this;

		}

		return $.prototype.carousel
	})
// })
