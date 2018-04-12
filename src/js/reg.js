require(['config'],function(){
	require(['jquery','com'],function($,com){
		// 引入头部文件
		$('.regHeader').load('../html/header.html',function(){
			// 引入头部的js文件
			require(['head'],function(){
				// console.log(444);
				var it1,it2,it3;
				var num;

				// 匹配手机号码
				var phone;
				$('#phone').on('change',function(){
					// phone = $(this).attr('value');
					phone = this.value;
					console.log('phone',phone);
					if(!/^1[34578]\d{9}$/.test(phone)){
						it1 = 0;
						$(this).next().text('手机输入不正确');
					}else{
						// console.log(111);
						$(this).next().text('');
						it1 = 1;
					}
				})


				// 密码合法性
				var password;
				$('#password').on('change',function(){
					password = this.value;
					console.log('password',password);
					if(!/^[^\s]{6,12}$/.test(password)){
						it2 = 0;
						$(this).next().text('密码不合法');
					}else{
						$(this).next().text('');
						it2 = 1;
					}
				})


				// 判断两次输入密码是否一致
				$('#password2').on('change',function(){
					var val = this.value;
					// console.log('val',val,'password:',password);
					if(val !== password){
						it3 = 0;
						// console.log('不一样')
						$(this).next().text('密码不一致');	
					}else{
						it3 = 1;
						// console.log('一样');
						$(this).next().text('');
					}
				})


				// 注册
				$('.rg_bt').on('click','a',function(e){
					num = it1 + it2 + it3;
					if(num !== 3){
						e.preventDefault();
					}else{
						$.ajax({
							url: '../api/reg.php',
							data:`phone=${phone}&password=${password}`,
							success: function(res){
								console.log(res);
								if(res === 'success'){
									alert('注册成功！');
								}else if(res === 'no'){
									alert('此用户已存在！');
									e.preventDefault();
								}
							}
						})
					}
					// console.log(num,it1,it2,it3);
				})



				$('.regFooter').load('../html/footer.html');
			})
		})
	})
})