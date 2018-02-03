require.config({
	// baseUrl:'js'


	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom',
		'carousel': '../lib/jquery.lzxCarousel/jquery.lzxCarousel'
	},

	shim:{
		// 设置依赖
		'zoom':{
			deps: ['jquery'],
			exports: 'jQuery.prototype.gdsZoom'
		}
	}
});
