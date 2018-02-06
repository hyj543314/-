<?php
	// 获取详情页传过来的信息
	$id = isset($_GET['id'])? $_GET['id'] : null;
	// echo $id;

	$path = './data/data-goods.json';
	// 打开文件，得到一个文件指针
	$file = fopen($path, 'r');

	// 获取文件的大小
	$len = filesize($path);

	// 读取文件内容
	$content = fread($file, $len);
	fclose($file);
	$arr_content = json_decode($content);
	// 定义一个变量装载匹配的值
	$data;
	foreach ($arr_content as $item) {
		if($item->id == $id){
			$data = $item;
		}
	}

	echo json_encode($data,JSON_UNESCAPED_UNICODE)

?>