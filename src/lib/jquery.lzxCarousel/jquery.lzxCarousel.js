;(function($){
	$.prototype.carousel = function(option){
		// 默认属性
		var defaults = {
			// 轮播方式
			type: 'horizontal', //'vertical','fade'

			width:320,
			height:320,
			index:0,
			// 时间间隔
			duration:3000,

			// 是否无缝
			marquee:true,

			page:true,
			autoPlay: true
		};

		var opt = $.extend({},defaults,option);
		console.log(opt);
		
		// 在最后面添加第一张照片
		opt.img.push(opt.img[0]);

		opt.len = opt.img.length;
		$this = $(this);

		// 添加类名
		$this.addClass('lzx-carousel');
		// 添加样式
		$this.css({
			width: opt.width,
			height:opt.height
		});

		var $ul;
		var timer;
		init();

		// 是否自动播放
		if(opt.autoPlay==true){
			show();
		}
		

		function init(){
			console.log('init');
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
			// console.log(this);
		}
		function show(){
			console.log('show');
			$this.on('mouseenter',function(){
				clearInterval(timer);
			}).on('mouseleave',function(){
				timer = setInterval(function(){
					console.log(111);
					opt.index++;
					if(opt.index>=opt.len){
						$ul.css('left',0);
						opt.index = 1;
					}
					var target = -opt.index*opt.width;
					$ul.animate({left:target});
				},opt.duration);
			}).trigger('mouseleave');
		}



		return this;

	}
})(jQuery);