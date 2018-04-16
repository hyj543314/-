require(['config'],function(){
	require(['jquery','com'],function($,com){
				
		// 判断手机号码是否合法
		var email;
		
		$('.info2').on('change',function(){
			// phone = $(this).attr('value');
			email = this.value;
			console.log(this,email,6666);
			if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)){
				
				$(this).next().text('输入不正确');
			}else{
				// console.log(111);
				$(this).next().text('');
			}
		})

		console.log(666);
		
		var password;
		$('.info3').on('change',function(){
			password = this.value;
			// console.log(password);
		})

		// 提交表单
		
		$('.info6').on('click',function(e){
			// e.preventDefault();
			var thiss = this;
			$.ajax({
				url: `../api/login.php`,
				data: `email=${email}&password=${password}`,
				success: function(res){
					console.log(res,typeof(res));
					if(res === 'success'){
						alert('登录成功');
						$('.info6').off('click');
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
							com.Cookie.set('user',email,{expires:now,path:'/'})
						}else{
							com.Cookie.set('user',email,{path:'/'});
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

	})
})