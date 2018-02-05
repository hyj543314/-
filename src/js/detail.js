require(['config'],function(){
	require(['jquery','carousel','zoom','com'],function($,carou,zom,com){
		// 引入header的头部html结构
		$('.detalHeader').load('../html/header.html',function(){
			// 引入头部的js文件
			require(['header'],function(){
				console.log(666);




			})
		})

	})
})