require(['config'],function(){
	require(['jquery','com'],function($,com){
		// 引入头部文件
		$('.loginHeader').load('../html/header.html',function(){
			// 引入头部的js文件
			require(['head'],function(){
				
				// 判断手机号码是否合法
				var phone;
				$('#phoneNum').on('change',function(){
					// phone = $(this).attr('value');
					phone = this.value;
					// console.log(this,phone);
					if(!/^1[34578]\d{9}$/.test(phone)){
						
						$(this).next().text('手机输入不正确');
					}else{
						// console.log(111);
						$(this).next().text('');
					}
				})

				
				var password;
				$('#password').on('change',function(){
					password = this.value;
					// console.log(password);
				})

				// 提交表单
				$('.lg_bt .dl').on('click',function(e){
					// e.preventDefault();
					var thiss = this;
					$.ajax({
						url: `../api/login.php`,
						data: `phone=${phone}&password=${password}`,
						success: function(res){
							console.log(res,typeof(res));
							if(res === 'success'){
								alert('登录成功');
								$('.lg_bt .dl').off('click');
								$(thiss).attr({
									href:'../index.html',
									target: '_blank'
								})
								console.log(thiss);


								var now = new Date();

								// 设置时间为30天后
								now.setDate(now.getDate()+30);

								// 把信息存进cookie
								console.log($('[name=mdl]')[0].checked);

								if($('[name=mdl]')[0].checked){
									com.Cookie.set('user',phone,{expires:now,path:'/'})
								}else{
									com.Cookie.set('user',phone,{path:'/'});
								}

							}else if(res === 'fail'){
								e.preventDefault();
								alert('用户不存在或密码错误');
							}
						}

					})
					return false;
				})




				// 自动登录函数
				function autoLogin(){
					var pho= com.Cookie.get('user');

				}



				$('.logFooter').load('../html/footer.html');

			})
		})
	})
})