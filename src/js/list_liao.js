require(['config'],function(){
	require(['jquery','carousel','zoom','com'],function($,carou,zoom,com){
		// console.log('list');
		// 引入header头部的html结构
		$('.pageHeader').load('../html/header.html',function(){
			console.log('complete');
			// 引入头部的js文件
			require(['header'],function(){
				// console.log('index');
				

			})
		});
	})
})