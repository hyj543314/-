require(['config'],function(){
	require(['jquery','com'],function($,com){

				var a = false;

				// 验证邮箱
				var email;
				$('#email').on('change',function(){
					// email = $(this).attr('value');
					
					email = this.value;
					console.log('email',email);
					if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)){
						a = false;
						$(this).next().text('邮箱由6-50位字符组成');
					}else{
						// console.log(111);
						$(this).next().text('');
						a = true;
					}
				})


				// 验证密码
				var pwd;
				$('#pwd').on('change',function(){
					pwd = this.value;
					console.log('pwd',pwd);
					if(!/^[^\s]{6,20}$/.test(pwd)){
						a = false;
						$(this).next().text('密码长度只能在6-20位字符之间');
					}else{
						$(this).next().text('');
						a = true;
					}
				})


				// 判断两次输入密码是否一致（确认密码）
				$('#pwd2').on('change',function(){
					var val = this.value;
					// console.log('val',val,'pwd:',pwd);
					if(val !== pwd){
						a = false;
						// console.log('不一样')
						$(this).next().text('密码不一致');	
					}else{
						a = true;
						// console.log('一样');
						$(this).next().text('');
					}
				})


				//验证姓名
				var name;
				$('#name').on('change',function(){
					name = this.value;
					console.log('name',name);
					if(!/^[^\s]{2,20}$/.test(name)){
						a = false;
						$(this).next().text('2-20位字符，可由中文或英文组成');
					}else{
						$(this).next().text('');
						a = true;
					}
				})


  				
  				$("#code").on('click',()=>{
  					let vCode = '';
  					let arr = '0123456789ABCDEFGHIGKLMNOPQRSTUVXYZabcdefghigklmnopqrstuvwxyz'.split('');
  					
  					for(let i=0;i<4;i++){
  						vCode += arr[parseInt(Math.random()*arr.length)];
  					}
  					$('.show').html(vCode);
  				})

				// 注册
				$('.submit').on('click',function(e){
						
					if(!a){
						console.log("false")
					}else{
						console.log('true');
						$.ajax({
							url: '../api/reg.php',
							data:`email=${email}&pwd=${pwd}$pwd2=${pwd2}&name=${name}&code=${code}`,
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
				})
			})
})