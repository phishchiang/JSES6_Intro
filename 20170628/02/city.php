<?php
	// 可以寫 html 跟 javascripts
	// echo "<b>Hello</b> World<script>alert('Go');</script>";
	// $設定變數
	// $_REQUEST 內建全域變數，幫助抓網址列的資料
	$name=$_REQUEST["name"];
	// echo $name; //告訴伺服器有抓到name，echo出來
	if($name=="taipei"){
		echo "300 wan";
	}else if ($name=="hsinchu"){
		echo "40 wan";
	}else{
		echo "No Data";
	}

?>