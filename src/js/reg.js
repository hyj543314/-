require(['config'],function(){
	require(['jquery','com'],function($,com){
		// 引入头部文件
		$('.regHeader').load('../html/header.html',function(){
			// 引入头部的js文件
			require(['header'],function(){
				console.log(444);
			})
		})
	})
})