<?php
	// 引入其他文件
	require('connect.php');//include 'connect.php'

	$email = isset($_GET['email']) ? $_GET['email'] : null;
	$pwd = isset($_GET['pwd']) ? $_GET['pwd'] : null;
	$pwd2 = isset($_GET['pwd2']) ? $_GET['pwd2'] : null;
	$name = isset($_GET['name']) ? $_GET['name'] : null;
	$code = isset($_GET['code']) ? $_GET['code'] : null;

	// 判断用户名是否存在
	$data = $conn->query("select * from user where email='$email'");
	$data = $conn->query("select * from user where pwd='$pwd'");
	$data = $conn->query("select * from user where pwd2='$pwd2'");
	$data = $conn->query("select * from user where name='$name'");
	$data = $conn->query("select * from user where code='$code'");


	if($data->num_rows == 0){
		// 密码md5加密
		// $pwd2 = md5($pwd2);
		
		// 写入数据sql语句
		$sql = "insert into user(email,pwd,pwd2,name,code) values('$email','$pwd','$pwd2','$name','$code')";

		$res = $conn->query($sql);

		if($res){
			echo "success";
		}else{
			echo "fail";
		}
	}else{
		echo 'no';
	}
?>