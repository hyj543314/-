require(['config'],function(){
	require(['jquery','com'],function($,com){
		// 引入头部文件
		$('.loginHeader').load('../html/header.html',function(){
			// 引入头部的js文件
			require(['header'],function(){
				
				// 判断手机号码是否合法
				var phone;
				$('#phoneNum').on('change',function(){
					// phone = $(this).attr('value');
					phone = this.value;
					// console.log(this,phone);
					if(!/^1[34578]\d{9}$/.test(phone)){
						
						$(this).next().text('手机输入不正确');
					}else{
						console.log(111);
						$(this).next().text('');
					}
				})

				// 判断密码是否合法
				// $('#password').on('change',function(){
				// 	var password = $(this).attr('value');
				// 	if(!/^[^\s]{6,20}$/.test(password)){
						
				// 		$(this).next().text('密码不合法');
				// 	}
				// })
				var password;
				$('#password').on('change',function(){
					password = this.value;
					console.log(password);
				})

				// 提交表单
				$('.lg_bt .dl').on('click',function(e){
					e.preventDefault();
					$.ajax({
						url: `../api/login.php`,
						data: `phone=${phone}&password=${password}`,
						success: function(res){
							console.log(res,typeof(res));
							if(res === 'success'){
								alert('登录成功');
							}
						}

					})
				})


			})
		})
	})
})